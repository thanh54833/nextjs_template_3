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
        className='group relative rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50 cursor-pointer'
        onClick={() => setDetailSheetOpen(true)}
      >
        <div className='mb-2 flex items-center justify-between'>
          <div className='flex gap-1'>
            {product.is_have_discount && (
              <span className='h-1.5 w-1.5 rounded-full bg-red-500' />
            )}
            {product.is_combo && (
              <span className='h-1.5 w-1.5 rounded-full bg-blue-500' />
            )}
            {product.is_free_ship && (
              <span className='h-1.5 w-1.5 rounded-full bg-green-500' />
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <button className='rounded p-1 opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100'>
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

        <div className='relative mb-3 aspect-square overflow-hidden rounded-md bg-muted'>
          {product.product_image_cover ? (
            <Image
              src={product.product_image_cover}
              alt={product.ecom_product_name}
              fill
              sizes='200px'
              className='object-cover transition-transform group-hover:scale-105'
            />
          ) : (
            <div className='absolute inset-0 flex items-center justify-center bg-muted'>
              <span className='text-xs text-muted-foreground'>No image</span>
            </div>
          )}
          {product.is_have_discount && product.discount_percent > 0 && (
            <Badge className='absolute left-1 top-1 bg-red-500 text-white text-[10px]'>
              -{product.discount_percent.toFixed(0)}%
            </Badge>
          )}
          {product.is_combo && (
            <Badge className='absolute left-1 top-1 bg-blue-500 text-white text-[10px]'>
              Combo
            </Badge>
          )}
          {product.is_outstock && (
            <div className='absolute inset-0 flex items-center justify-center bg-black/50'>
              <span className='text-sm font-medium text-white'>Hết hàng</span>
            </div>
          )}
        </div>

        <div className='space-y-1'>
          <h3 className='line-clamp-1 text-sm font-medium text-foreground'>
            {product.ecom_product_name}
          </h3>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold text-foreground'>
              {formatPrice(product.sale_price_vat)}
            </p>
            {product.is_have_discount && product.price > product.sale_price_vat && (
              <p className='text-xs text-muted-foreground line-through'>
                {formatPrice(product.price)}
              </p>
            )}
          </div>
          <div className='flex items-center gap-1'>
            <Icons.star className='h-3.5 w-3.5 fill-amber-400 text-amber-400' />
            <span className='text-xs font-medium text-muted-foreground'>
              {product.rating_star.toFixed(1)}
            </span>
            <span className='text-xs text-muted-foreground'>
              • {product.sold_quantity.toLocaleString()} đã bán
            </span>
          </div>
          <div className='flex flex-wrap gap-1 pt-1'>
            {product.is_free_ship && (
              <Badge variant='outline' className='text-[10px]'>
                <Icons.package className='mr-1 h-3 w-3' />
                Free ship
              </Badge>
            )}
            {product.is_super_fast_delivery && (
              <Badge variant='outline' className='text-[10px]'>
                <Icons.clock className='mr-1 h-3 w-3' />
                Giao nhanh
              </Badge>
            )}
          </div>
          <p className='line-clamp-1 text-xs text-muted-foreground'>
            {product.com_category_name}
          </p>
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
