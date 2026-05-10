# UI COMPONENTS

**Part of:** Root AGENTS.md

## OVERVIEW

shadcn/ui components + custom components (DataTable, PageContainer). 50+ components in `src/components/ui/`.

## SHARED COMPONENTS

| Component | Purpose | Key Usage |
|-----------|---------|-----------|
| `PageContainer` | Page wrapper | **ALWAYS** for page headers |
| `DataTable` | Table wrapper | TanStack Table integration |
| `DataTableToolbar` | Table filters | Search, filter controls |
| `DataTableColumnHeader` | Sortable headers | Column sorting |
| `AlertModal` | Delete confirm | Cell action delete |
| `Sheet` | Side panel form | Sheet-based editing |
| `Skeleton` | Loading state | Suspense fallback |
| `Badge` | Status badges | Variant styling |
| `Button` | Button with `isLoading` | **Use isLoading prop** |

## PAGE CONTAINER (REQUIRED)

```tsx
// For ALL dashboard pages
import PageContainer from '@/components/layout/page-container';

<PageContainer
  pageTitle="Products"
  pageDescription="Manage your products"
  pageHeaderAction={<AddButton />}  // Optional action
  infoContent={productInfoContent}  // Optional sidebar
>
  <ProductTable />
</PageContainer>
```

**NEVER** import `<Heading>` manually - PageContainer handles it.

## DATA TABLE PATTERN

```tsx
// Table with filters, sorting, pagination
const { table } = useDataTable({
  data: data.items,
  columns,
  pageCount: Math.ceil(data.total_items / params.perPage),
  shallow: true,
  debounceMs: 500,
  initialState: { columnPinning: { right: ['actions'] } }
});

return (
  <DataTable table={table}>
    <DataTableToolbar table={table} />
  </DataTable>
);
```

## BUTTON IS LOADING

```tsx
// Zero layout shift with isLoading prop
<Button isLoading={mutation.isPending}>
  Save
</Button>

// Works with form isSubmitting too
<Button type="submit" form="product-form" isLoading={form.formState.isSubmitting}>
  Create
</Button>
```

## SHADCN UI PATTERN

```bash
# Add new shadcn component
npx shadcn add component-name

# Then use cn() for class merging
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

<button className={cn(buttonVariants(), 'text-xs md:text-sm')} />
```

## ICON PATTERN

```tsx
// NEVER import from @tabler/icons-react directly
import { Icons } from '@/components/icons';

<Icons.add className="h-4 w-4" />
<Icons.trash className="h-4 w-4" />
```

## ANTI-PATTERNS

- **NEVER** use `<Heading>` directly - use PageContainer
- **NEVER** concatenate className - use `cn()`
- **NEVER** use manual loading state - use `isLoading` prop
- **NEVER** import icons from tabler - use `Icons` registry

## RELATED

- Root AGENTS.md: Icon system, page headers, button loading
- `src/features/*/components/*-tables/columns.tsx`: Column definitions