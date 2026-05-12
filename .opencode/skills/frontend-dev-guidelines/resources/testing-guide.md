# Frontend Testing Guide

Vitest + React Testing Library — unit test patterns cho concung_ops frontend.

> **Source của truth**: `vitest.config.mts`, `vitest.setup.tsx`, `tests/unit/utils/render.tsx`

---

## 1. Stack & Setup

| Tool | Version | Vai trò |
|------|---------|---------|
| **Vitest** | v4.x | Test runner, assertions, mocking |
| **React Testing Library** | v16 | Render + query DOM |
| **@testing-library/user-event** | v14 | Simulate user interactions |
| **happy-dom** | v20 | DOM environment (thay jsdom) |
| **MSW** | v2 | Mock HTTP requests |
| **@testing-library/jest-dom** | v6 | Custom matchers (`toBeInTheDocument`, etc.) |

**Config**: `apps/frontend/vitest.config.mts`
- Environment: `happy-dom`
- Globals: `true` — không cần import `describe/it/expect/vi`
- Setup file: `vitest.setup.tsx` — auto-setup MSW, mock Next.js APIs, browser APIs
- Coverage: **70%** threshold (statements/branches/functions/lines)

---

## 2. File Locations & Naming

```
tests/
└── unit/
    ├── mocks/
    │   ├── handlers.ts          # MSW default handlers
    │   └── server.ts            # MSW server setup
    ├── utils/
    │   └── render.tsx           # renderWithProviders helper
    ├── components/              # Mirror src/components/ structure
    │   ├── ui/
    │   │   ├── button.test.tsx
    │   │   └── badge.test.tsx
    │   ├── auth/
    │   │   └── SidebarLoginButton.test.tsx
    │   ├── rss/
    │   └── leaderboard/
    └── providers/
        └── query-provider.test.tsx
```

**Rule:** Mirror `src/` structure trong `tests/unit/`.

```
src/components/ui/button.tsx
→ tests/unit/components/ui/button.test.tsx

src/components/AgentsView.tsx
→ tests/unit/components/AgentsView.test.tsx
```

---

## 3. Running Tests

```bash
bun test              # watch mode (default)
bun run test:run      # single run (CI)
bun run test:ui       # visual UI
bun run test:watch    # explicit watch
bun run test:e2e      # Playwright E2E (separate)
```

---

## 4. Core Render Utilities

### Chọn đúng render function:

```typescript
// ─── Simple UI components (Button, Badge, Input, etc.) ───────────────────
// KHÔNG cần QueryClient → dùng render trực tiếp từ @testing-library/react
import { render, screen } from '@testing-library/react'

render(<Button>Click me</Button>)

// ─── Components dùng useQuery / useMutation ───────────────────────────────
// CẦN QueryClient → dùng renderWithProviders hoặc inline wrapper
import { renderWithProviders } from '../../utils/render'

renderWithProviders(<AgentsView />)

// HOẶC inline wrapper (khi cần custom queryClient):
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function wrapper({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

render(<SearchEngineGrid />, { wrapper })
```

### `renderWithProviders` từ `tests/unit/utils/render.tsx`:

```typescript
// Re-export tất cả từ @testing-library/react + override render
import { renderWithProviders as render, screen, waitFor, fireEvent, act } from '../../utils/render'

// Dùng với custom queryClient khi cần test cache/mutation:
import { createTestQueryClient } from '../../utils/render'
const queryClient = createTestQueryClient()
renderWithProviders(<MyView />, { queryClient })
```

**QueryClient config trong tests** (auto-apply với `createTestQueryClient`):
```typescript
defaultOptions: {
  queries: { retry: false, staleTime: 0, gcTime: 0 },
  mutations: { retry: false },
}
```

---

## 5. What to Test — Behavior, NOT Implementation

```typescript
// ✅ ĐÚNG — test observable behavior qua DOM
it('renders agent names after loading', async () => {
  render(<AgentsView />, { wrapper })
  await waitFor(() => expect(screen.getByText('Frontend React Agent')).toBeInTheDocument())
})

it('filters when category tab clicked', async () => {
  const user = userEvent.setup()
  render(<SearchEngineGrid />, { wrapper })
  await user.click(screen.getByRole('button', { name: 'Search' }))
  await waitFor(() => {
    expect(screen.getByText('Semantic Search')).toBeInTheDocument()
    expect(screen.queryByText('AI Reranker')).not.toBeInTheDocument()
  })
})

// ❌ SAI — test implementation details
it('calls setActiveTab when tab clicked', ...) // ← internal state
it('calls queryClient.invalidateQueries', ...)  // ← internal call
it('hook is called with correct params', ...)   // ← implementation
```

---

## 6. Mocking Patterns

### 6.1 Mock `@/lib/env` (LUÔN cần cho components dùng publicEnv)

