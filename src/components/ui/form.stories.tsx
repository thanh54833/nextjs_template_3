import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { z } from 'zod';

import { useAppForm, useFormFields } from './tanstack-form';
import { categoryOptions } from '@/features/products/constants/product-options';
import { productSchema, type ProductFormValues } from '@/features/products/schemas/product';

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

export const ProductForm: Story = {
  render: () => <ProductFormExample />,
};
