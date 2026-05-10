# CONFIG DIRECTORY

**Part of:** Root AGENTS.md

## OVERVIEW

Configuration files for navigation, data tables, and info content.

## FILES

| File | Purpose |
|------|---------|
| `nav-config.ts` | Navigation items + RBAC access control |
| `data-table.ts` | Column definitions helper |
| `infoconfig.ts` | Info content for pages |

## NAV CONFIG

```typescript
import { navGroups } from '@/config/nav-config';

// Navigation with access control
const navItem = {
  title: 'Dashboard',
  url: '/dashboard/overview',
  icon: 'dashboard',
  items: [],
  access: { requireOrg: true }  // RBAC
};
```

**Access properties:**
- `requireOrg` - Requires active organization
- `permission` - Requires specific permission
- `role` - Requires specific role
- `plan` - Requires subscription plan

## DATA TABLE CONFIG

```typescript
// Shared column configuration
export const CELL_ACTION_COLUMN = {
  id: 'actions',
  cell: ({ row }) => <CellAction data={row.original} />
};
```

## INFO CONTENT

```typescript
// Sidebar help content
export const productInfoContent = {
  title: 'Product Management',
  description: '...',
  links: [{ title: 'Docs', url: '/docs/products' }]
};
```

## ANTI-PATTERNS

- **NEVER** hardcode navigation items outside nav-config.ts
- **NEVER** use inline access checks - use nav-config access property

## RELATED

- Root AGENTS.md: Navigation & RBAC system
- `src/hooks/use-nav.ts`: Client-side nav filtering