# Sentry và OpenTelemetry — Observability

## Sentry

### Setup (tự động)

`app/core/sentry.py` được gọi trong `main.py`:

```python
from app.core.sentry import setup_sentry
setup_sentry(settings=settings)
```

Sentry chỉ hoạt động khi `SENTRY_DSN` được set. Nếu không set → tắt hoàn toàn.

### Sentry được set user context tự động

Trong `app/core/auth.py::get_current_user()`:
```python
from sentry_sdk import set_user
set_user({"id": str(user.id), "email": user.email})
```

Tức là mọi request có auth → Sentry tự động biết user nào gặp lỗi.

### Capture exception thủ công

```python
import sentry_sdk

# Capture exception trong except block
try:
    await risky_operation()
except Exception as e:
    sentry_sdk.capture_exception(e)
    raise HTTPException(status_code=500, detail="Operation failed") from e

# Capture message
sentry_sdk.capture_message("Important event occurred", level="warning")
```

### Thêm context vào Sentry

```python
with sentry_sdk.push_scope() as scope:
    scope.set_tag("operation", "email_send")
    scope.set_extra("email_to", email_to)
    sentry_sdk.capture_exception(exc)
```

## OpenTelemetry

### Setup (tự động)

`app/core/telemetry.py::setup_opentelemetry(app, settings)` được gọi trong `main.py`.

Instruments tự động:
- FastAPI (HTTP requests/responses)
- SQLAlchemy (queries)
- asyncpg (DB connections)
- httpx (outgoing HTTP)
- aiohttp client
- Python logging

### Config

```bash
OTEL_ENABLED=true
OTEL_SERVICE_NAME=fastapi-backend
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318/v1/traces
OTEL_SAMPLE_RATE=1.0            # 1.0 = 100%, 0.1 = 10%
OTEL_EXCLUDED_URLS=health,metrics,/docs,/redoc,/openapi.json
```

### Manual spans

```python
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

async def process_item(item_id: int) -> dict:
    with tracer.start_as_current_span("process_item") as span:
        span.set_attribute("item.id", item_id)
        result = await do_work(item_id)
        span.set_attribute("item.status", result["status"])
        return result
```

## Logging (Structured JSON)

### Setup

`app/core/logging.py::setup_logging()` gọi trong `main.py`.

```bash
JSON_LOGGING=true   # JSON format (Loki/ELK/Datadog) — bật trong prod
LOG_LEVEL=INFO      # DEBUG, INFO, WARNING, ERROR, CRITICAL
DEBUG=true          # Override LOG_LEVEL → DEBUG
```

### Dùng logger trong code

```python
import logging
logger = logging.getLogger(__name__)

# Format: "module | message" với correlation_id tự động inject
logger.debug("Processing item %s", item_id)
logger.info("User %s logged in", user.id)
logger.warning("Deprecated endpoint called")
logger.error("Failed to send email: %s", error)
logger.exception("Unhandled error")  # tự động thêm traceback
```

### Correlation ID

`CorrelationIDMiddleware` tự động:
- Set `request.state.correlation_id`
- Set `correlation_id_var` (ContextVar)
- Return `X-Request-ID` header trong response

JSON log output tự động include `correlation_id` và `user_id` (nếu có).

### JSON log format

```json
{
  "timestamp": "2026-04-13T10:30:00Z",
  "level": "INFO",
  "message": "User 123 logged in",
  "module": "auth",
  "function": "login",
  "line": 113,
  "correlation_id": "req-abc-123",
  "user_id": "uuid-here"
}
```

## Health endpoints

`app/api/v1/health.py` cung cấp:
- `GET /api/v1/health` — full health check (DB + Redis)
- `GET /api/v1/health/liveness` — liveness probe (luôn OK nếu process sống)

Không cần thêm health check logic — dùng sẵn.

## Monitoring summary

| Tool | Tắt/bật | Ghi chú |
|------|---------|---------|
| Sentry | `SENTRY_DSN` | Tắt nếu DSN trống |
| OpenTelemetry | `OTEL_ENABLED` | Tắt nếu `false` |
| JSON Logging | `JSON_LOGGING` | Dev thường để `false` |
| Correlation ID | Luôn bật | Qua `CorrelationIDMiddleware` |
| Rate limit headers | `RATE_LIMIT_HEADERS_ENABLED` | X-RateLimit-* headers |