```typescript
// Đặt TRƯỚC tất cả imports khác — Vitest tự hoist vi.mock()
vi.mock('@/lib/env', () => ({
  publicEnv: {
    NEXT_PUBLIC_BE_URL: 'http://localhost:8002',
    NEXT_PUBLIC_APP_URL: 'http://localhost:3002',
    NEXT_PUBLIC_HMAC_SECRET: 'test-secret',
  },
}))

// Sau đó mới import components
import MyView from '@/components/MyView'
```

### 6.2 Mock query hooks (khi cần control data/loading/error)

```typescript
vi.mock('@/hooks/queries/searchEngine', () => ({
  useSearchEngineTools: vi.fn(),
  useSearchEngineToolUseMutation: vi.fn(),
}))

// Import sau mock
import { useSearchEngineTools } from '@/hooks/queries/searchEngine'
const mockUseTools = useSearchEngineTools as ReturnType<typeof vi.fn>

// Trong test:
describe('SearchEngineGrid', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseTools.mockReturnValue({ data: [], isLoading: false, error: null })
  })

  it('shows loading skeleton', () => {
    mockUseTools.mockReturnValue({ data: undefined, isLoading: true })
    render(<SearchEngineGrid />, { wrapper })
    // verify loading state
  })

  it('shows tools when data loaded', () => {
    mockUseTools.mockReturnValue({ data: sampleTools, isLoading: false })
    render(<SearchEngineGrid />, { wrapper })
    expect(screen.getByText('Semantic Search')).toBeInTheDocument()
  })
})
```

### 6.3 Mock `useBreadcrumb` (thường cần cho View components)

```typescript
vi.mock('@/hooks/useBreadcrumb', () => ({
  useBreadcrumb: () => [],
}))
```

### 6.4 Mock `PageLayout` (khi test View components — tránh complexity)

```typescript
vi.mock('@/components/PageLayout', () => ({
  default: ({
    title,
    description,
    children,
    tabs,
    activeTab,
    onTabChange,
  }: {
    title: string
    description?: string
    children: React.ReactNode
    tabs?: { id: string; label: string }[]
    activeTab?: string
    onTabChange?: (id: string) => void
  }) => (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {tabs?.map((t) => (
        <button key={t.id} onClick={() => onTabChange?.(t.id)} data-active={activeTab === t.id}>
          {t.label}
        </button>
      ))}
      {children}
    </div>
  ),
}))
```

### 6.5 Mock auth hooks

```typescript
vi.mock('@/hooks/useAuth', () => ({
  useAuth: vi.fn(),
  useLogout: vi.fn(() => vi.fn()),
  useLogin: vi.fn(() => vi.fn()),
  useToken: vi.fn(() => ({
    token: null,
    setToken: vi.fn(),
    clearToken: vi.fn(),
    getToken: vi.fn(),
  })),
}))
```

### 6.6 Mock toast (tránh error logs)

```typescript
vi.mock('@/lib/toast', () => ({
  showErrorToast: vi.fn(),
  showSuccessToast: vi.fn(),
  handleClientError: vi.fn(),
}))
```

### 6.7 Mock `@/lib/token`

```typescript
vi.mock('@/lib/token', () => ({
  getAuthHeaders: () => ({}),
}))
```

### 6.8 Mock `@/lib/demoDelay` (khi component có artificial delay)

```typescript
vi.mock('@/lib/demoDelay', () => ({
  delayMs: (_ms: number, value: unknown) => Promise.resolve(value),
}))
```

### 6.9 Update mock return value trong test cụ thể

```typescript
it('shows error state', async () => {
  const { useLogin } = await import('@/hooks/useAuth')
  const loginFn = vi.fn().mockRejectedValue(new Error('Invalid credentials'))
  vi.mocked(useLogin).mockReturnValue(loginFn)
  // ...
})
```

---

## 7. MSW — Mock HTTP Requests

MSW được setup tự động trong `vitest.setup.tsx`. Override per-test khi cần:

```typescript
import { server } from '../../mocks/server'
import { http, HttpResponse } from 'msw'

it('shows error state on API failure', async () => {
  // Override default handler cho test này
  server.use(
    http.get('http://localhost:8002/api/v1/feeds', () => {
      return HttpResponse.json({ detail: 'Server error' }, { status: 500 })
    })
  )

  render(<FeedsView />, { wrapper })
  await waitFor(() => {
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
  })
  // Handler tự reset sau test (server.resetHandlers() trong afterEach)
})
```

**Default handlers** (`tests/unit/mocks/handlers.ts`): Auth endpoints đã được mock.  
**Khi nào dùng MSW vs mock hook**: Dùng MSW khi component fetch trực tiếp (không qua hook abstraction), mock hook khi component dùng `useQuery`/`useMutation` hooks.

