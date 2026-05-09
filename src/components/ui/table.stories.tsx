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
import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './table';

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
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
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
          {mockData.map((user) => (
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
            <TableCell colSpan={2}>{mockData.length} users</TableCell>
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
