'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import type { Product } from '../api/types';
import { ProductDetailSheet } from './product-detail-sheet';

function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [detailSheetOpen, setDetailSheetOpen] = useState(false);

  return (
    <>
      <div
        className='group relative flex flex-col overflow-hidden rounded-lg bg-card transition-all duration-200 hover:shadow-md cursor-pointer'
        onClick={() => setDetailSheetOpen(true)}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
            <button className='absolute right-2 top-2 z-10 rounded-full bg-background/80 p-1.5 opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100'>
              <Icons.ellipsis className='h-3.5 w-3.5 text-muted-foreground' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem onSelect={(e) => {
              e.preventDefault();
              setDetailSheetOpen(true);
            }}>
              <Icons.eyeOff className='mr-2 h-4 w-4' />
              View Details
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.edit className='mr-2 h-4 w-4' />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className='text-destructive'
              onSelect={(e) => {
                e.preventDefault();
                setDeleteDialogOpen(true);
              }}
            >
              <Icons.trash className='mr-2 h-4 w-4' />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className='relative aspect-[4/5] overflow-hidden bg-muted'>
          {product.product_image_cover ? (
            <Image
              src={product.product_image_cover}
              alt={product.ecom_product_name}
              fill
              sizes='200px'
              className='object-cover transition-transform duration-300 group-hover:scale-105'
            />
          ) : (
            <div className='absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-muted'>
              <Icons.image className='h-10 w-10 opacity-30' />
              <span className='text-xs text-muted-foreground'>No image</span>
            </div>
          )}

          <div className='absolute left-2 top-2 flex flex-col gap-1'>
            {product.is_have_discount && product.discount_percent > 0 && (
              <Badge className='bg-primary/90 text-primary-foreground text-[10px] font-medium px-1.5 py-0 rounded-full'>
                -{product.discount_percent.toFixed(0)}%
              </Badge>
            )}
            {product.is_combo && (
              <Badge className='bg-secondary/90 text-secondary-foreground text-[10px] font-medium px-1.5 py-0 rounded-full'>
                Combo
              </Badge>
            )}
          </div>

          {product.is_outstock && (
            <div className='absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]'>
              <span className='rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground'>
                Hết hàng
              </span>
            </div>
          )}
        </div>

        <div className='flex flex-1 flex-col p-3'>
          <p className='mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground'>
            {product.com_category_name}
          </p>

          <h3 className='line-clamp-2 text-sm font-medium leading-snug text-foreground'>
            {product.ecom_product_name}
          </h3>

          <div className='mt-auto pt-2'>
            <div className='flex items-baseline gap-1.5'>
              <p className='text-base font-semibold text-foreground'>
                {formatPrice(product.sale_price_vat)}
              </p>
              {product.is_have_discount && product.price > product.sale_price_vat && (
                <p className='text-xs text-muted-foreground line-through'>
                  {formatPrice(product.price)}
                </p>
              )}
            </div>

            <div className='mt-1.5 flex items-center gap-1.5'>
              <div className='flex items-center gap-1'>
                <Icons.star className='h-3 w-3 fill-amber-400 text-amber-400' />
                <span className='text-xs font-medium text-muted-foreground'>
                  {product.rating_star.toFixed(1)}
                </span>
              </div>
              <span className='text-xs text-muted-foreground'>
                · {product.sold_quantity.toLocaleString()} đã bán
              </span>
            </div>

            {(product.is_free_ship || product.is_super_fast_delivery) && (
              <div className='mt-1.5 flex items-center gap-2'>
                {product.is_free_ship && (
                  <span className='inline-flex items-center gap-0.5 text-[10px] font-medium text-muted-foreground'>
                    <Icons.package className='h-3 w-3' />
                    Free ship
                  </span>
                )}
                {product.is_super_fast_delivery && (
                  <span className='inline-flex items-center gap-0.5 text-[10px] font-medium text-muted-foreground'>
                    <Icons.clock className='h-3 w-3' />
                    Giao nhanh
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete product</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete &quot;{product.ecom_product_name}&quot;? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className='bg-destructive text-destructive-foreground hover:bg-destructive/90'>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <ProductDetailSheet
        product={product}
        open={detailSheetOpen}
        onOpenChange={setDetailSheetOpen}
      />
    </>
  );
}