---

## 8. User Interactions

```typescript
import userEvent from '@testing-library/user-event'

describe('LoginForm', () => {
  it('submits form with credentials', async () => {
    // LUÔN setup() trước khi dùng
    const user = userEvent.setup()

    render(<LoginForm />)

    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/password/i), 'password123')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    // assert outcome
  })
})

// Dùng fireEvent cho simple interactions (không cần full event simulation):
import { fireEvent } from '@testing-library/react'
fireEvent.click(screen.getByRole('button', { name: 'Close' }))
```

---

## 9. Async Testing

```typescript
import { waitFor, act } from '@testing-library/react'

// waitFor — đợi DOM update sau async operations
it('shows data after loading', async () => {
  render(<DataView />, { wrapper })
  await waitFor(() => {
    expect(screen.getByText('Item Name')).toBeInTheDocument()
  })
})

// act — wrap state updates + renders
it('renders with state transitions', async () => {
  await act(async () => {
    render(<ComponentWithMount />)
  })
  expect(screen.getByText('Ready')).toBeInTheDocument()
})

// Kiểm tra element KHÔNG tồn tại sau async:
await waitFor(() => {
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})
```

---

## 10. Querying DOM Elements

```typescript
// Ưu tiên theo thứ tự (accessible > semantic > test-id):

// 1. getByRole — BEST, reflects accessibility
screen.getByRole('button', { name: /submit/i })
screen.getByRole('heading', { name: 'Page Title', level: 1 })
screen.getByRole('dialog')
screen.getByRole('navigation', { name: /breadcrumb/i })

// 2. getByLabelText — cho form elements
screen.getByLabelText(/email/i)
screen.getByLabelText(/password/i)

// 3. getByText — cho text content
screen.getByText('Some visible text')
screen.getByText(/partial match/i)

// 4. getByPlaceholderText — fallback cho inputs
screen.getByPlaceholderText('Search...')

// 5. container.querySelectorAll — LAST RESORT cho CSS class checks
const skeletons = container.querySelectorAll('.animate-pulse')
expect(skeletons.length).toBeGreaterThan(0)

// Queries:
// getBy* — throws nếu không tìm thấy (expected to exist)
// queryBy* — returns null nếu không tìm thấy (expected NOT to exist)
// findBy* — async version của getBy* (returns Promise)
// getAllBy*, queryAllBy*, findAllBy* — multiple elements
```

---

## 11. Common Test Patterns

### Pattern 1: Simple UI Component

```typescript
// tests/unit/components/ui/badge.test.tsx
import { render, screen } from '@testing-library/react'
import { Badge } from '@/components/ui/badge'

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('applies variant class', () => {
    render(<Badge variant="success">Active</Badge>)
    const badge = screen.getByText('Active')
    expect(badge).toHaveClass('bg-status-emerald')
  })
})
```

### Pattern 2: View Component với mocked hooks

```typescript
// tests/unit/components/FooView.test.tsx
import { vi } from 'vitest'

// LUÔN mock TRƯỚC imports (Vitest hoist vi.mock)
vi.mock('@/lib/env', () => ({
  publicEnv: { NEXT_PUBLIC_BE_URL: 'http://localhost:8002', NEXT_PUBLIC_APP_URL: 'http://localhost:3002', NEXT_PUBLIC_HMAC_SECRET: 'test' },
}))
vi.mock('@/hooks/useBreadcrumb', () => ({ useBreadcrumb: () => [] }))
vi.mock('@/hooks/queries/foo', () => ({
  useFooItems: vi.fn(),
}))
vi.mock('@/components/PageLayout', () => ({
  default: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div><h1>{title}</h1>{children}</div>
  ),
}))

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen, waitFor } from '@testing-library/react'
import type React from 'react'
import FooView from '@/components/FooView'
import { useFooItems } from '@/hooks/queries/foo'

const mockUseFooItems = useFooItems as ReturnType<typeof vi.fn>

function wrapper({ children }: { children: React.ReactNode }) {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } })
  return <QueryClientProvider client={qc}>{children}</QueryClientProvider>
}

describe('FooView', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseFooItems.mockReturnValue({ data: [], isLoading: false, error: null })
  })

  it('shows loading skeleton', () => {
    mockUseFooItems.mockReturnValue({ data: undefined, isLoading: true })
    const { container } = render(<FooView />, { wrapper })
    expect(container.querySelectorAll('.animate-pulse').length).toBeGreaterThan(0)
  })

  it('shows empty state when no data', () => {
    render(<FooView />, { wrapper })
    expect(screen.getByText(/no items/i)).toBeInTheDocument()
  })

  it('shows items when data loaded', () => {
    mockUseFooItems.mockReturnValue({
      data: [{ id: '1', title: 'Item One' }],
      isLoading: false,
    })
    render(<FooView />, { wrapper })
    expect(screen.getByText('Item One')).toBeInTheDocument()
  })
})
```

