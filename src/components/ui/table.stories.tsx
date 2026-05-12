import type { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from './table';
import { Badge } from './badge';

/**
 * Table component for displaying structured data in rows and columns.
 *
 * @see https://ui.shadcn.com/docs/components/table
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 *
 * Table components include:
 * - `Table` - Main table container
 * - `TableHeader` - Header section with column titles
 * - `TableBody` - Body section with data rows
 * - `TableFooter` - Footer section for totals/summary
 * - `TableHead` - Column header cell
 * - `TableRow` - Table row container
 * - `TableCell` - Data cell
 * - `TableCaption` - Table caption/description
 */
const meta = {
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Table component for displaying structured data. It includes sub-components: `TableHeader`, `TableBody`, `TableFooter`, `TableHead`, `TableRow`, `TableCell`, and `TableCaption`.',
      },
    },
  },
} as Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock data for stories
const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
];

const mockProducts = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/product1/80/80',
    name: 'Wireless Headphones',
    category: 'active',
    price: '$99.99',
    description: 'High-quality wireless headphones with noise cancellation'
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/product2/80/80',
    name: 'Smart Watch',
    category: 'active',
    price: '$199.99',
    description: 'Fitness tracking smartwatch with heart rate monitor'
  },
  {
    id: 3,
    image: null,
    name: 'Bluetooth Speaker',
    category: 'inactive',
    price: '$49.99',
    description: 'Portable Bluetooth speaker with 10-hour battery life'
  },
];

/** Default table with header, body, footer, and sample data */
export const Default: Story = {
  args: {
    children: (
      <>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell colSpan={2}>{mockUsers.length} users</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};

/** Simple table with just body and rows */
export const SimpleTable: Story = {
  args: {
    children: (
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
    ),
  },
};

/** Product table with image, badges, and action patterns */
export const ProductTable: Story = {
  name: 'Product Table',
  parameters: {
    layout: 'padded',
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>IMAGE</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>PRICE</TableHead>
            <TableHead>DESCRIPTION</TableHead>
            <TableHead className="text-right">ACTIONS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <div className="relative aspect-square w-20">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center rounded-lg bg-muted">
                      <span className="text-xs text-muted-foreground">-</span>
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={`capitalize ${
                    product.category === 'active'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {product.category === 'active' ? '●' : '○'}
                  {product.category}
                </Badge>
              </TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-muted-foreground max-w-[200px] truncate">
                {product.description}
              </TableCell>
              <TableCell className="text-right">
                <button className="rounded-md border px-2 py-1 text-xs hover:bg-accent">
                  ⋮
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

/** Table with status badges in category column */
export const WithBadges: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>
              <Badge variant="default">Active</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>
              <Badge variant="secondary">Pending</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>
              <Badge variant="destructive">Inactive</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alice Williams</TableCell>
            <TableCell>
              <Badge variant="outline">Draft</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

/** Table with empty state */
export const EmptyState: Story = {
  name: 'Empty State',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

/** Table with striped rows variant */
export const StripedRows: Story = {
  name: 'Striped Rows',
  parameters: {
    backgrounds: { default: 'white' },
  },
  args: {
    className: '[&_tbody_tr:nth-child(odd)]:bg-muted/30',
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

/** Table with hover highlight on rows */
export const HoverHighlight: Story = {
  name: 'Hover Highlight',
  parameters: {
    docs: {
      description: {
        story: 'Rows highlight on hover with hover:bg-muted/50 from the base TableRow component.',
      },
    },
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

/** Table with selectable rows (checkbox simulation) */
export const SelectableRows: Story = {
  name: 'Selectable Rows',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead className="w-10">
              <input type="checkbox" className="rounded border-input" />
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id} data-state="selected">
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-input"
                  defaultChecked
                />
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

/** Compact table with smaller padding */
export const CompactTable: Story = {
  name: 'Compact Table',
  parameters: {
    docs: {
      description: {
        story: 'Table with compact spacing for data-dense displays using smaller padding classes.',
      },
    },
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead className="h-8 px-2">ID</TableHead>
            <TableHead className="h-8 px-2">Name</TableHead>
            <TableHead className="h-8 px-2">Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { id: 1, name: 'John Doe', email: 'john@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
          ].map((user) => (
            <TableRow key={user.id}>
              <TableCell className="p-2">{user.id}</TableCell>
              <TableCell className="p-2">{user.name}</TableCell>
              <TableCell className="p-2">{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

/** Table with footer showing totals */
export const WithFooter: Story = {
  name: 'With Footer',
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Item</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { item: 'Wireless Headphones', qty: 2, price: '$199.98' },
            { item: 'Smart Watch', qty: 1, price: '$199.99' },
            { item: 'Bluetooth Speaker', qty: 3, price: '$149.97' },
          ].map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.item}</TableCell>
              <TableCell className="text-right">{row.qty}</TableCell>
              <TableCell className="text-right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell className="font-medium">Total</TableCell>
            <TableCell className="text-right font-medium">6</TableCell>
            <TableCell className="text-right font-medium">$549.94</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};

/** Table with action buttons column */
export const WithActions: Story = {
  name: 'With Actions',
  parameters: {
    docs: {
      description: {
        story: 'Table with action buttons (edit/delete) in the last column, commonly used in admin interfaces.',
      },
    },
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <button className="rounded-md border px-3 py-1.5 text-xs hover:bg-accent">
                    Edit
                  </button>
                  <button className="rounded-md border border-destructive/30 px-3 py-1.5 text-xs text-destructive hover:bg-destructive/5">
                    Delete
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

/** Table with image thumbnails */
export const WithImages: Story = {
  name: 'With Images',
  parameters: {
    docs: {
      description: {
        story: 'Table with image thumbnails in the first column, commonly used for product catalogs.',
      },
    },
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { name: 'Wireless Headphones', price: '$99.99', img: 'https://picsum.photos/seed/1/80/80' },
            { name: 'Smart Watch', price: '$199.99', img: 'https://picsum.photos/seed/2/80/80' },
            { name: 'Bluetooth Speaker', price: '$49.99', img: 'https://picsum.photos/seed/3/80/80' },
          ].map((product, i) => (
            <TableRow key={i}>
              <TableCell>
                <div className="relative aspect-square w-16 overflow-hidden rounded-lg">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};

/** Table with sortable column headers simulation */
export const SortableColumns: Story = {
  name: 'Sortable Columns',
  parameters: {
    docs: {
      description: {
        story: 'Table with sortable column indicators (▲▼) typically used with TanStack Table.',
      },
    },
  },
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHead>
              <button className="flex items-center gap-1 hover:underline">
                Name
                <span className="text-muted-foreground">▲</span>
              </button>
            </TableHead>
            <TableHead>
              <button className="flex items-center gap-1 hover:underline">
                Email
                <span className="text-muted-foreground">▲</span>
              </button>
            </TableHead>
            <TableHead>
              <button className="flex items-center gap-1 hover:underline">
                Role
                <span className="text-muted-foreground">▼</span>
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
};
