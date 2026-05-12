# Middleware Guide — FastAPI/Starlette

## Middleware stack hiện tại (main.py)

Thứ tự middleware (ngoài → trong, tức là request đi qua từ trên xuống):

```
SlowAPIMiddleware           ← rate limiting (slowapi)
CorrelationIDMiddleware     ← X-Request-ID + ContextVar
SecurityHeadersMiddleware   ← security headers
CORSMiddleware              ← CORS
TrustedHostMiddleware       ← prod/staging only
```

**Lưu ý:** FastAPI/Starlette thêm middleware theo thứ tự LIFO — middleware được `add_middleware()` sau cùng sẽ xử lý request đầu tiên.

## Middleware có sẵn

### CorrelationIDMiddleware

```python
# Tự động thêm vào mọi request
class CorrelationIDMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next: Any) -> Any:
        correlation_id = request.headers.get("X-Request-ID", str(uuid.uuid4()))
        request.state.correlation_id = correlation_id
        correlation_id_var.set(correlation_id)  # ContextVar cho logging
        response = await call_next(request)
        response.headers["X-Request-ID"] = correlation_id
        return response
```

Trong endpoint: `request.state.correlation_id` để lấy ID.

### SecurityHeadersMiddleware

Inject tự động:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-XSS-Protection: 1; mode=block`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Rate Limiting (slowapi)

```python
from app.core.rate_limiting import limiter
from app.core.config import get_settings
from fastapi import Request

# Decorator trên endpoint
@router.post("/login")
@limiter.limit(get_settings().RATE_LIMIT_AUTH)  # "10/minute"
async def login(request: Request, ...) -> ...:
    # request PHẢI là param để slowapi nhận key
    ...

# Limit tùy chỉnh
@limiter.limit("3/hour")
async def forgot_password(request: Request, ...) -> ...:
    ...
```

**Rate limit keys:**
- Nếu user authenticated: `user:{user_id}`
- Nếu không: IP address

## Tạo middleware mới

### BaseHTTPMiddleware (cho middleware đơn giản)

```python
from starlette.middleware.base import BaseHTTPMiddleware
from fastapi import Request
from typing import Any

class RequestTimingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next: Any) -> Any:
        import time
        start = time.perf_counter()
        response = await call_next(request)
        duration = time.perf_counter() - start
        response.headers["X-Process-Time"] = str(duration)
        return response

# Đăng ký trong main.py
app.add_middleware(RequestTimingMiddleware)
```

**⚠️ Performance warning:** `BaseHTTPMiddleware` wrap response body trong memory buffer — có thể ảnh hưởng SSE/streaming responses. Dùng Pure ASGI middleware nếu cần handle streaming:

```python
from starlette.types import ASGIApp, Receive, Scope, Send

class PureASGIMiddleware:
    """Pure ASGI — không buffer response body, an toàn với SSE."""
    def __init__(self, app: ASGIApp) -> None:
        self.app = app

    async def __call__(self, scope: Scope, receive: Receive, send: Send) -> None:
        if scope["type"] == "http":
            # Logic trước khi request đi qua
            pass
        await self.app(scope, receive, send)
```

### ContextVar propagation trong middleware

Khi cần truyền data qua async context (logging, tracing):

```python
from contextvars import ContextVar

# 1. Định nghĩa ContextVar ở module level (app/core/logging.py)
correlation_id_var: ContextVar[str] = ContextVar("correlation_id", default="")

# 2. Set trong middleware (tự động propagate qua async tasks)
class CorrelationIDMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next: Any) -> Any:
        from app.core.logging import correlation_id_var
        correlation_id = request.headers.get("X-Request-ID", str(uuid.uuid4()))
        correlation_id_var.set(correlation_id)   # ← set cho request context
        response = await call_next(request)
        response.headers["X-Request-ID"] = correlation_id
        return response

# 3. Đọc từ bất kỳ đâu trong request lifecycle (logger, service, v.v.)
from app.core.logging import correlation_id_var
request_id = correlation_id_var.get()
```

`ContextVar` tự động isolated giữa các concurrent requests — không cần lock.

### FastAPI Dependency (cho per-endpoint logic)

Dùng Dependency thay vì middleware khi logic chỉ áp dụng cho một số endpoints:

```python
from fastapi import Depends, HTTPException

async def require_verified_email(current_user: CurrentUserDep) -> None:
    if not current_user.is_email_verified:
        raise HTTPException(status_code=403, detail="Email not verified")

# Áp dụng cho endpoint
@router.post("/premium-feature")
async def premium_feature(
    _: Annotated[None, Depends(require_verified_email)],
    db: SessionDep,
) -> ...:
    ...

# Áp dụng cho toàn bộ router
router = APIRouter(dependencies=[Depends(require_verified_email)])
```

## CORS (main.py)

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,    # từ env CORS_ORIGINS
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allow_headers=["Accept", "Authorization", "Cache-Control", "Content-Type",
                   "X-Request-ID", "X-Correlation-ID"],
    expose_headers=["X-Request-ID", "Retry-After",
                    "X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset"],
)
```

- Dev: `CORS_ORIGINS=*`
- Prod/Staging: phải là specific origins, không được `*`

## TrustedHostMiddleware

Chỉ bật khi `ENVIRONMENT=production|staging` VÀ `TRUSTED_HOSTS` được set:

```python
# .env
TRUSTED_HOSTS=api.example.com,localhost,127.0.0.1
```

## Logging trong middleware

```python
import logging
logger = logging.getLogger(__name__)

class MyMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next: Any) -> Any:
        logger.info("Request: %s %s", request.method, request.url.path)
        response = await call_next(request)
        logger.info("Response: %s", response.status_code)
        return response
```

## Anti-patterns

```python
# ❌ Đừng raise HTTPException từ BaseHTTPMiddleware trực tiếp
# → Dùng JSONResponse thay thế
from fastapi.responses import JSONResponse

class MyMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next: Any) -> Any:
        if not is_valid(request):
            return JSONResponse(
                status_code=403,
                content={"detail": "Forbidden"},
            )
        return await call_next(request)

# ❌ Đừng import get_settings trong class definition
# → Gọi get_settings() trong dispatch() hoặc __init__()
```
