# Routing và Endpoints — FastAPI Patterns

## Tạo router mới

```python
# app/api/v1/items.py
import logging
from typing import Annotated

from annotated_doc import Doc
from fastapi import APIRouter, HTTPException, Query, status

from app.api.openapi_responses import R204, R404, R422, merge_r
from app.core.dependencies import CurrentUserDep, SessionDep
from app.schemas.item import ItemCreate, ItemResponse, ItemUpdate
from app.schemas.common import PaginatedResponse

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/items", tags=["items"])
```

## Đăng ký router trong main.py

```python
from app.api.v1.items import router as items_router
app.include_router(items_router, prefix=settings.API_V1_PREFIX)
```

## GET list với phân trang

```python
@router.get(
    "",
    response_model=PaginatedResponse[ItemResponse],
    summary="List items",
    responses=merge_r(R422),
)
async def list_items(
    db: SessionDep,
    page: Annotated[int, Query(ge=1), Doc("Số trang, bắt đầu từ 1")] = 1,
    page_size: Annotated[int, Query(ge=1, le=100), Doc("Items mỗi trang")] = 20,
    _user: CurrentUserDep = None,
) -> Annotated[PaginatedResponse[ItemResponse], Doc("Danh sách items phân trang")]:
    """List items with pagination."""
    from sqlalchemy import func, select

    count_result = await db.execute(select(func.count(Item.id)))
    total = count_result.scalar() or 0

    result = await db.execute(
        select(Item).offset((page - 1) * page_size).limit(page_size)
    )
    items = result.scalars().all()

    return PaginatedResponse.create(
        items=[ItemResponse.model_validate(i) for i in items],
        total=total,
        page=page,
        page_size=page_size,
    )
```

## GET by ID

```python
@router.get(
    "/{item_id}",
    response_model=ItemResponse,
    summary="Get item by ID",
    responses=merge_r(R404, R422),
)
async def get_item(
    item_id: Annotated[int, Doc("ID của item")],
    db: SessionDep,
) -> Annotated[ItemResponse, Doc("Item details")]:
    """Get single item by ID."""
    from sqlalchemy import select

    result = await db.execute(select(Item).where(Item.id == item_id))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return ItemResponse.model_validate(item)
```

## POST create

```python
@router.post(
    "",
    response_model=ItemResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create item",
    responses=merge_r(R422),
)
async def create_item(
    body: Annotated[ItemCreate, Doc("Dữ liệu tạo item")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> Annotated[ItemResponse, Doc("Item đã được tạo")]:
    """Create a new item."""
    item = Item(**body.model_dump())
    db.add(item)
    await db.flush()
    await db.commit()
    await db.refresh(item)
    return ItemResponse.model_validate(item)
```

## PUT update

```python
@router.put(
    "/{item_id}",
    response_model=ItemResponse,
    summary="Update item",
    responses=merge_r(R404, R422),
)
async def update_item(
    item_id: Annotated[int, Doc("ID của item cần cập nhật")],
    body: Annotated[ItemUpdate, Doc("Dữ liệu cập nhật")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> Annotated[ItemResponse, Doc("Item đã cập nhật")]:
    """Update an existing item."""
    from sqlalchemy import select

    result = await db.execute(select(Item).where(Item.id == item_id))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    update_data = body.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(item, field, value)

    await db.commit()
    await db.refresh(item)
    return ItemResponse.model_validate(item)
```

## PATCH (partial update)

```python
@router.patch(
    "/{item_id}",
    response_model=ItemResponse,
    summary="Partial update item",
    responses=merge_r(R404, R422),
)
async def patch_item(
    item_id: Annotated[int, Doc("ID của item cần cập nhật")],
    body: Annotated[ItemUpdate, Doc("Dữ liệu cập nhật (chỉ fields cần thay đổi)")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> Annotated[ItemResponse, Doc("Item đã cập nhật")]:
    """Partially update an item — only provided fields are updated."""
    from sqlalchemy import select

    result = await db.execute(select(Item).where(Item.id == item_id))
    item = result.scalar_one_or_none()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    update_data = body.model_dump(exclude_unset=True)  # chỉ fields được gửi lên
    for field, value in update_data.items():
        setattr(item, field, value)

    await db.commit()
    await db.refresh(item)
    return ItemResponse.model_validate(item)
```

## DELETE

```python
@router.delete(
    "/{item_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete item",
    responses=merge_r(R404, R204),
)
async def delete_item(
    item_id: Annotated[int, Doc("ID của item cần xóa")],
    db: SessionDep,
    _user: CurrentUserDep,
) -> None:
    """Delete an item."""
    item = await db.get(Item, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    await db.delete(item)
    await db.commit()
```

## Auth endpoints — OAuth2PasswordRequestForm (login dùng form data)

```python
from fastapi import Depends
from fastapi.security import OAuth2PasswordRequestForm

# ⚠️ Login KHÔNG dùng JSON body — dùng form data (OAuth2 standard)
@router.post("/login", response_model=Token)   # ← 200, không phải 201
@limiter.limit(get_settings().RATE_LIMIT_AUTH)
async def login(
    request: Request,                                          # ← phải có cho limiter
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()],  # ← form data
    db: SessionDep,
) -> Token:
    """Authenticate user — form_data.username = email, form_data.password = password."""
    ...

# Register dùng JSON body, trả 201
@router.post("/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED)
async def register(body: RegisterRequest, db: SessionDep) -> UserResponse:
    ...
```

**Phân biệt 200 vs 201 cho POST:**
- `status_code=201`: tạo resource mới (register user, create prompt, create tag)
- Mặc định 200: hành động (login, logout, refresh) — không tạo resource

## Rate limiting

