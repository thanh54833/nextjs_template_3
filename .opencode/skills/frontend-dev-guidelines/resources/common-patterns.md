# Common Patterns

Các pattern phổ biến: Form, Auth, Dialog, Mutation, SSE.

---

## Auth Pattern

```typescript
// Dùng hooks từ @/hooks/useAuth

'use client'
import { useAuth, useLogin, useLogout } from '@/hooks/useAuth'

function UserMenu() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const logout = useLogout()

  if (isLoading) return <Skeleton className="h-8 w-8 rounded-full" />

  if (!isAuthenticated) {
    return <SidebarLoginButton />
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-foreground text-sm">{user?.email}</span>
      <Button variant="ghost" size="sm" onClick={logout}>
        Sign out
      </Button>
    </div>
  )
}

// Login flow
function LoginForm() {
  const login = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    setIsPending(true)
    try {
      await login({ email, password })
      // redirect hoặc close modal
    } catch (err) {
      showErrorToast(err instanceof Error ? err.message : 'Đăng nhập thất bại')
    } finally {
      setIsPending(false)
    }
  }, [email, password, login])

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
      </Button>
    </form>
  )
}
```

---

## Form Pattern — Controlled State

Project dùng controlled state cho forms đơn giản, react-hook-form cho forms phức tạp.

### Controlled form (simple)

```typescript
'use client'
import { useState, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useSafeMutation } from '@/hooks/useSafeMutation'
import { showSuccessToast } from '@/lib/toast'

interface CreateBoardForm {
  title: string
  url: string
}

function CreateBoardModal({ onClose }: { onClose: () => void }) {
  const queryClient = useQueryClient()
  const [form, setForm] = useState<CreateBoardForm>({ title: '', url: '' })

  const { mutate, isPending } = useSafeMutation(
    async (data: CreateBoardForm) => {
      const res = await fetch(`${API_BASE}/boards`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed to create board')
      return res.json()
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries({ queryKey: queryKeys.leaderboard.boards() })
        showSuccessToast('Tạo board thành công!')
        onClose()
      },
    }
  )

  const handleChange = useCallback(
    (field: keyof CreateBoardForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    },
    []
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!form.title) return
      mutate(form)
    },
    [form, mutate]
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Tên board</Label>
        <Input
          id="title"
          value={form.title}
          onChange={handleChange('title')}
          placeholder="Nhập tên board..."
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="url">URL</Label>
        <Input
          id="url"
          type="url"
          value={form.url}
          onChange={handleChange('url')}
          placeholder="https://..."
        />
      </div>
      <div className="flex justify-end gap-3">
        <Button type="button" variant="ghost" onClick={onClose}>
          Hủy
        </Button>
        <Button type="submit" disabled={isPending || !form.title}>
          {isPending ? 'Đang tạo...' : 'Tạo board'}
        </Button>
      </div>
    </form>
  )
}
```

---

## Dialog Pattern

```typescript
'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

function BoardManager() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsCreateOpen(true)}>Thêm board</Button>

      <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Tạo board mới</DialogTitle>
          </DialogHeader>
          <CreateBoardModal onClose={() => setIsCreateOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
```

---

## Delete Confirmation Pattern

```typescript
'use client'
import { useState, useCallback } from 'react'

function DeleteBoardButton({ boardId, onSuccess }: { boardId: string; onSuccess: () => void }) {
  const [isConfirming, setIsConfirming] = useState(false)
  const { mutate, isPending } = useDeleteBoard()

  const handleDelete = useCallback(() => {
    mutate(boardId, {
      onSuccess: () => {
        setIsConfirming(false)
        onSuccess()
        showSuccessToast('Đã xóa board')
      },
    })
  }, [boardId, mutate, onSuccess])

  if (!isConfirming) {
    return (
      <Button variant="ghost" size="sm" onClick={() => setIsConfirming(true)}>
        Xóa
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-muted-foreground text-xs">Chắc chắn xóa?</span>
      <Button variant="destructive" size="sm" onClick={handleDelete} disabled={isPending}>
        {isPending ? '...' : 'Xóa'}
      </Button>
      <Button variant="ghost" size="sm" onClick={() => setIsConfirming(false)}>
        Hủy
      </Button>
    </div>
  )
}
```

---

## SSE Streaming Pattern

> `sse.ts` export `createSSEConnection` — callback-based API, KHÔNG phải async iterator. Không có `buildPlaygroundSSEUrl`.

