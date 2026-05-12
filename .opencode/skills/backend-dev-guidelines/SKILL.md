---
name: backend-dev-guidelines
description: Backend development guidelines cho concung_ops FastAPI/Python backend. Kích hoạt khi tạo/sửa routes, endpoints, models, schemas, services, middleware, auth, database, tests, hoặc bất kỳ file nào trong backend/.
---

# Backend Development Guidelines — concung_ops

## Stack thực tế

| Layer | Technology |
|-------|-----------|
| Framework | FastAPI (async-first) |
| Language | Python 3.11 |
| ORM | SQLModel + SQLAlchemy async (asyncpg) |
| DB | PostgreSQL |
| Cache | Redis (redis-py async) |
| Auth | JWT HS256 (PyJWT) + Argon2id |
| Config | pydantic-settings (`get_settings()`) |
| Validation | Pydantic v2 schemas |
| Rate limiting | slowapi |
| Observability | OpenTelemetry + Sentry SDK |
| Testing | pytest + pytest-asyncio + httpx |
| Package manager | uv |
| Linter | Ruff + mypy strict |

---

## Khi nào dùng skill này

Tự động kích hoạt khi làm việc với:
- Tạo/sửa routes, endpoints, API handlers
- Models (SQLModel), schemas (Pydantic v2)
- Services, background jobs (APScheduler)
- Auth, JWT, dependencies
- Database operations (SQLAlchemy async)
- Middleware, error handling
- Tests (pytest, httpx)
- Config (`app/core/config.py`)

---

## ⚠️ Bước bắt buộc trước khi code

> **SKILL.md = overview + quick-reference. Critical patterns (MissingGreenlet, IntegrityError, timestamp pitfalls, security traps) chỉ có trong resource files.**
> **Trước khi viết bất kỳ code nào, đọc resource tương ứng với task hiện tại:**

| Task | Đọc resource này TRƯỚC |
|------|------------------------|
| Tạo endpoint mới (CRUD, PATCH, SSE) | `resources/routing-and-endpoints.md` |
| Tạo model/schema (computed_field, soft delete) | `resources/models-and-schemas.md` |
| Truy vấn database (atomic, bulk, CTE, eager load) | `resources/database-patterns.md` |
| Xử lý async/errors, security patterns | `resources/async-and-errors.md` |
| Config/env vars | `resources/configuration.md` |
| Middleware (ContextVar, BaseHTTPMiddleware) | `resources/middleware-guide.md` |
| Tests (mock, parametrize, external services) | `resources/testing-guide.md` |
| CRUD + Many-to-many hoàn chỉnh | `resources/complete-examples.md` |
| Services, circular import, transaction boundary | `resources/services-and-repositories.md` |
| Sentry, OpenTelemetry, JSON logging | `resources/sentry-and-monitoring.md` |
| Validation, custom types, conditional | `resources/validation-patterns.md` |

**Nếu task cross-cutting** (e.g., endpoint mới cần model + DB query): đọc cả `routing-and-endpoints.md` + `models-and-schemas.md` + `database-patterns.md`.

---

## Checklist tính năng mới

- [ ] **Endpoint**: async function trong router, return type annotated
- [ ] **Schema**: Pydantic v2 với `Annotated[T, Doc("...")]` cho mọi field
- [ ] **Model**: SQLModel với `table=True`, field constraints đầy đủ
- [ ] **Dependencies**: dùng `SessionDep`, `RedisDep`, `CurrentUserDep`, `AdminUserDep`, `UserIdDep`
- [ ] **OpenAPI responses**: dùng `merge_r(R404, R422)` từ `openapi_responses.py`
- [ ] **Rate limit**: `@limiter.limit(...)` nếu endpoint public/auth; `@limiter.exempt` nếu health check
- [ ] **Logging**: `logger = logging.getLogger(__name__)`, không dùng `print()`
- [ ] **Error**: raise `HTTPException` với status code đúng (xem bảng HTTP codes)
- [ ] **SSRF**: dùng `is_url_safe_async()` nếu endpoint nhận URL từ user
- [ ] **Streaming**: dùng `StreamingResponse` nếu endpoint SSE/chunked
- [ ] **Service**: đưa logic phức tạp vào `app/services/` nếu tái sử dụng nhiều nơi
- [ ] **Test**: pytest + httpx AsyncClient với fixture `client` hoặc `db_client`
- [ ] **Migration**: tạo Alembic migration khi thêm/sửa model

---

## Kiến trúc

```
HTTP Request
    ↓
Middleware stack (Correlation, Security, CORS, SlowAPI)
    ↓
FastAPI Router (app/api/v1/*.py)  ← async endpoint functions
    ↓
Dependencies (SessionDep / RedisDep / CurrentUserDep)
    ↓
Direct SQLAlchemy async queries (select/insert/update/delete)
    ↓
PostgreSQL (asyncpg)
```

**Không có BaseController, không có Repository layer** — query trực tiếp trong endpoint.
Logic phức tạp hoặc có thể tái sử dụng → đưa vào `app/services/`.

**Auth logic** (JWT, token, blacklist, password) là "foundational" → ở trong endpoint, không cần service.

