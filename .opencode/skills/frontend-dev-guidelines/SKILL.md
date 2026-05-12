---
name: frontend-dev-guidelines
description: Frontend development + design guidelines cho Next.js 16 App Router + React 19 + Tailwind CSS v4 + TanStack Query v5 + Sonner. Dùng khi tạo component, page, fetching data, routing, styling, form, auth, redesign UI, improve design, fix hover/active states, hoặc bất kỳ công việc frontend nào trong project này.
---

# Frontend Development Guidelines

## Stack thực tế của project

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.1 (App Router) |
| UI | React 19.2.0 |
| Language | TypeScript strict mode |
| Styling | Tailwind CSS v4 + CVA + `cn()` |
| UI Components | shadcn-style: `src/components/ui/` |
| State/Data | TanStack Query v5 (`useQuery`, `useMutation`) |
| Toast | Sonner via `@/lib/toast` helpers |
| Package Manager | **bun** (không dùng npm/yarn) |
| Linter | **Biome** (không dùng ESLint/Prettier) |
| HTTP | Native `fetch()` (không dùng axios) |
| Animation | framer-motion |
| Icons | lucide-react + react-icons |

---

## 🎨 UI Design Thinking — Trước khi code bất kỳ UI nào

> **Đây là project với design system chuẩn (Linear-inspired). Mọi UI phải cohesive, intentional, production-grade — không phải generic.**

Trước khi viết một dòng code UI, hỏi:

1. **Purpose**: Component này giải quyết vấn đề gì? User tương tác như thế nào?
2. **Hierarchy**: Thông tin nào quan trọng nhất? Dùng font weight + color để guide attention
3. **State**: Empty, loading, error, selected, hover — tất cả states phải đẹp
4. **Consistency**: Có component tương tự trong codebase không? Reuse pattern, đừng invent mới
5. **Density**: Compact hay spacious? Match context (sidebar=dense, dialog=spacious)

**CRITICAL — Không chấp nhận:**
- Generic "AI aesthetics" — blue buttons, gray cards, Inter font, purple gradients
- Thiếu hover/focus states
- Inconsistent spacing (dùng gap scale: 1, 1.5, 2, 2.5, 3, 4, 6)
- Icon weight không match text weight (dùng `strokeWidth="2"` cho icons)
- Font-bold (700) — dùng font-[510] hoặc font-[590] tối đa
- Active state không phân biệt rõ với inactive
- Hardcode hex color — dùng CSS variables + oklch

---

## ⚠️ Bước bắt buộc trước khi code

> **SKILL.md = overview + quick-reference. Critical patterns (auth headers, getAuthHeaders, forwardRef, compound components, query invalidation traps) chỉ có trong resource files.**
> **Trước khi viết bất kỳ code nào, đọc resource tương ứng với task hiện tại:**

| Task | Đọc resource này TRƯỚC |
|------|------------------------|
| Tạo component (forwardRef, memo, compound) | `resources/component-patterns.md` |
| **Design UI** (typography, card, spacing, layout, icons) | **`resources/ui-design-guidelines.md`** |
| Fetch data, auth headers, query hooks | `resources/data-fetching.md` |
| Tổ chức file, naming conventions | `resources/file-organization.md` |
| Styling Tailwind, CVA, dark mode | `resources/styling-guide.md` |
| Routing, layouts, middleware | `resources/routing-guide.md` |
| Loading skeleton, error boundary | `resources/loading-and-error-states.md` |
| Performance, memo, lazy | `resources/performance.md` |
| TypeScript strict, discriminated unions | `resources/typescript-standards.md` |
| Form, auth flow, modal, optimistic update | `resources/common-patterns.md` |
| Feature hoàn chỉnh end-to-end | `resources/complete-examples.md` |
| Unit testing (Vitest, RTL, MSW, mocking) | `resources/testing-guide.md` |

**Nếu task cross-cutting** (e.g., tạo feature mới): đọc cả `component-patterns.md` + `data-fetching.md` + `routing-guide.md`.

---

## Quick Start — Checklist

### Tạo Component mới

