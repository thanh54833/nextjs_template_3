# Styling Guide

Tailwind CSS v4 + CVA + cn() — styling patterns cho concung_ops frontend.

---

## Design System

### Màu sắc — Token thực tế (Linear dark-first)

> **QUAN TRỌNG**: Primary là **Brand Indigo** (oklch 56.7%), KHÔNG phải emerald. Emerald chỉ dùng cho `status-emerald`. Xem `resources/ui-design-guidelines.md` cho hướng dẫn đầy đủ.

```css
/* src/styles/globals.css — thực tế, dạng % (Tailwind v4) */
/* Các variable có prefix --color- */

/* Shadcn-compatible semantic tokens (dùng được ngay với Tailwind) */
--color-background: oklch(13.9% 0.0029 246.26);  /* Marketing Black */
--color-foreground: oklch(97.8% 0.0011 197.14);  /* Primary text */
--color-card:       oklch(17.2% 0.0026 247.98);  /* Panel Dark */
--color-surface:    oklch(21.7% 0.0025 247.94);  /* Surface L3 */
--color-secondary:  oklch(27.8% 0.0073 285.92);  /* Hover surface */
--color-muted-foreground: oklch(64.9% 0.0146 262.36); /* Tertiary text */
--color-border:     oklch(26.4% 0.0098 268.31);  /* Border Primary */
--color-primary:    oklch(56.7% 0.1585 275.21);  /* Brand Indigo — CTA, buttons */
--color-accent:     oklch(62.3% 0.2069 278.85);  /* Accent Violet — focus rings */
--color-status-emerald: oklch(69.6% 0.1491 162.48); /* Emerald — completion */

/* Semi-transparent (dark only) */
--color-border-subtle:   oklch(100% 0 0 / 0.05); /* white/0.05 */
--color-border-standard: oklch(100% 0 0 / 0.08); /* white/0.08 */
--color-card-translucent: oklch(100% 0 0 / 0.02); /* white/0.02 */
--color-card-hover:      oklch(100% 0 0 / 0.04); /* white/0.04 */
```

### Tailwind Classes chuẩn — dùng semantic tokens

```typescript
// ✅ Background layers — semantic tokens
'bg-background'    // Marketing Black — page background
'bg-card'          // Panel Dark — sidebar, headers, cards
'bg-surface'       // Surface L3 — dropdowns, tooltips, elevated
'bg-secondary'     // Secondary Surface — hover states, slightly elevated
'bg-muted'         // Same as surface — muted bg

// ✅ Text
'text-foreground'         // Primary text
'text-secondary-foreground' // Silver-gray body text
'text-muted-foreground'   // Tertiary — placeholders, metadata

// ✅ Borders
'border-border'          // Border Primary — solid borders
'border-border/40'       // Subtle borders (cards)

// ✅ Brand — primary (indigo) + accent (violet)
'bg-primary'             // Brand Indigo — CTA buttons, active
'text-primary'           // Brand Indigo text
'bg-accent'              // Accent Violet — focus, links
'text-accent'            // Accent Violet text
'ring-ring'              // Focus ring (accent violet)
'focus-visible:ring-ring'

// ✅ Status colors
'text-status-emerald'    // Emerald — completion, positive (KHÔNG dùng text-emerald-400)
'bg-status-emerald'      // Emerald bg

// ❌ TRÁNH hardcode màu — dùng semantic tokens
// text-emerald-400   → text-status-emerald
// bg-violet-600      → bg-primary
// bg-zinc-900        → bg-card
// bg-zinc-800        → bg-secondary
// text-zinc-500      → text-muted-foreground
// border-zinc-800    → border-border
```

---

## cn() — Class Merging Utility

```typescript
import { cn } from '@/lib/utils'

// Conditional classes
<div className={cn(
  'base rounded-lg p-4',              // always applied
  isActive && 'ring-2 ring-emerald-400',  // conditional
  variant === 'dark' && 'bg-zinc-900',    // variant
  className,                             // allow parent override
)} />

// Multiple conditions
<button
  className={cn(
    'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500',
    disabled && 'cursor-not-allowed opacity-50',
    variant === 'primary' && 'bg-violet-600 text-white hover:bg-violet-700',
    variant === 'ghost' && 'hover:bg-zinc-800 text-zinc-400 hover:text-foreground',
  )}
/>
```

---

## CVA — Component Variants

