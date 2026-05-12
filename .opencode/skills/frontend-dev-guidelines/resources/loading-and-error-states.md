# Loading & Error States

Patterns xử lý loading/error trong Next.js App Router + TanStack Query v5.

---

## Loading States — 3 cách

### 1. Route-level loading (Next.js loading.tsx)

Next.js tự động render `loading.tsx` khi navigate đến route.

```typescript
// src/app/leaderboard/loading.tsx
'use client'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-48" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-xl" />
        ))}
      </div>
    </div>
  )
}
```

### 2. Component-level loading (isLoading từ useQuery)

```typescript
'use client'
import { useLeaderboardBoards } from '@/hooks/queries/leaderboard'
import { LoadingState } from '@/components/ui/loading-state'
import { ErrorState } from '@/components/ui/error-state'
import PageLayout from '@/components/PageLayout'  // default import

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Leaderboard' }]

export function LeaderboardView() {
  const { data, isLoading, error, refetch } = useLeaderboardBoards()

  // Ngoài PageLayout nếu loading/error — tránh pass required props phức tạp
  if (isLoading) return <LoadingState message="Đang tải..." />
  if (error) return <ErrorState message={error.message} onRetry={refetch} />

  return (
    <PageLayout
      title="Leaderboard"
      description="Track AI tool rankings"
      breadcrumbItems={BREADCRUMBS}
    >
      {/* actual content */}
    </PageLayout>
  )
}
```

### 3. Skeleton inline — trong component phức tạp

```typescript
// Khi chỉ một phần của UI đang loading
function BoardCard({ boardId }: { boardId: string }) {
  const { data: snapshot, isLoading } = useBoardSnapshot(boardId)

  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <h3 className="font-medium text-foreground">Board Name</h3>
      {isLoading ? (
        <div className="mt-3 space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ) : (
        <SnapshotData data={snapshot} />
      )}
    </div>
  )
}
```

---

## Error States

### Route-level error (error.tsx)

```typescript
// src/app/leaderboard/error.tsx — PHẢI 'use client'
'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to monitoring
    console.error('[RouteError]', error)
  }, [error])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
        <svg className="h-7 w-7 text-red-400" /* ... */ />
      </div>
      <h2 className="font-[590] text-foreground text-xl">Đã xảy ra lỗi</h2>
      <p className="max-w-sm text-muted-foreground text-sm">{error.message}</p>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-700"
        >
          Thử lại
        </button>
        <a href="/" className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground hover:bg-zinc-800">
          Về trang chủ
        </a>
      </div>
    </div>
  )
}
```

### Component-level error (ErrorBoundary)

```typescript
// src/components/ErrorBoundary.tsx — đã có sẵn
import { ErrorBoundary } from '@/components/ErrorBoundary'

// Bọc component có thể throw
<ErrorBoundary fallback={<p className="text-red-400">Lỗi load component</p>}>
  <RiskyComponent />
</ErrorBoundary>
```

### API Error — toast notification

```typescript
// ✅ Dùng handleClientError trong mutation onError
import { handleClientError } from '@/lib/toast'

const { mutate } = useMutation({
  mutationFn: deleteBoard,
  onSuccess: () => showSuccessToast('Đã xóa board'),
  onError: handleClientError, // tự động extract message + show toast
})

// ✅ Hoặc manual
const { mutate } = useMutation({
  mutationFn: deleteBoard,
  onError: (error) => {
    showErrorToast(error instanceof Error ? error.message : 'Xóa thất bại')
  },
})
```

---

## Spinner — inline loading indicator

```typescript
import { Spinner } from '@/components/ui/spinner'

// Trong button khi đang submit
<Button disabled={isPending}>
  {isPending && <Spinner className="mr-2 h-4 w-4" />}
  {isPending ? 'Đang lưu...' : 'Lưu'}
</Button>
```

---

## Empty States

```typescript
// ✅ Dùng EmptyState từ @/components/ui/empty-state — đã có sẵn
import { EmptyState, EmptyStateIcon } from '@/components/ui/empty-state'
// Hoặc qua index:
import { EmptyState, EmptyStateIcon } from '@/components/ui'

// Props:
// icon?        React.ReactNode     — icon tùy chỉnh
// title        string              — required
// description? string              — optional mô tả
// action?      React.ReactNode     — optional CTA button
// className?   string

// Dùng đơn giản
if (!data?.length) {
  return (
    <EmptyState
      title="Chưa có dữ liệu"
      description="Tạo mục đầu tiên để bắt đầu."
      action={<Button onClick={onAdd}>Thêm mới</Button>}
    />
  )
}

// Với icon có sẵn (type: 'data' | 'search' | 'filter' | 'folder')
<EmptyState
  icon={<EmptyStateIcon type="data" />}
  title="Không có kết quả"
  description="Thử tìm kiếm với từ khóa khác."
/>
```

---

## Toast — Sonner helpers

```typescript
// src/lib/toast.ts — LUÔN import từ đây, không import sonner trực tiếp

import {
  showSuccessToast,   // Success notification
  showErrorToast,     // Error notification
  handleClientError,  // Dùng làm onError handler
  extractErrorMessage // Parse error message từ various formats
} from '@/lib/toast'

// Examples
showSuccessToast('Tạo board thành công!')
showErrorToast('Không thể kết nối server')

// Trong async handler
try {
  await saveData()
  showSuccessToast('Đã lưu')
} catch (err) {
  showErrorToast(err instanceof Error ? err.message : 'Lỗi không xác định')
}
```

---

## Pending States cho Mutations

```typescript
'use client'

import { useSafeMutation } from '@/hooks/useSafeMutation'
import { showSuccessToast } from '@/lib/toast'
import { publicEnv } from '@/lib/env'

const API_BASE = `${publicEnv.NEXT_PUBLIC_BE_URL}/api/v1/boards`

function DeleteButton({ boardId }: { boardId: string }) {
  const queryClient = useQueryClient()

  const { mutate, isPending } = useSafeMutation(
    async (id: string) => {
      const res = await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      })
      if (!res.ok) throw new Error('Failed to delete')
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries({ queryKey: queryKeys.leaderboard.boards() })
        showSuccessToast('Đã xóa board')
      },
    }
  )

  return (
    <Button
      variant="destructive"
      disabled={isPending}
      onClick={() => mutate(boardId)}
    >
      {isPending ? 'Đang xóa...' : 'Xóa'}
    </Button>
  )
}
```
