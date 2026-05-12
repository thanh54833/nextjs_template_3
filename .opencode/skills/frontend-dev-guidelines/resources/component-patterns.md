# Component Patterns

Modern React component architecture cho Next.js 16 App Router project.

---

## Server vs Client Components

### Quy tắc cốt lõi

```
Mặc định: Server Component (không có 'use client')
Chỉ thêm 'use client' khi component cần:
  - useState / useReducer
  - useEffect / useCallback / useMemo
  - Event handlers (onClick, onChange, onSubmit)
  - Browser APIs (localStorage, window, document)
  - TanStack Query hooks (useQuery, useMutation)
  - Custom hooks có 'use client' ở trên

'use client' trong query hooks (src/hooks/queries/):
  - CÓ: khi hook dùng useMutation + queryClient (rss.ts, providers.ts, leaderboard.ts)
  - KHÔNG CÓ: hook chỉ gọi useQuery bằng lib API functions (chat.ts, playground.ts)
    → Vẫn hoạt động vì được import từ Client Components có 'use client'
  → Khuyến nghị: thêm 'use client' cho nhất quán, nhưng không bắt buộc
```

### Server Component — page.tsx pattern

```typescript
// src/app/prompts/page.tsx — Server Component, KHÔNG 'use client'
import { Sidebar } from '@/components/Sidebar'
import { AppShellHeader } from '@/components/AppShellHeader'
import { PromptsView } from '@/components/PromptsView'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompts | Concung Ops',
}

export default function PromptsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppShellHeader />
        <main className="flex-1 overflow-y-auto">
          <PromptsView />
        </main>
      </div>
    </div>
  )
}
```

### Client Component — *View.tsx pattern

```typescript
// src/components/PromptsView.tsx — Client Component
'use client'

import { useState, useCallback } from 'react'
import { PageLayout } from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { usePrompts } from '@/hooks/queries/prompts'
import { showSuccessToast } from '@/lib/toast'
import { ROUTES } from '@/lib/routeConfig'

const BREADCRUMBS = [{ label: 'Home', href: '/' }, { label: 'Prompts' }]

export function PromptsView() {
  const { data: prompts, isLoading, error } = usePrompts()
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = useCallback((id: string) => {
    setSelected(id)
  }, [])

  if (isLoading) {
    return (
      <PageLayout title="Prompts">
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      </PageLayout>
    )
  }

  if (error) {
    return (
      <PageLayout title="Prompts">
        <p className="text-red-400">Không thể tải prompts. Vui lòng thử lại.</p>
      </PageLayout>
    )
  }

  return (
    <PageLayout title="Prompts" description="Quản lý prompt library" breadcrumbItems={BREADCRUMBS}>
      <div className="space-y-2">
        {prompts?.map((prompt) => (
          <div
            key={prompt.id}
            className={cn(
              'cursor-pointer rounded-lg border border-border p-4 transition-colors hover:bg-secondary',
              selected === prompt.id && 'border-primary/50 bg-secondary',
            )}
            onClick={() => handleSelect(prompt.id)}
          >
            <h3 className="font-[510] text-foreground">{prompt.title}</h3>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
```

---

## UI Component (ui/ primitives)

### CVA + cn() pattern

```typescript
// Ví dụ dưới đây là NEW component — không phải badge.tsx có sẵn
// Badge thực tế tại src/components/ui/badge.tsx có variants:
// default | brand | accent | subtle | success | status | secondary | destructive | outline
// Font: font-[510] (KHÔNG font-medium hay font-semibold)
// Dùng semantic tokens, KHÔNG hardcode zinc/emerald/violet

// Tạo component mới — pattern CVA:
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const tagVariants = cva(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[510]',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-secondary-foreground border border-border',
        brand:   'bg-primary text-primary-foreground',
        success: 'bg-status-emerald/10 text-status-emerald',
        danger:  'bg-destructive/10 text-destructive',
        muted:   'bg-muted text-muted-foreground',
      },
    },
    defaultVariants: { variant: 'default' },
  }
)

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

export function Tag({ className, variant, ...props }: TagProps) {
  return <span className={cn(tagVariants({ variant }), className)} {...props} />
}
```

---

