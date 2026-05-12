# Validation Patterns — Pydantic v2

## FastAPI tự validate — không cần validate thủ công

FastAPI tự động:
1. Parse request body → Pydantic schema → raise 422 nếu invalid
2. Parse query params với type hints
3. Trả lỗi có structured format

**Không cần:** `if not body.name: raise ...` khi đã định nghĩa `min_length=1`.

## Schema validation cơ bản

```python
from pydantic import BaseModel, Field, EmailStr
from typing import Annotated
from annotated_doc import Doc

class CreateUserRequest(BaseModel):
    email: Annotated[EmailStr, Doc("Email hợp lệ")]
    name: Annotated[str, Doc("Họ tên")] = Field(..., min_length=1, max_length=100)
    age: Annotated[int, Doc("Tuổi")] = Field(..., ge=0, le=150)
    bio: Annotated[str | None, Doc("Giới thiệu")] = None
```

## Field constraints

```python
from pydantic import Field

# String
name: str = Field(..., min_length=1, max_length=255)
slug: str = Field(..., pattern=r"^[a-z0-9-]+$")
type: str = Field(..., pattern="^(system|user|assistant)$")

# Number
count: int = Field(..., ge=0, le=1000)          # ge=≥, le=≤
rating: float = Field(..., gt=0.0, lt=5.0)      # gt=>, lt=<
page: int = Field(default=1, ge=1)

# Optional
description: str | None = None
tags: list[str] | None = None

# With default
is_active: bool = True
priority: int = Field(default=0, ge=0, le=100)
```

## field_validator

```python
from pydantic import field_validator

class PasswordRequest(BaseModel):
    password: str = Field(..., min_length=12)

    @field_validator("password")
    @classmethod
    def validate_complexity(cls, v: str) -> str:
        """Validate password meets NIST SP 800-63B requirements."""
        checks = [
            any(c.isupper() for c in v),
            any(c.islower() for c in v),
            any(c.isdigit() for c in v),
            any(c in "!@#$%^&*()_+-=" for c in v),
        ]
        if not all(checks):
            raise ValueError("Password must contain uppercase, lowercase, digit, special char")
        return v
```

## model_validator (cross-field)

```python
from pydantic import model_validator

class DateRangeRequest(BaseModel):
    start_date: datetime
    end_date: datetime

    @model_validator(mode="after")
    def validate_date_range(self) -> "DateRangeRequest":
        if self.end_date <= self.start_date:
            raise ValueError("end_date must be after start_date")
        return self
```

## Query params validation

```python
from fastapi import Query

@router.get("/items")
async def list_items(
    page: Annotated[int, Query(ge=1), Doc("Trang, bắt đầu từ 1")] = 1,
    page_size: Annotated[int, Query(ge=1, le=100), Doc("Items mỗi trang")] = 20,
    type: Annotated[str | None, Query(pattern="^(a|b|c)$"), Doc("Loại")] = None,
    search: Annotated[str | None, Doc("Từ khóa tìm kiếm")] = None,
) -> ...:
    ...
```

## Path params validation

```python
@router.get("/{item_id}")
async def get_item(
    item_id: Annotated[int, Doc("ID item")],
    ...
) -> ...:
    # FastAPI tự validate item_id là int
    ...

# UUID path param
@router.get("/users/{user_id}")
async def get_user(
    user_id: Annotated[UUID, Doc("User UUID")],
    ...
) -> ...:
    ...
```

## Partial update schema

```python
class ItemUpdate(BaseModel):
    """Tất cả fields đều optional — chỉ update fields được gửi lên."""
    name: str | None = Field(None, min_length=1, max_length=255)
    description: str | None = None
    is_active: bool | None = None

# Trong endpoint
update_data = body.model_dump(exclude_unset=True)  # chỉ lấy fields có trong request
for field, value in update_data.items():
    setattr(item, field, value)
```

## model_validate và from_attributes

