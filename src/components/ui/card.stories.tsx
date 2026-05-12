import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './card';
import { Button } from './button';
import { ProductCard } from '@/features/products/components/product-card';
import { ProductListRow } from '@/features/products/components/product-list-row';
import { realProducts } from '@/constants/mock-api-products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000, retry: false },
  },
});

/**
 * Card component for grouping and displaying content in a container.
 *
 * @see https://ui.shadcn.com/docs/components/card
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 *
 * Card is a flexible container component that supports the following sub-components:
 * - `Card` - The main container
 * - `CardHeader` - Header section for title and description
 * - `CardTitle` - Card title text
 * - `CardDescription` - Card description text
 * - `CardAction` - Action buttons in the header
 * - `CardContent` - Main content area
 * - `CardFooter` - Footer section for actions
 */
const meta = {
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card is a container component for grouping and displaying content. It includes sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, and `CardFooter` for flexible layouts.',
      },
    },
  },
} as Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default card with header, title, description, and content */
export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
      </>
    ),
  },
};

/** Card with action buttons in header and footer */
export const WithAction: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardAction>
            <Button variant="ghost" size="icon-xs">Edit</Button>
          </CardAction>
          <CardDescription>Manage your profile settings</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your profile information</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </>
    ),
  },
};

/** Simple card with just content */
export const SimpleCard: Story = {
  args: {
    children: <CardContent>Simple card content</CardContent>,
  },
};

/** CardTitle with semantic heading element for screen reader navigation */
export const WithHeading: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle as="h3">Engagement Overview</CardTitle>
          <CardDescription>Instagram performance for the past 7 days.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Pass <code>as="h2"</code> or <code>as="h3"</code> to make CardTitle a semantic heading.
            Default is <code>div</code> for backwards compatibility.
          </p>
        </CardContent>
      </>
    ),
  },
};

const mockProduct = realProducts.records[0];
const mockProductNoDiscount = realProducts.records[1];
const mockProductOutstock = {
  ...mockProduct,
  id: '3',
  ecom_product_name: 'Đầm bé gái công chúa Elsa (3-8Y, Xanh)',
  is_outstock: true,
  stock_quantity: 0,
  is_have_discount: true,
  discount_amount: 50000,
  discount_percent: 20,
  sale_price_vat: 200000,
};
const mockProductCombo = {
  ...mockProduct,
  id: '4',
  ecom_product_name: 'Combo 3 áo thun bé trai (2-6Y, Mix màu)',
  is_combo: true,
  sold_quantity: 2100,
  discount_amount: 30000,
  discount_percent: 17,
  sale_price_vat: 150000,
};

/** ProductCard — Editorial Minimal design with discount, rating, and delivery tags */
export const ProductCardDefault: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="w-[220px]">
      <ProductCard product={mockProduct} />
    </div>
  ),
};

/** ProductCard — No discount, clean price display */
export const ProductCardNoDiscount: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="w-[220px]">
      <ProductCard product={mockProductNoDiscount} />
    </div>
  ),
};

/** ProductCard — Out of stock with frosted overlay */
export const ProductCardOutstock: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="w-[220px]">
      <ProductCard product={mockProductOutstock} />
    </div>
  ),
};

/** ProductCard — Combo product with multiple tags */
export const ProductCardCombo: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="w-[220px]">
      <ProductCard product={mockProductCombo} />
    </div>
  ),
};

/** ProductCard — Grid of 4 cards showing variety */
export const ProductCardGrid: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <ProductCard product={mockProduct} />
      <ProductCard product={mockProductNoDiscount} />
      <ProductCard product={mockProductOutstock} />
      <ProductCard product={mockProductCombo} />
    </div>
  ),
};

/** ProductListRow — Default with discount */
export const ProductListRowDefault: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="max-w-2xl">
      <ProductListRow product={mockProduct} />
    </div>
  ),
};

/** ProductListRow — No discount, clean layout */
export const ProductListRowNoDiscount: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="max-w-2xl">
      <ProductListRow product={mockProductNoDiscount} />
    </div>
  ),
};

/** ProductListRow — Out of stock */
export const ProductListRowOutstock: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="max-w-2xl">
      <ProductListRow product={mockProductOutstock} />
    </div>
  ),
};

/** ProductListRow — Combo with all tags */
export const ProductListRowCombo: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="max-w-2xl">
      <ProductListRow product={mockProductCombo} />
    </div>
  ),
};

/** ProductListRow — Stacked list of 4 products */
export const ProductListRowStacked: Story = {
  decorators: [(Story) => <QueryClientProvider client={queryClient}><Story /></QueryClientProvider>],
  render: () => (
    <div className="max-w-2xl space-y-1.5">
      <ProductListRow product={mockProduct} />
      <ProductListRow product={mockProductNoDiscount} />
      <ProductListRow product={mockProductOutstock} />
      <ProductListRow product={mockProductCombo} />
    </div>
  ),
};
