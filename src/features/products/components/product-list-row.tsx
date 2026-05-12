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

interface ProductListRowProps {
  product: Product;
}

export function ProductListRow({ product }: ProductListRowProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [detailSheetOpen, setDetailSheetOpen] = useState(false);

  return (
    <>
      <div
        className='group grid grid-cols-[80px_1fr_auto] items-center gap-3 rounded-lg border bg-card p-3 transition-all duration-200 hover:shadow-sm cursor-pointer'
        onClick={() => setDetailSheetOpen(true)}
      >
        <div className='relative aspect-square overflow-hidden rounded-md bg-muted'>
          {product.product_image_cover ? (
            <Image
              src={product.product_image_cover}
              alt={product.ecom_product_name}
              fill
              sizes='80px'
              className='object-cover'
            />
          ) : (
            <div className='flex h-full items-center justify-center'>
              <Icons.media className='h-6 w-6 text-muted-foreground/50' />
            </div>
          )}
          {product.is_outstock && (
            <div className='absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]'>
              <span className='rounded-full bg-background/90 px-2 py-0.5 text-[10px] font-medium text-foreground'>
                Hết hàng
              </span>
            </div>
          )}
        </div>

        <div className='min-w-0'>
          <p className='mb-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground'>
            {product.com_category_name}
          </p>
          <h3 className='line-clamp-1 text-sm font-medium text-foreground'>
            {product.ecom_product_name}
          </h3>
          <div className='mt-1 flex items-baseline gap-1.5'>
            <span className='text-sm font-semibold text-foreground'>
              {formatPrice(product.sale_price_vat)}
            </span>
            {product.is_have_discount && product.price > product.sale_price_vat && (
              <span className='text-xs text-muted-foreground line-through'>
                {formatPrice(product.price)}
              </span>
            )}
            {product.is_have_discount && product.discount_percent > 0 && (
              <Badge className='bg-primary/90 text-primary-foreground text-[10px] px-1.5 py-0 rounded-full'>
                -{product.discount_percent.toFixed(0)}%
              </Badge>
            )}
          </div>
        </div>

        <div className='flex flex-col items-end gap-1.5 shrink-0'>
          <div className='flex items-center gap-1.5'>
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

          {(product.is_free_ship || product.is_super_fast_delivery || product.is_combo) && (
            <div className='flex items-center gap-2'>
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
              {product.is_combo && (
                <span className='inline-flex items-center gap-0.5 text-[10px] font-medium text-muted-foreground'>
                  <Icons.package className='h-3 w-3' />
                  Combo
                </span>
              )}
            </div>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <button className='rounded-full p-1 opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100'>
                <Icons.ellipsis className='h-4 w-4 text-muted-foreground' />
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
