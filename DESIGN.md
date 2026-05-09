# Design

## Color Strategy

**Restrained with platform accents.** The UI surface uses warm-tinted neutrals only. Social media platform colors serve as semantic accents for platform-specific data — Instagram pink for Instagram metrics, Twitter blue for Twitter data, etc. The accent never exceeds 10% of any surface outside of charts and platform-labeled cards.

### Physical Scene

Social media managers working at their desks during the day, switching between this dashboard and native social apps. Light theme is the default — they need clarity under office lighting, not a dark mode "because it looks cool." Dark mode exists for late-night monitoring sessions.

## Color Palette

### Light Mode

All values in OKLCH format (Tailwind CSS v4 native).

#### Surface Colors

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--background` | `oklch(0.989 0.003 264.54)` | `#FAFAFA` | Page background |
| `--foreground` | `oklch(0.145 0.015 264.54)` | `#0F172A` | Primary text |
| `--card` | `oklch(1.000 0 0)` | `#FFFFFF` | Card backgrounds |
| `--card-foreground` | `oklch(0.145 0.015 264.54)` | `#0F172A` | Card text |
| `--popover` | `oklch(1.000 0 0)` | `#FFFFFF` | Popover backgrounds |
| `--popover-foreground` | `oklch(0.145 0.015 264.54)` | `#0F172A` | Popover text |

#### Primary & Accent

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--primary` | `oklch(0.388 0.077 264.54)` | `#0F172A` | Primary actions, links, sidebar active |
| `--primary-foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Text on primary |
| `--secondary` | `oklch(0.726 0.045 264.54)` | `#E2E8F0` | Secondary elements |
| `--secondary-foreground` | `oklch(0.123 0.016 264.54)` | `#1E293B` | Text on secondary |
| `--accent` | `oklch(0.933 0.007 264.54)` | `#F1F5F9` | Accent backgrounds |
| `--accent-foreground` | `oklch(0.265 0.058 264.54)` | `#334155` | Text on accent |

#### Muted & Semantic

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--muted` | `oklch(0.954 0.002 264.54)` | `#F1F5F9` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.508 0.010 264.54)` | `#64748B` | Muted text, labels, captions |
| `--destructive` | `oklch(0.491 0.069 23.03)` | `#DC2626` | Error, delete, destructive actions |
| `--destructive-foreground` | `oklch(1.000 0 0)` | `#FFFFFF` | Text on destructive |
| `--border` | `oklch(0.897 0.003 264.54)` | `#E2E8F0` | Borders, dividers |
| `--input` | `oklch(0.897 0.003 264.54)` | `#E2E8F0` | Input borders |
| `--ring` | `oklch(0.501 0.066 264.54)` | `#0EA5E9` | Focus rings |

#### Sidebar

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--sidebar` | `oklch(0.966 0.003 264.54)` | `#F8FAFC` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.145 0.015 264.54)` | `#0F172A` | Sidebar text |
| `--sidebar-primary` | `oklch(0.388 0.077 264.54)` | `#0F172A` | Sidebar primary |
| `--sidebar-primary-foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Sidebar primary text |
| `--sidebar-accent` | `oklch(0.922 0.008 264.54)` | `#E2E8F0` | Sidebar hover/active |
| `--sidebar-accent-foreground` | `oklch(0.265 0.058 264.54)` | `#334155` | Sidebar accent text |
| `--sidebar-border` | `oklch(0.897 0.003 264.54)` | `#E2E8F0` | Sidebar borders |
| `--sidebar-ring` | `oklch(0.501 0.066 264.54)` | `#0EA5E9` | Sidebar focus rings |

#### Chart Colors

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--chart-1` | `oklch(0.504 0.075 264.54)` | `#0EA5E9` | Sky blue — primary series |
| `--chart-2` | `oklch(0.691 0.045 264.54)` | `#8B5CF6` | Violet — secondary series |
| `--chart-3` | `oklch(0.584 0.044 128.20)` | `#F59E0B` | Amber — tertiary series |
| `--chart-4` | `oklch(0.531 0.012 156.08)` | `#10B981` | Emerald — quaternary series |
| `--chart-5` | `oklch(0.662 0.013 64.96)` | `#F97316` | Orange — fifth series |

#### Social Platform Colors (Hardcoded)