- [ ] Server Component mặc định — chỉ thêm `'use client'` khi cần state/effect/event handler
- [ ] Dùng Tailwind CSS + `cn()` cho styling
- [ ] Import từ `src/components/ui/` cho các UI primitives
- [ ] Dùng `useQuery` (TanStack Query v5) cho data fetching trong client components
- [ ] Dùng `@/lib/toast` helpers cho user notifications (KHÔNG dùng sonner trực tiếp)
- [ ] Path alias: chỉ `@/*` → `src/*` (KHÔNG có ~types, ~features, ~components)
- [ ] Đặt handlers trong `useCallback` khi pass xuống child

### Tạo Feature/Page mới

- [ ] Tạo `src/app/{route}/page.tsx` — Server Component
- [ ] Tạo `src/app/{route}/loading.tsx` — loading skeleton (framer-motion)
- [ ] Tạo `src/app/{route}/error.tsx` — `'use client'` error boundary
- [ ] View component: `src/components/{Feature}View.tsx` — `'use client'`
- [ ] Query hooks: `src/hooks/queries/{feature}.ts` — `'use client'`
- [ ] Thêm route vào `src/lib/routeConfig.ts` (ROUTES constant)
- [ ] Thêm queryKeys vào `src/lib/queryKeys.ts`
- [ ] Dùng `useBreadcrumb` hook nếu cần breadcrumbs
- [ ] Viết unit tests: `apps/frontend/tests/unit/{feature}/` — xem `resources/testing-guide.md`

### Design Quality Gate — trước khi PR

- [ ] Hover, focus, active states đều visible và intentional
- [ ] Loading/empty/error states được thiết kế (không bỏ trống)
- [ ] Font weights: chỉ 300/400/450/510/590 — KHÔNG 700
- [ ] Colors: chỉ dùng CSS variables (`text-foreground`, `bg-card`...) — KHÔNG hardcode hex
- [ ] Active states dùng `bg-primary-subtle` + `text-primary` — KHÔNG `bg-primary` trực tiếp
- [ ] Icons `strokeWidth="2"` — consistent với typography weight
- [ ] Inactive nav items có `border-l-2 border-transparent` để tránh layout shift
- [ ] Dark mode tested (toggle và verify không bị vỡ)
- [ ] Responsive: mobile + desktop đều acceptable

---

## Core Principles (7 Rules)

### 1. Server Components by Default

```typescript
// ✅ page.tsx — Server Component, không cần 'use client'
import { PromptsView } from '@/components/PromptsView'
import { AppShellHeader } from '@/components/AppShellHeader'

export default function PromptsPage() {
  return (
    <>
      <AppShellHeader />
      <PromptsView />
    </>
  )
}

// ✅ Chỉ dùng 'use client' khi THỰC SỰ cần
'use client'
import { useState, useCallback } from 'react'
```

### 2. Tailwind CSS + CVA cho Styling

```typescript
// ❌ KHÔNG — MUI, inline style object, styled-components
import { Box, Paper } from '@mui/material'

// ✅ ĐÚNG — Tailwind + cn()
import { cn } from '@/lib/utils'
<div className={cn('rounded-lg bg-zinc-900 p-4', isActive && 'ring-2 ring-emerald-400')} />
```

### 3. useQuery cho Data Fetching (KHÔNG useSuspenseQuery)

```typescript
// ✅ Pattern chuẩn trong project
const { data, isLoading, error } = useQuery({
  queryKey: queryKeys.leaderboard.boards(),
  queryFn: async () => {
    const res = await fetch(`${API_BASE}/boards`)
    if (!res.ok) throw new Error('Failed to fetch')
    return res.json() as Promise<BoardConfig[]>
  },
})
```

### 4. Sonner Toast qua @/lib/toast (KHÔNG gọi toast trực tiếp)

```typescript
// ❌ KHÔNG
import { toast } from 'sonner'
toast.success('Done')

// ✅ ĐÚNG
import { showSuccessToast, showErrorToast, handleClientError } from '@/lib/toast'
showSuccessToast('Saved successfully')
showErrorToast('Something went wrong')
// Trong onError của useMutation:
onError: handleClientError,
```

### 5. Path Alias: chỉ @/*

