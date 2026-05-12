# UI Design Guidelines

Linear-inspired design system cho concung_ops frontend. Dark-first, semi-transparent surfaces, brand indigo primary.

> **Source of truth**: `src/styles/globals.css` — Typography utilities, CSS tokens, card/button/elevation classes đều được định nghĩa ở đây.

---

## 1. Font Weight System — ĐỌC KỸ, QUAN TRỌNG

```
400   Regular    — standard reading text
510   Medium     — Linear's signature weight, emphasis mặc định
590   Semibold   — max weight, strong emphasis

❌ TUYỆT ĐỐI KHÔNG dùng font-bold / font-700 / font-semibold (700)
✅ Dùng font-[510] hoặc font-[590]
```

```typescript
// ❌ SAI
<h2 className="font-bold text-lg">Title</h2>
<span className="font-semibold text-sm">Label</span>

// ✅ ĐÚNG
<h2 className="font-[590] text-lg">Title</h2>
<span className="font-[510] text-[13px]">Label</span>
```

---

## 2. Typography Scale — Dùng CSS utility classes từ globals.css

Project có type scale hoàn chỉnh. **LUÔN dùng các class này thay vì tự combine text-* + font-*.**

```typescript
// ── Display (marketing, landing pages) ───────────────────────
className="text-display-xl"   // 72px, weight 510, ls -1.584px
className="text-display-lg"   // 64px, weight 510, ls -1.408px
className="text-display"      // 48px, weight 510, ls -1.056px

// ── Headings ─────────────────────────────────────────────────
className="text-heading-1"    // 32px, weight 400, ls -0.704px  → Page title (h1)
className="text-heading-2"    // 24px, weight 400, ls -0.288px  → Section header (h2)
className="text-heading-3"    // 20px, weight 590, ls -0.24px   → Card title / dialog title

// ── Body text ─────────────────────────────────────────────────
className="text-body-lg"      // 18px, weight 400, ls -0.165px
className="text-body"         // 16px, weight 400, lh 1.5       → Standard body
className="text-body-medium"  // 16px, weight 510, lh 1.5       → Emphasized body
className="text-body-semibold"// 16px, weight 590, lh 1.5

// ── Small text (most UI) ──────────────────────────────────────
className="text-small"        // 15px, weight 400, ls -0.165px
className="text-small-medium" // 15px, weight 510               → Sidebar links, nav
className="text-small-semibold"// 15px, weight 590

// ── Captions & labels ────────────────────────────────────────
className="text-caption-lg"   // 14px, weight 510, ls -0.182px  → Section labels
className="text-caption"      // 13px, weight 400, ls -0.13px   → Metadata, timestamps

// ── Micro text ───────────────────────────────────────────────
className="text-label"        // 12px, weight 400
className="text-micro"        // 11px, weight 510               → Badges, tags
className="text-tiny"         // 10px, weight 400, ls -0.15px   → Category labels

// ── Nếu CẦN tùy chỉnh (hiếm): dùng text-[Npx] + font-[510|590] ──
<span className="text-[13px] font-[510] tracking-[-0.13px]">Custom</span>
```

### Áp dụng vào component:

```typescript
// Page title
<h1 className="text-heading-1 text-foreground">Agents</h1>

// Section header
<h2 className="text-heading-2 text-foreground">AI Tools</h2>

// Card title
<h3 className="text-heading-3 text-foreground">Card Name</h3>

// Body paragraph
<p className="text-body text-muted-foreground">Description text here</p>

// Metadata / timestamp
<span className="text-caption text-muted-foreground">2 hours ago</span>

// Micro badge label
<span className="text-micro text-muted-foreground">CATEGORY</span>
```

---

## 3. Color Tokens — Semantic, bắt buộc dùng token thay vì hardcode

### Text tokens

```typescript
text-foreground          // Primary text   — headings, important labels
text-secondary-foreground // Secondary text — body, descriptions
text-muted-foreground    // Tertiary text  — metadata, timestamps, placeholder

// Alias tokens (cùng giá trị, dùng cho clarity):
text-text-primary        // = text-foreground
text-text-secondary      // = text-secondary-foreground
text-text-tertiary       // = text-muted-foreground
text-text-quaternary     // Quaternary — disabled, least visible

// ❌ KHÔNG dùng
text-zinc-100 / text-white / text-zinc-400
// ✅ ĐÚNG
text-foreground / text-muted-foreground
```

### Background tokens

```typescript
bg-background    // Page canvas — darkest layer
bg-card          // Panel / sidebar / headers
bg-surface       // Elevated content surface — cards, dropdowns
bg-surface-2     // Secondary surface — hover state surfaces
bg-secondary     // Subtle bg — muted sections, skeleton shimmer
bg-muted         // = bg-surface (alias)
bg-popover       // Tooltip, floating menus

// Semi-transparent (dark mode only — use with dark: prefix):
dark:bg-white/[0.02]  // Translucent card (= card-translucent token)
dark:bg-white/[0.04]  // Hover state (= card-hover token)
dark:bg-white/[0.05]  // Surface (= surface-translucent token)
```

