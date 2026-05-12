# Models và Schemas — SQLModel + Pydantic v2

## SQLModel Model (ORM)

Models sống trong `app/models/`. Dùng SQLModel với `table=True`.

### Pattern chuẩn

```python
# app/models/item.py
from datetime import UTC, datetime
from sqlalchemy import DateTime, Index
from sqlmodel import Field
from app.models.base import Base   # Base = SQLModel

class Item(Base, table=True):
    __tablename__ = "items"
    __table_args__ = (
        Index("ix_items_name", "name"),
    )

    id: int = Field(primary_key=True, index=True)
    name: str = Field(max_length=255)
    description: str | None = Field(default=None)
    is_active: bool = Field(default=True)
    created_at: datetime = Field(
        sa_type=DateTime(timezone=True),
        default_factory=lambda: datetime.now(UTC),
    )
    updated_at: datetime = Field(
        sa_type=DateTime(timezone=True),
        default_factory=lambda: datetime.now(UTC),
    )
```

**`default_factory` vs `server_default` cho timestamps:**

| Cách | Khi nào dùng |
|------|-------------|
| `default_factory=lambda: datetime.now(UTC)` | ✅ Chuẩn — Python sets value trước khi insert; test dễ mock |
| `sa_column_kwargs={"server_default": func.now()}` | Khi cần DB-side default (bulk insert qua SQL thuần) |

Dự án này dùng `default_factory` — không cần `server_default` trừ khi có bulk insert thủ công.

### UUID primary key (dùng cho user-facing entities)

```python
from uuid import UUID, uuid4
from sqlalchemy import Index
from sqlmodel import Field

class Entity(Base, table=True):
    __tablename__ = "entities"
    __table_args__ = (
        Index("ix_entities_email", "email", unique=True),
    )

    id: UUID = Field(default_factory=uuid4, primary_key=True)
    email: str = Field(max_length=255, unique=True, index=True)
```

### Relationships (SQLModel)

```python
from sqlmodel import Relationship

class Prompt(Base, table=True):
    __tablename__ = "prompts"
    id: int = Field(primary_key=True, index=True)
    tags: list["PromptTag"] = Relationship(
        back_populates="prompt",
        sa_relationship_kwargs={"cascade": "all, delete-orphan"},
    )

class PromptTag(Base, table=True):
    __tablename__ = "prompt_tags"
    id: int = Field(primary_key=True, index=True)
    prompt_id: int = Field(foreign_key="prompts.id", ondelete="CASCADE")
    tag: str = Field(max_length=50)
    prompt: "Prompt" = Relationship(back_populates="tags")
```

### Constraints

```python
from sqlalchemy import CheckConstraint

__table_args__ = (
    CheckConstraint("type IN ('a', 'b', 'c')", name="items_type_check"),
    Index("ix_items_created_at", "created_at"),
)
```

## Pydantic v2 Schemas

Schemas sống trong `app/schemas/`. Tách biệt khỏi models — schemas là DTO thuần.

### Pattern chuẩn (Base → Create → Update → Response)

```python
# app/schemas/item.py
from datetime import datetime
from typing import Annotated
from annotated_doc import Doc
from pydantic import BaseModel, ConfigDict, Field


class ItemBase(BaseModel):
    name: Annotated[str, Doc("Tên item")] = Field(..., min_length=1, max_length=255)
    description: Annotated[str | None, Doc("Mô tả item")] = None
    is_active: Annotated[bool, Doc("Trạng thái active")] = True


class ItemCreate(ItemBase):
    """Schema tạo item mới."""
    pass


class ItemUpdate(BaseModel):
    """Schema cập nhật item — tất cả optional."""
    name: Annotated[str | None, Doc("Tên item")] = Field(None, min_length=1, max_length=255)
    description: Annotated[str | None, Doc("Mô tả item")] = None
    is_active: Annotated[bool | None, Doc("Trạng thái active")] = None


class ItemResponse(ItemBase):
    """Schema response trả về client."""
    id: Annotated[int, Doc("ID của item")]
    created_at: Annotated[datetime, Doc("Thời gian tạo")]
    updated_at: Annotated[datetime, Doc("Thời gian cập nhật")]

    model_config = ConfigDict(from_attributes=True)
```

### Paginación — dùng PaginatedResponse[T]

```python
from app.schemas.common import PaginatedResponse
from app.schemas.item import ItemResponse

# Response type
response_model=PaginatedResponse[ItemResponse]

# Tạo response
return PaginatedResponse.create(
    items=[ItemResponse.model_validate(i) for i in items],
    total=total,
    page=page,
    page_size=page_size,
)

# PaginatedResponse structure:
# {
#   "data": [...],
#   "total": 100,
#   "page": 1,
#   "page_size": 20,
#   "has_next": true,
#   "has_prev": false
# }
```

### Field validators

```python
from pydantic import field_validator

class RegisterRequest(BaseModel):
    password: str = Field(..., min_length=12)

    @field_validator("password")
    @classmethod
    def validate_password_complexity(cls, v: str) -> str:
        has_upper = any(c.isupper() for c in v)
        has_lower = any(c.islower() for c in v)
        has_digit = any(c.isdigit() for c in v)
        has_special = any(c in "!@#$%^&*()_+-=" for c in v)
        if not (has_upper and has_lower and has_digit and has_special):
            raise ValueError("Password must contain uppercase, lowercase, digit, special char")
        return v
```

