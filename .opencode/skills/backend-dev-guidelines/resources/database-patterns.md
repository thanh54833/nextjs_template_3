# Database Patterns — SQLAlchemy Async

## Session inject

```python
from app.core.dependencies import SessionDep

@router.get("/items")
async def list_items(db: SessionDep) -> ...:
    result = await db.execute(select(Item))
    return result.scalars().all()
```

## SELECT patterns

```python
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload

# Single record
result = await db.execute(select(Item).where(Item.id == item_id))
item = result.scalar_one_or_none()   # None nếu không có
item = result.scalar_one()           # raise nếu không đúng 1

# Multiple records
result = await db.execute(select(Item))
items = result.scalars().all()

# Count
count_result = await db.execute(select(func.count(Item.id)))
total = count_result.scalar() or 0

# Eager load relationships — BẮT BUỘC khi response cần access ORM relationship
result = await db.execute(
    select(Prompt).where(Prompt.id == prompt_id).options(selectinload(Prompt.tags))
)
# ⚠️ Lazy load trong async context → MissingGreenlet error
# prompt = await db.get(Prompt, id)
# prompt.tags  ← ❌ ERROR — phải eager load trước

# Pagination
query = select(Item).offset((page - 1) * page_size).limit(page_size)

# Filtering
query = select(Item).where(Item.is_active == True, Item.type == "x")

# Order
query = select(Item).order_by(Item.created_at.desc())
```

## INSERT pattern

```python
# 1. Tạo object
item = Item(name=body.name, description=body.description)

# 2. Add + flush (để lấy auto-generated ID)
db.add(item)
await db.flush()

# 3. Commit
await db.commit()

# 4. Refresh (để load server-default values)
await db.refresh(item)
```

## UPDATE patterns

```python
from sqlalchemy import update

# Update từng field riêng lẻ
result = await db.execute(select(Item).where(Item.id == item_id))
item = result.scalar_one_or_none()
if not item:
    raise HTTPException(status_code=404, detail="Not found")

update_data = body.model_dump(exclude_unset=True)
for field, value in update_data.items():
    setattr(item, field, value)
await db.commit()
await db.refresh(item)
```

### Atomic SQL-level update — BẮT BUỘC cho counters/concurrent writes

```python
# ✅ ĐÚNG — atomic, không có race condition
await db.execute(
    update(Prompt)
    .where(Prompt.id == prompt_id)
    .values(uses_count=Prompt.uses_count + 1)
)
await db.commit()

# ❌ SAI — read-modify-write race condition (lost update khi concurrent requests)
prompt = await db.get(Prompt, prompt_id)
prompt.uses_count += 1   # Đọc giá trị cũ, hai request đồng thời cùng ghi
await db.commit()
```

**Quy tắc:** Bất kỳ field nào có thể tăng/giảm đồng thời (likes, views, uses_count, stock, balance) → luôn dùng SQL-level atomic update.

## DELETE patterns

**BẮT BUỘC:** Luôn fetch trước để check 404 — KHÔNG delete blind.

```python
from sqlalchemy import delete

# ✅ ĐÚNG — fetch trước để trả 404 nếu không tồn tại
result = await db.execute(select(Item).where(Item.id == item_id))
item = result.scalar_one_or_none()
if not item:
    raise HTTPException(status_code=404, detail="Item not found")
await db.delete(item)
await db.commit()

# Bulk delete relationships trước khi delete parent (nếu không có ON DELETE CASCADE)
await db.execute(delete(PromptTag).where(PromptTag.prompt_id == prompt_id))
await db.delete(prompt)
await db.commit()
```

## Transaction pattern

Session đã auto-manage transaction. Khi cần rollback explicit:

```python
try:
    db.add(user)
    await db.flush()
    db.add(verification_token)
    await db.commit()
except IntegrityError as err:
    await db.rollback()
    raise HTTPException(status_code=409, detail="Conflict") from err
```

## Flush vs Commit