### Border tokens

```typescript
border-border          // Standard border (solid)
border-border-primary  // = border-border (alias)
border-border-secondary // Slightly lighter
border-border-tertiary // Lightest solid border

// Semi-transparent (use with dark: prefix):
dark:border-white/[0.05]  // Subtle border (= border-subtle token)
dark:border-white/[0.08]  // Standard border (= border-standard token)
```

### Brand & Accent

```typescript
bg-primary          // Brand Indigo — CTA buttons, key actions ONLY
text-primary        // Indigo text — active nav, links, active icons
bg-accent           // Accent Violet — focus indicators
border-accent       // Violet border — focus rings
bg-status-emerald   // Emerald — completion, success status
bg-status-green     // Green — in-progress, active status
```

### Brand Primary Subtle — Active/Selected States (BẮT BUỘC)

**Khi item được selected/active: KHÔNG dùng `bg-primary` (quá đậm) hay `bg-primary/10` (cứng), dùng token:**

```
Token hierarchy:
--color-primary            → full brand (buttons, active text, icons)
  ↓ 12% opacity (light) / 10% (dark)
--color-primary-subtle     → selected/active backgrounds  
  ↓ 20% opacity
--color-primary-subtle-border → active borders, rings, outlines
```

**Tailwind utilities:**

```typescript
bg-primary-subtle        // Active/selected bg — sidebar, list items, presets
border-primary-subtle    // Active border — border-l-2, card borders
ring-primary-subtle      // Focus/active ring
```

**Pattern bắt buộc cho nav, list items, presets:**

```tsx
// ✅ Nav item / sidebar link
className={isActive
  ? 'bg-primary-subtle font-[510] text-primary border-l-2 border-primary-subtle'
  : 'font-[450] text-muted-foreground border-l-2 border-transparent hover:bg-card hover:text-foreground'
}

// ✅ Icon phải cùng màu text
<span className={isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}>
  <Icon />
</span>

// ✅ Avatar / badge
<div className="bg-primary-subtle text-primary ring-1 ring-primary-subtle">
  {initials}
</div>
```

**Inline styles (khi không dùng Tailwind class):**

```tsx
style={{ background: 'var(--color-primary-subtle)' }}
style={{ borderColor: 'var(--color-primary-subtle-border)' }}
```

**So sánh `bg-primary-subtle` vs `bg-primary/10`:**

| Trường hợp | Dùng | Lý do |
|-----------|------|-------|
| Tailwind component class | `bg-primary-subtle` | Tunable per light/dark |
| Inline `style={{ }}` | `var(--color-primary-subtle)` | CSS variable works |
| `bg-primary/10` | ❌ Tránh | Cứng 10%, không nhất quán giữa modes |

**Anti-patterns:**

```tsx
// ❌ bg-primary trực tiếp cho selected bg (quá đậm)
isActive ? 'bg-primary text-white' : ''

// ❌ Hardcode hex brand
style={{ color: '#5e6ad2' }}

// ❌ Quên border-transparent → layout shift 2px khi toggle active
isActive ? 'border-l-2 border-primary-subtle' : ''  // ← thiếu border-transparent
```

---

## 4. Card System — `src/components/ui/card.tsx`

**Dùng `<Card>` component, KHÔNG tự viết card div.**

```typescript
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

// 4 variants:
<Card variant="surface">   // DEFAULT — list items, most cards
<Card variant="elevated">  // More opaque — featured content, panels
<Card variant="featured">  // Prominent + ring shadow — spotlight
<Card variant="accent">    // Brand-tinted — CTA, highlights

// Padding options:
<Card padding="sm">   // p-3 — compact (badges, inline cards)
<Card padding="md">   // p-4 — DEFAULT
<Card padding="lg">   // p-6 — spacious (content panels)
<Card padding="none"> // p-0 — handle padding manually inside

// Interactive (clickable cards):
<Card interactive>   // adds cursor-pointer + hover bg
```

### Khi nào dùng variant nào:

| Variant | Dùng cho | Ví dụ |
|---------|----------|-------|
| `surface` (default) | List items, resource cards, table rows | PromptCard, FeedCard, AgentCard |
| `elevated` | Content panels, sidebars, settings sections | Right panel, config section |
| `featured` | Marketing sections, hero cards, pricing | Featured agent, top-ranked item |
| `accent` | CTA sections, onboarding hints | "Try this feature", upgrade prompt |

### Ví dụ đầy đủ:

