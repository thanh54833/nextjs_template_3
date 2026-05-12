# Configuration — pydantic-settings

## Truy cập config

```python
from app.core.config import get_settings

settings = get_settings()   # singleton (lru_cache)
api_key = settings.OPENAI_API_KEY
db_url = settings.database_url      # computed_field
```

**Không bao giờ:** `os.environ["KEY"]` hay `os.getenv("KEY")` để **đọc** config.

**Ngoại lệ — chỉ SET vào os.environ khi external library yêu cầu:**
```python
# ✅ OK — nhận từ settings, SET cho library (e.g. gpt-researcher)
os.environ["OPENAI_API_KEY"] = settings.OPENAI_API_KEY
os.environ["SERPER_API_KEY"] = settings.SERPER_API_KEY
```

## Settings class (app/core/config.py)

```python
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=resolve_settings_env_files(),  # .env, .env.local
        env_file_encoding="utf-8",
        extra="ignore",
        env_ignore_empty=True,
    )

    APP_NAME: str = "FastAPI Backend"
    DEBUG: bool = False
    ENVIRONMENT: Literal["development", "staging", "production"] = "development"
    ...

@lru_cache
def get_settings() -> Settings:
    return Settings()
```

## Tất cả env vars

### Application
| Var | Default | Ghi chú |
|-----|---------|---------|
| `APP_NAME` | `"FastAPI Backend"` | |
| `DEBUG` | `False` | |
| `VERSION` | `"1.0.0"` | |
| `HOST` | `"0.0.0.0"` | |
| `PORT` | `8002` | |
| `ENVIRONMENT` | `"development"` | development/staging/production |

### Auth & Security
| Var | Default | Ghi chú |
|-----|---------|---------|
| `JWT_SECRET_KEY` | **required** | Min 64 chars |
| `JWT_ALGORITHM` | `"HS256"` | |
| `JWT_ACCESS_TOKEN_EXPIRE_MINUTES` | `30` | |
| `JWT_REFRESH_TOKEN_EXPIRE_DAYS` | `7` | |
| `PASSWORD_RESET_TOKEN_EXPIRE_HOURS` | `48` | |
| `EMAIL_VERIFICATION_TOKEN_EXPIRE_DAYS` | `7` | |

### Database
| Var | Ghi chú |
|-----|---------|
| `POSTGRES_HOST` | **required** |
| `POSTGRES_PORT` | `5432` |
| `POSTGRES_DB` | **required** |
| `POSTGRES_USER` | **required** |
| `POSTGRES_PASSWORD` | **required** |
| `POSTGRES_SCHEMA` | `"public"` |
| `POSTGRES_SECOND_*` | Secondary DB (optional) |

### Redis
| Var | Default |
|-----|---------|
| `REDIS_HOST` | `"localhost"` |
| `REDIS_PORT` | `6379` |
| `REDIS_DB` | `0` |
| `REDIS_PASSWORD` | `""` |

### Rate Limiting
| Var | Default |
|-----|---------|
| `RATE_LIMIT_ENABLED` | `True` |
| `RATE_LIMIT_DEFAULT` | `"100/minute"` |
| `RATE_LIMIT_AUTH` | `"10/minute"` |
| `RATE_LIMIT_EMBEDDING` | `"30/minute"` |
| `RATE_LIMIT_EXTRACT` | `"20/minute"` |
| `RATE_LIMIT_STRATEGY` | `"fixed-window"` |
| `RATE_LIMIT_HEADERS_ENABLED` | `True` |

### Observability
| Var | Default |
|-----|---------|
| `OTEL_ENABLED` | `True` |
| `OTEL_SERVICE_NAME` | `"fastapi-backend"` |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | `"http://localhost:4318/v1/traces"` |
| `OTEL_SAMPLE_RATE` | `1.0` |
| `SENTRY_DSN` | `None` |
| `JSON_LOGGING` | `False` |
| `LOG_LEVEL` | `"INFO"` |

### External APIs
| Var | Default |
|-----|---------|
| `OPENAI_API_KEY` | `""` |
| `COHERE_API_KEY` | `""` |
| `SERPER_API_KEY` | `""` |

### Email (SMTP)
| Var | Default |
|-----|---------|
| `SMTP_HOST` | `""` |
| `SMTP_PORT` | `587` |
| `SMTP_TLS` | `True` |
| `SMTP_USER` | `""` |
| `SMTP_PASSWORD` | `""` |
| `SMTP_FROM` | `"noreply@example.com"` |
| `FRONTEND_URL` | `"http://localhost:3002"` |