```typescript
// ✅ ĐÚNG — chỉ @/*
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { queryKeys } from '@/lib/queryKeys'
import { ROUTES } from '@/lib/routeConfig'

// ❌ SAI — không có ~types, ~features, ~components
import type { User } from '~types/user'
import { authApi } from '~features/auth'
```

### 6. Query Hooks trong src/hooks/queries/

```typescript
// ✅ File: src/hooks/queries/leaderboard.ts
// 'use client' — thêm khi hook có useMutation; optional cho pure useQuery hooks
'use client'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@/lib/queryKeys'
import { handleClientError } from '@/lib/toast'

export function useLeaderboardBoards() {
  return useQuery({
    queryKey: queryKeys.leaderboard.boards(),
    queryFn: async () => { /* ... */ },
  })
}
```

> **`'use client'` trong query hooks:** bắt buộc khi hook dùng `useMutation`/`useQueryClient`; optional (nhưng khuyến nghị) cho hook chỉ dùng `useQuery` và luôn được import từ Client Components.

### 7. Mutations — chọn pattern phù hợp

```typescript
// ✅ Pattern phổ biến nhất — useMutation + onError: handleClientError
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { handleClientError } from '@/lib/toast'

const { mutate } = useMutation({
  mutationFn: async (data: CreatePayload) => {
    const res = await fetch('/api/...', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error('Failed')
    return res.json()
  },
  onSuccess: () => void queryClient.invalidateQueries({ queryKey: queryKeys.xxx.list() }),
  onError: handleClientError,
})

// ✅ useSafeMutation — khi muốn bỏ qua khai báo onError
import { useSafeMutation } from '@/hooks/useSafeMutation'

const { mutate } = useSafeMutation(
  async (data: CreatePayload) => { /* fetch... */ },
  { onSuccess: () => void queryClient.invalidateQueries({ queryKey: queryKeys.xxx.list() }) }
)
```

---

## Design System

> **Đọc `resources/ui-design-guidelines.md` để biết đầy đủ typography, card variants, spacing, color tokens, và layout patterns.**

### Key tokens (quick reference)

| Token class | CSS Variable | Dùng cho |
|-------------|-------------|---------|
| `text-foreground` | `--color-foreground` | Primary text |
| `text-muted-foreground` | `--color-muted-foreground` | Inactive nav, secondary text |
| `text-text-quaternary` | `--color-text-quaternary` | Section labels, timestamps |
| `text-primary` | `--color-primary` | Active item text, brand links, icons |
| `bg-card` | `--color-card` | Cards, sidebar item hover bg |
| `bg-secondary` | `--color-secondary` | Active item bg (deeper gray) |
| `bg-primary` | `--color-primary` | CTA buttons ONLY |
| `bg-primary-subtle` | `--color-primary-subtle` | Selected/active item backgrounds |
| `border-border` | `--color-border` | Standard borders, dividers |
| `border-primary-subtle` | `--color-primary-subtle-border` | Active borders, avatar rings |
| `ring-primary-subtle` | `--color-primary-subtle-border` | Focus rings on active elements |
| `bg-accent` | `--color-accent` | Accent Violet — focus indicators |
| `bg-status-emerald` | `--color-status-emerald` | Success/completion |

### Font weights — NO font-bold

```
font-[450]  — slightly medium (inactive nav items)
font-[510]  — medium (default emphasis)
font-[590]  — semibold (max, strong emphasis — logo, headings)
❌ font-bold / font-semibold (700) NGHIÊM CẤM
```

---

## Brand Color Usage — Active/Selected States

### Token hierarchy (quan trọng)
```
--color-primary            → full brand (buttons, active text, icons)
  ↓ 12% opacity (light) / 10% (dark)
--color-primary-subtle     → selected/active backgrounds
  ↓ 20% opacity
--color-primary-subtle-border → active borders, rings, outlines
```

### Pattern bắt buộc cho active/selected items

