# Performance Optimization

React 19 + Next.js 16 performance patterns với React Compiler enabled.

---

## React Compiler — tự động optimize

```typescript
// next.config.mjs — đã bật:
// experimental: { reactCompiler: true }

// React Compiler tự động memo hóa:
// - Component renders
// - Computed values
// - Event handlers

// Điều này có nghĩa là:
// ✅ Bạn KHÔNG cần wrap mọi thứ với useMemo/useCallback
// ✅ Chỉ dùng khi có lý do cụ thể (ví dụ: expensive computation thật sự)
```

---

## useCallback — khi nào cần

```typescript
// ✅ CẦN useCallback khi:
// 1. Handler được pass xuống child component (tránh re-render)
// 2. Handler dùng làm dependency của useEffect
// 3. Handler trong list rendering (mỗi item)

function ParentComponent() {
  // ✅ Pass xuống child — cần useCallback
  const handleItemClick = useCallback((id: string) => {
    setSelected(id)
  }, []) // stable reference

  return <ItemList onItemClick={handleItemClick} />
}

// ❌ KHÔNG cần useCallback khi:
// Handler chỉ dùng trong component này, không pass xuống đâu
function SimpleComponent() {
  // Với React Compiler, này không cần useCallback
  const handleClick = () => {
    setCount((c) => c + 1)
  }
  return <button onClick={handleClick}>Click</button>
}
```

---

## useMemo — khi nào cần

```typescript
// ✅ CẦN useMemo cho:
// 1. Expensive computation (filter/sort/transform lớn)
// 2. Object/array được dùng làm dependency
// 3. Value pass xuống context

function DataTable({ data }: { data: BoardConfig[] }) {
  // ✅ Expensive sort + filter
  const processedData = useMemo(() => {
    return data
      .filter((board) => board.auto_crawl_enabled)
      .sort((a, b) => b.position - a.position)
      .map((board) => ({ ...board, label: `${board.title} (${board.type})` }))
  }, [data])

  return <Table rows={processedData} />
}

// ❌ KHÔNG cần useMemo cho:
const doubled = useMemo(() => count * 2, [count]) // quá simple, React Compiler xử lý
```

---

## next/image — Optimize Images

```typescript
import Image from 'next/image'

// ✅ Luôn dùng next/image thay vì <img>
<Image
  src="/logo.png"
  alt="Logo"
  width={48}
  height={48}
  priority  // thêm cho above-the-fold images
/>

// ✅ Remote images — khai báo trong next.config.mjs
// images: { remotePatterns: [...] }
```

---

## next/dynamic — Lazy Loading

```typescript
import dynamic from 'next/dynamic'

// ✅ Lazy load heavy components
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <Skeleton className="h-64 w-full" />,
  ssr: false, // nếu dùng browser APIs
})

// Dùng như bình thường
function DashboardPage() {
  return <HeavyChart data={data} />
}
```

---

## TanStack Query Cache — tránh fetch dư thừa

```typescript
// QueryClient config (đã setup):
// staleTime: 120_000 — data fresh 2 phút, không re-fetch
// gcTime: 300_000 — cache giữ 5 phút sau unmount

// ✅ Khi cần data từ cache ngay lập tức
function useOptimisticDelete() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteBoard,
    onMutate: async (boardId) => {
      // Cancel in-flight queries
      await queryClient.cancelQueries({ queryKey: queryKeys.leaderboard.boards() })

      // Snapshot current data
      const previous = queryClient.getQueryData(queryKeys.leaderboard.boards())

      // Optimistic update
      queryClient.setQueryData(
        queryKeys.leaderboard.boards(),
        (old: BoardConfig[] | undefined) => old?.filter((b) => b.id !== boardId)
      )

      return { previous }
    },
    onError: (_, __, context) => {
      // Rollback on error
      queryClient.setQueryData(queryKeys.leaderboard.boards(), context?.previous)
    },
    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.leaderboard.boards() })
    },
  })
}
```

---

## List Rendering — keys và virtualization

```typescript
// ✅ Stable keys — dùng ID, không dùng index
{items.map((item) => (
  <BoardCard key={item.id} board={item} />
))}

// ❌ Index keys gây re-render issues khi list thay đổi
{items.map((item, index) => (
  <BoardCard key={index} board={item} />
))}
```

---

## Memory Leak Prevention

```typescript
// ✅ Cleanup trong useEffect
useEffect(() => {
  const controller = new AbortController()

  fetch('/api/data', { signal: controller.signal })
    .then(/* ... */)
    .catch((err) => {
      if (err.name !== 'AbortError') {
        showErrorToast('Fetch failed')
      }
    })

  return () => controller.abort() // cleanup
}, [])

// ✅ Cleanup interval/timeout
useEffect(() => {
  const id = setInterval(() => poll(), 30_000)
  return () => clearInterval(id)
}, [])
```

---

## Turbopack — Fast Dev Server

```typescript
// next.config.mjs — đã bật Turbopack cho dev:
// turbopack: { ... }

// Package imports đã optimized:
// optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion']

// Không cần làm gì thêm — tự động fast refresh
```

---

## Bundle Size — import patterns

```typescript
// ✅ Named import từ lucide-react (tree-shaken với optimizePackageImports)
import { Settings, ChevronRight, X } from 'lucide-react'

// ✅ Named import từ framer-motion
import { motion, AnimatePresence } from 'framer-motion'

// ❌ Default import toàn bộ library
import * as Icons from 'lucide-react'
```

---

## React 19 — Không cần forwardRef

```typescript
// React 19 — ref có thể là prop thông thường
// KHÔNG cần forwardRef nữa

// ✅ React 19 style
function Input({ ref, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { ref?: React.Ref<HTMLInputElement> }) {
  return <input ref={ref} {...props} />
}

// (Các component trong ui/ đã dùng pattern này)
```
