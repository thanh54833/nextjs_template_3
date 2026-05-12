# Testing Guide — pytest + httpx

## Setup

```bash
# Chạy tất cả tests
cd backend && uv run pytest tests/ -v

# Chạy single test
cd backend && uv run pytest tests/crud/test_auth.py::test_login -v

# Với coverage
cd backend && uv run pytest tests/ --cov=app --cov-report=html

# Từ root
make test-backend
```

## Fixtures có sẵn (conftest.py)

| Fixture | Scope | Dùng cho |
|---------|-------|---------|
| `test_db` | function | AsyncSession với transaction rollback tự động |
| `client` | function | AsyncClient + auth mocked + DB real |
| `db_client` | function | AsyncClient + NO auth mock (auth endpoint tests) |
| `registered_user` | function | User thật trong DB + credentials |
| `inactive_user` | function | User inactive trong DB |
| `auth_token` | function | JWT token hợp lệ của `registered_user` |
| `auth_headers` | function | `{"Authorization": "Bearer <token>"}` |
| `superuser_headers` | function | Token từ `GET /api/v1/auth/dev-token` |
| `test_user` | function | User tạo qua API register |
| `test_admin` | function | Admin user tạo trực tiếp qua DB |

## test_db — real DB, auto rollback

```python
# Outer transaction + savepoint → rollback sau mỗi test
# Không để lại data trong DB sau test
@pytest_asyncio.fixture(scope="function")
async def test_db() -> AsyncGenerator[AsyncSession, None]:
    engine = create_async_engine(settings.database_url, ...)
    async with engine.connect() as conn:
        trans = await conn.begin()
        try:
            session_factory = async_sessionmaker(
                bind=conn,
                join_transaction_mode="create_savepoint",  # ← key
                ...
            )
            async with session_factory() as session:
                yield session
        finally:
            await trans.rollback()   # ← auto rollback
```

## client fixture — cho authenticated endpoints

```python
# Auth được mock → không cần JWT thật
# DB inject qua override
async def test_list_prompts(client: AsyncClient) -> None:
    response = await client.get("/api/v1/prompts")
    assert response.status_code == 200
    data = response.json()
    assert "data" in data
    assert "total" in data
```

## db_client fixture — cho auth endpoints

```python
# KHÔNG mock auth → test login/register thật
async def test_register(db_client: AsyncClient) -> None:
    response = await db_client.post(
        "/api/v1/auth/register",
        json={
            "email": "test@example.com",
            "password": "Testpass11!!",
            "full_name": "Test User",
        },
    )
    assert response.status_code == 201
    data = response.json()
    assert data["email"] == "test@example.com"
```

## Pattern test thường dùng

### Test GET list

```python
async def test_get_prompts(client: AsyncClient, test_db: AsyncSession) -> None:
    # Setup: tạo data
    prompt = Prompt(name="test", type="system", category="cat", content="content")
    test_db.add(prompt)
    await test_db.commit()

    # Test
    response = await client.get("/api/v1/prompts")
    assert response.status_code == 200
    body = response.json()
    assert body["total"] >= 1
    assert len(body["data"]) >= 1
```

### Test POST create

```python
async def test_create_prompt(client: AsyncClient) -> None:
    response = await client.post(
        "/api/v1/prompts",
        json={
            "name": "My Prompt",
            "type": "system",
            "category": "coding",
            "content": "You are a helpful assistant.",
            "tags": ["python", "dev"],
        },
    )
    assert response.status_code == 201
    data = response.json()
    assert data["name"] == "My Prompt"
    assert "id" in data
```

### Test 404

```python
async def test_get_nonexistent(client: AsyncClient) -> None:
    response = await client.get("/api/v1/prompts/99999")
    assert response.status_code == 404
    assert "detail" in response.json()
```

### Test validation error

```python
async def test_invalid_input(client: AsyncClient) -> None:
    response = await client.post(
        "/api/v1/prompts",
        json={"name": ""},  # name min_length=1
    )
    assert response.status_code == 422
```

### Test auth required

```python
async def test_requires_auth(db_client: AsyncClient) -> None:
    # db_client không mock auth
    response = await db_client.get("/api/v1/prompts")
    assert response.status_code == 401
```

### Test login flow

```python
async def test_login_success(
    db_client: AsyncClient,
    registered_user: dict,
) -> None:
    response = await db_client.post(
        "/api/v1/auth/login",
        data={
            "username": registered_user["email"],
            "password": registered_user["password"],
        },
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"
```

