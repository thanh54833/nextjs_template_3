# Data Fetching Patterns

TanStack Query v5 với native `fetch()` — pattern chuẩn cho concung_ops frontend.

---

## Chọn pattern nào?

| Tình huống | Pattern | Ví dụ |
|-----------|---------|-------|
| Fetch đơn giản, 1-2 endpoints | **A — Inline fetch trong queryFn** | `prompts.ts`, `leaderboard.ts` |
| Mutation phức tạp, parse `err.detail`, PUT/POST conditional | **B — Extract function trong cùng file** | `providers.ts`, `rss.ts` |
| Domain lớn, nhiều types shared, 5+ functions | **C — Tách ra `lib/{domain}.ts`** | `playground.ts` → `lib/playground.ts` |
| Hook gọi hàm từ `lib/api.ts` | **D — Direct function call trong queryFn** | `chat.ts` → `lib/api.ts` |

> **BASE_URL vs publicEnv**: Một số hooks (catalog.ts) dùng `import { BASE_URL } from '@/lib/api'` thay vì `publicEnv.NEXT_PUBLIC_BE_URL`. Cả hai đều hợp lệ — `BASE_URL` là re-export. Dùng `publicEnv.NEXT_PUBLIC_BE_URL` cho hooks mới để nhất quán.

---

## Pattern cơ bản: useQuery

```typescript
// src/hooks/queries/prompts.ts
'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@/lib/queryKeys'
import { handleClientError } from '@/lib/toast'
import { getAuthHeaders } from '@/lib/token'
import { publicEnv } from '@/lib/env'

const API_BASE = `${publicEnv.NEXT_PUBLIC_BE_URL}/api/v1/prompts`

export interface Prompt {
  id: string
  title: string
  content: string
  created_at: string
}

// ✅ Query hook — READ
export function usePrompts() {
  return useQuery({
    queryKey: queryKeys.prompts.list(),
    queryFn: async () => {
      const res = await fetch(API_BASE)
      if (!res.ok) throw new Error('Failed to fetch prompts')
      return res.json() as Promise<Prompt[]>
    },
  })
}

// ✅ Query hook có param
export function usePromptContent(promptId: string) {
  return useQuery({
    queryKey: queryKeys.prompts.content(promptId),
    queryFn: async () => {
      const res = await fetch(`${API_BASE}/${promptId}`)
      if (!res.ok) throw new Error('Failed to fetch prompt')
      return res.json() as Promise<Prompt>
    },
    enabled: !!promptId, // chỉ fetch khi có promptId
  })
}
```

---

## Pattern nâng cao: API function extraction

Khi mutation logic phức tạp (nhiều bước, parse error detail từ JSON), tách hàm ra ngoài hook:

```typescript
// ✅ Extract API function — tái sử dụng, dễ test
async function saveProvider(data: SaveProviderParams): Promise<Provider> {
  const method = data.id ? 'PUT' : 'POST'
  const url = data.id ? `${API_BASE}/${data.id}` : API_BASE

  const res = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.detail || 'Failed to save provider') // ← parse FastAPI detail
  }
  return res.json()
}

// Hook chỉ wrap useMutation — gọn hơn
export function useSaveProvider() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: saveProvider, // ← tham chiếu hàm ngoài
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.playground.providers() })
    },
    onError: handleClientError,
  })
}
```

**Dùng khi:** mutation cần parse `err.detail` (FastAPI format), PUT/POST conditional logic, hoặc hàm được gọi ở nhiều chỗ.

---

## Pattern C: Lib-level API separation (playground pattern)

Khi một domain phức tạp (nhiều types, nhiều fetch functions), tách hẳn ra file `src/lib/`:

```typescript
// src/lib/playground.ts — types + fetch functions (KHÔNG phải hook)
import { publicEnv } from '@/lib/env'
import { getAuthHeaders } from '@/lib/token'

export interface Provider { id: number; name: string; base_url: string; ... }
export interface GenerationConfig { model?: string; temperature?: number; ... }

export async function fetchProviders(): Promise<Provider[]> {
  const res = await fetch(`${publicEnv.NEXT_PUBLIC_BE_URL}/api/v1/providers`, {
    headers: getAuthHeaders(),
  })
  if (!res.ok) throw new Error('Failed to fetch providers')
  return res.json()
}

// src/hooks/queries/playground.ts — hooks chỉ wrap, không có logic fetch
import { useQuery } from '@tanstack/react-query'
import { fetchProviders, fetchModels } from '@/lib/playground'
import { queryKeys } from '@/lib/queryKeys'

export function usePlaygroundProviders() {
  return useQuery({
    queryKey: queryKeys.playground.providers(),
    queryFn: () => fetchProviders(), // ← gọi lib function, không inline fetch
  })
}
```