```python
# Từ ORM object (cần model_config = ConfigDict(from_attributes=True))
class ItemResponse(BaseModel):
    id: int
    name: str
    model_config = ConfigDict(from_attributes=True)

# Convert
response = ItemResponse.model_validate(orm_item)

# List
responses = [ItemResponse.model_validate(i) for i in items]
```

## Pydantic EmailStr

```python
from pydantic import EmailStr

class LoginRequest(BaseModel):
    email: Annotated[EmailStr, Doc("Email address")]
    password: Annotated[str, Doc("Password")]
```

EmailStr tự validate format email — không cần `@field_validator`.

## Response schemas

Luôn dùng `response_model=` trong router:

```python
@router.get("/{id}", response_model=ItemResponse)
async def get_item(...) -> ItemResponse:
    ...

# Generic
@router.get("", response_model=PaginatedResponse[ItemResponse])
async def list_items(...) -> PaginatedResponse[ItemResponse]:
    ...

# Không có body trả về
@router.delete("/{id}", status_code=204, response_model=None)
async def delete_item(...) -> None:
    ...
```

## Custom annotated types — tái sử dụng validation

```python
from typing import Annotated
from pydantic import Field

# Định nghĩa custom types (app/schemas/types.py hoặc trong schema file)
SlugStr = Annotated[str, Field(pattern=r"^[a-z0-9-]+$", min_length=1, max_length=100)]
TagStr = Annotated[str, Field(min_length=1, max_length=50)]
NonEmptyStr = Annotated[str, Field(min_length=1, max_length=255)]
PositiveInt = Annotated[int, Field(gt=0)]

# Dùng lại trong nhiều schemas
class TagCreate(BaseModel):
    name: Annotated[TagStr, Doc("Tên tag")]
    slug: Annotated[SlugStr | None, Doc("URL slug")] = None

class CategoryCreate(BaseModel):
    name: Annotated[NonEmptyStr, Doc("Tên category")]
    slug: Annotated[SlugStr, Doc("URL slug")]
```

## Conditional validation

```python
from pydantic import model_validator

class PaymentRequest(BaseModel):
    payment_type: str   # "card" | "bank_transfer"
    card_number: str | None = None
    bank_account: str | None = None

    @model_validator(mode="after")
    def validate_payment_fields(self) -> "PaymentRequest":
        if self.payment_type == "card" and not self.card_number:
            raise ValueError("card_number required khi payment_type='card'")
        if self.payment_type == "bank_transfer" and not self.bank_account:
            raise ValueError("bank_account required khi payment_type='bank_transfer'")
        return self
```

## Serialization alias — khi cần key khác trong JSON

```python
from pydantic import Field, ConfigDict

class ItemResponse(BaseModel):
    item_id: Annotated[int, Doc("ID")] = Field(serialization_alias="id")
    item_name: Annotated[str, Doc("Tên")] = Field(serialization_alias="name")

    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,  # cho phép dùng cả field name lẫn alias
    )
# Output JSON: {"id": 1, "name": "..."}
```

## mypy strict — type: ignore[arg-type] cho SQLAlchemy columns

mypy strict không hiểu SQLAlchemy `InstrumentedAttribute` khi so sánh với Python types trong `.where()`:

```python
# mypy strict báo lỗi: Argument 1 to "where" has incompatible type
result = await db.execute(
    select(Provider).where(Provider.name == body.provider)  # type: ignore[arg-type]
)

# ✅ Đúng cách — chỉ thêm comment khi mypy thực sự complain
result = await db.execute(
    select(Provider).where(Provider.name == body.provider)  # type: ignore[arg-type]
)
```

**Quy tắc:**
- Chỉ dùng `# type: ignore[arg-type]` khi mypy complain về SQLAlchemy column comparisons
- Không dùng `# type: ignore` rộng — phải specify error code
- Không cần thêm nếu mypy không complain (async SQLAlchemy thường OK với UUID/int)

## Validation errors — format FastAPI tự trả

```json
{
  "detail": [
    {
      "type": "string_too_short",
      "loc": ["body", "name"],
      "msg": "String should have at least 1 character",
      "input": ""
    }
  ]
}
```

Status code: `422 Unprocessable Entity`.
