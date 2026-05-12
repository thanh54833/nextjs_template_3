import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { z } from 'zod';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useAppForm, useFormFields } from './tanstack-form';
import { categoryOptions } from '@/features/products/constants/product-options';
import { productSchema, type ProductFormValues } from '@/features/products/schemas/product';
import ProductFormLarge from '@/features/products/components/product-form-large';

/**
 * TanStack Form integration — the project-standard form system.
 * Use useAppForm + form.AppField for all forms in this codebase.
 *
 * @see docs/forms.md
 */
const meta = {
  title: 'UI/Form',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Project-standard form system using TanStack Form with Zod validation. Use useAppForm for all forms — not react-hook-form directly.',
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Story 1: Default — simple login form
// ---------------------------------------------------------------------------

const loginSchema = z.object({
  email: z.email('Enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});
type LoginValues = z.infer<typeof loginSchema>;

function LoginFormExample() {
  const form = useAppForm({
    defaultValues: { email: '', password: '' } as LoginValues,
    validators: { onChange: loginSchema },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 800));
      console.info('Submitted:', value);
    },
  });
  return (
    <div className="max-w-sm">
      <form.AppForm>
        <form.Form>
          <form.AppField name="email">
            {(field) => <field.TextField label="Email" type="email" placeholder="you@socialdash.io" />}
          </form.AppField>
          <form.AppField name="password">
            {(field) => <field.TextField label="Password" type="password" placeholder="Min 8 characters" />}
          </form.AppField>
          <form.SubmitButton>Sign in</form.SubmitButton>
        </form.Form>
      </form.AppForm>
    </div>
  );
}

/** Basic form with Zod validation — submit with empty fields to see errors. */
export const Default: Story = {
  render: () => <LoginFormExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitBtn = canvas.getByRole('button', { name: /sign in/i });
    await userEvent.click(submitBtn);
  },
};

// ---------------------------------------------------------------------------
// Story 2: WithPrefilledData — profile edit form pre-populated with values
// ---------------------------------------------------------------------------

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Enter a valid email'),
  bio: z.string().max(160, 'Bio max 160 characters').optional(),
});
type ProfileValues = z.infer<typeof profileSchema>;

function ProfileFormExample() {
  const form = useAppForm({
    defaultValues: {
      name: 'Alex Johnson',
      email: 'alex@socialdash.io',
      bio: 'Social media manager, 5 years experience with B2C brands.',
    } as ProfileValues,
    validators: { onChange: profileSchema },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 800));
      console.info('Saved:', value);
    },
  });
  return (
    <div className="max-w-sm">
      <form.AppForm>
        <form.Form>
          <form.AppField name="name">
            {(field) => <field.TextField label="Display name" />}
          </form.AppField>
          <form.AppField name="email">
            {(field) => <field.TextField label="Email" type="email" />}
          </form.AppField>
          <form.AppField name="bio">
            {(field) => <field.TextField label="Bio" description="Max 160 characters" />}
          </form.AppField>
          <form.SubmitButton>Save changes</form.SubmitButton>
        </form.Form>
      </form.AppForm>
    </div>
  );
}

/** Profile edit form pre-populated with data. */
export const WithPrefilledData: Story = {
  render: () => <ProfileFormExample />,
};

// ---------------------------------------------------------------------------
// Story 3: ValidationErrors — form pre-seeded with invalid values
// ---------------------------------------------------------------------------

function ValidationExample() {
  const form = useAppForm({
    defaultValues: { email: 'not-an-email', password: '123' } as LoginValues,
    validators: { onChange: loginSchema },
    onSubmit: async ({ value }) => {
      console.info('Submitted:', value);
    },
  });
  return (
    <div className="max-w-sm space-y-4">
      <form.AppForm>
        <form.Form>
          <form.AppField name="email">
            {(field) => <field.TextField label="Email" type="email" />}
          </form.AppField>
          <form.AppField name="password">
            {(field) => <field.TextField label="Password" type="password" />}
          </form.AppField>
          <form.SubmitButton>Submit</form.SubmitButton>
        </form.Form>
      </form.AppForm>
      <p className="text-xs text-muted-foreground px-2">
        Form pre-seeded with invalid values. Type in either field to trigger validation.
      </p>
    </div>
  );
}

/** Form with invalid pre-seeded values. Type in a field to trigger inline validation errors. */
export const ValidationErrors: Story = {
  render: () => <ValidationExample />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByLabelText(/email/i);
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'still-invalid');
  },
};