```typescript
// List card — interactive, default surface
<Card interactive onClick={handleClick}>
  <CardHeader>
    <CardTitle>Agent Name</CardTitle>
    <Badge variant="subtle">Python</Badge>
  </CardHeader>
  <CardContent className="mt-2">
    <p className="text-caption text-muted-foreground line-clamp-2">Description</p>
  </CardContent>
  <CardFooter>
    <span className="text-caption text-muted-foreground">3.2k installs</span>
    <Button variant="ghost" size="sm" className="ml-auto">Use</Button>
  </CardFooter>
</Card>

// Content panel — elevated, no padding override
<Card variant="elevated" padding="lg">
  <h2 className="text-heading-2 text-foreground mb-4">Settings</h2>
  {/* content */}
</Card>

// Stat card — featured
<Card variant="featured" padding="lg">
  <p className="text-micro text-muted-foreground uppercase tracking-wide">Total Users</p>
  <p className="text-heading-1 text-foreground font-[590] mt-1 font-mono">12,847</p>
</Card>
```

---

## 5. Border Radius Standards

```typescript
rounded-[6px]   // Tight — buttons, input fields, toolbar items, badges
rounded-lg      // Standard (8px) — cards, containers, form groups
rounded-xl      // Large (12px) — featured cards, dialogs, modals, tab containers
rounded-2xl     // Extra large (16px) — HIẾM dùng, chỉ empty state icons
rounded-full    // Circle/pill — avatar, pill badges, icon buttons
```

**Rule:** Không mix border-radius ngẫu nhiên. Consistent per component type:
- Buttons: always `rounded-[6px]`
- Standard cards: always `rounded-lg`
- Dialogs/featured: always `rounded-xl`
- Pill badges: always `rounded-full`

---

## 6. Spacing Standards — 8px grid

```typescript
// Padding
p-2   // 8px  — very compact (toolbar items)
p-3   // 12px — compact cards, list items
p-4   // 16px — standard cards (DEFAULT)
p-6   // 24px — content panels, page sections
p-8   // 32px — page-level padding (rare)

// Gap
gap-1   // 4px  — icon + label pairs
gap-1.5 // 6px  — tight inline items
gap-2   // 8px  — inline elements (badge + text)
gap-3   // 12px — list items, form fields
gap-4   // 16px — card grid gap, section items
gap-6   // 24px — major sections

// Vertical rhythm
space-y-1   // 4px  — stacked micro items
space-y-2   // 8px  — form label + input
space-y-3   // 12px — list items
space-y-4   // 16px — form sections
space-y-6   // 24px — page sections

// ❌ KHÔNG dùng odd values
gap-5 / gap-7 / p-5 / mt-7  ← avoid
```

---

## 7. Elevation System — CSS utility classes từ globals.css

```typescript
// Dùng như className trực tiếp:
className="elevation-subtle"    // Subtle shadow — cho card items
className="elevation-surface"   // Surface bg + border — cho panels
className="elevation-ring"      // Ring shadow 1px — cho featured cards
className="elevation-elevated"  // Drop shadow — cho floating elements
className="elevation-dialog"    // Multi-layer shadow — cho dialogs/modals
className="elevation-inset"     // Inset shadow — cho pressed/sunken states
```

---

## 8. Layout Patterns

### Page structure (chuẩn cho tất cả pages)

```typescript
// page.tsx
export default function FooPage() {
  return <FooView />
}

// FooView.tsx — 'use client'
export function FooView() {
  return (
    <PageLayout
      title="Foo"
      description="Mô tả ngắn về trang"
      breadcrumbItems={breadcrumbs}
      action={<Button onClick={handleCreate}>Thêm mới</Button>}
    >
      {/* content */}
    </PageLayout>
  )
}
```

### Grid layout (cards, resources)

```typescript
// 3-col responsive grid — standard
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {items.map(item => <Card key={item.id}>...</Card>)}
</div>

// 2-col
<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

// Fixed 3-col (no responsive)
<div className="grid grid-cols-3 gap-3">
```

### List layout (feeds, items)

```typescript
// Vertical list — most common
<div className="space-y-2">
  {items.map(item => <Card key={item.id} interactive>...</Card>)}
</div>

// Tighter list
<div className="space-y-1.5">
```

### Two-panel layout (master-detail)

```typescript
<div className="flex gap-4">
  <div className="w-80 shrink-0 space-y-2">  {/* List panel */}
    {items.map(...)}
  </div>
  <div className="flex-1 min-w-0">           {/* Detail panel */}
    <Card variant="elevated" padding="lg">
      {selectedItem && <DetailView item={selectedItem} />}
    </Card>
  </div>
</div>
```

---

## 9. Empty & Loading States

**LUÔN dùng component có sẵn. KHÔNG tự viết inline empty state.**

