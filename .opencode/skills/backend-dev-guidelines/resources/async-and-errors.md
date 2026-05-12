# Async Patterns và Error Handling

## Async fundamentals

Tất cả endpoint functions phải là `async def`. I/O blocking chạy trong thread pool.

```python
import asyncio

# Blocking I/O (SMTP, file I/O) → asyncio.to_thread
await asyncio.to_thread(blocking_function, arg1, arg2)

# Ví dụ thực tế trong email_service.py
async def _send_email(email_to: str, subject: str, html_content: str) -> None:
    await asyncio.to_thread(_send_email_sync, email_to, subject, html_content)

# CPU-intensive (hashing) → asyncio.to_thread
async def async_hash_password(password: str) -> str:
    return await asyncio.to_thread(get_password_hasher().hash, password)

# Chạy nhiều I/O concurrent — asyncio.gather (Python 3.11+: asyncio.TaskGroup)
results = await asyncio.gather(
    fetch_user(user_id),
    fetch_permissions(user_id),
    return_exceptions=True,   # không cancel nếu 1 task fail
)

# asyncio.TaskGroup (cleaner, Python 3.11+)
async with asyncio.TaskGroup() as tg:
    task_a = tg.create_task(fetch_user(user_id))
    task_b = tg.create_task(fetch_permissions(user_id))
# Cả hai task hoàn thành khi thoát context
user = task_a.result()
permissions = task_b.result()
```

## Custom Exception Hierarchy

`app/core/exceptions.py`:

```python
from fastapi import HTTPException

class AppException(HTTPException):
    status_code: int = 500
    detail: str = "Internal server error"

    def __init__(self, detail: str | None = None) -> None:
        super().__init__(status_code=self.status_code, detail=detail or self.detail)

class NotFoundError(AppException):    # 404
class UnauthorizedError(AppException):  # 401
class ForbiddenError(AppException):   # 403
class ConflictError(AppException):    # 409
class BadRequestError(AppException):  # 400
class ServiceUnavailableError(AppException):  # 503
```

**Dùng:**
```python
from app.core.exceptions import NotFoundError, ConflictError

raise NotFoundError("Prompt not found")
raise ConflictError("Email already registered")
raise ServiceUnavailableError("Email service unavailable")
```

## HTTPException

Dùng khi cần custom message cho status codes chuẩn:

```python
from fastapi import HTTPException, status

# Với headers (auth)
raise HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Incorrect email or password",
    headers={"WWW-Authenticate": "Bearer"},
)

# Simple
raise HTTPException(status_code=404, detail="Item not found")
raise HTTPException(status_code=409, detail="Resource already exists")
raise HTTPException(status_code=503, detail="External service unavailable — try again later")
```

## Error handling patterns trong endpoint

```python
@router.post("/items")
async def create_item(body: ItemCreate, db: SessionDep) -> ItemResponse:
    """Create new item."""
    from sqlalchemy.exc import IntegrityError

    item = Item(**body.model_dump())
    try:
        db.add(item)
        await db.flush()
    except IntegrityError as err:
        await db.rollback()   # ← BẮT BUỘC — flush() không auto-rollback
        raise HTTPException(status_code=409, detail="Item already exists") from err

    await db.commit()
    await db.refresh(item)
    return ItemResponse.model_validate(item)
```

**⚠️ flush() + exception → phải explicit rollback:** Sau `flush()` gặp IntegrityError, session ở trạng thái invalid. Nếu không rollback, session bị "poisoned" và các operation tiếp theo sẽ fail với `InvalidRequestError`.

## External service errors

```python
@router.post("/send-notification")
async def send_notification(body: NotifyRequest, db: SessionDep) -> MessageResponse:
    """Send notification email."""
    try:
        await send_email(email_to=body.email, subject="...", content="...")
    except Exception as e:
        logger.error("Failed to send email: %s", e)
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Notification service unavailable — please try again later",
        ) from e
    return MessageResponse(message="Notification sent")
```

## Logging với exception info

