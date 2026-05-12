# Services Layer — Business Logic

## Khi nào tạo service

Đưa logic vào `app/services/` khi:
- Logic được gọi từ nhiều nơi (endpoints, scheduler, background tasks)
- Logic phức tạp, nhiều bước, cần test riêng
- Tích hợp external APIs (email, AI, crawl)
- Background jobs / APScheduler tasks

**Endpoint đơn giản** (CRUD cơ bản) → query trực tiếp trong endpoint, không cần service.

## Services hiện có

```
app/services/
├── email_service.py          # SMTP email (Jinja2 templates)
├── crawl_service.py          # Web content crawling
├── scheduler_service.py      # APScheduler setup + jobs
├── rss_service.py            # RSS feed parsing (feedparser)
├── rss_summarize_service.py  # AI RSS summarization
├── embedding_service.py      # Vector embedding (Cohere + OpenAI)
└── research_service.py       # Deep research (gpt-researcher)
```

## Pattern tạo service mới

```python
# app/services/notification_service.py
"""Notification service for sending push/email notifications."""
import logging
from typing import Annotated

from annotated_doc import Doc

from app.core.config import get_settings

logger = logging.getLogger(__name__)


async def send_push_notification(
    user_id: Annotated[str, Doc("User ID để send notification")],
    message: Annotated[str, Doc("Nội dung notification")],
) -> Annotated[bool, Doc("True nếu gửi thành công")]:
    """Send push notification to user via external provider."""
    settings = get_settings()
    try:
        # External API call
        ...
        logger.info("Push notification sent to user %s", user_id)
        return True
    except Exception as e:
        logger.error("Failed to send push notification to %s: %s", user_id, e)
        return False
```

## Email service (thực tế)

```python
# Import và dùng trong endpoint
from app.services.email_service import (
    send_verification_email,
    send_reset_password_email,
    send_welcome_email,
)

# Trong endpoint
try:
    await send_verification_email(email_to=user.email, token=raw_token)
except Exception as e:
    logger.error("Failed to send email: %s", e)
    raise HTTPException(status_code=503, detail="Email service unavailable") from e
```

## APScheduler jobs

```python
# app/services/scheduler_service.py
from apscheduler.schedulers.asyncio import AsyncIOScheduler

_scheduler: AsyncIOScheduler | None = None

def get_scheduler() -> AsyncIOScheduler | None:
    return _scheduler

def setup_scheduler() -> AsyncIOScheduler:
    global _scheduler
    settings = get_settings()
    _scheduler = AsyncIOScheduler()

    _scheduler.add_job(
        crawl_feeds,
        "interval",
        minutes=settings.CRAWL_INTERVAL_MINUTES,
        id="crawl_feeds",
        replace_existing=True,
    )
    return _scheduler
```

## Service với DB access

Services có thể nhận session từ caller hoặc tự lấy từ factory:

```python
# Option 1: nhận session từ endpoint (preferred khi gọi từ endpoint)
async def process_item(
    item_id: Annotated[int, Doc("Item ID")],
    db: AsyncSession,
) -> Annotated[None, Doc("Xử lý item")]:
    """Process item with provided session."""
    result = await db.execute(select(Item).where(Item.id == item_id))
    ...

# Option 2: tự lấy session (cho background jobs)
from app.core.database import get_session_factory

async def background_process() -> None:
    """Background job — tự manage session."""
    session_factory = get_session_factory()
    async with session_factory() as session:
        result = await session.execute(select(Item))
        ...
        await session.commit()
```

## AI/LLM services

```python
# Dùng OpenAI SDK (đã có trong dependencies)
from openai import AsyncOpenAI

async def summarize_text(text: str) -> str:
    settings = get_settings()
    client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
    response = await client.chat.completions.create(
        model=settings.AI_SUMMARIZE_MODEL,
        messages=[{"role": "user", "content": f"Summarize: {text}"}],
    )
    return response.choices[0].message.content or ""
```

## SSRF Protection

Khi service fetch URL bên ngoài → kiểm tra SSRF trước:

```python
from app.core.ssrf import is_url_safe_async

async def fetch_external_url(url: str) -> str:
    if not await is_url_safe_async(url):
        raise ValueError(f"URL không được phép (SSRF protection): {url}")
    # ... fetch
```

## Tránh circular imports — local import trong function

Khi service A import service B và B cũng import A → circular import. Giải pháp: lazy import trong function.

```python
# ❌ SAI — top-level import gây circular
from app.services.email_service import send_verification_email  # ở đầu file

# ✅ ĐÚNG — import trong function (lazy loading)
async def register_user(...) -> None:
    from app.services.email_service import send_verification_email  # ← local import
    await send_verification_email(email_to=user.email, token=token)
```

## Transaction handling trong service layer

```python
# Option 1: Service nhận session — caller quản lý transaction (preferred)
async def attach_tags_to_prompt(
    prompt_id: int,
    tags: list[str],
    db: AsyncSession,
) -> None:
    """Caller phải commit sau khi gọi."""
    await db.execute(delete(PromptTag).where(PromptTag.prompt_id == prompt_id))
    for tag in tags:
        db.add(PromptTag(prompt_id=prompt_id, tag=tag))
    # KHÔNG commit ở đây — caller quyết định khi nào commit

# Option 2: Service tự commit — cho background jobs
async def background_process() -> None:
    async with get_session_factory()() as session:
        # ... logic
        await session.commit()  # ← service tự manage

# ⚠️ Không commit trong service khi đang trong transaction của caller
# → Sẽ commit sớm, rollback của caller không undo được service changes
```

## HTTP client trong service — timeout + limits

```python
import httpx

async def fetch_content(url: str) -> str:
    """Fetch external URL với proper timeout và connection limits."""
    if not await is_url_safe_async(url):
        raise ValueError(f"URL không an toàn: {url}")

    headers = {"User-Agent": "Mozilla/5.0 (compatible; Bot/0.1)"}
    limits = httpx.Limits(max_connections=1, max_keepalive_connections=0)
    async with httpx.AsyncClient(
        timeout=30.0,
        follow_redirects=True,
        headers=headers,
        limits=limits,    # ← prevent connection pool issues
    ) as client:
        response = await client.get(url)
        response.raise_for_status()
        return response.text
```

## Anti-patterns

```python
# ❌ Đừng put CRUD đơn giản vào service nếu chỉ dùng 1 chỗ
# → Query trực tiếp trong endpoint

# ❌ Đừng import service từ service khác ở top-level nếu có thể circular
# → Dùng local import trong function

# ❌ Đừng hardcode settings trong service
# → Luôn dùng get_settings()

# ❌ Đừng swallow exceptions trong service mà không log
try:
    ...
except Exception:
    pass  # ❌ SAI — phải log hoặc re-raise

# ❌ Đừng commit trong service khi đang nhận session từ caller
# → Caller quyết định transaction boundary
```
