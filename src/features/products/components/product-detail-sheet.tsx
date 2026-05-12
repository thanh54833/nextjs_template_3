'use client';

import { useState, useRef } from 'react';
import { Sheet, SheetContent, SheetTitle } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Icons } from '@/components/icons';
import { updateProductMutation } from '../api/mutations';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import type { Product } from '../api/types';
import { getUniqueCategories } from '@/constants/mock-api-products';
import ProductFormLarge from './product-form-large';
import type { ProductLargeFormValues } from '@/features/products/schemas/product-large';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
}

function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className='mb-2.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground'>
      {children}
    </p>
  );
}

function StatusDot({ active, label, warn }: { active: boolean; label: string; warn?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-medium ${
        active ? (warn ? 'text-amber-700 dark:text-amber-400' : 'text-foreground') : 'text-muted-foreground'
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full flex-shrink-0 ${
          active ? (warn ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-muted-foreground/30'
        }`}
      />
      {label}
    </span>
  );
}

interface ProductDetailSheetProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProductUpdate?: (product: Product) => void;
}

export function ProductDetailSheet({
  product,
  open,
  onOpenChange,
  onProductUpdate
}: ProductDetailSheetProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<Product | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [descPreview, setDescPreview] = useState(false);
  const [coverPreviewUrl, setCoverPreviewUrl] = useState<string | null>(null);
  const [uploadedVideoName, setUploadedVideoName] = useState<string | null>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const updateMutation = useMutation({
    ...updateProductMutation,
    onSuccess: () => {
      toast.success('Product updated successfully');
      setIsEditing(false);
      if (onProductUpdate && editedProduct) {
        onProductUpdate(editedProduct);
      }
    },
    onError: () => {
      toast.error('Failed to update product');
    }
  });

  if (!product) return null;

  const categories = getUniqueCategories();
  const displayProduct = isEditing && editedProduct ? editedProduct : product;

  const handleEditClick = () => {
    setEditedProduct({ ...product });
    setIsEditing(true);
    setDescPreview(false);
    setCoverPreviewUrl(null);
    setUploadedVideoName(null);
  };

  const handleCancelClick = () => {
    setEditedProduct(null);
    setIsEditing(false);
    setDescPreview(false);
    setCoverPreviewUrl(null);
    setUploadedVideoName(null);
  };

  const handleSaveClick = () => {
    if (!editedProduct) return;
    updateMutation.mutate({
      id: Number(editedProduct.id),
      values: {
        name: editedProduct.ecom_product_name,
        category: editedProduct.com_category_name,
        price: editedProduct.sale_price_vat,
        description: editedProduct.description || ''
      }
    });
  };

  const handleInputChange = (field: keyof Product, value: string | number) => {
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, [field]: value });
    }
  };

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setCoverPreviewUrl(URL.createObjectURL(file));
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedVideoName(file.name);
      toast.success(`Video selected: ${file.name}`);
    }
  };

  const coverUrl = coverPreviewUrl || product.product_image_cover;
  const transUrl = product.product_image_trans;
  const hasSavings = product.is_have_discount && product.discount_amount > 0;
  const hasDiscount = product.is_have_discount && product.discount_percent > 0;

  const featureFlags = [
    { show: product.is_free_ship, icon: <Icons.package className='h-3 w-3' />, label: 'Free Shipping' },
    { show: product.is_super_fast_delivery, icon: <Icons.clock className='h-3 w-3' />, label: 'Fast Delivery' },
    { show: product.is_have_gift, icon: <Icons.sparkles className='h-3 w-3' />, label: 'Gift' },
    { show: product.is_combo, icon: <Icons.product className='h-3 w-3' />, label: 'Combo' },
    { show: product.is_livestream, icon: <Icons.video className='h-3 w-3' />, label: 'Livestream' },
    { show: product.is_video_shopping, icon: <Icons.video className='h-3 w-3' />, label: 'Video Shopping' },
    { show: product.is_order_discount, icon: <Icons.badgeCheck className='h-3 w-3' />, label: 'Order Discount' }
  ].filter((f) => f.show);

  const detailRows = [
    { label: 'Ecom ID', value: String(product.ecom_product_id), mono: true },
    { label: 'ERP ID', value: product.erp_product_id, mono: true },
    { label: 'ERP Name', value: product.erp_product_name },
    { label: 'Manufacturer (ERP)', value: product.erp_manufacturer_name },
    { label: 'Sync Status', value: String(product.sync_status_id) },
    { label: 'Created', value: formatDate(product.created_date) },
    { label: 'Updated', value: formatDate(product.updated_date) }
  ].filter((r) => r.value);

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side='right'
          className='flex w-full flex-col gap-0 p-0 sm:max-w-[50vw] inset-y-2 right-2 h-[calc(100vh-1rem)] rounded-xl border shadow-xl'
        >
          {/* ── Header ── */}
          <div className='flex-shrink-0 flex items-center border-b px-5 py-4 pr-12'>
            <SheetTitle className='text-sm font-medium leading-none text-muted-foreground'>
              Chi tiết sản phẩm
            </SheetTitle>
          </div>

          {/* ── Scrollable body ── */}
          <div className='flex-1 overflow-y-auto'>
            {isEditing && editedProduct ? (
              <ProductFormLarge
                isEmbedded
                initialData={editedProduct}
                pageTitle='Edit Product'
                onExternalSubmit={(values) => {
                  updateMutation.mutate({
                    id: Number(editedProduct.id),
                    values: {
                      name: values.name,
                      category: values.category,
                      price: values.price!,
                      description: values.description
                    }
                  });
                }}
                onExternalCancel={handleCancelClick}
                isExternalSubmitting={updateMutation.isPending}
              />
            ) : (
              <div className='flex items-center justify-center h-full text-muted-foreground'>
                Click Edit to modify product
              </div>
            )}
          </div>

          {/* ── Footer ── */}
          <div className='flex flex-shrink-0 items-center justify-end gap-2 border-t px-5 py-3'>
            <Button variant='outline' onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveClick}
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? (
                <>
                  <Icons.spinner className='mr-1.5 h-3.5 w-3.5 animate-spin' />
                  Saving...
                </>
              ) : (
                'Save changes'
              )}
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* ── Image lightbox ── */}
      {previewImage && (
        <div
          className='fixed inset-0 z-[60] flex items-center justify-center bg-black/80'
          onClick={() => setPreviewImage(null)}
        >
          <button
            className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
            onClick={() => setPreviewImage(null)}
          >
            <Icons.close className='h-5 w-5' />
          </button>
          <img
            src={previewImage}
            alt=''
            className='max-h-[90vh] max-w-[90vw] rounded-lg object-contain'
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
