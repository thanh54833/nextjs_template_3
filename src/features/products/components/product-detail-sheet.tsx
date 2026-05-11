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

          {/* ── Mode switcher ── */}
          <div className='flex-shrink-0 px-5 pb-4'>
            <div className='flex w-fit gap-1 rounded-lg border bg-muted p-1'>
              <button
                type='button'
                onClick={() => { if (isEditing) handleCancelClick(); }}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  !isEditing
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Read
              </button>
              <button
                type='button'
                onClick={handleEditClick}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  isEditing
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Edit
              </button>
            </div>
          </div>

          {/* ── Scrollable body ── */}
          <div className='flex-1 overflow-y-auto'>

            {/* Image strip */}
            {(coverUrl || transUrl || isEditing) && (
              <div className='px-5 pb-5'>
                <div className='flex h-44 gap-2'>
                  {/* Cover */}
                  <div
                    className={`relative flex-[3] overflow-hidden rounded-lg bg-muted ${
                      isEditing ? 'cursor-pointer' : coverUrl ? 'cursor-zoom-in' : ''
                    }`}
                    onClick={() => {
                      if (isEditing) coverInputRef.current?.click();
                      else if (coverUrl) setPreviewImage(coverUrl);
                    }}
                  >
                    {coverUrl ? (
                      <img
                        src={coverUrl}
                        alt={product.ecom_product_name}
                        className='h-full w-full object-cover'
                      />
                    ) : (
                      <div className='flex h-full w-full flex-col items-center justify-center gap-1.5 text-muted-foreground/50'>
                        <Icons.image className='h-8 w-8' />
                        {isEditing && <span className='text-xs'>Upload cover</span>}
                      </div>
                    )}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/40 transition-opacity ${
                        coverUrl || isEditing ? 'opacity-0 hover:opacity-100' : 'opacity-0'
                      }`}
                    >
                      {isEditing ? (
                        <>
                          <Icons.upload className='h-5 w-5 text-white' />
                          <span className='text-xs font-medium text-white'>
                            {coverUrl ? 'Replace' : 'Upload'}
                          </span>
                        </>
                      ) : (
                        <Icons.search className='h-5 w-5 text-white' />
                      )}
                    </div>
                  </div>

                  {/* Trans / transparent image */}
                  {transUrl && (
                    <div
                      className='relative flex-[1.5] cursor-zoom-in overflow-hidden rounded-lg bg-muted'
                      onClick={() => setPreviewImage(transUrl)}
                    >
                      <img
                        src={transUrl}
                        alt=''
                        className='h-full w-full object-contain p-2'
                      />
                      <div className='absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity hover:opacity-100'>
                        <Icons.search className='h-5 w-5 text-white' />
                      </div>
                    </div>
                  )}
                </div>

                {/* Manufacturer logo strip */}
                {product.com_manufacturer_image_logo_url && (
                  <div className='mt-2 flex items-center gap-2'>
                    <img
                      src={product.com_manufacturer_image_logo_url}
                      alt={product.com_manufacturer_name}
                      className='h-6 w-auto max-w-[80px] object-contain opacity-70'
                    />
                  </div>
                )}

                {/* Hidden file inputs */}
                <input
                  ref={coverInputRef}
                  type='file'
                  accept='image/jpeg,image/png,image/webp'
                  className='hidden'
                  onChange={handleCoverUpload}
                />

                {/* Video upload */}
                {isEditing && (
                  <div className='mt-2'>
                    <input
                      ref={videoInputRef}
                      type='file'
                      accept='video/mp4,video/quicktime'
                      className='hidden'
                      onChange={handleVideoUpload}
                    />
                    <button
                      type='button'
                      onClick={() => videoInputRef.current?.click()}
                      className='flex w-full items-center gap-2 rounded-md border border-dashed px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground'
                    >
                      <Icons.video className='h-3.5 w-3.5 flex-shrink-0' />
                      {uploadedVideoName ? (
                        <span className='truncate font-medium text-foreground'>{uploadedVideoName}</span>
                      ) : (
                        <span>Upload video (MP4, MOV)</span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className='space-y-5 px-5 pb-8'>

              {/* ── Product name ── */}
              <div className='pt-1'>
                {isEditing ? (
                  <Input
                    value={displayProduct.ecom_product_name}
                    onChange={(e) => handleInputChange('ecom_product_name', e.target.value)}
                    className='text-base font-semibold h-auto py-1.5 px-2 border-transparent bg-transparent shadow-none focus-visible:border-input focus-visible:bg-background'
                    placeholder='Tên sản phẩm'
                  />
                ) : (
                  <h3 className='text-base font-semibold leading-snug'>{product.ecom_product_name}</h3>
                )}
                <div className='mt-1.5 flex items-center gap-3'>
                  <span className='font-mono text-[11px] text-muted-foreground'>
                    #{product.ecom_product_id}
                  </span>
                  {product.erp_product_id && (
                    <span className='font-mono text-[11px] text-muted-foreground'>
                      ERP: {product.erp_product_id}
                    </span>
                  )}
                </div>
                <div className='mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5'>
                  <StatusDot active={product.is_online} label='Online' />
                  <StatusDot active={product.is_selling} label='Selling' />
                  <StatusDot active={!product.is_outstock} label='In Stock' />
                  {product.is_processing && <StatusDot active warn label='Processing' />}
                  {product.is_deleted && (
                    <span className='text-xs font-medium text-destructive'>Deleted</span>
                  )}
                </div>
              </div>

              <Separator />

              {/* ── Identity ── */}
              <div>
                <SectionLabel>Identity</SectionLabel>
                <div className='grid grid-cols-2 gap-x-6 gap-y-3 text-sm'>
                  <div>
                    <p className='mb-0.5 text-xs text-muted-foreground'>Category</p>
                    {isEditing ? (
                      <select
                        value={displayProduct.com_category_name}
                        onChange={(e) => {
                          const cat = categories.find((c) => c.name === e.target.value);
                          if (cat && editedProduct) {
                            setEditedProduct({
                              ...editedProduct,
                              com_category_name: e.target.value,
                              com_category_id: cat.id
                            });
                          }
                        }}
                        className='w-full rounded-md border border-input bg-background px-2 py-1.5 text-sm'
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <p className='font-medium'>{product.com_category_name}</p>
                    )}
                  </div>
                  <div>
                    <p className='mb-0.5 text-xs text-muted-foreground'>ERP Category</p>
                    <p className='font-medium'>{product.erp_category_name}</p>
                  </div>
                  <div className='col-span-2'>
                    <p className='mb-1 text-xs text-muted-foreground'>Brand</p>
                    <div className='flex items-center gap-2'>
                      {product.com_manufacturer_image_square_url && (
                        <img
                          src={product.com_manufacturer_image_square_url}
                          alt=''
                          className='h-5 w-5 rounded object-contain'
                        />
                      )}
                      <span className='font-medium'>{product.com_manufacturer_name}</span>
                      {product.erp_manufacturer_name &&
                        product.erp_manufacturer_name !== product.com_manufacturer_name && (
                          <span className='text-xs text-muted-foreground'>
                            ({product.erp_manufacturer_name})
                          </span>
                        )}
                    </div>
                  </div>
                  {product.full_link && (
                    <div className='col-span-2'>
                      <a
                        href={product.full_link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-1 text-xs text-primary hover:underline'
                      >
                        <Icons.externalLink className='h-3 w-3' />
                        View on website
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              {/* ── Pricing ── */}
              <div>
                <SectionLabel>Pricing</SectionLabel>
                <div className='flex items-baseline gap-3 mb-2'>
                  {isEditing ? (
                    <Input
                      type='number'
                      value={displayProduct.sale_price_vat}
                      onChange={(e) =>
                        handleInputChange('sale_price_vat', parseFloat(e.target.value) || 0)
                      }
                      className='w-36 text-base font-bold'
                    />
                  ) : (
                    <p className='text-xl font-bold text-primary'>
                      {formatPrice(product.sale_price_vat)}
                    </p>
                  )}
                  {product.price > product.sale_price_vat && (
                    <>
                      {isEditing ? (
                        <Input
                          type='number'
                          value={displayProduct.price}
                          onChange={(e) =>
                            handleInputChange('price', parseFloat(e.target.value) || 0)
                          }
                          className='w-32 text-sm'
                        />
                      ) : (
                        <p className='text-sm text-muted-foreground line-through'>
                          {formatPrice(product.price)}
                        </p>
                      )}
                    </>
                  )}
                </div>
                {hasDiscount && (
                  <div className='flex items-center gap-2 text-xs'>
                    <span className='rounded bg-destructive/10 px-1.5 py-0.5 font-semibold text-destructive'>
                      -{product.discount_percent.toFixed(0)}%
                    </span>
                    {hasSavings && (
                      <span className='text-muted-foreground'>
                        Save {formatPrice(product.discount_amount)}
                      </span>
                    )}
                  </div>
                )}
                {product.promotion_name && (
                  <div className='mt-2.5 flex items-start gap-1.5 text-xs'>
                    <Icons.sparkles className='mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-amber-500' />
                    <div className='text-muted-foreground'>
                      <span className='font-medium text-foreground'>{product.promotion_name}</span>
                      {product.promotion_begin_date && product.promotion_end_date && (
                        <span className='ml-1'>
                          {formatDate(product.promotion_begin_date)} – {formatDate(product.promotion_end_date)}
                        </span>
                      )}
                    </div>
                  </div>
                )}
                {product.is_order_discount && product.order_discount_from > 0 && (
                  <p className='mt-1.5 text-xs text-muted-foreground'>
                    Order discount from {formatPrice(product.order_discount_from)}
                  </p>
                )}
              </div>

              <Separator />

              {/* ── Stock & Sales ── */}
              <div>
                <SectionLabel>Stock & Sales</SectionLabel>
                <div className='grid grid-cols-3 gap-4 text-sm'>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Stock qty</p>
                    {isEditing ? (
                      <Input
                        type='number'
                        value={displayProduct.stock_quantity}
                        onChange={(e) =>
                          handleInputChange('stock_quantity', parseInt(e.target.value) || 0)
                        }
                        className='text-sm'
                      />
                    ) : (
                      <p className='font-semibold'>{product.stock_quantity.toLocaleString()}</p>
                    )}
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Sold</p>
                    <p className='font-semibold'>{product.sold_quantity.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className='mb-1 text-xs text-muted-foreground'>Rating</p>
                    <div className='flex items-center gap-1'>
                      <Icons.star className='h-3.5 w-3.5 fill-amber-400 text-amber-400' />
                      <span className='font-semibold'>{product.rating_star.toFixed(1)}</span>
                      <span className='text-xs text-muted-foreground'>/5</span>
                    </div>
                  </div>
                </div>
                {product.popularity > 0 && (
                  <p className='mt-2 flex items-center gap-1 text-xs text-muted-foreground'>
                    <Icons.trendingUp className='h-3 w-3' />
                    Popularity: {product.popularity.toLocaleString()}
                  </p>
                )}
              </div>

              {/* ── Features ── */}
              {featureFlags.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <SectionLabel>Features</SectionLabel>
                    <div className='flex flex-wrap gap-1.5'>
                      {featureFlags.map(({ icon, label }) => (
                        <span
                          key={label}
                          className='inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium'
                        >
                          {icon}
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* ── Attributes ── */}
              {product.product_attributes && product.product_attributes.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <SectionLabel>Attributes</SectionLabel>
                    <div className='space-y-3'>
                      {product.product_attributes.map((attr, i) => (
                        <div key={i}>
                          <p className='mb-1 text-xs text-muted-foreground'>
                            {attr.filter_group_name}
                          </p>
                          <div className='flex flex-wrap gap-1.5'>
                            {attr.filter_group_attribute.map((opt, j) => (
                              <span
                                key={j}
                                className='inline-flex rounded-md bg-muted px-2 py-0.5 text-xs font-medium'
                              >
                                {opt.name_filter}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <Separator />

              {/* ── Description ── */}
              <div>
                <div className='mb-2.5 flex items-center justify-between'>
                  <p className='text-[10px] font-semibold uppercase tracking-widest text-muted-foreground'>
                    Description
                  </p>
                  {isEditing && (
                    <button
                      type='button'
                      onClick={() => setDescPreview(!descPreview)}
                      className='text-xs text-primary hover:underline'
                    >
                      {descPreview ? 'Edit HTML' : 'Preview'}
                    </button>
                  )}
                </div>
                {isEditing && !descPreview ? (
                  <Textarea
                    value={displayProduct.description || ''}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={8}
                    placeholder='<p>Enter HTML description...</p>'
                    className='resize-y font-mono text-xs'
                  />
                ) : (
                  <div
                    className='prose prose-sm max-w-none text-sm prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-img:rounded-lg prose-headings:text-foreground [&>*]:text-foreground'
                    dangerouslySetInnerHTML={{
                      __html: displayProduct.description || '<p class="text-muted-foreground text-sm">No description available</p>'
                    }}
                  />
                )}
              </div>

              {/* ── Keywords ── */}
              {product.keywords && product.keywords.length > 0 && (
                <>
                  <Separator />
                  <div>
                    <SectionLabel>Keywords</SectionLabel>
                    <div className='flex flex-wrap gap-1.5'>
                      {product.keywords.map((kw, i) => (
                        <span
                          key={i}
                          className='inline-flex rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground'
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <Separator />

              {/* ── Details ── */}
              <div>
                <SectionLabel>Details</SectionLabel>
                <div className='space-y-2'>
                  {detailRows.map(({ label, value, mono }) => (
                    <div key={label} className='flex items-baseline justify-between gap-4'>
                      <span className='flex-shrink-0 text-xs text-muted-foreground'>{label}</span>
                      <span className={`text-right text-xs ${mono ? 'font-mono' : 'font-medium'}`}>
                        {value}
                      </span>
                    </div>
                  ))}
                  {(product.is_reference || product.is_deleted || product.is_processing) && (
                    <div className='flex flex-wrap gap-x-4 gap-y-1 pt-1'>
                      {product.is_reference && (
                        <span className='text-xs text-muted-foreground'>Reference product</span>
                      )}
                      {product.is_deleted && (
                        <span className='text-xs font-medium text-destructive'>Deleted</span>
                      )}
                      {product.is_processing && (
                        <span className='text-xs font-medium text-amber-600 dark:text-amber-400'>
                          Processing
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Edit footer ── */}
          {isEditing && (
            <div className='flex flex-shrink-0 items-center gap-2 border-t px-5 py-3'>
              <Button variant='outline' className='flex-1' onClick={handleCancelClick}>
                Cancel
              </Button>
              <Button
                className='flex-1'
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
          )}
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
