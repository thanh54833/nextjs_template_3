# Complete Examples

Ví dụ đầy đủ phản ánh pattern thực tế trong concung_ops frontend.

---

## Ví dụ 1: Feature CRUD hoàn chỉnh — Generic "Items" pattern

> **Note**: Đây là template CRUD pattern, không phải copy của bất kỳ hook nào cụ thể. Khi implement feature thực, đọc API schema trước để xác định đúng field names và endpoints. Ví dụ: hook RSS thực tế tại `src/hooks/queries/rss.ts` dùng `feed_url`, `display_name` (không phải `url`, `name`).

### Query Hooks (`src/hooks/queries/items.ts`)

```typescript
'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@/lib/queryKeys'
import { handleClientError } from '@/lib/toast'
import { getAuthHeaders } from '@/lib/token'
import { publicEnv } from '@/lib/env'

const API_BASE = `${publicEnv.NEXT_PUBLIC_BE_URL}/api/v1/items`

// Định nghĩa interface DỰA TRÊN API schema thực tế — không tự đoán field names
export interface Item {
  id: string
  title: string
  description: string | null
  created_at: string
}

export interface CreateItemPayload {
  title: string
  description?: string
}

// READ
export function useItems() {
  return useQuery({
    queryKey: queryKeys.items.list(),
    queryFn: async () => {
      const res = await fetch(API_BASE)
      if (!res.ok) throw new Error('Failed to fetch items')
      return res.json() as Promise<Item[]>
    },
  })
}

// CREATE
export function useCreateItem() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: CreateItemPayload): Promise<Item> => {
      const res = await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to create item')
      return res.json()
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.items.list() })
    },
    onError: handleClientError,
  })
}

// DELETE
export function useDeleteItem() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (itemId: string) => {
      const res = await fetch(`${API_BASE}/${itemId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
      })
      if (!res.ok) throw new Error('Failed to delete item')
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.items.list() })
    },
    onError: handleClientError,
  })
}
```

### View Component (`src/components/ItemsView.tsx`)

```typescript
'use client'

import { useState, useCallback } from 'react'
import PageLayout from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { EmptyState } from '@/components/ui/empty-state'
import { LoadingState } from '@/components/ui/loading-state'
import { ErrorState } from '@/components/ui/error-state'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  useItems,
  useCreateItem,
  useDeleteItem,
  type CreateItemPayload,
  type Item,
} from '@/hooks/queries/items'
import { showSuccessToast } from '@/lib/toast'

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Items' }]

export function ItemsView() {
  const { data: items, isLoading, error, refetch } = useItems()
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  if (isLoading) return <LoadingState message="Đang tải items..." />
  if (error) return <ErrorState message={error.message} onRetry={refetch} />

  return (
    <PageLayout
      title="Items"
      description="Quản lý item list"
      breadcrumbItems={BREADCRUMBS}
      action={
        <Button onClick={() => setIsCreateOpen(true)} size="sm">
          Thêm item
        </Button>
      }
    >
      {!items?.length ? (
        <EmptyState
          title="Chưa có items"
          description="Tạo item đầu tiên để bắt đầu."
          action={<Button onClick={() => setIsCreateOpen(true)}>Tạo mới</Button>}
        />
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Thêm Item</DialogTitle>
          </DialogHeader>
          <CreateItemForm onClose={() => setIsCreateOpen(false)} />
        </DialogContent>
      </Dialog>
    </PageLayout>
  )
}

// Sub-component
function ItemCard({ item }: { item: Item }) {
  const [isDeleting, setIsDeleting] = useState(false)
  const { mutate: deleteItem, isPending } = useDeleteItem()

  const handleDelete = useCallback(() => {
    deleteItem(item.id, {
      onSuccess: () => {
        showSuccessToast(`Đã xóa "${item.title}"`)
        setIsDeleting(false)
      },
    })
  }, [item.id, item.title, deleteItem])

  return (
    <Card className="flex items-center justify-between">
      <div className="min-w-0 flex-1">
        <p className="text-caption-lg text-foreground font-[590]">{item.title}</p>
        {item.description && (
          <p className="mt-0.5 truncate text-caption text-muted-foreground">{item.description}</p>
        )}
      </div>

      <div className="ml-4 flex items-center gap-2 shrink-0">
        {isDeleting ? (
          <>
            <span className="text-caption text-muted-foreground">Xóa?</span>
            <Button variant="destructive" size="sm" onClick={handleDelete} disabled={isPending}>
              {isPending ? '...' : 'Xóa'}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsDeleting(false)}>
              Hủy
            </Button>
          </>
        ) : (
          <Button variant="ghost" size="sm" onClick={() => setIsDeleting(true)}>
            Xóa
          </Button>
        )}
      </div>
    </Card>
  )
}

// Create form
function CreateItemForm({ onClose }: { onClose: () => void }) {
  const { mutate: createItem, isPending } = useCreateItem()
  const [form, setForm] = useState<CreateItemPayload>({ title: '' })

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!form.title) return
      createItem(form, {
        onSuccess: () => {
          showSuccessToast(`"${form.title}" đã được thêm`)
          onClose()
        },
      })
    },
    [form, createItem, onClose]
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Tên</Label>
        <Input
          id="title"
          value={form.title}
          onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
          placeholder="Nhập tên..."
          required
        />
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="ghost" onClick={onClose}>
          Hủy
        </Button>
        <Button type="submit" disabled={isPending || !form.title}>
          {isPending ? 'Đang thêm...' : 'Thêm'}
        </Button>
      </div>
    </form>
  )
}
```

### Page (`src/app/items/page.tsx`)

```typescript
import { ItemsView } from '@/components/ItemsView'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Items | Concung Ops',
}

