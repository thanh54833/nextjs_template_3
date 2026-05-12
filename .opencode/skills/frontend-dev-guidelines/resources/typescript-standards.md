# TypeScript Standards

TypeScript strict mode cho Next.js 16 frontend.

---

## tsconfig cơ bản

```json
// tsconfig.json — strict mode bật
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "paths": { "@/*": ["./src/*"] }
  }
}
```

**Chỉ có `@/*`** — KHÔNG có `~types`, `~features`, `~components`.

---

## Type Conventions

### Interface cho Props

```typescript
// ✅ Named interface — KHÔNG inline type
interface BoardCardProps {
  board: BoardConfig
  onDelete?: (id: string) => void
  className?: string
}

// ✅ Explicit return type cho functions (không bắt buộc nhưng nên có)
export function BoardCard({ board, onDelete, className }: BoardCardProps): React.JSX.Element {
  return <div className={cn('...', className)}>{/* ... */}</div>
}
```

### Type Imports

```typescript
// ✅ Dùng type import riêng cho types
import type { BoardConfig, RowItem } from '@/hooks/queries/leaderboard'
import type { Metadata } from 'next'
import type { ClassValue } from 'clsx'

// ✅ Mix import khi cần value + type
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
```

### Generic Types

```typescript
// ✅ Generic với constraint
function fetchApi<T extends object>(url: string): Promise<T> {
  return fetch(url).then((r) => r.json() as Promise<T>)
}

// ✅ Union types
type VariantColor = 'emerald' | 'violet' | 'red' | 'amber' | 'default'
type BoardType = 'data_table' | 'metric_card'
type Width = 'full' | 'half'
```

---

## Không dùng `any`

```typescript
// ❌ KHÔNG dùng any
const data: any = response.json()
function process(input: any) {}

// ✅ Dùng unknown cho giá trị chưa biết type
const data: unknown = response.json()
function process(input: unknown) {
  if (typeof input === 'string') { /* safe */ }
}

// ✅ Hoặc type assertion khi chắc chắn
return response.json() as Promise<BoardConfig[]>
```

---

## React Component Types

```typescript
// ✅ Explicit props interface
interface MyProps {
  title: string
  children: React.ReactNode
  onClick?: () => void
}

// ✅ Return type
export function MyComponent({ title, children, onClick }: MyProps): React.JSX.Element {
  return <div onClick={onClick}><h1>{title}</h1>{children}</div>
}

// ✅ Event handler types
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // ...
}

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') { /* ... */ }
}
```

---

## API Response Types — trong query hooks

```typescript
// src/hooks/queries/leaderboard.ts
// Khai báo types cùng file với query hooks

export interface SnapshotValue {
  id: number
  row_item_id: number
  value: string | null
  raw_html: string | null
}

export interface BoardConfig {
  id: number
  title: string
  type: 'data_table' | 'metric_card'
  width: 'full' | 'half'
  url: string | null
  row_items: RowItem[]
  latest_snapshot: Snapshot | null
}

// ✅ Type assertion trong queryFn
queryFn: async () => {
  const res = await fetch(API_BASE)
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json() as Promise<BoardConfig[]>
}
```

---

## Utility Types

```typescript
// Partial — optional fields (update payload)
type BoardUpdatePayload = Partial<Pick<BoardConfig, 'title' | 'url' | 'width'>>

// Pick — subset of type
type BoardSummary = Pick<BoardConfig, 'id' | 'title' | 'type'>

// Omit — exclude fields
type CreatePayload = Omit<BoardConfig, 'id' | 'created_at' | 'updated_at' | 'latest_snapshot'>

// Record — key-value map
const categoryColors: Record<string, string> = {
  python: 'bg-blue-500/10',
  javascript: 'bg-yellow-500/10',
}

// NonNullable — remove null/undefined
type RequiredSnapshot = NonNullable<BoardConfig['latest_snapshot']>
```

---

## React Hooks Types

```typescript
// useState với type
const [board, setBoard] = useState<BoardConfig | null>(null)
const [boards, setBoards] = useState<BoardConfig[]>([])

// useRef
const abortRef = useRef<(() => void) | null>(null)
const inputRef = useRef<HTMLInputElement>(null)
const timerRef = useRef<ReturnType<typeof setTimeout>>()

// useCallback với typed params
const handleDelete = useCallback(
  async (boardId: string): Promise<void> => {
    await deleteBoard(boardId)
  },
  [deleteBoard]
)
```

---

## Discriminated Unions

```typescript
// ✅ Pattern tốt cho state có nhiều dạng
type QueryState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }

// Type narrowing
function render(state: QueryState<BoardConfig[]>) {
  if (state.status === 'loading') return <Skeleton />
  if (state.status === 'error') return <ErrorMessage error={state.error} />
  if (state.status === 'idle') return null
  return <BoardList boards={state.data} />  // TypeScript biết data tồn tại
}
```

---

## VariantProps từ CVA

```typescript
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva('...', {
  variants: { variant: { default: '...', emerald: '...', violet: '...' } },
})

// ✅ Dùng VariantProps để lấy type từ variants
interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}
// BadgeProps tự động có `variant?: 'default' | 'emerald' | 'violet'`
```

---

## Biome — Linting thay ESLint

```bash
# Kiểm tra
cd frontend && bun run lint:check  # check only
cd frontend && bun run lint        # check + fix

# Biome tự sort imports, format code
# Không cần .eslintrc, .prettierrc
```

---

## Strict null checks

```typescript
// ✅ Optional chaining
const value = board?.latest_snapshot?.values[0]?.value

// ✅ Nullish coalescing
const title = board?.title ?? 'Untitled'

// ✅ Non-null assertion — chỉ khi biết chắc không null
const element = document.getElementById('root')!

// ✅ Type guard
function isBoard(val: unknown): val is BoardConfig {
  return typeof val === 'object' && val !== null && 'id' in val && 'title' in val
}
```