| Platform | Hex | OKLCH Approx | Usage |
|----------|-----|-------------|-------|
| Instagram | `#E1306C` | `oklch(0.530 0.180 355.0)` | Instagram metrics, charts |
| Twitter/X | `#1DA1F2` | `oklch(0.650 0.130 240.0)` | Twitter metrics, charts |
| Facebook | `#1877F2` | `oklch(0.550 0.160 250.0)` | Facebook metrics, charts |
| LinkedIn | `#0A66C2` | `oklch(0.480 0.140 250.0)` | LinkedIn metrics, charts |
| TikTok | `#00F2EA` | `oklch(0.880 0.120 185.0)` | TikTok metrics, charts |
| YouTube | `#FF0000` | `oklch(0.580 0.200 25.0)` | YouTube metrics, charts |

### Dark Mode

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--background` | `oklch(0.145 0.015 264.54)` | `#0F172A` | Page background |
| `--foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Primary text |
| `--card` | `oklch(0.205 0.015 264.54)` | `#1E293B` | Card backgrounds |
| `--card-foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Card text |
| `--primary` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Primary actions |
| `--primary-foreground` | `oklch(0.145 0.015 264.54)` | `#0F172A` | Text on primary |
| `--secondary` | `oklch(0.265 0.015 264.54)` | `#334155` | Secondary elements |
| `--secondary-foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Text on secondary |
| `--muted` | `oklch(0.265 0.015 264.54)` | `#334155` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.650 0.015 264.54)` | `#94A3B8` | Muted text |
| `--accent` | `oklch(0.325 0.015 264.54)` | `#475569` | Accent backgrounds |
| `--accent-foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Text on accent |
| `--destructive` | `oklch(0.690 0.200 23.91)` | `#EF4444` | Destructive actions |
| `--border` | `oklch(0.265 0.015 264.54)` | `#334155` | Borders |
| `--input` | `oklch(0.325 0.015 264.54)` | `#475569` | Input borders |
| `--ring` | `oklch(0.720 0.015 264.54)` | `#CBD5E1` | Focus rings |
| `--sidebar` | `oklch(0.205 0.015 264.54)` | `#1E293B` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Sidebar text |
| `--sidebar-accent` | `oklch(0.325 0.015 264.54)` | `#475569` | Sidebar hover |
| `--sidebar-accent-foreground` | `oklch(0.977 0.002 264.54)` | `#F8FAFC` | Sidebar accent text |
| `--sidebar-border` | `oklch(0.325 0.015 264.54)` | `#475569` | Sidebar borders |
| `--sidebar-ring` | `oklch(0.720 0.015 264.54)` | `#CBD5E1` | Sidebar focus rings |

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-sans` | `Inter, ui-sans-serif, system-ui, sans-serif` | Body text, UI labels, data |
| `--font-heading` | `DM Sans, ui-sans-serif, system-ui, sans-serif` | Page headings, section titles |
| `--font-mono` | `JetBrains Mono, ui-monospace, monospace` | Code, numbers in tables, IDs |

### Font Scale

Fixed rem scale (not fluid). Tighter ratio for product UI.

| Step | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| `text-xs` | `0.75rem` (12px) | 400 | 1rem | Labels, badges, captions |
| `text-sm` | `0.875rem` (14px) | 400 | 1.25rem | Body text, table cells, nav items |
| `text-base` | `1rem` (16px) | 400 | 1.625rem | Default body, form inputs |
| `text-lg` | `1.125rem` (18px) | 500 | 1.75rem | Subheadings, card titles |
| `text-xl` | `1.25rem` (20px) | 600 | 1.75rem | Section headers, plan names |
| `text-2xl` | `1.5rem` (24px) | 700 | 2rem | Page titles |
| `text-3xl` | `1.875rem` (30px) | 700 | 2.25rem | Pricing prices, hero metrics |
| `text-4xl` | `2.25rem` (36px) | 700 | 2.5rem | Dashboard overview headers |

### Font Weights

| Token | Value | Usage |
|-------|-------|-------|
| `--font-weight-normal` | 400 | Body text, descriptions |
| `--font-weight-medium` | 500 | Nav items, button text, subheadings |
| `--font-weight-semibold` | 600 | Section headers, card titles |
| `--font-weight-bold` | 700 | Page titles, prices, metric values |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tight` | `-0.025em` | Large headings |
| `--tracking-normal` | `0em` | Default body text |
| `--tracking-wider` | `0.05em` | Uppercase labels, badges |

## Spacing System

4px base unit (`--spacing: 0.25rem`).