**Dùng khi:** domain cần share types giữa nhiều hooks/components, hoặc có 5+ fetch functions.
**Files hiện tại:** `lib/playground.ts`, `lib/playground-presets-api.ts`, `lib/api.ts`, `lib/rssApi.ts`, `lib/promptsApi.ts`

---

## Pattern D: Direct function call từ lib/api.ts

Khi query hook dùng hàm từ `src/lib/api.ts` thay vì inline `fetch()`:

```typescript
// ✅ Direct function call trong queryFn
import { getGreeting, getThreads } from '@/lib/api'

export function useChatGreeting(userId: string) {
  return useQuery({
    queryKey: queryKeys.chat.greeting(userId),
    queryFn: () => getGreeting(userId),  // ← trực tiếp, không cần wrapper
    enabled: !!userId,
  })
}

// Error handling: hàm trong lib/api.ts tự throw, TanStack Query tự catch
// onError: handleClientError vẫn apply nếu dùng useMutation
```

**Dùng khi:** hook gọi hàm từ `@/lib/api.ts`. Inline fetch thì dùng `if (!res.ok) throw` trực tiếp.

> **Không tồn tại `withToast` wrapper** — `api.ts` functions tự throw errors, không cần wrapper nào.

---

## Pattern mutation: useMutation vs useSafeMutation

### Quy tắc chọn:

| Tình huống | Dùng |
|-----------|------|
| Mutation đơn giản, chỉ cần `onError: handleClientError` | `useMutation` với `onError: handleClientError` |
| Cần auto error handling, không custom `onError` | `useSafeMutation` |
| Cần `onError` tùy chỉnh (log, redirect, etc.) | `useMutation` trực tiếp |

```typescript
// ✅ useMutation với onError: handleClientError — pattern phổ biến nhất
export function useDeletePrompt() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (promptId: string) => {
      const res = await fetch(`${API_BASE}/${promptId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      })
      if (!res.ok) throw new Error('Failed to delete prompt')
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.prompts.list() })
    },
    onError: handleClientError,
  })
}

// ✅ useSafeMutation — khi không cần khai báo onError riêng
import { useSafeMutation } from '@/hooks/useSafeMutation'

export function useCreatePrompt() {
  const queryClient = useQueryClient()

  return useSafeMutation(
    async (data: { title: string; content: string }): Promise<Prompt> => {
      const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to create prompt')
      return res.json()
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries({ queryKey: queryKeys.prompts.list() })
      },
    }
  )
}
```

---

## queryKeys — Centralized Key Management

```typescript
// src/lib/queryKeys.ts — cấu trúc thực tế (thêm key mới vào đây)
export const queryKeys = {
  chat: {
    greeting: (userId: string) => ['chat', 'greeting', userId] as const,
    threads: (userId: string) => ['chat', 'threads', userId] as const,
  },
  playground: {
    providers: () => ['playground', 'providers'] as const,
    presets: (userId: string) => ['playground', 'presets', userId] as const,
    models: (providerId: number) => ['playground', 'models', providerId] as const,
  },
  prompts: {
    list: () => ['prompts', 'list'] as const,
    content: (promptId: string) => ['prompts', 'content', promptId] as const,
  },
  leaderboard: {
    boards: () => ['leaderboard', 'boards'] as const,
  },
  searchEngine: {
    tools: () => ['searchEngine', 'tools'] as const,
  },
  rss: {
    feeds: () => ['rss', 'feeds'] as const,
    articles: (feedId: string, offset: number, q: string) =>
      ['rss', 'articles', feedId, offset, q] as const,
  },
  catalog: {
    categories: () => ['catalog', 'categories'] as const,
    subcategoryGroups: (categoryId: number) =>
      ['catalog', 'subcategoryGroups', categoryId] as const,
    products: (params: FetchProductsParams) =>
      ['catalog', 'products', params] as const,  // ← object trong key
    searchFields: () => ['catalog', 'searchFields'] as const,
    searchPreference: () => ['catalog', 'searchPreference'] as const,
  },
  // ← thêm namespace mới ở đây
} as const
```

---

## Authentication Headers

```typescript
// ✅ Dùng getAuthHeaders() cho endpoints cần auth
import { getAuthHeaders } from '@/lib/token'
// getAuthHeaders() trả về { Authorization: 'Bearer ...' } hoặc {} nếu chưa login