```python
import logging
logger = logging.getLogger(__name__)

# Log lỗi với traceback
logger.error("Failed to process item %s: %s", item_id, e)
logger.exception("Unhandled error processing request")  # tự động thêm exc_info

# Log info với context
logger.info("User %s created item %s", user.id, item.id)
logger.warning("Deprecated endpoint called by user %s", user.id)
```

## JWT errors

```python
from app.core.security import InvalidTokenError, decode_access_token

try:
    payload = decode_access_token(token)
except InvalidTokenError as e:
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid or expired token",
    ) from e
```

## Redis unavailability

Pattern từ `auth.py` — fail gracefully ngoài secure environments:

```python
from app.core.config import SECURE_DEPLOY_ENVIRONMENTS, get_settings

try:
    is_blacklisted = await redis.exists(key)
except Exception as e:
    logger.error("Redis unavailable during token check", exc_info=True)
    settings = get_settings()
    if settings.ENVIRONMENT in SECURE_DEPLOY_ENVIRONMENTS:
        raise HTTPException(status_code=503, detail="Session service unavailable") from e
    is_blacklisted = 0  # dev: cho phép tiếp tục
```

## Global exception handlers (main.py)

Định nghĩa sẵn — không cần thêm:

```python
# HTTPException → {"detail": ..., "request_id": correlation_id}
# Exception → 500 + log + request_id
# DEBUG=True: thêm "debug" field cho Exception
```

## Constant-time operations (security)

```python
# _DUMMY_HASH được định nghĩa tại top của auth.py — dùng lại, không tạo mới
_DUMMY_HASH = "$argon2id$v=19$m=65536,t=3,p=4$ZHVtbXlkdW1teWR1bW15ZHVtbXk$ZHVtbXk"

# Chống timing attack khi check user existence
if user is None:
    await async_verify_password(form_data.password, _DUMMY_HASH)  # dummy verify
    raise HTTPException(status_code=401, detail="Incorrect email or password")
# ⚠️ Nếu bỏ dummy verify: attacker đo được "user không tồn tại" vs "sai password"
# bằng response time — timing attack thành công
```

## Security logging — mask PII

```python
def _mask_email(email: str) -> str:
    """Mask email cho logging: user@example.com → use***@example.com."""
    local, _, domain = email.partition("@")
    return f"{local[:3]}***@{domain}" if domain else f"{local[:3]}***"

# Dùng khi log email (tránh PII trong logs)
logger.info("Login attempt for %s", _mask_email(form_data.username))
logger.warning("Failed login for %s from %s", _mask_email(email), request.client.host)
```

## Error message security — generic vs specific

**Quy tắc:** Dùng message generic cho conflict errors ở auth endpoints để tránh user enumeration.

```python
# ❌ SAI — tiết lộ email đã tồn tại → attacker biết email nào đã đăng ký
raise HTTPException(status_code=409, detail="Email already registered")

# ✅ ĐÚNG — message generic, không tiết lộ thông tin
raise HTTPException(status_code=409, detail="Registration failed. Please try again.")
```

**Khi nào dùng generic message:**
- Register/signup — không confirm email tồn tại hay không
- Login — luôn `"Incorrect email or password"` (không phân biệt sai email hay sai mật khẩu)
- Password reset — không confirm email tồn tại trong DB

**Khi nào dùng specific message (OK):**
- Internal CRUD endpoints (admin, authenticated users tạo resource)
- `"Tag name already exists"` trong tag management — users đã authenticated, không phải security boundary

## Password Rehashing (Argon2id upgrade)

Khi user login, tự động rehash nếu hash cũ dùng bcrypt hoặc Argon2id parameters cũ:

```python
from app.core.security import async_hash_password, async_verify_password, get_password_hasher

# Trong login endpoint — sau khi verify password thành công:
is_valid = await async_verify_password(form_data.password, user.hashed_password)
if not is_valid:
    raise HTTPException(status_code=401, detail="Incorrect email or password")

# Auto-rehash: upgrade bcrypt → Argon2id, hoặc update tham số Argon2
hasher = get_password_hasher()
if hasher.needs_rehash(user.hashed_password):
    user.hashed_password = await async_hash_password(form_data.password)
    db.add(user)
    await db.commit()
    logger.info("Rehashed password for user %s", user.id)
```

