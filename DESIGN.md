# Design

## Color Strategy

**Committed — teal/green primary with pink secondary.** The UI surface uses teal-tinted neutrals (hue 175). Primary is a deep teal `#006752`, secondary is a vibrant pink `#f791ca`. Social media platform colors serve as semantic accents for platform-specific data.

### Physical Scene

Social media managers working at their desks during the day, switching between this dashboard and native social apps. Light theme is the default — they need clarity under office lighting, not a dark mode "because it looks cool." Dark mode exists for late-night monitoring sessions.

## Color Palette

### Light Mode

All values in OKLCH format (Tailwind CSS v4 native). Extracted from live site `https://social-media-dashboard-kit-code.vercel.app/`.

#### Surface Colors

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--background` | `oklch(0.989 0.002 175)` | `#fefefe` | Page background |
| `--foreground` | `oklch(0.145 0.02 175)` | `#06120f` | Primary text |
| `--card` | `oklch(1.000 0 0)` | `#ffffff` | Card backgrounds |
| `--card-foreground` | `oklch(0.145 0.02 175)` | `#06120f` | Card text |
| `--popover` | `oklch(1.000 0 0)` | `#ffffff` | Popover backgrounds |
| `--popover-foreground` | `oklch(0.145 0.02 175)` | `#06120f` | Popover text |

#### Primary & Accent

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--primary` | `oklch(0.388 0.2 175)` | `#006752` | Primary actions, links, sidebar active |
| `--primary-foreground` | `oklch(0.977 0.005 175)` | `#f5faf8` | Text on primary |
| `--secondary` | `oklch(0.726 0.14 346)` | `#f791ca` | Secondary elements, badges |
| `--secondary-foreground` | `oklch(0.123 0.05 346)` | `#321727` | Text on secondary |
| `--accent` | `oklch(0.933 0.02 175)` | `#def0ea` | Accent backgrounds |
| `--accent-foreground` | `oklch(0.265 0.15 175)` | `#004738` | Text on accent |

#### Muted & Semantic

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--muted` | `oklch(0.954 0.005 175)` | `#eef3f1` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.308 0.03 175)` | `#374d47` | Muted text, labels, captions |
| `--destructive` | `oklch(0.491 0.22 27)` | `#df2225` | Error, delete, destructive actions |
| `--destructive-foreground` | `oklch(0.977 0.005 175)` | `#f5faf8` | Text on destructive |
| `--border` | `oklch(0.897 0.01 175)` | `#dbe4e1` | Borders, dividers |
| `--input` | `oklch(0.897 0.01 175)` | `#dbe4e1` | Input borders |
| `--ring` | `oklch(0.501 0.18 175)` | `#00866e` | Focus rings |

#### Sidebar

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--sidebar` | `oklch(0.966 0.008 175)` | `#f0f5f3` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.145 0.02 175)` | `#06120f` | Sidebar text |
| `--sidebar-primary` | `oklch(0.388 0.2 175)` | `#006752` | Sidebar primary |
| `--sidebar-primary-foreground` | `oklch(0.977 0.005 175)` | `#f5faf8` | Sidebar primary text |
| `--sidebar-accent` | `oklch(0.922 0.025 175)` | `#e5ede9` | Sidebar hover/active |
| `--sidebar-accent-foreground` | `oklch(0.265 0.15 175)` | `#004738` | Sidebar accent text |
| `--sidebar-border` | `oklch(0.897 0.01 175)` | `#dbe4e1` | Sidebar borders |
| `--sidebar-ring` | `oklch(0.501 0.18 175)` | `#00866e` | Sidebar focus rings |

#### Chart Colors

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--chart-1` | `oklch(0.504 0.2 175)` | `#00a885` | Teal — primary series |
| `--chart-2` | `oklch(0.691 0.14 346)` | `#e87bb5` | Pink — secondary series |
| `--chart-3` | `oklch(0.584 0.2 61)` | `#f59e0b` | Amber — tertiary series |
| `--chart-4` | `oklch(0.531 0.18 241)` | `#3b82f6` | Blue — quaternary series |
| `--chart-5` | `oklch(0.662 0.15 111)` | `#22c55e` | Green — fifth series |

#### Social Platform Colors

| Platform | Hex | OKLCH Approx | Usage |
|----------|-----|-------------|-------|
| Instagram | `#E1306C` | `oklch(0.530 0.180 355.0)` | Instagram metrics, charts |
| Twitter/X | `#1DA1F2` | `oklch(0.650 0.130 240.0)` | Twitter metrics, charts |
| Facebook | `#1877F2` | `oklch(0.550 0.160 250.0)` | Facebook metrics, charts |
| LinkedIn | `#0A66C2` | `oklch(0.480 0.140 250.0)` | LinkedIn metrics, charts |
| TikTok | `#00F2EA` | `oklch(0.880 0.120 185.0)` | TikTok metrics, charts |
| YouTube | `#FF0000` | `oklch(0.580 0.200 25.0)` | YouTube metrics, charts |