// GET endpoint có auth:
const res = await fetch(`${API_BASE}/protected`, {
  headers: getAuthHeaders(),
})

// ✅ POST/PUT: PHẢI merge Content-Type khi send JSON body
const res = await fetch(API_BASE, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  body: JSON.stringify(data),
})

// ❌ SAI — getAuthHeaders() KHÔNG tự include Content-Type
const res = await fetch(API_BASE, {
  method: 'POST',
  headers: getAuthHeaders(),  // thiếu Content-Type → FastAPI có thể reject
  body: JSON.stringify(data),
})
```

---

## QueryClient Config

```typescript
// src/providers/query-provider.tsx — cấu hình sẵn:
// - staleTime: 120_000 (2 phút)
// - gcTime: 300_000 (5 phút)
// - retry: 2
// - refetchOnWindowFocus: false

// KHÔNG cần override trừ khi có lý do cụ thể
```

---

## Dùng data trong component

```typescript
'use client'

import { useLeaderboardBoards } from '@/hooks/queries/leaderboard'
import { Skeleton } from '@/components/ui/skeleton'

export function LeaderboardView() {
  const { data: boards, isLoading, error } = useLeaderboardBoards()

  // Loading state — dùng Skeleton, KHÔNG spinner mới
  if (isLoading) {
    return (
      <div className="space-y-4 p-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-xl" />
        ))}
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-400">Không thể tải dữ liệu</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {boards?.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </div>
  )
}
```

---

## Cache Invalidation Patterns

```typescript
const queryClient = useQueryClient()

// ✅ Invalidate sau mutation
void queryClient.invalidateQueries({ queryKey: queryKeys.prompts.list() })

// ✅ Optimistic update (khi cần UX nhanh)
queryClient.setQueryData(queryKeys.prompts.list(), (old: Prompt[] | undefined) => {
  return old ? [...old, newPrompt] : [newPrompt]
})

// ✅ Invalidate nhiều queries
await Promise.all([
  queryClient.invalidateQueries({ queryKey: queryKeys.prompts.list() }),
  queryClient.invalidateQueries({ queryKey: queryKeys.prompts.content(promptId) }),
])
```

---

## API URL Pattern

```typescript
// ✅ Format đúng: NEXT_PUBLIC_BE_URL + /api/v1/...
const API_BASE = `${publicEnv.NEXT_PUBLIC_BE_URL}/api/v1/prompts`

// ❌ SAI — không dùng relative path cho backend calls
const API_BASE = '/api/v1/prompts'
// (relative path /api/... là Next.js API routes, không phải FastAPI backend)
```

---

## fetchApi helper — từ src/lib/api.ts

`api.ts` có internal `fetchApi` (không export trực tiếp) dùng trong các API functions đã export. Các hàm này có:
- Timeout tự động 30s (`AbortSignal.timeout`)
- Compose với caller signal nếu có (`AbortSignal.any`)
- Parse JSON error detail từ FastAPI response

```typescript
// ✅ Import hàm cụ thể từ api.ts — không import fetchApi trực tiếp
import { getGreeting, getThreads, getHistory } from '@/lib/api'

// Dùng trực tiếp trong queryFn — không cần wrapper
export function useChatGreeting(userId: string) {
  return useQuery({
    queryKey: queryKeys.chat.greeting(userId),
    queryFn: () => getGreeting(userId),
    enabled: !!userId,
  })
}

// ✅ fetchAuthed — protected endpoint, yêu cầu truyền getToken
import { fetchAuthed } from '@/lib/api'
const data = await fetchAuthed<MyType>('/api/v1/protected', getToken)
// getToken là async function trả về token string | null

