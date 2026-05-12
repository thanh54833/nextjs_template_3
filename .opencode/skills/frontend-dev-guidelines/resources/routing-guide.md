# Routing Guide

Next.js 16 App Router — folder-based routing với Server Components.

---

## Cấu trúc App Router

```
src/app/
├── layout.tsx           # Root layout
├── page.tsx             # / (home)
├── loading.tsx          # Root loading (hiển thị khi navigate)
├── error.tsx            # Global error boundary
├── not-found.tsx        # 404 page
├── prompts/
│   ├── page.tsx         # /prompts
│   ├── loading.tsx      # /prompts loading state
│   └── playground/
│       └── page.tsx     # /prompts/playground
├── leaderboard/
│   └── page.tsx         # /leaderboard
└── settings/
    └── page.tsx         # /settings
```

---

## Page Component — Server Component

```typescript
// src/app/leaderboard/page.tsx
import { LeaderboardView } from '@/components/LeaderboardView'
import type { Metadata } from 'next'

// Server-side metadata
export const metadata: Metadata = {
  title: 'Leaderboard | Concung Ops',
  description: 'AI tool rankings and metrics',
}

// Server Component — KHÔNG có 'use client', KHÔNG có hooks
export default function LeaderboardPage() {
  return <LeaderboardView />
}
```

---

## Loading State — loading.tsx

```typescript
// src/app/leaderboard/loading.tsx
// Next.js tự động render khi navigate đến /leaderboard
'use client'

import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="p-6 space-y-4">
      <Skeleton className="h-8 w-1/3" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-xl" />
        ))}
      </div>
    </div>
  )
}
```

---

## Error Boundary — error.tsx

```typescript
// src/app/leaderboard/error.tsx
// PHẢI có 'use client' — error boundaries là client components
'use client'

import { useEffect } from 'react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('[LeaderboardError]', error)
  }, [error])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
      <h2 className="font-semibold text-foreground text-xl">Đã xảy ra lỗi</h2>
      <p className="text-muted-foreground text-sm">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-violet-600 px-4 py-2 text-sm text-white hover:bg-violet-700"
      >
        Thử lại
      </button>
    </div>
  )
}
```

---

## Layout — layout.tsx

```typescript
// src/app/(main)/layout.tsx — shared layout cho multiple routes
import { Sidebar } from '@/components/Navigation'
import { AppShellHeader } from '@/components/AppShellHeader'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppShellHeader />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
```

---

## ROUTES — Centralized Route Config

```typescript
// src/lib/routeConfig.ts — LUÔN dùng ROUTES thay vì hardcode string
import { ROUTES } from '@/lib/routeConfig'

// Trong component
<Link href={ROUTES.LEADERBOARD.href}>Leaderboard</Link>
<Link href={ROUTES.PROMPTS.href}>Prompts</Link>

// Thêm route mới — chỉnh sửa routeConfig.ts
export const ROUTES = {
  MY_NEW_ROUTE: {
    label: 'My New Route',
    href: '/my-new-route',
    parent: '/',  // cho breadcrumb generation
  },
}
```

---

## Breadcrumbs

```typescript
// src/hooks/useBreadcrumb.ts — auto-generate từ pathname + ROUTES
import { useBreadcrumb } from '@/hooks/useBreadcrumb'

// Trong component
const breadcrumbs = useBreadcrumb()
// Returns: [{ label: 'Home', href: '/' }, { label: 'Leaderboard', href: '/leaderboard' }]

// Trong PageLayout — truyền breadcrumbs
<PageLayout
  title="Leaderboard"
  breadcrumbs={breadcrumbs}
>
```

---

## Navigation với next/link và useRouter

```typescript
'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/lib/routeConfig'

// ✅ Declarative navigation — dùng Link
<Link
  href={ROUTES.PROMPTS.href}
  className="text-muted-foreground hover:text-foreground transition-colors"
>
  Prompts
</Link>

// ✅ Programmatic navigation — useRouter
function MyComponent() {
  const router = useRouter()

  const handleSubmit = async () => {
    await saveData()
    router.push(ROUTES.LEADERBOARD.href)
  }
}
```

---

## Route Groups

```typescript
// Dùng route groups (folder trong ngoặc) để tổ chức mà không ảnh hưởng URL
src/app/
├── (public)/           # Routes không cần auth
│   ├── login/
│   └── register/
└── (protected)/        # Routes cần auth (check trong middleware.ts)
    ├── prompts/
    └── leaderboard/
```

---

## Middleware — Auth Check

```typescript
// src/middleware.ts — đã setup, KHÔNG cần sửa thường xuyên
// JWT verify với jose
// protectedRoutes — thêm vào đây nếu có route cần protect mới

const protectedRoutes = [
  '/prompts',
  '/leaderboard',
  '/settings',
  // thêm route mới ở đây nếu cần auth
]

// Dev: tự bootstrap token từ GET /api/v1/auth/dev-token (NODE_ENV=development)
```

---

## Search Params và Dynamic Routes

```typescript
// Dynamic route segment
// src/app/prompts/[id]/page.tsx

interface PageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function PromptPage({ params, searchParams }: PageProps) {
  const { id } = params
  // NOTE: Dynamic params từ Server Component
  // Phải pass xuống Client Component nếu cần
  return <PromptDetailView promptId={id} />
}

// Trong Client Component
'use client'
interface PromptDetailViewProps {
  promptId: string
}
export function PromptDetailView({ promptId }: PromptDetailViewProps) {
  const { data } = usePromptContent(promptId)
  // ...
}
```

---

## NOT dùng trong project này

```typescript
// ❌ TanStack Router
import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/prompts/')({ ... })

// ❌ Pages Router
export async function getServerSideProps() { ... }
export async function getStaticProps() { ... }

// ❌ React Router
import { BrowserRouter, Route } from 'react-router-dom'
```