`needs_rehash()` trả về `True` khi:
- Hash là legacy bcrypt format
- Tham số Argon2id thay đổi (memory_cost, time_cost, parallelism)

## Token Blacklisting (Logout + Refresh Rotation)

### Logout — blacklist access token:

```python
@router.post("/logout")
async def logout(
    _current_user: CurrentUserDep,
    request: Request,
    redis: RedisDep,
) -> MessageResponse:
    """Logout and blacklist the JWT access token."""
    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        token = auth_header[7:]
        try:
            payload = decode_access_token(token)
            exp = payload.get("exp", 0)
            ttl = max(0, exp - int(datetime.now(UTC).timestamp()))
            if ttl > 0:
                try:
                    # Key: "blacklist:{token}", TTL = thời gian còn lại của token
                    await redis.setex(f"blacklist:{token}", ttl, "1")
                    logger.info("Blacklisted token for user %s", _current_user.id)
                except Exception:
                    logger.error("Failed to blacklist token for user %s — Redis unavailable", _current_user.id, exc_info=True)
                    raise HTTPException(
                        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                        detail="Logout service unavailable — token may still be valid",
                    ) from None
        except InvalidTokenError:
            pass
    return MessageResponse(message="Logged out successfully")
```

**⚠️ Redis failure khi logout:** Nếu Redis down → raise 503, không để token tiếp tục valid mà không log.

### Refresh token rotation — check + blacklist old token:

```python
# Kiểm tra trước khi issue new token
refresh_blacklist_key = f"blacklist:refresh:{body.refresh_token}"
is_blacklisted = await redis.exists(refresh_blacklist_key)
if is_blacklisted:
    raise HTTPException(status_code=401, detail="Refresh token has been revoked")

# ... issue new tokens ...

# Blacklist old refresh token (prevent reuse)
await redis.setex(refresh_blacklist_key, ttl, "1")
```

### `get_current_user()` check blacklist trước khi validate JWT:

```python
# Pattern đã có sẵn trong app/core/auth.py — không cần implement lại
# Mọi protected endpoint đều tự động check blacklist qua CurrentUserDep
```

## Circuit Breaker + Retry (External APIs)

`app/core/circuit_breaker.py` — dùng khi gọi external services có thể fail:

```python
from app.core.circuit_breaker import call_external_service

# Tự động: retry 3 lần với exponential backoff, circuit breaker sau 5 lỗi liên tiếp
result = await call_external_service(
    url="https://api.payment.com/charge",
    method="POST",
    json_data={"amount": 100},
    service_name="payment",  # "payment" | "research" | "generic"
)
```

**Circuit breaker states:**
- **CLOSED** → requests đi qua bình thường
- **OPEN** → raise `503 ExternalServiceError` ngay (không gọi real service)
- **HALF-OPEN** → thử 1 request, nếu OK → CLOSED; nếu fail → OPEN

**Monitor state** qua `GET /api/v1/health/circuit` (admin only).

**Chỉ dùng** `call_external_service()` khi: service bên ngoài có thể down, cần retry, cần tự động recover.

## os.environ — ngoại lệ cho external libraries

```python
# ❌ KHÔNG đọc từ os.environ — dùng get_settings()
api_key = os.environ["OPENAI_API_KEY"]

# ✅ SET vào os.environ khi external library yêu cầu (e.g. gpt-researcher)
# Nhận từ settings, SET vào env để library đọc
settings = get_settings()
os.environ["OPENAI_API_KEY"] = settings.OPENAI_API_KEY
os.environ["SERPER_API_KEY"] = settings.SERPER_API_KEY
# ← Pattern này OK vì source là settings, không phải hardcode
```

**Quy tắc:** Source luôn là `get_settings()`. `os.environ` chỉ được SET (không GET) khi thư viện bên ngoài không hỗ trợ injection.

## Async context managers

```python
# Session factory trực tiếp (trong services, không phải endpoint)
from app.core.database import get_session_factory

session_factory = get_session_factory()
async with session_factory() as session:
    result = await session.execute(select(Item))
    items = result.scalars().all()
```