// ✅ Cho backend FastAPI trực tiếp — dùng fetch() + getAuthHeaders()
const res = await fetch(`${publicEnv.NEXT_PUBLIC_BE_URL}/api/v1/endpoint`, {
  headers: getAuthHeaders(), // { Authorization: 'Bearer ...' }
})
```

---

## Dependent Query (enabled flag)

Khi query phụ thuộc vào kết quả của query khác, dùng `enabled` để ngăn fetch sớm:

```typescript
// ✅ enabled với null check — dùng khi param có thể là null
export function useSubcategoryGroups(categoryId: number | null) {
  return useQuery({
    queryKey: queryKeys.catalog.subcategoryGroups(categoryId ?? 0),
    queryFn: () => {
      if (categoryId === null) throw new Error('categoryId is required')
      return fetchSubcategoryGroups(categoryId)
    },
    enabled: categoryId !== null,  // ← chỉ fetch khi không phải null
  })
}

// ✅ enabled với string — dùng khi param có thể là empty string/undefined
export function usePromptContent(promptId: string) {
  return useQuery({
    queryKey: queryKeys.prompts.content(promptId),
    queryFn: async () => { /* ... */ },
    enabled: !!promptId, // ← falsy check
  })
}

// ✅ Trong component — kết quả query L1 dùng làm param cho query L2
function CatalogView() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)

  const { data: categories } = useCatalogCategories()
  const { data: groups } = useSubcategoryGroups(selectedCategoryId) // chỉ fetch khi selected

  return (/* ... */)
}
```

**Quy tắc:**
- `null | number` param → `enabled: param !== null`
- `string` param → `enabled: !!param`
- Combo conditions → `enabled: !!userId && !!threadId`

---

## URLSearchParams — Complex Query Strings

Khi API nhận nhiều query params (đặc biệt mảng), dùng `URLSearchParams` thay vì template string:

```typescript
async function fetchProducts(params: FetchProductsParams): Promise<CatalogProductsResponse> {
  const searchParams = new URLSearchParams()

  // Primitive params
  searchParams.append('category_id', String(params.categoryId))
  if (params.q) searchParams.append('q', params.q)
  if (params.page) searchParams.append('page', String(params.page))
  if (params.pageSize) searchParams.append('page_size', String(params.pageSize))

  // Array param — JSON stringify (server expects JSON array string)
  if (params.subcategoryItemIds?.length) {
    searchParams.append('subcategory_item_ids', JSON.stringify(params.subcategoryItemIds))
  }

  // Repeated param (server expects multiple values) — dùng vòng lặp append
  if (params.fields?.length) {
    for (const f of params.fields) {
      searchParams.append('fields', f)  // → ?fields=a&fields=b&fields=c
    }
  }

  const res = await fetch(`${BASE_URL}/api/v1/catalog/products?${searchParams.toString()}`)
  if (!res.ok) throw new Error('Failed to load products')
  return res.json()
}
```

**Khi nào dùng URLSearchParams:**
- 3+ query params
- Params có thể undefined/null (cần conditional append)
- Array params (repeated keys hoặc JSON stringify)
- Pagination params

---

## Complex Object trong queryKey

Khi query nhận params phức tạp (pagination, filters, search), truyền toàn bộ params object vào queryKey:

```typescript
// queryKeys.ts — params object là phần của key
export const queryKeys = {
  catalog: {
    categories: () => ['catalog', 'categories'] as const,
    subcategoryGroups: (categoryId: number) =>
      ['catalog', 'subcategoryGroups', categoryId] as const,
    products: (params: FetchProductsParams) =>
      ['catalog', 'products', params] as const,  // ← full params object
    searchFields: () => ['catalog', 'searchFields'] as const,
    searchPreference: () => ['catalog', 'searchPreference'] as const,
  },
}

// Hook — queryKey tự động update khi params thay đổi → refetch
export function useCatalogProducts(params: FetchProductsParams) {
  return useQuery({
    queryKey: queryKeys.catalog.products(params),   // ← deep equality check
    queryFn: () => fetchProducts(params),
    enabled: params.categoryId > 0,
  })
}

// Component — thay đổi bất kỳ field nào trong params sẽ trigger refetch
const params = useMemo(() => ({
  categoryId: selectedCategoryId,
  subcategoryItemIds: activeFilters,
  q: searchQuery,
  page: currentPage,
}), [selectedCategoryId, activeFilters, searchQuery, currentPage])

const { data: products } = useCatalogProducts(params)
```

> **Lưu ý**: TanStack Query v5 dùng deep equality để so sánh queryKey, nên object trong key hoạt động đúng. KHÔNG cần JSON.stringify thủ công.