### model_validate vs model_dump

```python
# Từ ORM object → schema
response = ItemResponse.model_validate(item)

# Từ schema → dict (update endpoints)
update_data = body.model_dump(exclude_unset=True)  # chỉ fields được gửi lên
```

### model_validate() vs manual construction — khi nào dùng cái nào

| Trường hợp | Cách dùng |
|-----------|-----------|
| ORM fields map **1:1** với response schema | `model_validate(orm_obj)` |
| Response schema cần **transform** ORM data (relationship → list[str]) | manual construction |

```python
# ✅ Dùng model_validate() — fields 1:1
item = await db.get(Item, item_id)
return ItemResponse.model_validate(item)

# ✅ Dùng manual construction — Prompt.tags là list[PromptTag], nhưng response cần list[str]
return PromptResponse(
    id=prompt.id,
    name=prompt.name,
    # ... other fields ...
    tags=[t.tag for t in prompt.tags],  # ← transform ORM relationship
)
```

**Lý do:** `model_validate(from_attributes=True)` không tự transform nested ORM objects sang kiểu khác.

### EmailStr vs str — validation vs storage

```python
# ✅ ĐÚNG: EmailStr chỉ cho request/response schemas (validation)
class RegisterRequest(BaseModel):
    email: Annotated[EmailStr, Doc("Email address")]  # validate format

# ✅ ĐÚNG: ORM model lưu email là str (không phải EmailStr)
class User(Base, table=True):
    email: str = Field(max_length=255, unique=True, index=True)  # lưu thô
```

Pattern nhất quán trong toàn project: **validate ở schema, store là str ở model**.

## @computed_field (generated/derived fields trong schema)

```python
from pydantic import computed_field, ConfigDict

class UserResponse(BaseModel):
    first_name: str
    last_name: str
    model_config = ConfigDict(from_attributes=True)

    @computed_field  # ← không có trong DB, computed khi serialize
    @property
    def full_name(self) -> Annotated[str, Doc("Họ tên đầy đủ")]:
        return f"{self.first_name} {self.last_name}"
```

## Soft delete pattern

```python
from datetime import UTC, datetime

class Item(Base, table=True):
    __tablename__ = "items"
    id: int = Field(primary_key=True)
    is_deleted: bool = Field(default=False)
    deleted_at: datetime | None = Field(
        default=None, sa_type=DateTime(timezone=True)
    )

# Mọi query phải lọc bỏ deleted records
result = await db.execute(
    select(Item).where(Item.id == item_id, Item.is_deleted == False)  # noqa: E712
)

# Soft delete (không dùng db.delete())
item.is_deleted = True
item.deleted_at = datetime.now(UTC)
await db.commit()
```

## Composite unique index và constraint

```python
from sqlalchemy import Index, UniqueConstraint

class PromptTag(Base, table=True):
    __tablename__ = "prompt_tags"
    __table_args__ = (
        UniqueConstraint("prompt_id", "tag", name="uq_prompt_tags_prompt_tag"),
        Index("ix_prompt_tags_prompt_id", "prompt_id"),   # để query nhanh
    )
    id: int = Field(primary_key=True)
    prompt_id: int = Field(foreign_key="prompts.id", ondelete="CASCADE")
    tag: str = Field(max_length=50)
```

## Migrations (Alembic)

```bash
# Tạo migration sau khi thêm/sửa model
cd backend && alembic revision --autogenerate -m "add items table"

# Áp dụng migration
cd backend && alembic upgrade head

# Rollback
cd backend && alembic downgrade -1
```

**Quan trọng:** Import tất cả models vào `alembic/env.py` để autogenerate hoạt động đúng.

## Naming conventions

| Loại | Convention | Ví dụ |
|------|-----------|-------|
| Model file | snake_case | `rss_feed.py` |
| Model class | PascalCase | `RssFeed` |
| Table name | snake_case plural | `rss_feeds` |
| Schema file | snake_case | `rss_feed.py` |
| Schema class | PascalCase + suffix | `RssFeedCreate`, `RssFeedResponse` |
| Foreign key field | `{entity}_id` | `user_id`, `prompt_id` |
| Boolean field | `is_` prefix | `is_active`, `is_superuser`, `is_email_verified` |
| Timestamps | `created_at`, `updated_at` | consistent across all models |
| CheckConstraint name | `{table}_{field}_check` | `prompts_type_check`, `items_status_check` |

### Schema inheritance — ItemUpdate phá inheritance (tất cả optional)

```python
class ItemBase(BaseModel):        # shared fields với constraints
    name: str = Field(..., min_length=1, max_length=255)

class ItemCreate(ItemBase):       # kế thừa — required fields
    pass

class ItemUpdate(BaseModel):      # ← KHÔNG kế thừa ItemBase
    """Tất cả fields optional — chỉ update fields được gửi lên."""
    name: str | None = Field(None, min_length=1, max_length=255)

class ItemResponse(ItemBase):     # kế thừa + thêm id, timestamps
    id: int
    created_at: datetime
    model_config = ConfigDict(from_attributes=True)  # BẮT BUỘC cho ORM → schema
```

**Tại sao `ItemUpdate` không kế thừa `ItemBase`:** `ItemBase` có required fields (`...`), kế thừa sẽ không thể make optional được. `ItemUpdate` phải định nghĩa lại tất cả fields với `= None`.
