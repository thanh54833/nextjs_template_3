# HOOKS DIRECTORY

**Part of:** Root AGENTS.md

## OVERVIEW

Custom React hooks for reusable logic. 10 hook files with various utilities.

## HOOKS

| Hook | Purpose | Key Pattern |
|------|---------|------------|
| `use-data-table.ts` | Data table state | TanStack Table integration |
| `use-nav.ts` | RBAC navigation | Nav-config filtering |
| `use-stepper.ts` | Multi-step forms | Step management |
| `use-breadcrumbs.tsx` | Breadcrumb generation | Dynamic paths |
| `use-controllable-state.tsx` | Controllable state | Generic wrapper |
| `use-debounce.ts` | Debounce value | 500ms default |
| `use-debounced-callback.ts` | Debounce function | Callback debounce |
| `use-callback-ref.tsx` | Stable callback ref | useRef pattern |
| `use-mobile.tsx` | Mobile detection | Media query |
| `use-media-query.ts` | Match media query | SSR-safe |

## KEY HOOKS

### useDataTable

```typescript
// TanStack Table state management
const { table } = useDataTable({
  data,
  columns,
  pageCount,
  shallow: true,
  initialState: { columnPinning: { right: ['actions'] } }
});
```

### useNav

```typescript
// Filters nav items based on access control rules
const navItems = useFilteredNavItems(navGroups);
```

### useStepper

```typescript
// Multi-step form state
const { currentStep, next, prev, goTo } = useStepper(totalSteps);
```

## CONVENTIONS

- Hooks are `.ts` or `.tsx` files
- Use function declarations: `function useHookName() {}`
- Custom hooks for feature-specific logic go in `src/features/<name>/`

## ANTI-PATTERNS

- **NEVER** put feature-specific hooks in `src/hooks/` - put them in feature directory
- **NEVER** use `useState` in AppField render props - extract to component

## RELATED

- Root AGENTS.md: React Query patterns
- `src/components/ui/AGENTS.md`: DataTable component