# File Organization

Cấu trúc thư mục thực tế của concung_ops frontend.

---

## Cấu trúc tổng quan

```
frontend/src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Geist fonts, ThemeProvider, QueryProvider)
│   ├── page.tsx            # Home page
│   ├── loading.tsx         # Root loading UI (framer-motion skeleton)
│   ├── error.tsx           # Global error boundary
│   ├── not-found.tsx       # 404 page
│   ├── design-system/      # Design system showcase
│   ├── agents/             # AI agents management
│   ├── chat/               # Chat interface
│   ├── chatbots/           # Chatbot configuration
│   ├── commands/           # CLI commands showcase
│   ├── embedding-calculator/ # Embedding cost calculator
│   ├── hooks/              # Hooks showcase/demo
│   ├── jobs/               # Background jobs monitor
│   ├── leaderboard/        # AI tool rankings
│   ├── mcps/               # MCP servers management
│   ├── prompts/
│   │   ├── page.tsx        # Server Component
│   │   ├── loading.tsx     # Route-level loading
│   │   └── playground/
│   │       └── page.tsx    # Nested route
│   ├── rss/                # RSS feed reader
│   ├── search-engine/      # Search engine tools
│   ├── settings/           # App settings
│   ├── skills/             # Skills showcase
│   └── trending/           # Trending AI tools
│
├── components/             # Shared + Feature View components
│   ├── ui/                 # UI Primitives (shadcn-style)
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── checkbox.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── floating-label-field.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── radio.tsx
│   │   ├── select.tsx
│   │   ├── skeleton.tsx
│   │   ├── spinner.tsx
│   │   ├── textarea.tsx
│   │   ├── tooltip.tsx
│   │   └── index.ts        # Re-exports
│   ├── auth/               # Auth-specific components
│   │   ├── SidebarLoginButton.tsx
│   │   └── SidebarUser.tsx
│   ├── design-system/      # Design system sub-components
│   ├── inputs/             # Input sub-components
│   ├── leaderboard/        # Feature sub-components
│   ├── rss/                # RSS sub-components
│   ├── AppShellHeader.tsx  # Header component
│   ├── AppToaster.tsx      # Sonner toaster config
│   ├── AgentsView.tsx      # Feature "View" components
│   ├── ChatbotsView.tsx
│   ├── ChatView.tsx
│   ├── CommandsView.tsx
│   ├── EmbeddingCalcPage.tsx
│   ├── ErrorBoundary.tsx   # React error boundary
│   ├── Footer.tsx
│   ├── HomeView.tsx
│   ├── HooksView.tsx
│   ├── JobsView.tsx
│   ├── LeaderboardView.tsx
│   ├── McpsView.tsx
│   ├── Navigation.tsx      # Sidebar navigation
│   ├── PageLayout.tsx      # Shared layout wrapper
│   ├── PlaygroundChat.tsx
│   ├── PromptsView.tsx
│   ├── SearchEngineView.tsx
│   └── ...
│
├── hooks/                  # Custom hooks
│   ├── queries/            # TanStack Query hooks (per feature)
│   │   ├── catalog.ts      # Product catalog management
│   │   ├── chat.ts
│   │   ├── leaderboard.ts
│   │   ├── playground.ts
│   │   ├── prompts.ts
│   │   ├── providers.ts    # AI provider management
│   │   ├── rss.ts
│   │   └── searchEngine.ts
│   ├── useAuth.ts          # Auth hooks (useAuth, useLogin, useLogout)
│   ├── useBreadcrumb.ts    # Auto breadcrumb generation
│   ├── useSafeMutation.ts  # useMutation wrapper với error handling
│   ├── useApiCall.ts       # Generic API call hook
│   └── useSafeLocalStorage.ts
│
├── lib/                    # Utilities & configuration
│   ├── api.ts              # fetchApi (internal), fetchAuthed, BASE_URL + Chat API functions
│   ├── playground.ts       # Playground types + fetchProviders, fetchModels (lib-level API)
│   ├── playground-presets-api.ts  # PlaygroundPreset types + fetchPresets
│   ├── rssApi.ts           # RSS_API_BASE constant
│   ├── promptsApi.ts       # Prompts API functions
│   ├── queryKeys.ts        # Centralized TanStack Query keys
│   ├── routeConfig.ts      # ROUTES constant + buildBreadcrumbs()
│   ├── toast.ts            # Sonner helpers + re-exports { toast } từ sonner
│   ├── env.ts              # publicEnv, getJwtSecret(), assertProductionServerEnvironment()
│   ├── token.ts            # getAuthHeaders(), getStoredToken()
│   ├── utils.ts            # cn() utility
│   ├── sse.ts              # SSE streaming utilities
│   ├── hmac.ts             # HMAC signing for playground
│   ├── cacheStrategy.ts    # TanStack Query cache config helpers
│   └── logger.ts           # Client-side logging
│
├── providers/              # React context providers
│   ├── query-provider.tsx  # TanStack Query QueryClient
│   └── theme.tsx           # next-themes wrapper
│
├── styles/
│   └── globals.css         # Tailwind v4 @import + CSS variables (oklch tokens)
│
└── middleware.ts           # Next.js middleware (JWT auth check)
```