### Crawl/Scheduler
| Var | Default |
|-----|---------|
| `CRAWL_ENABLED` | `True` |
| `CRAWL_INTERVAL_MINUTES` | `10` |
| `CRAWL_RETENTION_DAYS` | `30` |
| `MAX_CONCURRENT_CRAWLS` | `5` |

### AI Models
| Var | Default |
|-----|---------|
| `AI_SUMMARIZE_MODEL` | `"gpt-4o-mini"` |
| `AI_DEEP_RESEARCH_MODEL` | `"gpt-4o"` |

## Computed fields (auto-generated)

```python
settings.database_url       # postgresql+asyncpg://user:pass@host:5432/db
settings.database_url_sync  # postgresql+psycopg2://... (cho Alembic)
settings.redis_url          # redis://:pass@host:6379/0
```

## SECURE_DEPLOY_ENVIRONMENTS

```python
# app/core/config.py
SECURE_DEPLOY_ENVIRONMENTS: frozenset[str] = frozenset({"production", "staging"})
```

Dùng để kiểm tra environment khi cần fail-fast (Redis, external services):

```python
from app.core.config import SECURE_DEPLOY_ENVIRONMENTS, get_settings

settings = get_settings()
if settings.ENVIRONMENT in SECURE_DEPLOY_ENVIRONMENTS:
    raise HTTPException(status_code=503, detail="Service unavailable")
# else: dev → graceful degradation
```

## Production validation

Khi `ENVIRONMENT=production` hoặc `staging`, Settings tự động raise ValueError nếu:
- `JWT_SECRET_KEY` là placeholder từ `.env.example`
- `CORS_ORIGINS` chứa `"*"`
- `DEBUG=True`
- `JSON_LOGGING=False`
- `POSTGRES_PASSWORD` là weak password

## Thêm setting mới

```python
class Settings(BaseSettings):
    ...
    # Thêm ở đây với Annotated + Doc
    NEW_FEATURE_ENABLED: Annotated[bool, Doc("Bật tính năng mới")] = False
    NEW_API_KEY: Annotated[str, Doc("API key cho service mới")] = ""
```

Sau đó thêm vào `.env.example`:
```
NEW_FEATURE_ENABLED=false
NEW_API_KEY=
```

## Dev Account — Development Bootstrap

Khi `ENVIRONMENT=development`, app tự động tạo một dev account với fixed UUID khi startup:

```python
# app/core/auth.py
DEV_USER_ID = UUID("00000000-0000-0000-0000-000000000000")
```

**Config:**
```bash
# backend/.env.dev
DEV_ACCOUNT_EMAIL=dev@local.dev
DEV_ACCOUNT_PASSWORD=Dev@Local2024!
```

**Flow:**
- `create_dev_account()` chạy trong `lifespan()` khi `ENVIRONMENT=development`
- Tạo User với `id=DEV_USER_ID`, `is_email_verified=True`, `full_name=None`
- Idempotent — safe to call mỗi lần restart
- Log token (exp: year 9999) khi startup

**Token endpoint (dev only):**
```python
GET /api/v1/auth/dev-token
# → Token với exp=9999, claims: sub, email, name="Dev User", dev=True
# → 403 nếu ENVIRONMENT != "development"
```

**Dùng trong test:**
```python
# superuser_headers fixture gọi GET /api/v1/auth/dev-token
# test_admin fixture tạo admin user trực tiếp qua DB
```

## First Superuser Seeding

Tự động tạo superuser khi app start lần đầu:

```bash
# backend/.env
FIRST_SUPERUSER_EMAIL=admin@example.com
FIRST_SUPERUSER_PASSWORD=SecurePassword123!
```

Logic trong `lifespan()`:
- Nếu email chưa tồn tại trong DB → tạo User với `is_superuser=True`
- Nếu đã tồn tại → skip (không update)
- Không set → skip hoàn toàn

## Env file loading

Ưu tiên theo thứ tự:
1. `ENV_FILE` hoặc `DOTENV_PATH` env var (nếu set)
2. `backend/.env` → `backend/.env.local` (nếu tồn tại)

```bash
# Override env file cho test
ENV_FILE=backend/.env.test uv run pytest
```
