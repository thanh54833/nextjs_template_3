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

## PAGE CONTAINER SPACING

PageContainer uses **compact spacing** by default for data-dense admin interfaces:
- Page padding: `px-2 pt-1 pb-2 md:px-3 md:pt-2`
- Header margin: `mb-2`
- For generous spacing mode, override in page implementation

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

## STORYBOOK PATTERNS

### Story File Structure

Every component with a story follows this pattern:

```tsx
// component-name.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './component-name';

const meta = {
  component: ComponentName,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // or 'fullscreen' for layout components
  },
  argTypes: {
    // Define controls for interactive props
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};
```

### Components Requiring Context Providers

Components that need providers (Sidebar, Dialog, DropdownMenu, etc.) MUST wrap stories in decorators:

```tsx
// For Sidebar components
import { SidebarProvider } from './sidebar';

const meta = {
  component: SidebarComponent,
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
};
```

### Next.js API Mocks

Components importing `next/image` or `next/navigation` work in Storybook via mocks in `.storybook/main.ts`:
- `next/image` → `/src/__mocks__/next-image.tsx`
- `next/navigation` → `/src/__mocks__/next-navigation.ts`

**Do NOT add manual mocks in stories** - the Vite alias handles this.

### Autodocs Rules

- Use `tags: ['autodocs']` in meta for automatic documentation
- Add JSDoc comments above each story export for description
- Components requiring providers can still use autodocs

### Common Build Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot access 'Image' before initialization` | `next-image.tsx` mock re-imports from `next/image`, which Vite aliases back to itself — circular import TDZ crash | Mock must be a **self-contained** component; never `import X from 'next/image'` inside the mock file |
| `Cannot find module 'next/image'` | Missing mock | Verify `.storybook/main.ts` has alias |
| `Cannot find module 'vite'` | Missing dependency | `bun add -d vite@7` (v8 has native binding issues) |
| `rolldown binding error` | Vite 8 native bindings | Downgrade to Vite 7 |
| Accessibility scan loop | Auto a11y scanning | Set `a11y: { manual: true }` in preview |
| `Duplicate declaration` | Story export name conflicts with imported component name (e.g., `export const ProductFormLarge` while importing `ProductFormLarge` component) | Rename the story export (e.g., `ProductFormLargeLayout`) — Storybook's Babel transform conflates top-level declarations |
| `Export 'XxxProps' is not defined` | Exported a type via `export type { XxxProps }` but never declared the interface | Always declare the interface before exporting: `interface XxxProps { ... }` |
| `Failed to fetch dynamically imported module` | Add `@tiptap/react` and `@tiptap/starter-kit` to `optimizeDeps.include` |
| `Missing "." specifier in "@tiptap/pm"` | Do NOT include `@tiptap/pm` in optimizeDeps — has no root entry |

### Story Export Naming

**Never name a story export the same as an imported component.** Storybook's Babel transform treats top-level `export const` declarations as variable declarations and confuses them with imports of the same name.

```tsx
// ❌ WRONG — 'ProductFormLarge' declared twice (import + story export)
import ProductFormLarge from '@/features/products/components/product-form-large';
export const ProductFormLarge: Story = { ... }; // duplicate!

// ✅ CORRECT — rename the story export
export const ProductFormLargeLayout: Story = { ... };
```

### Component Props Type Declaration

Every component with props must have a declared interface. When exporting types, always declare first:

```tsx
// ❌ WRONG — ToolbarDividerProps referenced but never declared
const ToolbarDivider = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(...);
export type { ToolbarDividerProps }; // undefined!

// ✅ CORRECT — declare then export
interface ToolbarDividerProps extends React.HTMLAttributes<HTMLDivElement> {}
const ToolbarDivider = React.forwardRef<HTMLDivElement, ToolbarDividerProps>(...);
export { ToolbarDivider };
export type { ToolbarDividerProps };
```

### Story Organization

- One story file per component: `component-name.stories.tsx`
- Group variants as separate exports (Default, Secondary, Disabled, etc.)
- Use `render` function for complex multi-component stories
- Keep stories in same directory as component

## RELATED

- Root AGENTS.md: Icon system, page headers, button loading
- `src/features/*/components/*-tables/columns.tsx`: Column definitions
- `.storybook/main.ts`: Vite config, Next.js mocks
- `.storybook/preview.tsx`: Global decorators, a11y config
- `src/__mocks__/`: Next.js API mocks for Storybook