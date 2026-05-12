# Complete Examples — Full Working Code

## Ví dụ 1: Feature CRUD hoàn chỉnh (Tags)

### Model

```python
# app/models/tag.py
from datetime import UTC, datetime
from sqlalchemy import DateTime, Index
from sqlmodel import Field
from app.models.base import Base

class Tag(Base, table=True):
    __tablename__ = "tags"
    __table_args__ = (
        Index("ix_tags_name", "name", unique=True),
    )

    id: int = Field(primary_key=True, index=True)
    name: str = Field(max_length=100, unique=True)
    description: str | None = Field(default=None)
    created_at: datetime = Field(
        sa_type=DateTime(timezone=True),
        default_factory=lambda: datetime.now(UTC),
    )
```

### Schema

```python
# app/schemas/tag.py
from datetime import datetime
from typing import Annotated
from annotated_doc import Doc
from pydantic import BaseModel, ConfigDict, Field

class TagCreate(BaseModel):
    name: Annotated[str, Doc("Tên tag")] = Field(..., min_length=1, max_length=100)
    description: Annotated[str | None, Doc("Mô tả tag")] = None

class TagUpdate(BaseModel):
    name: Annotated[str | None, Doc("Tên tag")] = Field(None, min_length=1, max_length=100)
    description: Annotated[str | None, Doc("Mô tả tag")] = None

class TagResponse(TagCreate):
    id: Annotated[int, Doc("ID tag")]
    created_at: Annotated[datetime, Doc("Thời gian tạo")]
    model_config = ConfigDict(from_attributes=True)
```

### Router

```python
# app/api/v1/tags.py
import logging
from typing import Annotated

from annotated_doc import Doc
from fastapi import APIRouter, HTTPException, Query, status
from sqlalchemy import func, select
from sqlalchemy.exc import IntegrityError

from app.api.openapi_responses import R204, R404, R409, R422, merge_r
from app.core.dependencies import CurrentUserDep, SessionDep
from app.models.tag import Tag
from app.schemas.common import PaginatedResponse
from app.schemas.tag import TagCreate, TagResponse, TagUpdate

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/tags", tags=["tags"])


@router.get(
    "",
    response_model=PaginatedResponse[TagResponse],
    summary="List tags",
    responses=merge_r(R422),
)
async def list_tags(
    db: SessionDep,
    page: Annotated[int, Query(ge=1), Doc("Trang, bắt đầu từ 1")] = 1,
    page_size: Annotated[int, Query(ge=1, le=100), Doc("Tags mỗi trang")] = 20,
) -> Annotated[PaginatedResponse[TagResponse], Doc("Danh sách tags phân trang")]:
    """List all tags with pagination."""
    count_result = await db.execute(select(func.count(Tag.id)))
    total = count_result.scalar() or 0

    result = await db.execute(
        select(Tag).offset((page - 1) * page_size).limit(page_size)
    )
    tags = result.scalars().all()

    return PaginatedResponse.create(
        items=[TagResponse.model_validate(t) for t in tags],
        total=total,
        page=page,
        page_size=page_size,
    )


@router.get(
    "/{tag_id}",
    response_model=TagResponse,
    summary="Get tag by ID",
    responses=merge_r(R404, R422),
)
async def get_tag(
    tag_id: Annotated[int, Doc("ID của tag")],
    db: SessionDep,
) -> Annotated[TagResponse, Doc("Tag details")]:
    """Get single tag by ID."""
    tag = await db.get(Tag, tag_id)
    if not tag:
        raise HTTPException(status_code=404, detail="Tag not found")
    return TagResponse.model_validate(tag)


@router.post(
    "",
    response_model=TagResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create tag",
    responses=merge_r(R422),
)
async def create_tag(
    body: Annotated[TagCreate, Doc("Dữ liệu tag mới")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> Annotated[TagResponse, Doc("Tag đã tạo")]:
    """Create a new tag."""
    tag = Tag(name=body.name, description=body.description)
    try:
        db.add(tag)
        await db.flush()
    except IntegrityError as err:
        await db.rollback()
        raise HTTPException(status_code=409, detail="Tag name already exists") from err

    await db.commit()
    await db.refresh(tag)
    logger.info("Created tag %s: %s", tag.id, tag.name)
    return TagResponse.model_validate(tag)


@router.put(
    "/{tag_id}",
    response_model=TagResponse,
    summary="Update tag",
    responses=merge_r(R404, R422),
)
async def update_tag(
    tag_id: Annotated[int, Doc("ID của tag cần cập nhật")],
    body: Annotated[TagUpdate, Doc("Dữ liệu cập nhật")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> Annotated[TagResponse, Doc("Tag đã cập nhật")]:
    """Update an existing tag."""
    tag = await db.get(Tag, tag_id)
    if not tag:
        raise HTTPException(status_code=404, detail="Tag not found")

    update_data = body.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(tag, field, value)

    await db.commit()
    await db.refresh(tag)
    return TagResponse.model_validate(tag)


@router.delete(
    "/{tag_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete tag",
    responses=merge_r(R404, R204),
)
async def delete_tag(
    tag_id: Annotated[int, Doc("ID của tag cần xóa")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> None:
    """Delete a tag."""
    tag = await db.get(Tag, tag_id)
    if not tag:
        raise HTTPException(status_code=404, detail="Tag not found")
    await db.delete(tag)
    await db.commit()
    logger.info("Deleted tag %s", tag_id)
```

