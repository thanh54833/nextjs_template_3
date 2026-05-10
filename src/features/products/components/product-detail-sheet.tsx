'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
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
  };

  const handleCancelClick = () => {
    setEditedProduct(null);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    if (editedProduct) {
      const payload = {
        name: editedProduct.ecom_product_name,
        category: editedProduct.com_category_name,
        price: editedProduct.sale_price_vat,
        description: editedProduct.description || ''
      };
      updateMutation.mutate({
        id: Number(editedProduct.id),
        values: payload
      });
    }
  };

  const handleInputChange = (field: keyof Product, value: string | number) => {
    if (editedProduct) {
      setEditedProduct({ ...editedProduct, [field]: value });
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side='right' className='flex w-full flex-col sm:max-w-[480px]'>
        <SheetHeader className='flex-row items-center justify-between space-y-0 pb-4'>
          <div className='flex-1'>
            {isEditing ? (
              <Input
                value={displayProduct.ecom_product_name}
                onChange={(e) => handleInputChange('ecom_product_name', e.target.value)}
                className='text-xl font-semibold'
              />
            ) : (
              <SheetTitle className='text-left text-xl leading-tight'>
                {product.ecom_product_name}
              </SheetTitle>
            )}
          </div>
          <div className='flex items-center gap-2'>
            {!isEditing ? (
              <Button variant='outline' size='sm' onClick={handleEditClick}>
                <Icons.edit className='mr-2 h-4 w-4' />
                Edit
              </Button>
            ) : (
              <>
                <Button variant='outline' size='sm' onClick={handleCancelClick}>
                  Cancel
                </Button>
                <Button
                  size='sm'
                  onClick={handleSaveClick}
                  disabled={updateMutation.isPending}
                >
                  {updateMutation.isPending ? 'Saving...' : 'Save'}
                </Button>
              </>
            )}
          </div>
        </SheetHeader>

        <div className='flex-1 overflow-auto space-y-6'>
          {/* Category & Brand */}
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-1'>
              <p className='text-xs text-muted-foreground'>Category</p>
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
                  className='w-full rounded-md border border-input bg-background px-3 py-2 text-sm'
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              ) : (
                <p className='text-sm font-medium'>{product.com_category_name}</p>
              )}
            </div>
            <div className='space-y-1'>
              <p className='text-xs text-muted-foreground'>Brand</p>
              <p className='text-sm font-medium'>{product.com_manufacturer_name}</p>
            </div>
          </div>

          <Separator />

          {/* Pricing */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold'>Pricing</h4>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-1'>
                <p className='text-xs text-muted-foreground'>Original Price</p>
                {isEditing ? (
                  <Input
                    type='number'
                    value={displayProduct.price}
                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value) || 0)}
                    className='text-sm'
                  />
                ) : (
                  <p className='text-sm line-through text-muted-foreground'>
                    {formatPrice(product.price)}
                  </p>
                )}
              </div>
              <div className='space-y-1'>
                <p className='text-xs text-muted-foreground'>Sale Price</p>
                {isEditing ? (
                  <Input
                    type='number'
                    value={displayProduct.sale_price_vat}
                    onChange={(e) =>
                      handleInputChange('sale_price_vat', parseFloat(e.target.value) || 0)
                    }
                    className='text-lg font-bold text-primary'
                  />
                ) : (
                  <p className='text-lg font-bold text-primary'>
                    {formatPrice(product.sale_price_vat)}
                  </p>
                )}
              </div>
            </div>
            {product.is_have_discount && product.discount_percent > 0 && (
              <Badge variant='destructive' className='text-xs'>
                -{product.discount_percent.toFixed(0)}% Discount
              </Badge>
            )}
          </div>

          <Separator />

          {/* Rating & Sales */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold'>Rating & Sales</h4>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-1'>
                <Icons.star className='h-4 w-4 fill-amber-400 text-amber-400' />
                <span className='text-sm font-medium'>{product.rating_star.toFixed(1)}</span>
                <span className='text-xs text-muted-foreground'>/ 5</span>
              </div>
              <div className='h-4 w-px bg-border' />
              <div className='space-y-0.5'>
                <p className='text-sm font-medium'>{product.sold_quantity.toLocaleString()}</p>
                <p className='text-xs text-muted-foreground'>units sold</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Stock */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold'>Stock</h4>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-1'>
                <p className='text-xs text-muted-foreground'>Status</p>
                <Badge variant={product.is_outstock ? 'destructive' : 'default'}>
                  {product.is_outstock ? 'Out of Stock' : 'In Stock'}
                </Badge>
              </div>
              <div className='space-y-1'>
                <p className='text-xs text-muted-foreground'>Stock Quantity</p>
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
                  <p className='text-sm font-medium'>{product.stock_quantity.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Features */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold'>Features</h4>
            <div className='flex flex-wrap gap-2'>
              {product.is_free_ship && (
                <Badge variant='outline' className='gap-1'>
                  <Icons.package className='h-3 w-3' />
                  Free Shipping
                </Badge>
              )}
              {product.is_super_fast_delivery && (
                <Badge variant='outline' className='gap-1'>
                  <Icons.clock className='h-3 w-3' />
                  Super Fast Delivery
                </Badge>
              )}
              {product.is_combo && <Badge variant='outline'>Combo</Badge>}
              {product.is_have_discount && <Badge variant='outline'>Discount</Badge>}
              {product.is_livestream && (
                <Badge variant='outline' className='gap-1'>
                  <Icons.video className='h-3 w-3' />
                  Livestream
                </Badge>
              )}
              {product.is_video_shopping && (
                <Badge variant='outline' className='gap-1'>
                  <Icons.clock className='h-3 w-3' />
                  Video Shopping
                </Badge>
              )}
            </div>
          </div>

          {product.product_attributes && product.product_attributes.length > 0 && (
            <>
              <Separator />
              <div className='space-y-3'>
                <h4 className='text-sm font-semibold'>Attributes</h4>
                <div className='space-y-3'>
                  {product.product_attributes.map((attr, index) => (
                    <div key={index} className='space-y-1.5'>
                      <p className='text-xs text-muted-foreground'>{attr.filter_group_name}</p>
                      <div className='flex flex-wrap gap-1.5'>
                        {attr.filter_group_attribute.map((opt, optIndex) => (
                          <Badge key={optIndex} variant='secondary' className='text-xs'>
                            {opt.name_filter}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* Description */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold'>Description</h4>
            {isEditing ? (
              <Textarea
                value={displayProduct.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                placeholder='Enter product description'
              />
            ) : (
              <p className='text-sm text-muted-foreground'>
                {product.description || 'No description available'}
              </p>
            )}
          </div>

          <Separator />

          {/* Details */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold'>Details</h4>
            <div className='space-y-2 text-sm'>
              <div className='grid grid-cols-2 gap-2'>
                <p className='text-muted-foreground'>ERP Category</p>
                <p className='font-medium'>{product.erp_category_name}</p>
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <p className='text-muted-foreground'>Product ID</p>
                <p className='font-mono text-xs'>{product.id}</p>
              </div>
              <div className='grid grid-cols-2 gap-2'>
                <p className='text-muted-foreground'>Created</p>
                <p className='text-xs'>{new Date(product.created_date).toLocaleDateString('vi-VN')}</p>
              </div>
            </div>
          </div>

          {product.keywords && product.keywords.length > 0 && (
            <>
              <Separator />
              <div className='space-y-3'>
                <h4 className='text-sm font-semibold'>Keywords</h4>
                <div className='flex flex-wrap gap-1.5'>
                  {product.keywords.slice(0, 10).map((keyword, index) => (
                    <Badge key={index} variant='secondary' className='text-xs'>
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}