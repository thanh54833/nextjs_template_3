# Skills

Bộ skill guidelines cho concung_ops — auto-activate theo context khi làm việc với backend hoặc frontend.

---

## Skills có sẵn

### backend-dev-guidelines

**Mô tả:** FastAPI/Python backend development guidelines cho concung_ops

**Stack:** FastAPI 0.115 + SQLModel + asyncpg + Redis + Alembic + PyJWT + Argon2id

**Covers:**
- Async endpoint patterns (GET list, GET by ID, POST, PUT, DELETE)
- `annotated-doc` cho tất cả params/returns — **KHÔNG dùng regular docstrings**
- `get_settings()` pattern — **KHÔNG dùng `os.environ` trực tiếp**
- `SessionDep`, `RedisDep`, `CurrentUserDep`, `AdminUserDep` dependencies
- SQLModel models + Pydantic v2 schemas (Base → Create → Update → Response)
- SQLAlchemy async queries, flush vs commit, IntegrityError handling
- `openapi_responses.py` — R404, R422, R409, merge_r()
- AppException hierarchy (NotFoundError, ConflictError, ForbiddenError)
- Middleware stack (CorrelationID, SecurityHeaders, CORS, RateLimit)
- Real DB tests với pytest + pytest-asyncio + transaction rollback

**Kích hoạt khi:**
- Tạo/sửa file trong `backend/app/**/*.py`
- Prompt chứa: `endpoint`, `router`, `FastAPI`, `SQLModel`, `schema`, `model`, `backend`

**[Xem Skill →](backend-dev-guidelines/)**

---

### frontend-dev-guidelines

**Mô tả:** Next.js 16 App Router frontend development guidelines cho concung_ops

**Stack:** Next.js 16.2.1 + React 19 + Tailwind CSS v4 + TanStack Query v5 + Sonner + bun + Biome

**Covers:**
- Server vs Client Components — `'use client'` chỉ khi cần state/effect/event
- Tailwind CSS v4 + CVA + `cn()` — **KHÔNG dùng MUI**
- Emerald-400 primary + zinc-950 background design system
- `useQuery` / `useMutation` / `useSafeMutation` — **KHÔNG dùng `useSuspenseQuery`**
- Query hooks trong `src/hooks/queries/{feature}.ts`
- `queryKeys` centralized tại `@/lib/queryKeys`
- `ROUTES` centralized tại `@/lib/routeConfig`
- Sonner qua `@/lib/toast` helpers — **KHÔNG dùng toast() trực tiếp**
- Chỉ path alias `@/*` — **KHÔNG có `~types`, `~features`**
- Next.js `loading.tsx` + `error.tsx` conventions
- shadcn-style `src/components/ui/` primitives

**Kích hoạt khi:**
- Tạo/sửa file trong `frontend/src/**/*.tsx`
- Prompt chứa: `component`, `page`, `frontend`, `React`, `Next.js`, `UI`, `form`

**[Xem Skill →](frontend-dev-guidelines/)**

---

### tdd

**Mô tả:** Test-driven development với red-green-refactor loop cho concung_ops

**Philosophy:** Tests verify behavior qua public interfaces, không phải implementation details

**Covers:**
- Vertical slices (tracer bullets) — **KHÔNG dùng horizontal slicing**
- Red→Green→Refactor cycle từng bước một
- Integration-style tests: exercise real code paths qua public APIs
- Planning checklist: confirm interface + behaviors trước khi viết code
- Mocking guidelines — khi nào nên/không nên mock
- Deep modules: small interface, deep implementation
- Refactor candidates sau khi tất cả tests pass

**Kích hoạt khi:**
- Prompt chứa: `TDD`, `test-driven`, `red-green-refactor`, `test first`, `tracer bullet`
- Tạo/sửa file test trong `backend/tests/**` hoặc `frontend/tests/**`

**[Xem Skill →](tdd/)**

---

## Cấu trúc file

```
.opencode/skills/
├── README.md                    ← File này
├── skill-rules.json             ← Trigger config
├── backend-dev-guidelines/
│   ├── SKILL.md                 ← Main skill file
│   └── resources/
│       ├── architecture-overview.md
│       ├── routing-and-endpoints.md
│       ├── models-and-schemas.md
│       ├── database-patterns.md
│       ├── async-and-errors.md
│       ├── configuration.md
│       ├── middleware-guide.md
│       ├── sentry-and-monitoring.md
│       ├── services-and-repositories.md
│       ├── validation-patterns.md
│       ├── testing-guide.md
│       └── complete-examples.md
├── frontend-dev-guidelines/
│   ├── SKILL.md                 ← Main skill file
│   └── resources/
│       ├── component-patterns.md
│       ├── data-fetching.md
│       ├── file-organization.md
│       ├── styling-guide.md
│       ├── routing-guide.md
│       ├── loading-and-error-states.md
│       ├── performance.md
│       ├── typescript-standards.md
│       ├── common-patterns.md
│       └── complete-examples.md
└── tdd/
    ├── SKILL.md                 ← Main skill file
    ├── tests.md
    ├── mocking.md
    ├── refactoring.md
    ├── deep-modules.md
    └── interface-design.md
```

---

## skill-rules.json

Định nghĩa điều kiện tự động kích hoạt skill:

```json
{
  "backend-dev-guidelines": {
    "fileTriggers": { "pathPatterns": ["backend/app/**/*.py"] }
  },
  "frontend-dev-guidelines": {
    "fileTriggers": { "pathPatterns": ["frontend/src/**/*.tsx", "frontend/src/**/*.ts"] }
  },
  "tdd": {
    "fileTriggers": { "pathPatterns": ["backend/tests/**/*.py", "frontend/tests/**/*.spec.ts"] }
  }
}
```

---

## Thêm skill mới

**Cấu trúc SKILL.md:**
```markdown
---
name: my-skill
description: Mô tả ngắn — dùng để match context
---

# My Skill

## When to Use This Skill
[Khi nào kích hoạt]

## Quick Start
[Checklist hoặc pattern nhanh]

## Core Principles
[Các rule quan trọng nhất]

## Navigation Guide
[Link đến resource files]
```

**Thêm trigger vào skill-rules.json** với `pathPatterns` phù hợp với cấu trúc project.
