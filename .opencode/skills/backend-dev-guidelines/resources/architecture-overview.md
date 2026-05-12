# Architecture Overview — concung_ops Backend

## Tổng quan

FastAPI monolith (single process), async-first, không có microservices. Port 8002 (dev), 8102 (docker).

## Request lifecycle

```
Client
  │
  ▼
SlowAPIMiddleware          ← rate limiting (slowapi)
  │
CorrelationIDMiddleware    ← gán X-Request-ID, set ContextVar correlation_id
  │
SecurityHeadersMiddleware  ← X-Content-Type-Options, X-Frame-Options, ...
  │
CORSMiddleware             ← CORS headers
  │
TrustedHostMiddleware      ← chỉ prod/staging nếu TRUSTED_HOSTS set
  │
FastAPI Router             ← match path → async endpoint function
  │
  ├── SessionDep            → AsyncSession từ get_db()
  ├── RedisDep              → redis.Redis từ get_redis()
  └── CurrentUserDep        → User từ get_current_user()
        ├── validate JWT (PyJWT)
        ├── check Redis blacklist
        └── load User từ DB
  │
Endpoint Function          ← business logic + SQLAlchemy async queries
  │
PostgreSQL (asyncpg)
```

## Lifespan (startup/shutdown)

`main.py::lifespan()` thứ tự:

**Startup:**
1. `init_db()` — tạo async engine + session factory
2. `init_redis()` — tạo Redis connection
3. `create_initial_superuser()` — nếu `FIRST_SUPERUSER_EMAIL` được set
4. `setup_scheduler().start()` — APScheduler nếu `CRAWL_ENABLED=True`

**Shutdown (sau yield):**
1. `scheduler.shutdown(wait=True)`
2. `dispose_redis()`
3. `dispose_db()`

## 14 Routers

| Router | Prefix | Ghi chú |
|--------|--------|---------|
| root | / | Welcome endpoint |
| health | /api/v1/health | Health + liveness probe |
| auth | /api/v1/auth | Login, register, logout, refresh, password reset |
| user | /api/v1/user | User profile management |
| prompts | /api/v1/prompts | CRUD prompts + tags |
| providers | /api/v1/providers | AI provider management |
| playground | /api/v1/playground | Chat proxy + SSE streaming |
| playground_presets | /api/v1/playground-presets | Preset management |
| leaderboard | /api/v1/leaderboard | Leaderboard |
| embedding | /api/v1/embedding | Vector embedding + similarity |
| extract | /api/v1/extract | Web content extraction |
| search_engine | /api/v1/search-engine | Search engine config |
| rss_feed | /api/v1/rss-feed | RSS feed management |
| admin | /api/v1/admin | Admin operations |

## Database setup

```python
# app/core/database.py
create_async_engine(
    database_url,          # postgresql+asyncpg://...
    pool_size=10,
    max_overflow=20,
    pool_pre_ping=True,
    pool_recycle=1800,
    connect_args={"timeout": 30, "command_timeout": 60}
)
async_sessionmaker(expire_on_commit=False, autoflush=False)
```

Inject vào endpoint qua `SessionDep` — **không gọi trực tiếp engine**.

## Global exception handlers (main.py)

```python
@app.exception_handler(HTTPException)
# → {"detail": ..., "request_id": correlation_id}

@app.exception_handler(Exception)
# → 500 + log exception
# DEBUG=True: thêm "debug" field
```

## OpenAPI docs

Chỉ expose `/docs`, `/redoc`, `/openapi.json` khi `ENVIRONMENT=development`.
Staging/Production: tắt hoàn toàn.

## Services layer (`app/services/`)

| Service | Chức năng |
|---------|----------|
| `email_service.py` | SMTP email qua Jinja2 templates |
| `crawl_service.py` | Web crawling (trafilatura + beautifulsoup4) |
| `scheduler_service.py` | APScheduler setup + job management |
| `rss_service.py` | RSS feed parsing (feedparser) |
| `rss_summarize_service.py` | AI summarization cho RSS articles |
| `embedding_service.py` | Embedding + similarity (Cohere + OpenAI) |
| `research_service.py` | Deep research (gpt-researcher) |

## Observability stack

| Tool | Cấu hình | Tắt khi |
|------|----------|---------|
| OpenTelemetry | `OTEL_ENABLED=True`, OTLP exporter | `OTEL_ENABLED=False` |
| Sentry | `SENTRY_DSN` được set | DSN trống / None |
| JSON Logging | `JSON_LOGGING=True` | Dev có thể để False |
| Correlation ID | `X-Request-ID` header | Luôn bật |

## Kiến trúc không dùng

- ❌ **Không có BaseController** — endpoint là pure async functions
- ❌ **Không có Repository layer** — query trực tiếp trong endpoint
- ❌ **Không có microservices** — monolith duy nhất
- ✅ Logic phức tạp / tái sử dụng → `app/services/`
