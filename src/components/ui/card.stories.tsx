import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './card';
import { Button } from './button';
import { ProductCard } from '@/features/products/components/product-card';
import { ProductListRow } from '@/features/products/components/product-list-row';
import type { Product } from '@/constants/mock-api-products';
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

const mockProduct: Product = {
  id: '1',
  p_id: 1,
  ecom_product_id: 1001,
  ecom_product_name: 'Bộ bé trai ngắn Animo Easy HN0924024 (1-4Y, Kem)',
  ecom_product_name_unaccent: 'Bo be trai ngan Animo Easy HN0924024',
  erp_product_id: 'ERP-001',
  erp_product_name: 'Bộ bé trai ngắn Animo Easy',
  erp_category_name: 'Đồ bộ trẻ em',
  erp_category_id: 10,
  com_category_id: 10,
  com_category_name: 'Quần Áo Trẻ Em',
  com_category_name_unaccent: 'Quan Ao Tre Em',
  erp_manufacturer_id: 1,
  erp_manufacturer_name: 'Animo',
  com_manufacturer_id: 1,
  com_manufacturer_name: 'Animo',
  com_manufacturer_name_unaccent: 'Animo',
  com_manufacturer_image_square_url: '',
  com_manufacturer_image_logo_url: '',
  full_link: 'https://example.com/product/1',
  product_attributes: null,
  sold_quantity: 955,
  product_image_cover: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop',
  product_image_trans: '',
  rating_star: 5.0,
  price: 140000,
  discount_amount: 11000,
  discount_percent: 8,
  sale_price_vat: 129000,
  is_combo: false,
  is_have_discount: true,
  is_have_gift: false,
  is_order_discount: false,
  order_discount_from: 0,
  is_livestream: false,
  is_video_shopping: false,
  is_super_fast_delivery: true,
  is_free_ship: true,
  is_deleted: false,
  created_date: '2024-01-15',
  updated_date: '2024-06-20',
  sync_status_id: 1,
  is_processing: false,
  stock_quantity: 200,
  is_outstock: false,
  is_online: true,
  is_selling: true,
  popularity: 85,
  is_reference: false,
  keywords: null,
  promotion_name: '',
  promotion_begin_date: '',
  promotion_end_date: '',
  top_text: '',
  middle_text: '',
  bottom_text: '',
  center_text: '',
  combo_id: '',
  combo_name: '',
  combo_image_icon_url: '',
  combo_image_large_url: '',
  type_combo: 0,
  is_promotion_vip: false,
  promotion_id: 0,
  gift_list: null,
  product_search_staging_id: 0,
  erp_category_name: 'Đồ bộ',
  description: '',
  is_only_online: false,
  membership_type_id: 0,
  digital_type_id: 0,
  label_type: 0,
  event_uid: null,
  image_frame: '',
  frame_expired: '',
  shipping_object: [],
  quantity_per_pack: 0,
  is_have_discount: true,
};

const mockProductNoDiscount: Product = {
  ...mockProduct,
  id: '2',
  p_id: 2,
  ecom_product_id: 1002,
  ecom_product_name: 'Sữa đêm ngũ cốc Fruto Nyanya (200ml)',
  ecom_product_name_unaccent: 'Sua dem ngu coc Fruto Nyanya',
  erp_product_id: 'ERP-002',
  erp_product_name: 'Sữa đêm ngũ cốc Fruto Nyanya',
  erp_category_name: 'Sữa',
  erp_category_id: 20,
  com_category_id: 20,
  com_category_name: 'Sữa nước',
  com_category_name_unaccent: 'Sua nuoc',
  sold_quantity: 134878,
  product_image_cover: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=400&h=500&fit=crop',
  rating_star: 5.0,
  price: 36000,
  discount_amount: 0,
  discount_percent: 0,
  sale_price_vat: 36000,
  is_have_discount: false,
  is_free_ship: false,
  is_super_fast_delivery: true,
  is_combo: false,
  is_outstock: false,
};

const mockProductOutstock: Product = {
  ...mockProduct,
  id: '3',
  p_id: 3,
  ecom_product_id: 1003,
  ecom_product_name: 'Đầm bé gái công chúa Elsa (3-8Y, Xanh)',
  ecom_product_name_unaccent: 'Dam be gai cong chua Elsa',
  erp_product_id: 'ERP-003',
  erp_product_name: 'Đầm bé gái công chúa Elsa',
  erp_category_name: 'Váy đầm',
  erp_category_id: 30,
  com_category_id: 30,
  com_category_name: 'Váy Trẻ Em',
  com_category_name_unaccent: 'Vay Tre Em',
  sold_quantity: 420,
  product_image_cover: 'https://images.unsplash.com/photo-1543854589-4960d9e96b33?w=400&h=500&fit=crop',
  rating_star: 4.8,
  price: 250000,
  discount_amount: 50000,
  discount_percent: 20,
  sale_price_vat: 200000,
  is_have_discount: true,
  is_outstock: true,
  stock_quantity: 0,
};

const mockProductCombo: Product = {
  ...mockProduct,
  id: '4',
  p_id: 4,
  ecom_product_id: 1004,
  ecom_product_name: 'Combo 3 áo thun bé trai (2-6Y, Mix màu)',
  ecom_product_name_unaccent: 'Combo 3 ao thun be trai',
  erp_product_id: 'ERP-004',
  erp_product_name: 'Combo 3 áo thun bé trai',
  erp_category_name: 'Áo thun',
  erp_category_id: 40,
  com_category_id: 40,
  com_category_name: 'Áo Trẻ Em',
  com_category_name_unaccent: 'Ao Tre Em',
  sold_quantity: 2100,
  product_image_cover: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400&h=500&fit=crop',
  rating_star: 4.9,
  price: 180000,
  discount_amount: 30000,
  discount_percent: 17,
  sale_price_vat: 150000,
  is_have_discount: true,
  is_combo: true,
  is_free_ship: true,
  is_super_fast_delivery: true,
  is_outstock: false,
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