```typescript
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // base classes (always applied)
  'inline-flex items-center justify-center rounded-lg text-sm font-[510] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-secondary text-foreground hover:bg-secondary/80',
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        ghost: 'hover:bg-secondary text-muted-foreground hover:text-foreground',
        destructive: 'bg-destructive/10 text-destructive hover:bg-destructive/20',
        outline: 'border border-border bg-transparent hover:bg-secondary',
      },
      size: {
        sm: 'h-7 px-3 text-xs',
        default: 'h-9 px-4',
        lg: 'h-11 px-6',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
```

---

## Badge Component — Variants thực tế

```typescript
// src/components/ui/badge.tsx — variants có sẵn:
// default | brand | accent | subtle | success | status | secondary | destructive | outline
import { Badge } from '@/components/ui/badge'

<Badge variant="default">Label</Badge>        // transparent bg, border
<Badge variant="brand">Brand</Badge>          // primary (indigo) bg
<Badge variant="success">Active</Badge>       // status-emerald bg
<Badge variant="subtle">Subtl</Badge>         // semi-transparent, square corners
<Badge variant="secondary">Info</Badge>       // secondary surface
<Badge variant="destructive">Error</Badge>    // destructive bg
<Badge variant="outline">Outline</Badge>      // border only

// Color-coded category badges (dùng khi có nhiều màu tùy loại)
// KHÔNG hardcode zinc/emerald/violet — dùng themed opacity variants
const categoryColors: Record<string, string> = {
  python: 'bg-blue-500/10 text-blue-400',       // OK — blue không có token thay thế
  javascript: 'bg-yellow-500/10 text-yellow-400',
  ai: 'bg-status-emerald/10 text-status-emerald', // ✅ dùng token
  database: 'bg-orange-500/10 text-orange-400',
}

<span className={cn(
  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-[510]',
  categoryColors[category] ?? 'bg-secondary text-secondary-foreground',
)}>
  {category}
</span>
```

---

## Tailwind CSS v4 Specifics

```typescript
// ✅ Tailwind v4 — @import trong CSS
// src/styles/globals.css
@import 'tailwindcss';

// ❌ KHÔNG dùng syntax cũ
@tailwind base;
@tailwind components;
@tailwind utilities;

// ✅ CSS variables qua @theme trong globals.css
// (không cần tailwind.config.js nếu dùng v4)
```

---

## Spacing & Layout Patterns

```typescript
// Card / Panel
<div className="rounded-xl border border-border bg-card p-6 shadow-sm">

// Section spacing
<div className="space-y-6">   // vertical gap giữa sections
<div className="space-y-3">   // vertical gap giữa items
<div className="gap-4">       // flexbox/grid gap

// Page content area
<div className="p-6">         // standard padding
<div className="p-4">         // compact padding

// Full-height layout
<div className="flex h-screen">
  <aside className="w-64 flex-shrink-0 border-r border-border bg-card">
  <main className="flex-1 overflow-y-auto p-6">
```

---

## Dark Mode

Project dùng `next-themes` với system default dark:

```typescript
// ThemeProvider — đã setup trong src/app/layout.tsx
// Không cần setup thêm

// ✅ LUÔN dùng semantic tokens — tự động switch light/dark
<div className="bg-card text-foreground">

// Dùng dark: prefix chỉ khi cần semi-transparent (không có semantic token tương đương)
<div className="dark:bg-white/[0.02] bg-card dark:border-white/[0.05] border-border/40">
// ← Pattern này dùng trong Card component: translucent dark, solid light
```

---

## framer-motion với Tailwind

```typescript
import { motion } from 'framer-motion'

// ✅ Combine framer-motion + Tailwind
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.15 }}
  className="rounded-lg bg-card p-4 border border-border"
>
  content
</motion.div>

// Skeleton với animation
<motion.div
  initial={{ opacity: 0.5 }}
  animate={{ opacity: [0.5, 0.8, 0.5] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
  className="h-4 rounded-md bg-muted w-full"
/>
```

---

## Responsive Design

```typescript
// Mobile-first responsive
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

// Hide/show on breakpoints
<div className="hidden md:block">     // ẩn trên mobile
<div className="block md:hidden">     // ẩn trên desktop

// Responsive text — dùng typography utilities, KHÔNG font-bold
<h1 className="text-heading-2 md:text-display">
<p className="text-body md:text-body-lg">
```

---

## Không được dùng

```typescript
// ❌ MUI components
import { Box, Paper, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material'
<Box sx={{ p: 2, bgcolor: 'background.paper' }} />

// ❌ Inline style objects
<div style={{ padding: 16, backgroundColor: '#18181b' }} />

// ❌ styled-components, emotion
const StyledDiv = styled.div`...`

// ✅ ĐÚNG — chỉ Tailwind + cn()
<div className="p-4 bg-zinc-900 rounded-lg" />
```