function ProductFormExample() {
  const form = useAppForm({
    defaultValues: {
      image: undefined,
      name: '',
      category: '',
      price: undefined,
      description: ''
    } as ProductFormValues,
    validators: { onSubmit: productSchema },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 800));
      console.info('Product submitted:', value);
    },
  });

  const { FormTextField, FormSelectField, FormTextareaField, FormFileUploadField } =
    useFormFields<ProductFormValues>();

  return (
    <div className="flex flex-1 space-y-4 px-2 pt-1 pb-2 md:px-3 md:pt-2">
      <form.AppForm>
        <form.Form className="mx-auto w-full max-w-none flex-col gap-0 p-0">
          <div className="space-y-8 px-5 py-4">
            <FormFileUploadField
              name="image"
              label="Product Image"
              description="Upload a product image"
              maxSize={5 * 1024 * 1024}
              maxFiles={4}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormTextField
                name="name"
                label="Product Name"
                required
                placeholder="Enter product name"
              />

              <FormSelectField
                name="category"
                label="Category"
                required
                options={categoryOptions}
                placeholder="Select category"
              />

              <FormTextField
                name="price"
                label="Price"
                required
                type="number"
                min={0}
                step={0.01}
                placeholder="Enter price"
              />
            </div>

            <FormTextareaField
              name="description"
              label="Description"
              required
              placeholder="Enter product description"
              maxLength={500}
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <form.SubmitButton>Add Product</form.SubmitButton>
          </div>
        </form.Form>
      </form.AppForm>
    </div>
  );
}

/** Product creation form — file upload, name, category, price, description. */
export const ProductForm: Story = {
  render: () => <ProductFormExample />,
};

// ---------------------------------------------------------------------------
// Story 4b: ProductFormFilled — product form pre-filled with all data
// ---------------------------------------------------------------------------

const productFilledData: ProductFormValues = {
  image: undefined,
  name: 'Sữa đêm ngũ cốc Fruto Nyanya (200ml)',
  category: '842',
  price: 36000,
  description:
    'Tên sản phẩm: Combo 2 Sữa đêm ngũ cốc Fruto Nyanya (200ml). Thương hiệu: Fruto Nyanya. Xuất xứ thương hiệu: Nga. Dung tích: 200ml. Nhà sản xuất: AO Progess. Độ tuổi phù hợp: Trẻ từ 6 tháng tuổi.'
};

function ProductFormFilledExample() {
  const form = useAppForm({
    defaultValues: productFilledData,
    validators: { onSubmit: productSchema },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 800));
      console.info('Product submitted:', value);
    },
  });

  const { FormTextField, FormSelectField, FormTextareaField, FormFileUploadField } =
    useFormFields<ProductFormValues>();

  return (
    <div className="flex flex-1 space-y-4 px-2 pt-1 pb-2 md:px-3 md:pt-2">
      <form.AppForm>
        <form.Form className="mx-auto w-full max-w-none flex-col gap-0 p-0">
          <div className="space-y-8 px-5 py-4">
            <FormFileUploadField
              name="image"
              label="Product Image"
              description="Upload a product image"
              maxSize={5 * 1024 * 1024}
              maxFiles={4}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FormTextField
                name="name"
                label="Product Name"
                required
                placeholder="Enter product name"
              />

              <FormSelectField
                name="category"
                label="Category"
                required
                options={categoryOptions}
                placeholder="Select category"
              />

              <FormTextField
                name="price"
                label="Price"
                required
                type="number"
                min={0}
                step={0.01}
                placeholder="Enter price"
              />
            </div>

            <FormTextareaField
              name="description"
              label="Description"
              required
              placeholder="Enter product description"
              maxLength={500}
              rows={4}
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t">
            <form.SubmitButton>Add Product</form.SubmitButton>
          </div>
        </form.Form>
      </form.AppForm>
    </div>
  );
}

/** Product creation form pre-filled with all data — brand, category, price, description, images. */
export const ProductFormFilled: Story = {
  render: () => <ProductFormFilledExample />,
};

// ---------------------------------------------------------------------------
// Story 5: ProductFormLarge — blank product form (two-column layout)
// ---------------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 60 * 1000 },
    mutations: { retry: false }
  }
});

/** Product creation form with two-column layout — brand, category, gender, price, rich text description, SEO, visibility, and image upload. All fields empty. */
export const ProductFormLargeLayout: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <ProductFormLarge initialData={null} pageTitle="Add Product" />
    </QueryClientProvider>
  ),
};

// ---------------------------------------------------------------------------
// Story 5b: ProductFormLargeLayoutFilled — pre-filled two-column layout
// ---------------------------------------------------------------------------

