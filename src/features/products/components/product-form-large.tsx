'use client';

import { useAppForm, useFormFields } from '@/components/ui/tanstack-form';
import { Button } from '@/components/ui/button';
import {
  Frame,
  FramePanel,
  FrameHeader,
  FrameTitle,
  FrameDescription
} from '@/components/ui/frame';
import { Icons } from '@/components/icons';
import { createProductMutation, updateProductMutation } from '../api/mutations';
import type { Product } from '../api/types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import * as z from 'zod';
import { productLargeSchema, type ProductLargeFormValues } from '@/features/products/schemas/product-large';
import { categoryOptions, brandOptions, genderOptions, visibilityOptions } from '@/features/products/constants/product-options';

type ProductFormLargeProps = {
  initialData: Product | null;
  pageTitle: string;
};

export default function ProductFormLarge({
  initialData,
  pageTitle
}: ProductFormLargeProps) {
  const router = useRouter();
  const isEdit = !!initialData;

  const createMutation = useMutation({
    ...createProductMutation,
    onSuccess: () => {
      toast.success('Product created successfully');
      router.push('/dashboard/product');
    },
    onError: () => {
      toast.error('Failed to create product');
    }
  });

  const updateMutation = useMutation({
    ...updateProductMutation,
    onSuccess: () => {
      toast.success('Product updated successfully');
      router.push('/dashboard/product');
    },
    onError: () => {
      toast.error('Failed to update product');
    }
  });

  const form = useAppForm({
    defaultValues: {
      brand: initialData?.com_manufacturer_id?.toString() ?? '',
      category: initialData?.com_category_name ?? '',
      gender: 'unisex',
      price: initialData?.sale_price_vat,
      name: initialData?.ecom_product_name ?? '',
      description: initialData?.description ?? '',
      pageTitle: '',
      metaDescription: '',
      visibility: 'published' as const,
      publishDate: '',
      parentCategory: '',
      images: undefined
    } as ProductLargeFormValues,
    validators: {
      onSubmit: productLargeSchema
    },
    onSubmit: ({ value }) => {
      const payload = {
        name: value.name,
        category: value.category,
        price: value.price!,
        description: value.description
      };

      if (isEdit) {
        updateMutation.mutate({ id: Number(initialData.id), values: payload });
      } else {
        createMutation.mutate(payload);
      }
    }
  });

  const {
    FormTextField,
    FormSelectField,
    FormTextareaField,
    FormRadioGroupField,
    FormDatePickerField,
    FormFileUploadField
  } = useFormFields<ProductLargeFormValues>();

  return (
    <form.AppForm>
      <form.Form
        id='product-form-large'
        className='flex flex-1 flex-col gap-6 px-2 pt-1 pb-2 md:px-3 md:pt-2'
      >
        {/* Header */}
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>{pageTitle}</h1>
            <p className='text-muted-foreground text-sm'>
              Products / {isEdit ? 'Edit Product' : 'Add Product'}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='outline' size='sm'>
              Duplicate
            </Button>
            <Button
              size='sm'
              type='submit'
              form='product-form-large'
              isLoading={createMutation.isPending || updateMutation.isPending}
            >
              Save
            </Button>
          </div>
        </div>

        {/* Two-column layout */}
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          {/* Left column - 2/3 width */}
          <div className='space-y-6 lg:col-span-2'>
            {/* Basic Information */}
            <Frame>
              <FramePanel>
                <FrameHeader className='pb-4'>
                  <FrameTitle className='text-base'>Basic Information</FrameTitle>
                </FrameHeader>
                <div className='space-y-5 px-5 pb-5'>
                  <FormSelectField
                    name='brand'
                    label='Brand Name'
                    required
                    options={brandOptions}
                    placeholder='Select brand'
                  />

                  <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                    <FormSelectField
                      name='category'
                      label='Category'
                      required
                      options={categoryOptions}
                      placeholder='Select category'
                    />
                    <FormSelectField
                      name='gender'
                      label='Gender'
                      options={genderOptions}
                      placeholder='Select gender'
                    />
                    <FormTextField
                      name='price'
                      label='Price'
                      required
                      type='number'
                      min={0}
                      step={0.01}
                      placeholder='$0.00'
                    />
                  </div>

                  <FormSelectField
                    name='name'
                    label='Product Name'
                    required
                    options={brandOptions}
                    placeholder='Select product'
                  />

                  {/* Rich text editor */}
                  <div className='group/field flex w-full flex-col gap-3'>
                    <label className='text-sm font-medium leading-snug'>
                      Description <span className='text-destructive'>*</span>
                    </label>
                    <div className='overflow-hidden rounded-lg border'>
                      {/* Toolbar */}
                      <div className='flex flex-wrap items-center gap-0.5 border-b bg-muted/50 px-2 py-1.5'>
                        <ToolbarButton icon='bold' />
                        <ToolbarButton icon='italic' />
                        <ToolbarButton icon='underline' />
                        <ToolbarButton icon='strikethrough' />
                        <div className='mx-1 h-4 w-px bg-border' />
                        <ToolbarButton icon='quote' />
                        <ToolbarButton icon='link' />
                        <ToolbarButton icon='code' />
                        <div className='mx-1 h-4 w-px bg-border' />
                        <ToolbarButton icon='h1' />
                        <ToolbarButton icon='h2' />
                        <div className='mx-1 h-4 w-px bg-border' />
                        <ToolbarButton icon='list' />
                        <ToolbarButton icon='listOrdered' />
                        <ToolbarButton icon='alignLeft' />
                        <ToolbarButton icon='alignCenter' />
                        <ToolbarButton icon='alignRight' />
                        <div className='mx-1 h-4 w-px bg-border' />
                        <ToolbarButton icon='text' />
                        <ToolbarButton icon='font' />
                        <ToolbarButton icon='palette' />
                      </div>
                      {/* Editor area */}
                      <form.AppField name='description'>
                        {(field) => (
                          <field.TextareaField
                            label=''
                            required
                            placeholder='Enter product description...'
                            rows={6}
                            className='border-0 shadow-none focus-visible:ring-0'
                          />
                        )}
                      </form.AppField>
                    </div>
                  </div>
                </div>
              </FramePanel>
            </Frame>

            {/* SEO Section */}
            <Frame>
              <FramePanel>
                <FrameHeader className='pb-4'>
                  <FrameTitle className='text-base'>SEO</FrameTitle>
                  <FrameDescription>
                    Optimize how your product appears in search results.
                  </FrameDescription>
                </FrameHeader>
                <div className='space-y-5 px-5 pb-5'>
                  <FormTextField
                    name='pageTitle'
                    label='Page Title'
                    placeholder='Get free delivery, or pick up available items at an Apple Store'
                  />
                  <FormTextareaField
                    name='metaDescription'
                    label='Meta Description'
                    placeholder='Enter meta description for search engines...'
                    rows={3}
                    maxLength={160}
                  />
                </div>
              </FramePanel>
            </Frame>
          </div>

          {/* Right column - 1/3 width */}
          <div className='space-y-6'>
            {/* Visibility */}
            <Frame>
              <FramePanel>
                <FrameHeader className='pb-4'>
                  <FrameTitle className='text-base'>Visibility</FrameTitle>
                </FrameHeader>
                <div className='space-y-5 px-5 pb-5'>
                  <FormRadioGroupField
                    name='visibility'
                    label=''
                    options={visibilityOptions}
                  />
                  <FormDatePickerField
                    name='publishDate'
                    label='Publish Date'
                    placeholder='Select date'
                    description='The product will not be visible until the specified date.'
                  />
                </div>
              </FramePanel>
            </Frame>

            {/* Parent Category */}
            <Frame>
              <FramePanel>
                <FrameHeader className='pb-4'>
                  <FrameTitle className='text-base'>Parent Category</FrameTitle>
                </FrameHeader>
                <div className='px-5 pb-5'>
                  <FormSelectField
                    name='parentCategory'
                    label=''
                    options={categoryOptions}
                    placeholder='Select parent category'
                    description='Select a category that will be the parent of the current one.'
                  />
                </div>
              </FramePanel>
            </Frame>

            {/* Product Image */}
            <Frame>
              <FramePanel>
                <FrameHeader className='pb-4'>
                  <FrameTitle className='text-base'>Product Image</FrameTitle>
                </FrameHeader>
                <div className='px-5 pb-5'>
                  <FormFileUploadField
                    name='images'
                    label=''
                    description='Upload product images (up to 4 files, 5MB each)'
                    maxSize={5 * 1024 * 1024}
                    maxFiles={4}
                  />
                </div>
              </FramePanel>
            </Frame>
          </div>
        </div>
      </form.Form>
    </form.AppForm>
  );
}

