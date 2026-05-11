# FEATURES DIRECTORY

**Part of:** Root AGENTS.md

## OVERVIEW

Feature-based modules. Each feature is a self-contained domain with its own API layer, components, and patterns.

## FEATURES (9 total)

| Feature | Purpose | API Complete | Notes |
|---------|---------|-------------|-------|
| `products/` | Product CRUD + tables | ✓ 4-file API | Standard pattern |
| `users/` | User management | ✓ 4-file API | Sheet-based editing |
| `chat/` | Messaging UI | ✗ No API | Zustand store |
| `kanban/` | Drag-drop board | ✗ No API | dnd-kit + Zustand |
| `notifications/` | Notification center | ✗ No API | Zustand store |
| `overview/` | Dashboard charts | ✗ No API | Parallel routes |
| `forms/` | Form patterns | ✗ No API | Showcase only |
| `elements/` | Icons showcase | ✗ No API | No data |
| `react-query-demo/` | Query demo | Partial | Pokemon API |

## STRUCTURE PATTERN

```
src/features/<name>/
├── api/                    # Standard API layer (if data feature)
│   ├── types.ts          # Filter, response, payload types
│   ├── service.ts        # Data access (MOCK by default)
│   ├── queries.ts        # queryOptions + key factory
│   └── mutations.ts      # mutationOptions (if CRUD)
├── components/            # Feature components
│   └── product-tables/   # Tables with columns + cell-action
├── schemas/              # Zod schemas (if forms)
├── constants/            # Filter options, config
└── utils/                # Feature-specific utilities (store, helpers)
```

## API LAYER (for data features)

Only 2 files differ between mock and real backend:
1. `service.ts` - swap mock call for real API
2. `mutations.ts` - update endpoint if needed

**4-file API pattern** (products, users):

```typescript
// types.ts - contracts only
export type ProductFilters = { page?: number; limit?: number; search?: string; ... }
export type ProductsResponse = { success: boolean; products: Product[]; ... }

// service.ts - data access (THE ONE FILE TO SWAP)
export async function getProducts(filters: ProductFilters): Promise<ProductsResponse> {
  return realProducts.getProducts(filters);  // ← swap here
}

// queries.ts - NEVER change
export const productsQueryOptions = (filters: ProductFilters) =>
  queryOptions({ queryKey: productKeys.list(filters), queryFn: () => getProducts(filters) });

// mutations.ts - shared config
export const createProductMutation = mutationOptions({
  mutationFn: (data) => createProduct(data),
  onSuccess: () => { getQueryClient().invalidateQueries({ queryKey: productKeys.all }); }
});
```

## COMPONENT PATTERNS

### Listing Page (Server Component)

```tsx
// src/features/products/components/product-listing.tsx
export default function ProductListingPage() {
  const filters = { page, limit, search };
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(productsQueryOptions(filters));
  return <HydrationBoundary state={dehydrate(queryClient)}>
    <ProductGrid />  {/* Client component with useSuspenseQuery */}
  </HydrationBoundary>;
}
```

### Table Component (Client)

```tsx
// useSuspenseQuery, not useQuery
const { data } = useSuspenseQuery(productsQueryOptions(filters));
```

### Cell Action (Dropdown)

```tsx
// Uses AlertModal + useMutation + toast
// Pattern: DropdownMenu → delete item → AlertModal → confirm → mutate
```

## CONVENTIONS

- `src/features/<name>/api/` - API layer
- `src/features/<name>/components/` - Components
- `src/features/<name>/schemas/` - Zod schemas
- `src/features/<name>/constants/` - Options, config
- `src/features/<name>/utils/` - Stores (Zustand)

## SPACING CONVENTIONS

For data-dense feature pages, use compact spacing to maximize information density:

**Page-level components:**
- Container padding: `px-2 pt-1 pb-2 md:px-3 md:pt-2`
- Section gaps: `space-y-2` (not `space-y-4`)
- Header margin: `mb-2` (not `mb-4`)

**Card/Item components:**
- Padding: `p-2` or `p-3` (not `p-4` or `p-6`)
- Border radius: `rounded-md` or `rounded-lg` (not `rounded-xl`)
- Internal gaps: `gap-2` or `gap-3` (not `gap-4`)

**Lists and grids:**
- Grid gaps: `gap-1.5` to `gap-3` (not `gap-4` or `gap-6`)
- List item spacing: `space-y-1` to `space-y-1.5`

**Skeleton loaders:**
- Height: `h-8` instead of `h-10`, `h-80` instead of `h-96`

See root AGENTS.md "Compact Spacing for Content-Dense Pages" for full table.

## ANTI-PATTERNS

- **NEVER** import from `@/constants/mock-api*` in components - use service layer
- **NEVER** use `useQuery` - use `useSuspenseQuery`
- **NEVER** skip `mutations.ts` - use `mutationOptions` pattern

## RELATED

- Root AGENTS.md: Service layer architecture
- `src/lib/query-client.ts`: Query client singleton