const sampleProduct: Product = {
  product_search_staging_id: 26477,
  p_id: 102658,
  ecom_product_id: 52563,
  ecom_product_name: 'Sữa đêm ngũ cốc Fruto Nyanya (200ml)',
  ecom_product_name_unaccent: 'Sua dem ngu coc Fruto Nyanya (200ml)',
  erp_product_id: '4404000000001',
  erp_product_name: 'Sữa đêm ngũ cốc Fruto Nyanya (200ml)',
  erp_category_name: 'Sữa đêm Fruto',
  erp_category_id: 4404,
  com_category_id: 842,
  com_category_name: 'Sữa nước',
  com_category_name_unaccent: 'Sua nuoc',
  erp_manufacturer_id: 0,
  erp_manufacturer_name: '',
  com_manufacturer_id: 954,
  com_manufacturer_name: 'Fruto Nyanya',
  com_manufacturer_name_unaccent: 'Fruto Nyanya',
  com_manufacturer_image_square_url: 'https://cdn1.concung.com/img/m/2022/09/954_logo_vuong1662634505.png',
  com_manufacturer_image_logo_url: 'https://cdn1.concung.com/img/954_logo-1642490615.png',
  full_link: '/sua-tuoi-cac-loai/sua-dem-ngu-coc-fruto-nyanya-200ml-52563.html',
  product_attributes: null,
  sold_quantity: 134878,
  product_image_cover: 'https://cdn1.concung.com/2021/10/52563-76453-large_mobile/sua-dem-ngu-coc-fruto-nyanya-200ml.jpg',
  product_image_trans: 'https://cdn1.concung.com/2021/10/52563-76453-large_mobile/sua-dem-ngu-coc-fruto-nyanya-200ml.png',
  rating_star: 5,
  top_text: '',
  middle_text: '',
  bottom_text: '',
  center_text: '',
  price: 36000,
  discount_amount: 0,
  discount_percent: 0,
  sale_price_vat: 36000,
  is_combo: false,
  is_have_discount: false,
  is_have_gift: false,
  is_order_discount: false,
  order_discount_from: 0,
  is_livestream: false,
  is_video_shopping: false,
  is_super_fast_delivery: false,
  is_free_ship: false,
  is_deleted: false,
  created_date: '2021-10-01',
  updated_date: '2024-01-15',
  sync_status_id: 1,
  is_processing: false,
  stock_quantity: 1000,
  is_outstock: false,
  is_online: true,
  is_selling: true,
  popularity: 95,
  is_reference: false,
  keywords: ['sữa đêm', 'Fruto Nyanya', 'ngũ cốc'],
  promotion_name: '',
  promotion_begin_date: '1999-01-01 00:00:00.000000',
  promotion_end_date: '1999-01-01 00:00:00.000000',
  id: '52563',
  description:
    'Tên sản phẩm: Combo 2 Sữa đêm ngũ cốc Fruto Nyanya (200ml). Thương hiệu: Fruto Nyanya. Xuất xứ thương hiệu: Nga. Dung tích: 200ml. Nhà sản xuất: AO Progess. Độ tuổi phù hợp: Trẻ từ 6 tháng tuổi.',
  combo_id: '',
  combo_name: '',
  combo_image_icon_url: '',
  combo_image_large_url: '',
  type_combo: 0,
  is_promotion_vip: false,
  promotion_id: 0,
  gift_list: null,
  shipping_object: [],
  created_user: null,
  updated_user: null,
  sync_status_date: '',
  checksum: '',
  created_unix_time: 0,
  updated_unix_time: 0,
  sync_note: null,
  tranform_noted: '',
  embedding_reason_of_failure: '',
  image_embedding_sync_status_id: 0,
  image_embedding_sync_status_date: '',
  image_frame: '',
  frame_expired: '',
  label_type: 0,
  membership_type_id: 0,
  quantity_per_pack: 0,
  digital_type_id: 0,
  event_uid: null,
  link_video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  text_online: '',
  description_content: '',
  date_start_quick_sale: '',
  date_end_quick_sale: '',
  is_only_online: false,
  sync_not_sale_status_id: 0,
  sync_not_sale_status_date: '',
  semantic_sync_status_id: 0,
  semantic_sync_status_date: '',
  sync_public_state: 0,
  sync_internal_state: 0,
  sync_semantic_state: 0,
  sync_image_state: 0,
  is_syncing_public: false,
  is_syncing_internal: false,
  is_syncing_semantic: false,
  is_syncing_image: false,
  sold_quantity_ranking: 0,
  product_score: 0,
  gp_ranking: 0,
  popularity_ranking: 0,
  promo_ranking: 0,
  gm_ranking: 0,
  deleted_typesense_ids: [],
  sync_stock_typesense_ids: []
};

/** Product creation form with two-column layout pre-filled with data. */
export const ProductFormLargeLayoutFilled: Story = {
  render: () => (
    <QueryClientProvider client={queryClient}>
      <ProductFormLarge initialData={sampleProduct} pageTitle="Edit Product" />
    </QueryClientProvider>
  ),
};