### Đăng ký router (main.py)

```python
from app.api.v1.tags import router as tags_router
app.include_router(tags_router, prefix=settings.API_V1_PREFIX)
```

### Tests

```python
# tests/crud/test_tags.py
import pytest
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.tag import Tag


async def test_list_tags_empty(client: AsyncClient) -> None:
    response = await client.get("/api/v1/tags")
    assert response.status_code == 200
    body = response.json()
    assert body["total"] == 0
    assert body["data"] == []


async def test_create_tag(client: AsyncClient) -> None:
    response = await client.post(
        "/api/v1/tags",
        json={"name": "python", "description": "Python programming"},
    )
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "python"
    assert "id" in data


async def test_create_tag_duplicate(
    client: AsyncClient, test_db: AsyncSession
) -> None:
    tag = Tag(name="existing")
    test_db.add(tag)
    await test_db.commit()

    response = await client.post("/api/v1/tags", json={"name": "existing"})
    assert response.status_code == 409


async def test_get_tag(client: AsyncClient, test_db: AsyncSession) -> None:
    tag = Tag(name="go-lang")
    test_db.add(tag)
    await test_db.commit()
    await test_db.refresh(tag)

    response = await client.get(f"/api/v1/tags/{tag.id}")
    assert response.status_code == 200
    assert response.json()["name"] == "go-lang"


async def test_get_tag_not_found(client: AsyncClient) -> None:
    response = await client.get("/api/v1/tags/99999")
    assert response.status_code == 404


async def test_update_tag(client: AsyncClient, test_db: AsyncSession) -> None:
    tag = Tag(name="old-name")
    test_db.add(tag)
    await test_db.commit()
    await test_db.refresh(tag)

    response = await client.put(
        f"/api/v1/tags/{tag.id}",
        json={"name": "new-name"},
    )
    assert response.status_code == 200
    assert response.json()["name"] == "new-name"


async def test_delete_tag(client: AsyncClient, test_db: AsyncSession) -> None:
    tag = Tag(name="to-delete")
    test_db.add(tag)
    await test_db.commit()
    await test_db.refresh(tag)

    response = await client.delete(f"/api/v1/tags/{tag.id}")
    assert response.status_code == 204

    check = await client.get(f"/api/v1/tags/{tag.id}")
    assert check.status_code == 404
```

## Ví dụ 2: Auth endpoint với rate limiting

```python
@router.post("/login")
@limiter.limit(get_settings().RATE_LIMIT_AUTH)   # 10/minute
async def login(
    request: Request,                              # ← BẮT BUỘC cho limiter
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: SessionDep,
) -> Token:
    """Authenticate user, return JWT token."""
    # Constant-time để chống timing attack
    result = await db.execute(select(User).where(User.email == form_data.username))
    user = result.scalar_one_or_none()

    if user is None:
        await async_verify_password(form_data.password, _DUMMY_HASH)  # dummy
        raise HTTPException(status_code=401, detail="Incorrect credentials",
                           headers={"WWW-Authenticate": "Bearer"})

    if not await async_verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect credentials",
                           headers={"WWW-Authenticate": "Bearer"})

    settings = get_settings()
    access_token = create_access_token(
        subject=str(user.id),
        expires_delta=timedelta(minutes=settings.JWT_ACCESS_TOKEN_EXPIRE_MINUTES),
    )
    return Token(
        access_token=access_token,
        token_type="bearer",
        expires_in=settings.JWT_ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    )
```

## Ví dụ 3: SSE Streaming endpoint

```python
from fastapi.responses import StreamingResponse
from collections.abc import AsyncGenerator

@router.post("/stream-chat")
async def stream_chat(
    body: Annotated[ChatRequest, Doc("Chat request")],
    _user: CurrentUserDep,
) -> StreamingResponse:
    """Stream AI chat response as SSE."""
    async def generate() -> AsyncGenerator[str, None]:
        try:
            async for chunk in ai_stream(body):
                yield f"data: {chunk}\n\n"
            yield "data: [DONE]\n\n"
        except Exception as e:
            logger.error("Stream error", exc_info=True)
            yield f"data: [ERROR] {e!s}\n\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )
```

## Ví dụ 4: Many-to-many relationship (Prompt ↔ Tags)

Pattern thực tế dùng trong `app/api/v1/prompts.py` + `app/models/prompt.py`.

### Models