```tsx
// ✅ Sidebar nav, list items, presets — dùng pattern này
className={isActive
  ? 'bg-primary-subtle font-[510] text-primary border-l-2 border-primary-subtle'
  : 'font-[450] text-muted-foreground border-l-2 border-transparent hover:bg-card hover:text-foreground'
}

// ✅ Icon phải cùng màu text
<span className={isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}>
  <Icon />
</span>

// ✅ Avatar / badge với brand subtle
<div className="bg-primary-subtle text-primary ring-1 ring-primary-subtle">
  {initials}
</div>
```

### `bg-primary-subtle` vs `bg-primary/10` — chọn đúng
| Trường hợp | Dùng | Lý do |
|-----------|------|-------|
| Tailwind component class | `bg-primary-subtle` | Tunable per light/dark (12% vs 10%) |
| Inline `style={{ }}` prop | `var(--color-primary-subtle)` | CSS variable works in style prop |
| Inline `color-mix()` | ❌ Cấm | Dùng CSS variable thay |
| `bg-primary/10` | Tránh nếu dùng > 1 chỗ | Không nhất quán giữa modes |

### Anti-Patterns Brand Color

```tsx
// ❌ bg-primary trực tiếp cho selected bg (quá đậm)
isActive ? 'bg-primary text-white' : ''

// ❌ Hardcode hex brand
style={{ color: '#5e6ad2' }}

// ❌ Inline color-mix (dùng var() thay)
style={{ background: 'color-mix(in oklch, var(--color-primary) 10%, transparent)' }}

// ❌ Quên border-transparent → layout shift 2px
isActive ? 'border-l-2 border-primary-subtle' : ''  // ← thiếu border-transparent inactive

// ❌ Icon không đổi màu khi hover
<span className="text-muted-foreground group-hover:text-muted-foreground">
```

### Card component

```typescript
import { Card } from '@/components/ui/card'
// variants: surface (default) | elevated | featured | accent
// padding: sm | md (default) | lg | none
// interactive: boolean
<Card variant="elevated" padding="lg" interactive>
```

### Design System Reference

File: `src/app/design-system/page.tsx` — Visual showcase các component/token có sẵn

---

## Common Imports

```typescript
// React
import { useState, useCallback, useMemo, useEffect } from 'react'

// TanStack Query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// UI Components (shadcn-style)
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog } from '@/components/ui/dialog'
import { Skeleton } from '@/components/ui/skeleton'

// Styling utilities
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

// Toast
import { showSuccessToast, showErrorToast, handleClientError } from '@/lib/toast'

// Auth
import { useAuth, useLogin, useLogout } from '@/hooks/useAuth'

// Query Keys
import { queryKeys } from '@/lib/queryKeys'

// Routes
import { ROUTES } from '@/lib/routeConfig'

// Environment
import { publicEnv } from '@/lib/env'

// Animation
import { motion } from 'framer-motion'

// Next.js
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { Metadata } from 'next'
```

---

## Anti-Patterns — TUYỆT ĐỐI KHÔNG làm

| ❌ Sai | ✅ Đúng |
|--------|---------|
| `import { Box } from '@mui/material'` | Dùng Tailwind CSS |
| `import { toast } from 'sonner'` trực tiếp | `import { showSuccessToast } from '@/lib/toast'` (toast.ts re-export `toast` nên `import { toast } from '@/lib/toast'` vẫn OK) |
| `useSuspenseQuery` | `useQuery` |
| `import ... from '~features/...'` | `import ... from '@/...'` |
| `axios.get(...)` | Native `fetch()` |
| Pages Router `getServerSideProps` | App Router Server Components |
| `npm install` / `yarn add` | `bun add` |
| `eslint` config | Biome config |
| Global state (Redux, Zustand) | TanStack Query cho server state |
| Inline `process.env` | `publicEnv` từ `@/lib/env` |
| Hardcode queryKey strings trong component | `queryKeys.xxx.list()` từ `@/lib/queryKeys` |
| `import fetchApi from '@/lib/api'` (không export) | Import hàm cụ thể: `import { getGreeting } from '@/lib/api'` |
| `import fetchAuthed from '@/lib/api'` không truyền `getToken` | `fetchAuthed<T>(url, getTokenFn)` — bắt buộc truyền token getter |

---

**Skill Status**: Reflects actual Next.js 16 + Tailwind CSS v4 + Sonner + TanStack Query v5 project