| | flush | commit |
|-|-------|--------|
| Ghi vào DB | Có (trong transaction) | Có (permanent) |
| Auto-generated ID | Có (UUID/serial được set) | Có |
| Rollback có thể | Có | Không |
| Khi dùng | Cần ID trước commit (FK, relationships) | Sau khi hoàn tất tất cả operations |

## IntegrityError (unique constraint)

```python
from sqlalchemy.exc import IntegrityError

try:
    db.add(user)
    await db.flush()
except IntegrityError as err:
    await db.rollback()
    raise HTTPException(
        status_code=status.HTTP_409_CONFLICT,
        detail="Email already registered",
    ) from err
```

## get() by primary key

```python
# Nhanh hơn select() cho primary key lookup
user = await db.get(User, user_id)   # user_id phải là UUID hoặc int đúng type
if not user:
    raise HTTPException(status_code=404, detail="User not found")
```

## Configuration

```python
# app/core/database.py
create_async_engine(
    database_url,              # postgresql+asyncpg://user:pass@host:5432/db
    echo=settings.DEBUG,       # Bật SQL logging trong debug mode
    pool_size=10,
    max_overflow=20,
    pool_pre_ping=True,        # Kiểm tra connection trước khi dùng
    pool_recycle=1800,         # Recycle connections sau 30 phút
    connect_args={
        "timeout": 30,
        "command_timeout": 60,
        "server_settings": {"application_name": "concung_ops"},
    },
)
```

## Bulk INSERT pattern

```python
from sqlalchemy.dialects.postgresql import insert as pg_insert

# Bulk insert với upsert (on conflict do nothing)
await db.execute(
    pg_insert(PromptTag)
    .values([{"prompt_id": prompt_id, "tag": t} for t in tags])
    .on_conflict_do_nothing()
)
await db.commit()

# Bulk delete trước khi replace
await db.execute(delete(PromptTag).where(PromptTag.prompt_id == prompt_id))
for tag in new_tags:
    db.add(PromptTag(prompt_id=prompt_id, tag=tag))
await db.commit()
```

## Subquery và CTE

```python
from sqlalchemy import func, select

# Subquery — đếm related records
subq = (
    select(func.count(PromptTag.id))
    .where(PromptTag.prompt_id == Prompt.id)
    .scalar_subquery()
)
result = await db.execute(
    select(Prompt, subq.label("tag_count"))
    .order_by(subq.desc())
)

# CTE — complex queries
cte = (
    select(User.id, func.count(Prompt.id).label("prompt_count"))
    .join(Prompt, Prompt.user_id == User.id)
    .group_by(User.id)
    .cte("user_stats")
)
result = await db.execute(
    select(User, cte.c.prompt_count)
    .join(cte, cte.c.id == User.id)
    .where(cte.c.prompt_count > 5)
)
```

## Object delete vs SQL delete

```python
# Object delete — dùng khi cần cascade logic của SQLAlchemy/ORM
item = await db.get(Item, item_id)
await db.delete(item)   # triggers cascade relationships
await db.commit()

# SQL delete — dùng khi bulk delete hoặc cần hiệu suất cao
await db.execute(delete(Item).where(Item.user_id == user_id))
await db.commit()

# Cascade thủ công khi SQL delete (nếu không có ON DELETE CASCADE)
await db.execute(delete(PromptTag).where(PromptTag.prompt_id == prompt_id))
await db.execute(delete(Prompt).where(Prompt.id == prompt_id))
await db.commit()
```

## Anti-patterns

```python
# ❌ KHÔNG dùng sync engine trong async context
engine.execute(...)

# ❌ KHÔNG gọi get_session_factory() trực tiếp trong endpoint — dùng SessionDep
from app.core.database import get_session_factory
session = get_session_factory()()   # SAI

# ❌ KHÔNG commit nhiều lần không cần thiết
await db.commit()  # sau flush
await db.commit()  # lại commit — dư thừa

# ❌ KHÔNG dùng read-modify-write cho counter fields
item.count += 1   # SAI nếu có concurrent requests

# ✅ ĐÚNG: flush để lấy ID, commit một lần cuối
db.add(item)
await db.flush()   # lấy item.id
db.add(related)
await db.commit()  # commit tất cả cùng lúc
```