### Pattern 3: Form với user interactions

```typescript
it('submits with correct values', async () => {
  const { useLogin } = await import('@/hooks/useAuth')
  const loginFn = vi.fn().mockResolvedValue(undefined)
  vi.mocked(useLogin).mockReturnValue(loginFn)

  const user = userEvent.setup()
  render(<LoginForm />)

  await user.type(screen.getByLabelText(/email/i), 'test@example.com')
  await user.type(screen.getByLabelText(/password/i), 'pass123')
  await user.click(screen.getByRole('button', { name: /submit/i }))

  expect(loginFn).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'pass123',
  })
})

it('does not submit when fields empty', async () => {
  const loginFn = vi.fn()
  const user = userEvent.setup()
  render(<LoginForm />)
  await user.click(screen.getByRole('button', { name: /submit/i }))
  expect(loginFn).not.toHaveBeenCalled()
})
```

### Pattern 4: Modal open/close

```typescript
it('opens modal on button click', async () => {
  const user = userEvent.setup()
  render(<ComponentWithModal />)

  // Modal không tồn tại trước khi click
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

  await user.click(screen.getByRole('button', { name: /open/i }))

  expect(screen.getByRole('dialog')).toBeInTheDocument()
})

it('closes modal on cancel click', async () => {
  const user = userEvent.setup()
  render(<ComponentWithModal />)
  await user.click(screen.getByRole('button', { name: /open/i }))
  await user.click(screen.getByRole('button', { name: /cancel/i }))
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
})
```

---

## 12. File Template — Quick Start

```typescript
// tests/unit/components/MyComponent.test.tsx
import { vi } from 'vitest'

// 1. vi.mock() calls — PHẢI đứng đầu file (trước imports)
vi.mock('@/lib/env', () => ({
  publicEnv: {
    NEXT_PUBLIC_BE_URL: 'http://localhost:8002',
    NEXT_PUBLIC_APP_URL: 'http://localhost:3002',
    NEXT_PUBLIC_HMAC_SECRET: 'test-secret',
  },
}))

// 2. Imports
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyComponent from '@/components/MyComponent'

// 3. Tests
describe('MyComponent', () => {
  // Cleanup sau mỗi test nếu dùng mock functions
  beforeEach(() => vi.clearAllMocks())

  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const user = userEvent.setup()
    render(<MyComponent />)
    await user.click(screen.getByRole('button'))
    // assert
  })
})
```

---

## 13. Coverage Requirements

```
Minimum 70% threshold:
  - statements
  - branches
  - functions
  - lines

Excluded from coverage (không cần test):
  - src/app/**          → Next.js pages (E2E covers these)
  - src/styles/**
  - src/middleware.ts
  - src/**/*.d.ts
  - src/**/index.ts     → barrel re-exports
```

---

## 14. Anti-Patterns — KHÔNG làm

```typescript
// ❌ Import TRƯỚC vi.mock() — sẽ không work (Vitest hoisting)
import MyComponent from '@/components/MyComponent'
vi.mock('@/lib/env', ...) // ← QUÁ MUỘN

// ✅ ĐÚNG: vi.mock() trước TẤT CẢ imports
vi.mock('@/lib/env', ...)
import MyComponent from '@/components/MyComponent'

// ❌ Test implementation details
expect(mockQueryClient.invalidateQueries).toHaveBeenCalled()
expect(setStateFn).toHaveBeenCalledWith(true)

// ✅ Test behavior
expect(screen.getByText('Updated successfully')).toBeInTheDocument()

// ❌ Dùng getBy* để kiểm tra element KHÔNG tồn tại (throws)
expect(screen.getByText('Error')).not.toBeInTheDocument() // ← throws!

// ✅ Dùng queryBy* để kiểm tra không tồn tại
expect(screen.queryByText('Error')).not.toBeInTheDocument()

// ❌ Skip act() khi cần
render(<ComponentWithStateUpdate />)
expect(screen.getByText('Ready')).toBeInTheDocument() // ← race condition

// ✅ Wrap hoặc dùng waitFor
await waitFor(() => expect(screen.getByText('Ready')).toBeInTheDocument())

// ❌ Tự setup MSW server thủ công trong test
const server = setupServer(...)
beforeAll(() => server.listen())
// ← server đã được setup trong vitest.setup.tsx

// ✅ Chỉ override handler khi cần
server.use(http.get('/api/...', () => HttpResponse.json(mockData)))

// ❌ Snapshot tests cho components phức tạp (brittle)
expect(container).toMatchSnapshot()

// ✅ Assert cụ thể các behaviors
expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled()
```