```python
from fastapi import Request
from app.core.rate_limiting import limiter
from app.core.config import get_settings

@router.post("/sensitive")
@limiter.limit(get_settings().RATE_LIMIT_AUTH)  # "10/minute" từ settings
async def sensitive_endpoint(request: Request, ...) -> ...:
    # request param BẮT BUỘC có khi dùng @limiter.limit
    ...

# Custom rate thấp hơn — ít gọi hơn settings default
@router.post("/forgot-password")
@limiter.limit("3/hour")
async def forgot_password(request: Request, ...) -> ...:
    ...
```

**Lưu ý:** `request: Request` phải là **param đầu tiên** khi dùng `@limiter.limit`.

**Rate limit settings có sẵn:**
| Setting | Giá trị | Dùng cho |
|---------|---------|---------|
| `RATE_LIMIT_AUTH` | `"10/minute"` | login, register |
| `RATE_LIMIT_DEFAULT` | `"100/minute"` | endpoint thông thường |
| `RATE_LIMIT_EMBEDDING` | `"30/minute"` | embedding service |
| `RATE_LIMIT_EXTRACT` | `"20/minute"` | extract service |

## SSE Streaming (ví dụ playground)

**2 điểm bắt buộc cho SSE endpoint:**
1. `response_model=None` — FastAPI không thể validate StreamingResponse body, thiếu → runtime error
2. `Depends(get_db)` thay vì `SessionDep` — khi endpoint vừa trả JSON vừa trả Stream (union return type)

```python
from fastapi import Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.ext.asyncio import AsyncSession
from collections.abc import AsyncGenerator

from app.core.database import get_db

@router.post(
    "/stream",
    response_model=None,          # ← BẮT BUỘC khi return type có StreamingResponse
    responses=merge_r(R400, R422),
)
async def stream_endpoint(
    request: Request,
    _user: CurrentUserDep,
    db: Annotated[AsyncSession, Depends(get_db)],  # ← Depends(get_db) khi cần DB trong SSE
    body: Annotated[StreamRequest, Doc("...")],
) -> JSONResponse | StreamingResponse:             # ← union type khi có cả 2
    """Stream endpoint — trả SSE khi stream=True, JSON khi stream=False."""
    # Query DB trước khi stream (dùng db bình thường)
    result = await db.execute(select(Provider).where(Provider.name == body.provider))
    provider = result.scalar_one_or_none()
    if not provider:
        raise HTTPException(status_code=404, detail="Provider not found")

    def _sse_encode(text: str) -> str:
        """Encode text as SSE — xử lý multiline để tránh break SSE protocol."""
        lines = text.split("\n")
        return "data: " + "\ndata: ".join(lines) + "\n\n"

    async def generate() -> AsyncGenerator[str, None]:
        async for chunk in some_async_source():
            yield _sse_encode(chunk)  # ✅ đúng — handle \n trong chunk
            # ❌ SAI: yield f"data: {chunk}\n\n"  — chunk có \n sẽ break SSE
        yield "data: [DONE]\n\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",   # ← tắt buffering nginx/reverse proxy
        },
    )
```

**`SessionDep` vs `Depends(get_db)` — khi nào dùng cái nào:**

| Trường hợp | Dùng gì |
|-----------|---------|
| Endpoint thông thường (JSON response) | `db: SessionDep` |
| SSE/Streaming endpoint (union return type) | `db: Annotated[AsyncSession, Depends(get_db)]` |
| mypy strict mode cần explicit type | `db: Annotated[AsyncSession, Depends(get_db)]` |

## Dependencies: CurrentUserDep vs AdminUserDep

```python
# Endpoint cần user đăng nhập
async def my_endpoint(_user: CurrentUserDep, ...) -> ...:
    # _user là User object từ DB

# Endpoint chỉ admin
async def admin_endpoint(_admin: AdminUserDep, ...) -> ...:
    # Raise 403 nếu user.is_superuser=False

# Lấy user ID
async def my_endpoint(user_id: UserIdDep, ...) -> ...:
    # user_id là str
```

## annotated-doc Convention (BẮT BUỘC)

```python
# ✅ Đúng
@router.get("/{id}")
async def get_item(
    item_id: Annotated[int, Doc("ID của item")],
    db: SessionDep,
) -> Annotated[ItemResponse, Doc("Item details")]:
    """Get item by ID."""   # ← 1 dòng function docstring
    ...

# ❌ Sai — không dùng Args/Returns docstring
async def get_item(item_id: int, db: SessionDep) -> ItemResponse:
    """Get item by ID.
    Args:
        item_id: ID của item
    Returns:
        Item details
    """
```

## HTTPException vs AppException — khi nào dùng cái nào

```python
# ✅ HTTPException — dùng trực tiếp trong endpoint (phổ biến nhất)
raise HTTPException(status_code=404, detail="Item not found")
raise HTTPException(status_code=409, detail="Email already exists")

# ✅ AppException subclasses — dùng trong service layer
# (nơi không import HTTP, tránh coupling)
from app.core.exceptions import NotFoundError, ConflictError, ForbiddenError
raise NotFoundError("Item not found")    # 404
raise ConflictError("Duplicate email")  # 409
raise ForbiddenError("Access denied")   # 403

# ⚠️ AppException subclasses được FastAPI bắt tự động (vì kế thừa HTTPException)
# → cả hai cách đều OK, nhưng ĐỪNG MIX trong cùng 1 endpoint
```

## OpenAPI responses — luôn dùng merge_r

```python
from app.api.openapi_responses import R204, R400, R401, R403, R404, R422, R429, R500, merge_r

# Kết hợp nhiều response codes
responses=merge_r(R404, R422)
responses=merge_r(R400, R401, R422, R429)
responses=merge_r(R404, R422, R204)   # cho DELETE
```