| Token | Value | Usage |
|-------|-------|-------|
| `1` | `4px` | Icon + text gaps, tight list gaps |
| `2` | `8px` | Standard list gaps, button vertical padding |
| `3` | `12px` | Form field gaps, button horizontal padding |
| `4` | `16px` | Card inner padding, section gaps |
| `6` | `24px` | Page padding, section dividers |
| `8` | `32px` | Major section spacing |

### Container Sizes

| Token | Value | Usage |
|-------|-------|-------|
| `--container-xs` | `20rem` (320px) | Narrow forms |
| `--container-sm` | `24rem` (384px) | Small dialogs |
| `--container-md` | `28rem` (448px) | Medium dialogs |
| `--container-lg` | `32rem` (512px) | Large dialogs |
| `--container-xl` | `36rem` (576px) | Wide forms |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | `0.625rem` (10px) | Base radius |
| `--radius-sm` | `calc(var(--radius) - 4px)` = `6px` | Small elements, badges |
| `--radius-md` | `calc(var(--radius) - 2px)` = `8px` | Buttons, inputs |
| `--radius-lg` | `var(--radius)` = `10px` | Cards, panels |
| `--radius-xl` | `calc(var(--radius) + 4px)` = `14px` | Large cards, pricing cards |

### Component-Specific Radius

| Component | Radius | Notes |
|-----------|--------|-------|
| Buttons | `8px` (`--radius-md`) | Consistent across all variants |
| Inputs | `10px` (`--radius-lg`) | Slightly softer than buttons |
| Cards | `10px` (`--radius-lg`) | Standard card radius |
| Metric cards | `14px` (`--radius-xl`) | Larger, softer for data displays |
| Pricing cards | `14px` (`--radius-xl`) | Prominent, friendly |
| Pills / Badges | `9999px` (full) | Fully rounded |
| Sidebar | `0` | Full height, no radius |

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-2xs` | `0 1px 2px 0 hsl(0 0% 0% / 0.05)` | Subtle card elevation |
| `--shadow-xs` | `0 1px 2px 0 hsl(0 0% 0% / 0.09)` | Default card shadow |
| `--shadow-sm` | `0 1px 2px 0 hsl(0 0% 0% / 0.18), 0 1px 2px -1px hsl(0 0% 0% / 0.18)` | Elevated elements |
| `--shadow` | `0 1px 2px 0 hsl(0 0% 0% / 0.18), 0 1px 2px -1px hsl(0 0% 0% / 0.18)` | Default shadow |
| `--shadow-md` | `0 1px 2px 0 hsl(0 0% 0% / 0.18), 0 2px 4px -1px hsl(0 0% 0% / 0.18)` | Dropdowns, popovers |
| `--shadow-lg` | `0 1px 2px 0 hsl(0 0% 0% / 0.18), 0 4px 6px -1px hsl(0 0% 0% / 0.18)` | Modals, large overlays |
| `--shadow-xl` | `0 1px 2px 0 hsl(0 0% 0% / 0.18), 0 8px 10px -1px hsl(0 0% 0% / 0.18)` | Full-screen overlays |

## Layout

### Page Structure

- **Sidebar**: Fixed width `240px` (collapsible to icon-only `64px`)
- **Header**: Fixed height `48px` (`--header-height`)
- **Main content**: Fluid, `flex-1`, full width minus sidebar
- **Page padding**: `24px` horizontal, `24px` vertical
- **Max content width**: None (full bleed for data tables and charts)

### Grid System

- **Card grids**: `gap-4` (16px) between cards
- **Metric rows**: `gap-4` (16px) vertical
- **Form fields**: `gap-3` (12px) vertical
- **Settings sections**: `gap-6` (24px) vertical

### Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| `sm` | 640px | Mobile layout |
| `md` | 768px | Tablet, sidebar collapses |
| `lg` | 1024px | Desktop, full sidebar |
| `xl` | 1280px | Wide desktop, expanded charts |
| `2xl` | 1536px | Large screens, multi-column layouts |

## Components

### Buttons

| Variant | Background | Text | Border | Radius | Padding |
|---------|-----------|------|--------|--------|---------|
| Default | `transparent` | `--foreground` | `1px solid --border` | `8px` | `8px 12px` |
| Primary | `--primary` | `--primary-foreground` | none | `8px` | `8px 12px` |
| Secondary | `--secondary` | `--secondary-foreground` | none | `8px` | `8px 12px` |
| Ghost | `transparent` | `--foreground` | none | `8px` | `8px 12px` |
| Link | `transparent` | `--primary` | none | `0` | `0` |
| Destructive | `--destructive` | `--destructive-foreground` | none | `8px` | `8px 12px` |

**Typography**: `text-sm` (14px), `font-medium` (500)
**Transitions**: `transition-colors duration-150`
**Focus**: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
**Disabled**: `opacity-50 pointer-events-none`

### Cards

```css
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  padding: 16px 24px;
}