---

## 7 Quy tắc cốt lõi

### 1. annotated-doc cho MỌI param/return — KHÔNG dùng regular docstring

```python
# ❌ KHÔNG làm thế này
async def get_items(limit: int = 10) -> list[Item]:
    """Get items.
    Args:
        limit: Maximum items to return.
    """

# ✅ ĐÚNG
from typing import Annotated
from annotated_doc import Doc

async def get_items(
    limit: Annotated[int, Query(ge=1, le=100), Doc("Số items tối đa")] = 10,
) -> Annotated[list[Item], Doc("Danh sách items")]:
    """Lấy danh sách items với giới hạn."""
```

### 2. Config từ `get_settings()` — KHÔNG hardcode, KHÔNG dùng `os.environ`

```python
# ❌ KHÔNG
import os
api_key = os.environ["OPENAI_API_KEY"]

# ✅ ĐÚNG
from app.core.config import get_settings
settings = get_settings()
api_key = settings.OPENAI_API_KEY
```

### 3. Dependencies: SessionDep, RedisDep, CurrentUserDep

```python
from app.core.dependencies import SessionDep, RedisDep, CurrentUserDep, AdminUserDep, UserIdDep

@router.get("/items")
async def list_items(db: SessionDep, _user: CurrentUserDep) -> ...:
    result = await db.execute(select(Item))
    return result.scalars().all()

# Chỉ cần user ID (không cần full User object)
async def my_endpoint(user_id: UserIdDep) -> ...: ...

# Admin only (raise 403 nếu không phải superuser)
async def admin_endpoint(_admin: AdminUserDep) -> ...: ...
```

**Không bao giờ dùng** `Annotated[AsyncSession, Depends(get_db)]` trực tiếp — luôn dùng `SessionDep`.

### 4. Logging: `logging.getLogger(__name__)` — KHÔNG dùng `print()`

```python
import logging
logger = logging.getLogger(__name__)

logger.info("Processing request for user %s", user.id)
logger.error("Failed to send email: %s", e)
```

### 5. OpenAPI responses nhất quán từ `openapi_responses.py`

```python
from app.api.openapi_responses import R404, R422, R429, merge_r

@router.get("/{id}", responses=merge_r(R404, R422))
async def get_item(...) -> ...:
    ...
```

### 6. HTTPException với status code đúng

Dùng `HTTPException` trực tiếp là chuẩn. `AppException` subclasses (`NotFoundError`, `ConflictError`, ...) tồn tại nhưng chỉ dùng khi cần raise từ service layer (nơi không import HTTP).

```python
# ✅ Chuẩn — dùng trong endpoint
from fastapi import HTTPException
raise HTTPException(status_code=404, detail="Item not found")
raise HTTPException(status_code=409, detail="Email already exists")
raise HTTPException(status_code=503, detail="Service unavailable")

# ✅ Tuỳ chọn — dùng trong service layer
from app.core.exceptions import NotFoundError, ConflictError, ForbiddenError
raise NotFoundError("Item not found")   # 404
raise ConflictError("Duplicate email")  # 409
```

### 7. Test: real DB + savepoint rollback — KHÔNG mock DB

```python
# `client` fixture: auth mocked, DB real
# `db_client` fixture: no auth mock (auth endpoint tests)
# test_db fixture: outer transaction + savepoint → rollback sau mỗi test
```

---

## Cấu trúc thư mục

```
backend/
├── main.py                    # Lifespan, middleware stack, multiple routers
├── pyproject.toml             # PEP 621, uv, ruff/mypy config
├── alembic/                   # Database migrations
├── app/
│   ├── api/
│   │   ├── openapi_responses.py   # Shared R404, R422, merge_r()
│   │   └── v1/                    # Routers: auth, user, prompts, playground, providers, ...
│   ├── core/
│   │   ├── config.py          # Settings — DEV_ACCOUNT_EMAIL, FIRST_SUPERUSER_*, 60+ fields
│   │   ├── database.py        # init_db, get_db, get_session_factory
│   │   ├── redis.py           # init_redis, get_redis
│   │   ├── auth.py            # get_current_user, DEV_USER_ID, blacklist check
│   │   ├── dependencies.py    # SessionDep, RedisDep, CurrentUserDep, AdminUserDep, UserIdDep
│   │   ├── security.py        # JWT, Argon2id hash/verify, needs_rehash (bcrypt fallback)
│   │   ├── exceptions.py      # AppException hierarchy (7 types)
│   │   ├── logging.py         # JSON logging, ContextVar correlation_id
│   │   ├── rate_limiting.py   # slowapi limiter, @limiter.exempt
│   │   ├── circuit_breaker.py # Circuit breaker + retry cho external APIs
│   │   ├── init_data.py       # create_initial_superuser (gọi trong lifespan)
│   │   ├── telemetry.py       # OpenTelemetry setup
│   │   ├── sentry.py          # Sentry setup
│   │   └── ssrf.py            # SSRF protection: is_url_safe_async()
│   ├── models/                # SQLModel ORM models (table=True)
│   ├── schemas/               # Pydantic v2 request/response schemas
│   │   └── common.py          # PaginatedResponse[T]
│   ├── services/              # Business logic, external integrations
│   └── utils/                 # Utilities
└── tests/
    ├── conftest.py            # test_db, client, db_client, superuser_headers fixtures
    └── crud/                  # CRUD tests
```

