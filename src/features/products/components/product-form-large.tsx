'use client';

import { useAppForm, useFormFields } from '@/components/ui/tanstack-form';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
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
  isEmbedded?: boolean;
  externalEditedProduct?: Product | null;
  onExternalUpdate?: (product: Product) => void;
  onExternalSubmit?: (values: ProductLargeFormValues) => void;
  onExternalCancel?: () => void;
  isExternalSubmitting?: boolean;
};

export default function ProductFormLarge({
  initialData,
  pageTitle,
  isEmbedded = false,
  externalEditedProduct,
  onExternalUpdate,
  onExternalSubmit,
  onExternalCancel,
  isExternalSubmitting = false
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
      linkVideo: initialData?.link_video ?? '',
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
        description: value.description,
        pageTitle: value.pageTitle,
        metaDescription: value.metaDescription,
        visibility: value.visibility,
        publishDate: value.publishDate,
        parentCategory: value.parentCategory,
        linkVideo: value.linkVideo
      };

      if (isEmbedded && onExternalSubmit) {
        onExternalSubmit(payload);
        return;
      }

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
        className='flex flex-1 flex-col gap-4 px-2 pt-1 pb-2 md:px-3 md:pt-2'
      >
        {/* Two-column layout */}
        {!isEmbedded && (
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold tracking-tight'>{pageTitle}</h1>
              <p className='text-muted-foreground text-sm'>
                Products / {isEdit ? 'Edit Product' : 'Add Product'}
              </p>
            </div>
            <div className='flex items-center gap-2'>
              {isEdit && (
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => {
                    form.reset();
                    router.push('/dashboard/product/new');
                  }}
                >
                  Create New
                </Button>
              )}
              <Button
                size='sm'
                type='submit'
                form='product-form-large'
                isLoading={createMutation.isPending || updateMutation.isPending}
              >
                {isEdit ? 'Update' : 'Save'}
              </Button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {/* Left column - 2/3 width */}
          <div className="space-y-3 lg:col-span-2">
            {/* Basic Information */}
            <Frame>
              <FramePanel>
                <FrameHeader className='px-2 pb-2 pt-3'>
                  <FrameTitle className='text-base'>Basic Information</FrameTitle>
                </FrameHeader>
                <div className='space-y-4 px-2 pb-2'>
                  <FormSelectField
                    name='brand'
                    label='Brand Name'
                    required
                    options={brandOptions}
                    placeholder='Select brand'
                  />

                  <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
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

                  <FormTextField
                    name='name'
                    label='Product Name'
                    required
                    placeholder='Enter product name'
                  />

                  {/* Rich text editor */}
                  <div className='group/field flex w-full flex-col gap-3'>
                    <label className='text-sm font-medium leading-snug'>
                      Description <span className='text-destructive'>*</span>
                    </label>
                    <div className='overflow-hidden rounded-lg border'>
                      {/* Toolbar */}
                      <div className='flex flex-wrap items-center gap-0.5 border-b bg-muted/50 px-2 py-1.5'>
                        {TOOLBAR_ITEMS.map((item) =>
                          item.icon === 'separator' ? (
                            <div key={item.icon} className='mx-1 h-4 w-px bg-border' />
                          ) : (
                            <ToolbarButton key={item.icon} node={item.node} label={item.label} />
                          )
                        )}
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
                <FrameHeader className='px-2 pb-2 pt-3'>
                  <FrameTitle className='text-base'>SEO</FrameTitle>
                  <FrameDescription>
                    Optimize how your product appears in search results.
                  </FrameDescription>
                </FrameHeader>
                <div className='space-y-4 px-2 pb-2'>
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
          <div className='space-y-3'>
            {/* Visibility */}
            <Frame>
              <FramePanel>
                <FrameHeader className='px-2 pb-2 pt-3'>
                  <FrameTitle className='text-base'>Visibility</FrameTitle>
                </FrameHeader>
                <div className='space-y-4 px-2 pb-2'>
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
                <FrameHeader className='px-2 pb-2 pt-3'>
                  <FrameTitle className='text-base'>Parent Category</FrameTitle>
                </FrameHeader>
                <div className='px-2 pb-2'>
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
                <FrameHeader className='px-2 pb-2 pt-3'>
                  <FrameTitle className='text-base'>Product Image</FrameTitle>
                </FrameHeader>
                <div className='px-2 pb-2'>
                  {isEdit && initialData?.product_image_cover && (
                    <div className='mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4'>
                      <ExistingImageCard src={initialData.product_image_cover} alt={initialData.ecom_product_name} />
                      {initialData.product_image_trans && initialData.product_image_trans !== initialData.product_image_cover && (
                        <ExistingImageCard src={initialData.product_image_trans} alt={`${initialData.ecom_product_name} - trans`} />
                      )}
                      {initialData.com_manufacturer_image_square_url && (
                        <ExistingImageCard src={initialData.com_manufacturer_image_square_url} alt='Brand logo' />
                      )}
                      {initialData.com_manufacturer_image_logo_url && (
                        <ExistingImageCard src={initialData.com_manufacturer_image_logo_url} alt='Brand logo' />
                      )}
                    </div>
                  )}
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

            {/* Product Video */}
            <Frame>
              <FramePanel>
                <FrameHeader className='px-2 pb-2 pt-3'>
                  <FrameTitle className='text-base'>Product Video</FrameTitle>
                </FrameHeader>
                <div className='px-2 pb-2'>
                  {isEdit && initialData?.link_video && (
                    <div className='mb-3 aspect-video overflow-hidden rounded-lg border bg-muted'>
                      <video
                        src={initialData.link_video}
                        controls
                        aria-label={`${initialData.ecom_product_name} product video`}
                        className='h-full w-full object-contain'
                        preload='metadata'
                      />
                    </div>
                  )}
                  <FormTextField
                    name='linkVideo'
                    label=''
                    placeholder='Paste video URL (YouTube, Vimeo, or direct link)'
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

const TOOLBAR_ITEMS = [
  { icon: 'bold', label: 'Bold', node: Icons.bold },
  { icon: 'italic', label: 'Italic', node: Icons.italic },
  { icon: 'underline', label: 'Underline', node: Icons.underline },
  { icon: 'strikethrough', label: 'Strikethrough', node: Icons.strikethrough },
  { icon: 'separator' },
  { icon: 'quote', label: 'Quote', node: Icons.quote },
  { icon: 'link', label: 'Link', node: Icons.link },
  { icon: 'code', label: 'Code', node: Icons.code },
  { icon: 'separator' },
  { icon: 'h1', label: 'Heading 1', node: <span className='text-xs font-bold'>H1</span> },
  { icon: 'h2', label: 'Heading 2', node: <span className='text-xs font-bold'>H2</span> },
  { icon: 'separator' },
  { icon: 'list', label: 'Bullet list', node: Icons.list },
  { icon: 'listOrdered', label: 'Numbered list', node: Icons.listOrdered },
  { icon: 'alignLeft', label: 'Align left', node: Icons.alignLeft },
  { icon: 'alignCenter', label: 'Align center', node: Icons.alignCenter },
  { icon: 'alignRight', label: 'Align right', node: Icons.alignRight },
  { icon: 'separator' },
  { icon: 'text', label: 'Text style', node: Icons.text },
  { icon: 'font', label: 'Font family', node: Icons.font },
  { icon: 'palette', label: 'Text color', node: Icons.palette }
] as const;

function ToolbarButton({ node, label }: { node: React.ReactNode; label: string }) {
  return (
    <div
      role='presentation'
      aria-hidden='true'
      className='flex h-7 w-7 items-center justify-center rounded text-muted-foreground'
    >
      {node}
    </div>
  );
}

function ExistingImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className='group relative aspect-square overflow-hidden rounded-lg border bg-muted'>
      <Image
        src={src}
        alt={alt}
        fill
        className='object-cover transition-transform group-hover:scale-105'
        sizes='(max-width: 640px) 50vw, 25vw'
      />
    </div>
  );
}