.card-header {
  padding-bottom: 16px;
}

.card-content {
  padding: 0;
}

.card-footer {
  padding-top: 16px;
  border-top: 1px solid var(--border);
}
```

### Metric Cards (Data Display)

```css
.metric-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  padding: 16px 24px;
  box-shadow: var(--shadow-xs);
}

.metric-value {
  font-size: 1.875rem; /* 30px */
  font-weight: 700;
  line-height: 2.25rem;
  color: var(--foreground);
}

.metric-label {
  font-size: 0.875rem; /* 14px */
  font-weight: 400;
  color: var(--muted-foreground);
}

.metric-change {
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
}

.metric-change.positive {
  color: oklch(0.531 0.012 156.08); /* Emerald */
}

.metric-change.negative {
  color: var(--destructive);
}
```

### Inputs

```css
.input {
  background: var(--background);
  border: 1px solid var(--input);
  border-radius: var(--radius-lg);
  padding: 8px 12px;
  font-size: 0.875rem; /* 14px */
  color: var(--foreground);
  transition: border-color 150ms, box-shadow 150ms;
}

.input:focus {
  outline: none;
  border-color: var(--ring);
  box-shadow: 0 0 0 2px var(--ring);
}

.input::placeholder {
  color: var(--muted-foreground);
}
```

### Tables

```css
.table {
  width: 100%;
  border-collapse: collapse;
}

.table-header {
  background: var(--muted);
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  color: var(--muted-foreground);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.table-header-cell {
  padding: 8px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

.table-row {
  border-bottom: 1px solid var(--border);
  transition: background-color 150ms;
}

.table-row:hover {
  background: var(--muted);
}

.table-cell {
  padding: 12px 16px;
  font-size: 0.875rem; /* 14px */
  color: var(--foreground);
}
```

### Charts (Recharts)

- **Line width**: 2px
- **Dot radius**: 4px (active), 0px (inactive)
- **Area fill opacity**: 8.2% (gradient from platform color to transparent)
- **Grid lines**: `var(--border)` color, 1px dashed
- **Axis labels**: `text-xs` (12px), `--muted-foreground`
- **Legend**: Color dot + label, `text-xs`, inline with chart
- **Tooltip**: `--popover` background, `--shadow-md`, `--radius-md` border radius

### Progress Bars

```css
.progress-track {
  background: var(--muted);
  border-radius: 9999px;
  height: 8px;
}

.progress-fill {
  background: var(--primary);
  border-radius: 9999px;
  height: 100%;
  transition: width 300ms ease-out;
}
```

### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  line-height: 1.25rem;
}

.badge-default {
  background: var(--secondary);
  color: var(--secondary-foreground);
}

.badge-success {
  background: oklch(0.93 0.01 156.08);
  color: oklch(0.35 0.02 156.08);
}

.badge-destructive {
  background: oklch(0.93 0.02 23.03);
  color: oklch(0.35 0.03 23.03);
}
```

### Sidebar Navigation Items

```css
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: var(--radius-md);
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  color: var(--sidebar-foreground);
  transition: background-color 150ms, color 150ms;
}

.nav-item:hover {
  background: var(--sidebar-accent);
  color: var(--sidebar-accent-foreground);
}

.nav-item.active {
  background: var(--sidebar-accent);
  color: var(--sidebar-primary);
}

.nav-item-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
```

## Motion

| Property | Value | Usage |
|----------|-------|-------|
| `--default-transition-duration` | `150ms` | Most UI transitions |
| `--default-transition-timing-function` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |
| Progress bar animation | `300ms ease-out` | Width transitions |
| Page transitions | `400ms ease-in-out` | Theme switching (view-transition) |

**Rules:**
- No bounce or elastic easing
- No animated CSS layout properties
- Motion conveys state, not decoration
- No orchestrated page-load sequences
- Respect `prefers-reduced-motion`

## Icons

- **Source**: `@tabler/icons-react` (single source, centralized in `src/components/icons.tsx`)
- **Size**: `20px` in sidebar, `16px` in buttons and inline
- **Style**: Outline/stroke, 1.5px stroke weight
- **Never import directly from `@tabler/icons-react`** — always through `Icons` object