export default function ItemsPage() {
  return <RssView />
}
```

### loading.tsx (`src/app/rss/loading.tsx`)

```typescript
'use client'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="p-6 space-y-3">
      <Skeleton className="h-8 w-40" />
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
```

### Thêm vào queryKeys

```typescript
// src/lib/queryKeys.ts
export const queryKeys = {
  // ... existing
  rss: {
    feeds: () => ['rss', 'feeds'] as const,
    articles: (feedId: string, offset: number, q: string) =>
      ['rss', 'articles', feedId, offset, q] as const,
  },
}
```

### Thêm vào routeConfig

```typescript
// src/lib/routeConfig.ts
export const ROUTES = {
  // ... existing
  ITEMS: { label: 'Items', href: '/items', parent: '/' },
}
```

---

## Ví dụ 2: CVA Component — StatusBadge

```typescript
// src/components/ui/status-badge.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const statusBadgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-micro font-[510]',
  {
    variants: {
      status: {
        success: 'bg-status-emerald/10 text-status-emerald',
        error: 'bg-destructive/10 text-destructive',
        pending: 'bg-amber-500/10 text-amber-400',
        inactive: 'bg-secondary text-muted-foreground',
      },
    },
    defaultVariants: { status: 'inactive' },
  }
)

const dotColors: Record<string, string> = {
  success: 'bg-status-emerald',
  error: 'bg-destructive',
  pending: 'bg-amber-400 animate-pulse',
  inactive: 'bg-muted-foreground',
}

interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  showDot?: boolean
}

export function StatusBadge({ status, showDot = true, className, children, ...props }: StatusBadgeProps) {
  return (
    <span className={cn(statusBadgeVariants({ status }), className)} {...props}>
      {showDot && (
        <span className={cn('h-1.5 w-1.5 rounded-full', dotColors[status ?? 'inactive'])} />
      )}
      {children}
    </span>
  )
}

// Dùng:
<StatusBadge status="success">Active</StatusBadge>
<StatusBadge status="pending" showDot>Crawling...</StatusBadge>
<StatusBadge status="error">Failed</StatusBadge>
```

---

## Ví dụ 3: framer-motion Card List

```typescript
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedListProps<T> {
  items: T[]
  keyFn: (item: T) => string
  renderItem: (item: T) => React.ReactNode
  className?: string
}

export function AnimatedList<T>({ items, keyFn, renderItem, className }: AnimatedListProps<T>) {
  return (
    <motion.ul
      className={cn('space-y-2', className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.li
            key={keyFn(item)}
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: { opacity: 1, y: 0 },
            }}
            exit={{ opacity: 0, x: -20, transition: { duration: 0.15 } }}
            layout
          >
            {renderItem(item)}
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  )
}

// Dùng:
<AnimatedList
  items={feeds}
  keyFn={(feed) => feed.id}
  renderItem={(feed) => <FeedCard feed={feed} />}
/>
```