---

## Quy tắc đặt file

### Page vs View tách biệt

```
src/app/leaderboard/page.tsx      ← Server Component (KHÔNG có state/hooks)
src/components/LeaderboardView.tsx ← Client Component ('use client', useQuery, v.v.)
```

**Lý do:** Server Components không thể dùng client hooks. Pattern này cho phép:
- `page.tsx` xử lý metadata, server-side logic
- `*View.tsx` xử lý interactive UI

### Query hooks — 1 file per feature

```
src/hooks/queries/leaderboard.ts  ← useLeaderboardBoards, useCreateBoard, v.v.
src/hooks/queries/prompts.ts      ← usePrompts, usePromptContent, v.v.
```

Mỗi file query hook:
- Bắt đầu với `'use client'`
- Export các hook functions (KHÔNG export default)
- Khai báo types/interfaces liên quan ngay trong file
- Import `queryKeys` từ `@/lib/queryKeys`

### ui/ components — primitives only

```typescript
// ✅ Đặt vào ui/ — generic, reusable primitive
// Button, Badge, Input, Dialog, Skeleton, Spinner, etc.

// ✅ Đặt vào components/ root — feature-level reusable
// PageLayout, AppShellHeader, Navigation

// ✅ Đặt vào components/{feature}/ — feature sub-components
// components/leaderboard/BoardCard.tsx
// components/rss/ArticleCard.tsx
```

### ROUTES centralization

```typescript
// ✅ LUÔN thêm route mới vào src/lib/routeConfig.ts
// KHÔNG hardcode href strings trong component
export const ROUTES = {
  HOME: { label: 'Home', href: '/' },
  LEADERBOARD: { label: 'Leaderboard', href: '/leaderboard', parent: '/' },
  // thêm route mới vào đây
}
```

---

## Naming Conventions

| Loại | Convention | Ví dụ |
|------|-----------|-------|
| Page | `page.tsx` | `src/app/prompts/page.tsx` |
| View | `{Feature}View.tsx` | `PromptsView.tsx`, `LeaderboardView.tsx` |
| UI Component | `{name}.tsx` (lowercase) | `button.tsx`, `badge.tsx` |
| Feature Component | `{Feature}Card.tsx` | `BoardCard.tsx`, `ArticleCard.tsx` |
| Query hook | `use{Feature}{Action}.ts` | `useLeaderboardBoards`, `useCreateBoard` |
| Hook | `use{Name}.ts` | `useAuth.ts`, `useBreadcrumb.ts` |
| Utility | camelCase | `queryKeys.ts`, `routeConfig.ts` |

---

## Import Organization (Biome format)

```typescript
// Thứ tự imports — Biome tự động sort
// 1. External packages
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'

// 2. Internal — path alias @/
import { PageLayout } from '@/components/PageLayout'
import { Button } from '@/components/ui/button'
import { queryKeys } from '@/lib/queryKeys'
import { ROUTES } from '@/lib/routeConfig'
import { handleClientError } from '@/lib/toast'

// 3. Types
import type { BoardConfig } from '@/hooks/queries/leaderboard'
```

---

## Không có `features/` directory

Project này KHÔNG dùng `features/` directory pattern.

```
❌ src/features/leaderboard/api/leaderboardApi.ts
❌ src/features/leaderboard/components/BoardCard.tsx
❌ src/features/leaderboard/hooks/useLeaderboard.ts

✅ src/hooks/queries/leaderboard.ts         (query hooks)
✅ src/components/LeaderboardView.tsx        (main view)
✅ src/components/leaderboard/BoardCard.tsx  (sub-components nếu phức tạp)
```