## PageLayout Component

```typescript
// Sử dụng PageLayout — wrapper chuẩn cho tất cả view
import PageLayout from '@/components/PageLayout'
import type { BreadcrumbItem } from '@/components/Breadcrumb'

// Props thực tế (ALL required trừ tabs/action):
interface PageLayoutProps {
  title: string                              // required
  description: string                        // required (không có ?)
  breadcrumbItems: BreadcrumbItem[]          // required — KHÔNG phải "breadcrumbs"
  tabs?: TabItem[]                           // optional tab navigation
  activeTab?: string                         // required khi có tabs
  onTabChange?: (tabId: string) => void      // required khi có tabs
  action?: React.ReactNode                   // optional CTA
  children: React.ReactNode
}

// Không có tabs:
<PageLayout
  title="Leaderboard"
  description="Track AI tool rankings"
  breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Leaderboard' }]}
  action={<Button onClick={handleCreate}>Thêm board</Button>}
>
  {/* content */}
</PageLayout>

// Có tabs:
const [activeTab, setActiveTab] = useState('overview')
<PageLayout
  title="Leaderboard"
  description="Track AI tool rankings"
  breadcrumbItems={breadcrumbs}
  tabs={[{ id: 'overview', label: 'Overview' }, { id: 'settings', label: 'Settings' }]}
  activeTab={activeTab}
  onTabChange={setActiveTab}
>
  {/* content */}
</PageLayout>
```

> **Lưu ý:** `useBreadcrumb` hook tồn tại tại `src/hooks/useBreadcrumb.ts` để tự động generate breadcrumbs từ route.

---

## Loading State Pattern

Ba cấp độ loading components — chọn đúng level:

```typescript
// 1. LoadingSkeleton — cho grid layout (phổ biến nhất)
import { LoadingSkeleton } from '@/components/ui/loading-state'
if (isLoading) return <LoadingSkeleton count={6} />  // 3-col responsive grid

// 2. SkeletonCard — individual card skeleton (dùng trong custom grids)
import { SkeletonCard } from '@/components/ui/loading-state'
if (isLoading) return (
  <div className="grid grid-cols-3 gap-3">
    {Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
  </div>
)

// 3. LoadingState — centered spinner + message (cho non-grid views)
import { LoadingState } from '@/components/ui/loading-state'
if (isLoading) return <LoadingState message="Đang tải feeds..." />

// 4. Skeleton — low-level primitive (cho custom shapes)
import { Skeleton } from '@/components/ui/skeleton'
if (isLoading) return (
  <div className="space-y-3 p-6">
    <Skeleton className="h-8 w-1/3" />
    <Skeleton className="h-4 w-full" />
  </div>
)

// 5. Route-level: src/app/{route}/loading.tsx
// → Next.js tự động render khi navigate, không cần isLoading check
```

**Quy tắc chọn:**
- Grid cards → `LoadingSkeleton`
- Single card → `SkeletonCard`
- List/panel view → `LoadingState`
- Custom shape → `Skeleton` primitive

---

## framer-motion Animation Pattern

```typescript
import { motion } from 'framer-motion'

// Fade in on mount
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
  className="rounded-lg bg-zinc-900 p-4"
>
  {content}
</motion.div>

// Stagger children
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
}

<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.li key={item.id} variants={item}>
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

---

## Component TypeScript Pattern

```typescript
// Named interface cho props — KHÔNG dùng type inline
interface CardProps {
  title: string
  description?: string
  className?: string
  onClick?: () => void
}

// Explicit return type
export function Card({ title, description, className, onClick }: CardProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card p-4',
        onClick && 'cursor-pointer hover:bg-secondary transition-colors',
        className,
      )}
      onClick={onClick}
    >
      <h3 className="font-[510] text-foreground">{title}</h3>
      {description && <p className="mt-1 text-muted-foreground text-sm">{description}</p>}
    </div>
  )
}
```

---

## cn() utility

```typescript
// src/lib/utils.ts — đã có sẵn
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Cách dùng — merge conditional classes
<div className={cn(
  'base-class other-class',
  isActive && 'active-class',
  variant === 'primary' && 'primary-class',
  className, // cho phép override từ parent
)} />
```