```typescript
import { EmptyState, EmptyStateIcon, LoadingState, LoadingSkeleton } from '@/components/ui'

// Empty state — khi list rỗng
<EmptyState
  icon={<EmptyStateIcon type="data" />}    // type: 'data' | 'search' | 'filter' | 'folder'
  title="Chưa có items"
  description="Tạo item đầu tiên để bắt đầu."
  action={<Button onClick={handleCreate}>Tạo mới</Button>}
/>

// Loading state — khi isLoading
<LoadingState message="Đang tải..." />

// Skeleton grid — khi isLoading cho grid layout
<LoadingSkeleton count={6} />           // 3-col grid

// Inline loading (trong button, badge)
<Spinner size="sm" />                   // sm | md | lg

// Component-level pattern:
if (isLoading) return <LoadingSkeleton count={6} />
if (error) return <ErrorState error={error} onRetry={refetch} />
if (!data?.length) return <EmptyState title="Chưa có data" />
```

---

## 10. Interactive States — Hover, Focus, Selected

```typescript
// Hover — card/list item
hover:bg-card   // Standard hover (sidebar items, list rows)
hover:bg-secondary  // Slightly stronger hover (user menu, dropdowns)

// Focus ring — inputs, buttons (tự động via button.tsx)
focus-visible:ring-2 focus-visible:ring-ring

// Selected/active state — nav items (sidebar)
// Dùng brand primary subtle pattern (BẮT BUỘC)
className={cn(
  'border-l-2 transition-colors',
  isActive
    ? 'bg-primary-subtle text-primary font-[510] border-primary-subtle'
    : 'text-muted-foreground font-[450] border-transparent hover:bg-card hover:text-foreground',
)}

// Selected/active state — list/card items
className={cn(
  'border transition-colors',
  isSelected
    ? 'border-primary-subtle bg-primary-subtle'
    : 'border-border hover:border-border/80 hover:bg-card',
)}

// Disabled state — opacity
disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
```

---

## 11. Icon Usage

```typescript
// Import sources
import { ChevronRight, Settings, Plus } from 'lucide-react'
import { FiGithub, FiSlack } from 'react-icons/fi'

// Size scale — luôn dùng h-* w-* cùng nhau
h-3 w-3   // 12px — inline micro icons (trong badges, meta)
h-4 w-4   // 16px — standard inline icons (button icons, list items)
h-5 w-5   // 20px — medium (nav icons, section headers)
h-6 w-6   // 24px — large (empty state, prominent actions)
h-8 w-8   // 32px — feature icons (trong empty state containers)

// Color — kế thừa từ parent hoặc explicit
className="text-muted-foreground"   // secondary icon
className="text-foreground"         // primary icon
className="text-primary"            // brand icon (rare)

// Icon button pattern
<Button variant="ghost" size="icon">
  <Settings className="h-4 w-4" />
</Button>

// Icon + label pattern
<div className="flex items-center gap-1.5">
  <Globe className="h-3.5 w-3.5 text-muted-foreground" />
  <span className="text-caption text-muted-foreground">Website</span>
</div>
```

---

## 12. Animation Conventions

```typescript
// Entry animation — fade in up (standard)
<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2 }}
>

// List stagger
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
const item = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }

// Skeleton/loading pulse
initial={{ opacity: 0.5 }}
animate={{ opacity: [0.5, 0.8, 0.5] }}
transition={{ repeat: Infinity, duration: 1.5 }}

// Transition durations:
duration: 0.15   // micro (hover, focus)
duration: 0.2    // standard (enter/exit)
duration: 0.3    // medium (panel slide)
duration: 0.5    // slow (page transition)

// ❌ KHÔNG dùng
transition={{ duration: 1 }}  // quá chậm
className="transition-all"    // quá broad — dùng transition-colors, transition-opacity
```

---

## 13. Anti-Patterns — Design

```typescript
// ❌ Hardcode màu trực tiếp
className="text-zinc-400 bg-zinc-900 border-zinc-700"
// ✅ Dùng semantic token
className="text-muted-foreground bg-card border-border"

// ❌ Font weight sai
className="font-bold font-semibold"
// ✅ Đúng
className="font-[590]"

// ❌ Tự viết card div
<div className="rounded-lg border border-border bg-zinc-900 p-4">
// ✅ Dùng Card component
<Card>

// ❌ Tự viết empty state
<div className="py-12 text-center text-muted-foreground">Không có data</div>
// ✅ Dùng EmptyState
<EmptyState title="Không có data" />

// ❌ Typography tùy tiện
<h2 className="text-lg font-medium">Title</h2>
// ✅ Dùng type scale
<h2 className="text-heading-2 text-foreground">Title</h2>

// ❌ Tự kết hợp colors + weights không theo system
<span className="text-[14px] font-[600] text-white/70">
// ✅ Dùng type utilities + semantic tokens
<span className="text-caption-lg text-muted-foreground">
```