### Dark Mode

Extracted from live site. All values in OKLCH format.

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--background` | `oklch(0.039 0.02 175)` | `#04100d` | Page background |
| `--foreground` | `oklch(0.954 0.005 175)` | `#eef3f1` | Primary text |
| `--card` | `oklch(0.087 0.025 175)` | `#0b1c18` | Card backgrounds |
| `--card-foreground` | `oklch(0.954 0.005 175)` | `#eef3f1` | Card text |
| `--popover` | `oklch(0.087 0.025 175)` | `#0b1c18` | Popover backgrounds |
| `--popover-foreground` | `oklch(0.954 0.005 175)` | `#eef3f1` | Popover text |
| `--primary` | `oklch(0.675 0.18 175)` | `#00b99a` | Primary actions |
| `--primary-foreground` | `oklch(0.032 0.02 175)` | `#030e0b` | Text on primary |
| `--secondary` | `oklch(0.656 0.14 346)` | `#e27eb7` | Secondary elements |
| `--secondary-foreground` | `oklch(0.049 0.04 346)` | `#1e0a15` | Text on secondary |
| `--muted` | `oklch(0.156 0.025 175)` | `#192b26` | Muted backgrounds |
| `--muted-foreground` | `oklch(0.656 0.03 175)` | `#8ca59d` | Muted text |
| `--accent` | `oklch(0.218 0.05 175)` | `#103b31` | Accent backgrounds |
| `--accent-foreground` | `oklch(0.908 0.01 175)` | `#dee7e4` | Text on accent |
| `--destructive` | `oklch(0.637 0.191 22.216)` | `#ff6568` | Destructive actions |
| `--destructive-foreground` | `oklch(0.032 0.02 175)` | `#030e0b` | Text on destructive |
| `--border` | `oklch(1 0 0 / 0.12)` | `#ffffff1f` | Borders |
| `--input` | `oklch(1 0 0 / 0.15)` | `#ffffff26` | Input borders |
| `--ring` | `oklch(0.557 0.16 175)` | `#00977c` | Focus rings |
| `--sidebar` | `oklch(0.065 0.025 175)` | `#071713` | Sidebar background |
| `--sidebar-foreground` | `oklch(0.954 0.005 175)` | `#eef3f1` | Sidebar text |
| `--sidebar-primary` | `oklch(0.675 0.18 175)` | `#00b99a` | Sidebar primary |
| `--sidebar-primary-foreground` | `oklch(0.032 0.02 175)` | `#030e0b` | Sidebar primary text |
| `--sidebar-accent` | `oklch(0.170 0.05 175)` | `#102f28` | Sidebar hover |
| `--sidebar-accent-foreground` | `oklch(0.908 0.01 175)` | `#dee7e4` | Sidebar accent text |
| `--sidebar-border` | `oklch(1 0 0 / 0.12)` | `#ffffff1f` | Sidebar borders |
| `--sidebar-ring` | `oklch(0.557 0.16 175)` | `#00977c` | Sidebar focus rings |

#### Chart Colors (Dark)

| Token | OKLCH Value | Approx Hex | Usage |
|-------|-------------|------------|-------|
| `--chart-1` | `oklch(0.675 0.18 175)` | `#00b99a` | Teal — primary series |
| `--chart-2` | `oklch(0.656 0.14 346)` | `#e27eb7` | Pink — secondary series |
| `--chart-3` | `oklch(0.584 0.2 61)` | `#f59e0b` | Amber — tertiary series |
| `--chart-4` | `oklch(0.589 0.18 241)` | `#4a7ff5` | Blue — quaternary series |
| `--chart-5` | `oklch(0.662 0.15 111)` | `#22c55e` | Green — fifth series |

## Typography

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--font-sans` | `Inter, ui-sans-serif, system-ui, sans-serif` | Body text, UI labels, data |
| `--font-heading` | `DM Sans, Inter, ui-sans-serif, system-ui, sans-serif` | Page headings, section titles |
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
| `--radius-md` | `calc(var(--radius) * 0.8)` = `8px` | Buttons, inputs |
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

No custom shadow CSS variables defined. Uses Tailwind default shadow system.

| Class | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | Subtle card elevation |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Dropdowns, popovers |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Modals, large overlays |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Full-screen overlays |

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
  color: oklch(0.531 0.18 175); /* Teal */
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
  background: oklch(0.93 0.01 175);
  color: oklch(0.35 0.02 175);
}

.badge-destructive {
  background: oklch(0.93 0.02 27);
  color: oklch(0.35 0.03 27);
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