---

## Common imports

```python
from app.core.dependencies import SessionDep, RedisDep, CurrentUserDep, AdminUserDep, UserIdDep
from app.core.config import get_settings
from app.api.openapi_responses import R204, R400, R401, R403, R404, R422, R429, R500, merge_r
from app.schemas.common import PaginatedResponse
from app.core.exceptions import NotFoundError, ConflictError, ForbiddenError
from app.core.rate_limiting import limiter
from app.core.ssrf import is_url_safe_async
from fastapi import APIRouter, HTTPException, Query, Request, status
from fastapi.responses import StreamingResponse
from typing import Annotated
from annotated_doc import Doc
from sqlalchemy import select, delete, update, func, text
from sqlalchemy.orm import selectinload, joinedload
from uuid import UUID
import logging
logger = logging.getLogger(__name__)
```

---

## HTTP Status codes

| Code | Dùng khi |
|------|----------|
| 200 | GET thành công; POST **hành động** (login, logout, refresh) — không tạo resource |
| 201 | POST **tạo resource mới** (register user, create prompt, create tag) |
| 204 | DELETE (không trả body) |
| 400 | Bad request / logic validation |
| 401 | Chưa authenticate |
| 403 | Không có quyền |
| 404 | Resource không tồn tại |
| 409 | Conflict |
| 422 | Pydantic validation error |
| 429 | Rate limit exceeded |
| 503 | External service unavailable |

---

## Anti-patterns cấm

❌ `print()` — dùng `logging`
❌ `os.environ["KEY"]` — dùng `get_settings().KEY` *(ngoại lệ: SET vào os.environ khi external library yêu cầu, e.g. `os.environ["KEY"] = settings.KEY`)*
❌ Regular docstring cho params/returns — dùng `Annotated[T, Doc("...")]`
❌ Hardcode credentials
❌ Mock database trong tests — dùng real DB + transaction rollback
❌ Auto-commit — luôn hỏi user trước
❌ `Annotated[AsyncSession, Depends(get_db)]` trực tiếp — dùng `SessionDep`
❌ Fetch external URL không qua `is_url_safe_async()` — SSRF risk
❌ Swallow exceptions không log: `except Exception: pass`
❌ DELETE mà không fetch trước — phải check 404 trước khi delete
❌ Login/logout POST trả `status_code=201` — action endpoints trả 200

---

## Coverage matrix — app/core/ → skill

| File | Covered by |
|------|------------|
| `auth.py` | [async-and-errors.md](resources/async-and-errors.md) (blacklist, rehash, DEV_USER_ID) |
| `circuit_breaker.py` | [async-and-errors.md](resources/async-and-errors.md) |
| `config.py` | [configuration.md](resources/configuration.md) (DEV_ACCOUNT_EMAIL, FIRST_SUPERUSER_*) |
| `database.py` | [database-patterns.md](resources/database-patterns.md) |
| `dependencies.py` | Quy tắc 3 (SKILL.md) |
| `exceptions.py` | [async-and-errors.md](resources/async-and-errors.md) |
| `init_data.py` | [configuration.md](resources/configuration.md) (First Superuser Seeding) |
| `logging.py` | [sentry-and-monitoring.md](resources/sentry-and-monitoring.md) |
| `rate_limiting.py` | [routing-and-endpoints.md](resources/routing-and-endpoints.md) |
| `redis.py` | `app/core/database.py` pattern — xem SKILL.md Kiến trúc |
| `security.py` | [async-and-errors.md](resources/async-and-errors.md) (Argon2id rehash) |
| `sentry.py` | [sentry-and-monitoring.md](resources/sentry-and-monitoring.md) |
| `ssrf.py` | [services-and-repositories.md](resources/services-and-repositories.md) |
| `telemetry.py` | [sentry-and-monitoring.md](resources/sentry-and-monitoring.md) |

---

## Security Patterns (quick reference)

| Pattern | Location | Dùng khi |
|---------|----------|---------|
| Constant-time verify | `async-and-errors.md` | Login — tránh timing attack khi user không tồn tại |
| `_DUMMY_HASH` | `app/api/v1/auth.py` top | Reuse, không tạo mới mỗi request |
| `_mask_email()` | `async-and-errors.md` | Log email — che PII |
| SSRF protection | `services-and-repositories.md` | Bất kỳ endpoint nhận URL từ user |
| Token blacklisting | `async-and-errors.md` | Logout + refresh rotation |
| Environment-aware degradation | `async-and-errors.md` | Redis unavailable: fail-fast prod, graceful dev |

---

**Skill Status**: UPDATED ✅ v4 — v3 + MEDIUM gaps fixed: logout Redis 503 error handling, SECURE_DEPLOY_ENVIRONMENTS constant, error message security (user enumeration), mypy type:ignore[arg-type] for SQLAlchemy, default_factory vs server_default timestamps