```typescript
// Pattern thực tế — EventSource callbacks qua createSSEConnection
'use client'
import { useCallback, useRef, useState } from 'react'
import { createSSEConnection, type SSEConnection } from '@/lib/sse'
import { showErrorToast } from '@/lib/toast'
import { publicEnv } from '@/lib/env'

function ChatInterface() {
  const [response, setResponse] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const connectionRef = useRef<SSEConnection | null>(null)

  const handleStream = useCallback((message: string, userId: string, threadId: string, model: string) => {
    setIsStreaming(true)
    setResponse('')

    connectionRef.current = createSSEConnection({
      message,
      userId,
      threadId,
      model,
      domain: publicEnv.NEXT_PUBLIC_BE_URL,
      callbacks: {
        onStreamStart: () => {
          // optional: reset UI
        },
        onStreamToken: (token) => {
          setResponse((prev) => prev + token)
        },
        onStreamEnd: () => {
          setIsStreaming(false)
          connectionRef.current = null
        },
        onError: (err) => {
          setIsStreaming(false)
          connectionRef.current = null
          showErrorToast(err.message)
        },
      },
    })
  }, [])

  const handleStop = useCallback(() => {
    connectionRef.current?.close()
    connectionRef.current = null
    setIsStreaming(false)
  }, [])

  return (
    <div>
      {isStreaming && (
        <Button variant="ghost" size="sm" onClick={handleStop}>
          Stop
        </Button>
      )}
      <div className="whitespace-pre-wrap text-foreground text-sm">{response}</div>
    </div>
  )
}

// SSEConnection interface: { close: () => void }
// SSECallbacks: onStreamStart?, onPreAnalysis?, onStreamToken?, onEnrichResponse?, onStreamEnd?, onError?
```

---

## Environment Variables Pattern

```typescript
// ✅ LUÔN dùng publicEnv — KHÔNG dùng process.env trực tiếp trong client code
import { publicEnv } from '@/lib/env'

const API_BASE = `${publicEnv.NEXT_PUBLIC_BE_URL}/api/v1/prompts`

// publicEnv có:
// - NEXT_PUBLIC_BE_URL: string       backend URL
// - NEXT_PUBLIC_APP_URL: string      frontend URL
// - NEXT_PUBLIC_HMAC_SECRET: string  playground HMAC signing

// Server-only secret — chỉ dùng trong Server Components/Actions
import { getJwtSecret } from '@/lib/env' // server-only, throws ở client
```

---

## Debounced Search Pattern

```typescript
'use client'
import { useState, useCallback, useRef } from 'react'

function SearchInput({ onSearch }: { onSearch: (q: string) => void }) {
  const [value, setValue] = useState('')
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const q = e.target.value
      setValue(q)
      clearTimeout(debounceRef.current)
      debounceRef.current = setTimeout(() => onSearch(q), 300)
    },
    [onSearch]
  )

  return (
    <Input
      value={value}
      onChange={handleChange}
      placeholder="Tìm kiếm..."
      className="w-full"
    />
  )
}
```

---

## LocalStorage Pattern

```typescript
// Dùng useSafeLocalStorage — handles SSR và storage errors
import { useSafeLocalStorage } from '@/hooks/useSafeLocalStorage'

function SettingsPanel() {
  const [theme, setTheme] = useSafeLocalStorage<'light' | 'dark'>('theme', 'dark')
  // ...
}
```

---

## Multi-Group Chip Filter Pattern

Khi có nhiều nhóm filter (OR within group, AND across groups), dùng `Record<groupId, itemId[]>`:

```typescript
'use client'
import { useState, useCallback, useMemo } from 'react'

// State: mỗi group có list các selected item IDs
const [activeChipIds, setActiveChipIds] = useState<Record<number, number[]>>({})

// Toggle một chip (add nếu chưa có, remove nếu có)
const toggleChip = useCallback((groupId: number, itemId: number) => {
  setActiveChipIds((prev) => {
    const current = prev[groupId] ?? []
    const exists = current.includes(itemId)
    const updated = exists ? current.filter((id) => id !== itemId) : [...current, itemId]
    if (updated.length === 0) {
      const { [groupId]: _, ...rest } = prev
      return rest
    }
    return { ...prev, [groupId]: updated }
  })
}, [])

// Chuyển về format API: number[][] (mỗi inner array là OR, outer array là AND)
const subcategoryItemIds = useMemo(
  () => Object.values(activeChipIds).filter((ids) => ids.length > 0),
  [activeChipIds]
)

// Reset all filters
const clearFilters = useCallback(() => setActiveChipIds({}), [])

// Check if chip is active
const isChipActive = useCallback(
  (groupId: number, itemId: number) =>
    (activeChipIds[groupId] ?? []).includes(itemId),
  [activeChipIds]
)

// Render chips
{groups.map((group) => (
  <div key={group.id}>
    <span className="text-muted-foreground text-xs">{group.name}</span>
    <div className="flex flex-wrap gap-1.5">
      {group.items.map((item) => (
        <button
          key={item.id}
          onClick={() => toggleChip(group.id, item.id)}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-[510] transition-colors',
            isChipActive(group.id, item.id)
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  </div>
))}
```

---

## Dynamic Field Interface Pattern

Khi API trả về object có fields tùy theo config (search fields thay đổi), dùng index signature:

```typescript
export interface CatalogProduct {
  // Known fields — typed explicitly
  product_search_staging_id: number
  ecom_product_name: string
  price: number
  is_selling: boolean
  // Dynamic fields — server returns extra keys based on user's search field config
  [key: string]: unknown
}

// Đọc dynamic field an toàn:
function renderField(product: CatalogProduct, fieldName: string): string {
  const value = product[fieldName]
  if (value === null || value === undefined) return '—'
  return String(value)
}
```

**Dùng khi:** API trả về object với fields thay đổi theo config, search preferences, hoặc user settings. KHÔNG dùng cho objects với shape cố định.
