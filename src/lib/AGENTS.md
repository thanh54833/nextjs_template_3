# LIB DIRECTORY

**Part of:** Root AGENTS.md

## OVERVIEW

Shared utilities and infrastructure. Contains query client singleton, formatters, API client, and parsers.

## FILES

| File | Purpose | Notes |
|------|---------|-------|
| `utils.ts` | `cn()` utility | className merging |
| `query-client.ts` | React Query client | **SINGLETON** - SSR-safe |
| `api-client.ts` | Typed fetch wrapper | For BFF pattern |
| `searchparams.ts` | Server-side param cache | nuqs integration |
| `parsers.ts` | Sort, filter parsers | DataTable integration |
| `i18n.ts` | Internationalization | (if used) |

## QUERY CLIENT (CRITICAL)

```typescript
// src/lib/query-client.ts
// SINGLETON - created once, reused across requests
// SSR: fresh instance per request (Next.js standard)
// Client: same instance (persists)

let browserQueryClient: QueryClient | undefined;

export function getQueryClient() {
  if (isServer) {
    return new QueryClient();  // Always new per request
  }
  if (!browserQueryClient) {
    browserQueryClient = new QueryClient();  // Singleton
  }
  return browserQueryClient;
}
```

**Usage in mutations.ts:**

```typescript
import { getQueryClient } from '@/lib/query-client';

export const createProductMutation = mutationOptions({
  mutationFn: createProduct,
  onSuccess: () => {
    getQueryClient().invalidateQueries({ queryKey: productKeys.all });
  }
});
```

## CN UTILITY

```typescript
import { cn } from '@/lib/utils';

// ALWAYS use cn() - never concatenate className strings
<div className={cn('base-class', condition && 'conditional-class')} />
```

## API CLIENT (BFF Pattern)

```typescript
import { apiClient } from '@/lib/api-client';

// Typed fetch for route handlers
const data = await apiClient<ProductResponse>('/api/products', {
  method: 'POST',
  body: JSON.stringify(payload)
});
```

## SEARCH PARAMS (nuqs)

```typescript
// Server component
import { searchParamsCache } from '@/lib/searchparams';

searchParamsCache.parse(searchParams);
const page = searchParamsCache.get('page');

// Client component
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';

const [params] = useQueryStates({
  page: parseAsInteger.withDefault(1),
  search: parseAsString
}, { shallow: true });
```

## PARSERS

```typescript
import { getSortingStateParser } from '@/lib/parsers';

// For TanStack Table + nuqs integration
const sort = getSortingStateParser(columnIds).withDefault([]);
```

## TANSTACK QUERY v5 SPECIFICS

**Version**: 5.x (latest: 5.90.5)

### v5 Breaking Changes (from v4)

| v4 | v5 | Notes |
|----|----|-------|
| `isLoading` | `isPending` | Status field renamed |
| `cacheTime` | `gcTime` | Garbage collection time |
| `onSuccess`, `onError`, `onSettled` | Removed | Callbacks removed from useQuery |
| `keepPreviousData` | `placeholderData` | Replaced with function |

### Query Patterns

```typescript
// ✅ Preferred: useSuspenseQuery + Suspense
const { data } = useSuspenseQuery({
  queryKey: ['products', filters],
  queryFn: () => getProducts(filters)
});

// ⚠️ Only when component-level loading needed
const { data, isPending, error } = useQuery({
  queryKey: ['products', filters],
  queryFn: () => getProducts(filters)
});
```

### Mutation Patterns (v5)

```typescript
// ✅ mutationOptions + getQueryClient() (NOT useQueryClient)
export const createProductMutation = mutationOptions({
  mutationFn: createProduct,
  onSuccess: () => {
    getQueryClient().invalidateQueries({ queryKey: productKeys.all });
  }
});

// ✅ Compose via spread in component
const mutation = useMutation({
  ...createProductMutation,
  onSuccess: () => toast.success('Created')
});
```

### Cache Configuration

```typescript
// v5: gcTime instead of cacheTime
const { data } = useQuery({
  queryKey: ['products'],
  queryFn: getProducts,
  gcTime: 5 * 60 * 1000,  // 5 minutes garbage collection
  staleTime: 60 * 1000,   // 1 minute before refetch
  retry: 3
});
```

### Optimistic Updates

```typescript
const mutation = useMutation({
  mutationFn: updateProduct,
  onMutate: async (updated) => {
    await queryClient.cancelQueries({ queryKey: productKeys.detail(updated.id) });
    const previous = queryClient.getQueryData(productKeys.detail(updated.id));
    queryClient.setQueryData(productKeys.detail(updated.id), updated);
    return { previous };
  },
  onError: (err, updated, context) => {
    queryClient.setQueryData(productKeys.detail(updated.id), context.previous);
  },
  onSettled: (data, error, variables) => {
    queryClient.invalidateQueries({ queryKey: productKeys.detail(variables.id) });
  }
});
```

### Prefetching

```typescript
// Server-side: void (fire-and-forget)
void queryClient.prefetchQuery(productsQueryOptions(filters));

// Client-side: hover/focus prefetch
const prefetch = (id: string) => {
  queryClient.prefetchQuery(productByIdOptions(Number(id)));
};
<Link onMouseEnter={() => prefetch(product.id)}>View</Link>
```

## ANTI-PATTERNS

- **NEVER** create new QueryClient in client components - use `getQueryClient()`
- **NEVER** concatenate className strings - use `cn()`
- **NEVER** import mock APIs directly - go through service layer

## RELATED

- Root AGENTS.md: React Query patterns, data fetching
- `src/features/*/api/queries.ts`: Query key factories