function ToolbarButton({ icon }: { icon: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    bold: <Icons.bold className='h-3.5 w-3.5' />,
    italic: <Icons.italic className='h-3.5 w-3.5' />,
    underline: <Icons.underline className='h-3.5 w-3.5' />,
    strikethrough: <Icons.strikethrough className='h-3.5 w-3.5' />,
    quote: <Icons.quote className='h-3.5 w-3.5' />,
    link: <Icons.link className='h-3.5 w-3.5' />,
    code: <Icons.code className='h-3.5 w-3.5' />,
    h1: <span className='text-xs font-bold'>H1</span>,
    h2: <span className='text-xs font-bold'>H2</span>,
    list: <Icons.list className='h-3.5 w-3.5' />,
    listOrdered: <Icons.listOrdered className='h-3.5 w-3.5' />,
    alignLeft: <Icons.alignLeft className='h-3.5 w-3.5' />,
    alignCenter: <Icons.alignCenter className='h-3.5 w-3.5' />,
    alignRight: <Icons.alignRight className='h-3.5 w-3.5' />,
    text: <Icons.text className='h-3.5 w-3.5' />,
    font: <Icons.font className='h-3.5 w-3.5' />,
    palette: <Icons.palette className='h-3.5 w-3.5' />
  };

  return (
    <button
      type='button'
      className='flex h-7 w-7 items-center justify-center rounded text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground'
    >
      {iconMap[icon] || <span className='text-xs'>{icon}</span>}
    </button>
  );
}