```python
# app/models/prompt.py
from sqlmodel import Relationship

class Prompt(Base, table=True):
    __tablename__ = "prompts"
    id: int = Field(primary_key=True, index=True)
    name: str = Field(max_length=255)
    content: str
    uses_count: int = Field(default=0)
    tags: list["PromptTag"] = Relationship(
        back_populates="prompt",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )

class PromptTag(Base, table=True):
    __tablename__ = "prompt_tags"
    __table_args__ = (
        UniqueConstraint("prompt_id", "tag", name="uq_prompt_tags_prompt_tag"),
    )
    id: int = Field(primary_key=True, index=True)
    prompt_id: int = Field(foreign_key="prompts.id", ondelete="CASCADE")
    tag: str = Field(max_length=50)
    prompt: "Prompt" = Relationship(back_populates="tags")
```

### Schema với tags

```python
# app/schemas/prompt.py
class PromptCreate(BaseModel):
    name: Annotated[str, Doc("Tên prompt")] = Field(..., min_length=1, max_length=255)
    content: Annotated[str, Doc("Nội dung prompt")]
    tags: Annotated[list[str], Doc("Danh sách tags")] = Field(default_factory=list)

class PromptResponse(BaseModel):
    id: Annotated[int, Doc("ID")]
    name: Annotated[str, Doc("Tên prompt")]
    content: Annotated[str, Doc("Nội dung")]
    uses_count: Annotated[int, Doc("Số lần sử dụng")]
    tags: Annotated[list[str], Doc("Tags")]  # ← list[str] không phải list[PromptTag]

    model_config = ConfigDict(from_attributes=True)
```

### Endpoint tạo Prompt với Tags

```python
@router.post("", response_model=PromptResponse, status_code=status.HTTP_201_CREATED)
async def create_prompt(
    body: Annotated[PromptCreate, Doc("Dữ liệu prompt")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> Annotated[PromptResponse, Doc("Prompt đã tạo")]:
    """Create prompt with tags."""
    prompt = Prompt(name=body.name, content=body.content)
    db.add(prompt)
    await db.flush()   # ← lấy prompt.id trước khi thêm PromptTag

    for tag in body.tags:
        db.add(PromptTag(prompt_id=prompt.id, tag=tag))

    await db.commit()

    # Reload với eager load tags
    result = await db.execute(
        select(Prompt).where(Prompt.id == prompt.id).options(selectinload(Prompt.tags))
    )
    prompt = result.scalar_one()
    return PromptResponse(
        id=prompt.id,
        name=prompt.name,
        content=prompt.content,
        uses_count=prompt.uses_count,
        tags=[t.tag for t in prompt.tags],   # ← transform ORM → list[str]
    )
```

### Endpoint cập nhật Tags (replace all)

```python
@router.put("/{prompt_id}/tags")
async def update_prompt_tags(
    prompt_id: Annotated[int, Doc("ID prompt")],
    tags: Annotated[list[str], Doc("Tags mới (replace toàn bộ)")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> Annotated[PromptResponse, Doc("Prompt đã cập nhật tags")]:
    """Replace all tags for a prompt."""
    from sqlalchemy import delete

    prompt = await db.get(Prompt, prompt_id)
    if not prompt:
        raise HTTPException(status_code=404, detail="Prompt not found")

    # Xóa tags cũ, thêm tags mới
    await db.execute(delete(PromptTag).where(PromptTag.prompt_id == prompt_id))
    for tag in tags:
        db.add(PromptTag(prompt_id=prompt_id, tag=tag))
    await db.commit()

    result = await db.execute(
        select(Prompt).where(Prompt.id == prompt_id).options(selectinload(Prompt.tags))
    )
    prompt = result.scalar_one()
    return PromptResponse(
        id=prompt.id,
        name=prompt.name,
        content=prompt.content,
        uses_count=prompt.uses_count,
        tags=[t.tag for t in prompt.tags],
    )
```

### Test many-to-many

```python
async def test_create_prompt_with_tags(client: AsyncClient) -> None:
    response = await client.post(
        "/api/v1/prompts",
        json={"name": "My Prompt", "content": "...", "tags": ["python", "dev"]},
    )
    assert response.status_code == 201
    data = response.json()
    assert set(data["tags"]) == {"python", "dev"}

async def test_update_tags_replaces_all(
    client: AsyncClient, test_db: AsyncSession
) -> None:
    prompt = Prompt(name="test", content="content")
    test_db.add(prompt)
    await test_db.flush()
    test_db.add(PromptTag(prompt_id=prompt.id, tag="old-tag"))
    await test_db.commit()

    response = await client.put(
        f"/api/v1/prompts/{prompt.id}/tags",
        json=["new-tag1", "new-tag2"],
    )
    assert response.status_code == 200
    assert set(response.json()["tags"]) == {"new-tag1", "new-tag2"}
```

## Migration (Alembic)

```bash
# Sau khi thêm Tag model vào app/models/tag.py
# và import trong alembic/env.py

cd backend
alembic revision --autogenerate -m "add tags table"
alembic upgrade head
```