## Tạo data trực tiếp trong test_db

```python
from app.models.user import User
from app.core.security import hash_password
import uuid

async def test_something(test_db: AsyncSession) -> None:
    user = User(
        id=uuid.uuid4(),
        email="user@example.com",
        hashed_password=hash_password("Password11!"),
        is_active=True,
        is_superuser=False,
    )
    test_db.add(user)
    await test_db.commit()
    await test_db.refresh(user)
    # test...
```

## Configuration

```toml
# pyproject.toml
[tool.pytest.ini_options]
testpaths = ["tests"]
python_files = ["test_*.py"]
python_functions = ["test_*"]
asyncio_mode = "auto"                              # tự động detect async tests
asyncio_default_fixture_loop_scope = "function"

[tool.coverage.report]
fail_under = 70    # coverage tối thiểu 70%
```

## Mock Redis trong test

`conftest.py` inject `_MockRedis` thay thế Redis thật — không cần Redis server khi chạy tests. Implementation:

```python
# conftest.py — pattern đã có sẵn, KHÔNG implement lại
class _MockRedis:
    """In-memory Redis mock. Hỗ trợ get, setex, delete, exists."""
    def __init__(self) -> None:
        self._store: dict[str, Any] = {}

    async def get(self, key: str) -> Any:
        return self._store.get(key)

    async def setex(self, key: str, ttl: int, value: Any) -> None:
        self._store[key] = value  # TTL không enforce trong test

    async def delete(self, *keys: str) -> int:
        deleted = sum(1 for k in keys if self._store.pop(k, None) is not None)
        return deleted

    async def exists(self, key: str) -> int:
        return 1 if key in self._store else 0
```

Override được inject qua `app.dependency_overrides[get_redis]` trong `client` fixture.

## Parametrize tests

```python
import pytest

@pytest.mark.parametrize("name,expected_status", [
    ("valid-tag", 201),
    ("", 422),           # min_length=1
    ("a" * 101, 422),    # max_length=100
])
async def test_create_tag_validation(
    client: AsyncClient,
    name: str,
    expected_status: int,
) -> None:
    response = await client.post("/api/v1/tags", json={"name": name})
    assert response.status_code == expected_status
```

## Mock external services (email, AI)

```python
from unittest.mock import AsyncMock, patch

async def test_register_sends_email(db_client: AsyncClient) -> None:
    with patch(
        "app.api.v1.auth.send_verification_email",
        new_callable=AsyncMock,
    ) as mock_email:
        response = await db_client.post(
            "/api/v1/auth/register",
            json={"email": "new@example.com", "password": "Password11!!", "full_name": "Test"},
        )
        assert response.status_code == 201
        mock_email.assert_called_once()

async def test_playground_stream(client: AsyncClient) -> None:
    with patch("app.api.v1.playground.AsyncOpenAI") as mock_openai:
        mock_openai.return_value.chat.completions.create = AsyncMock(
            return_value=MagicMock(choices=[MagicMock(message=MagicMock(content="Hello"))])
        )
        response = await client.post("/api/v1/playground/chat", json={...})
        assert response.status_code == 200
```

## SimpleNamespace trong fixtures (tránh SQLAlchemy instrumentation)

```python
# conftest.py — mock_user dùng SimpleNamespace thay vì model_construct()
# Lý do: User model bị SQLAlchemy instrument, có thể gây lỗi ngoài session context
from types import SimpleNamespace

mock_user = SimpleNamespace(
    id=UUID("00000000-0000-0000-0000-000000000001"),
    email="test@example.com",
    is_active=True,
    is_superuser=False,
)
# Dùng làm return value của get_current_user dependency override
```

## Anti-patterns

```python
# ❌ KHÔNG mock database — dùng real DB + transaction rollback
# ❌ KHÔNG dùng scope="session" cho test_db (data leaks giữa tests)
# ❌ KHÔNG hardcode user credentials — dùng fixtures
# ❌ KHÔNG gọi API thật bên ngoài — mock external services nếu cần
# ❌ KHÔNG dùng User.model_construct() trong fixtures — dùng SimpleNamespace
```

## Linting trước khi commit

```bash
make check   # Biome + ruff + pytest + docker config
# hoặc riêng lẻ:
cd backend && uv run ruff check app/
cd backend && uv run mypy app/
cd backend && uv run pytest tests/ -v
```
