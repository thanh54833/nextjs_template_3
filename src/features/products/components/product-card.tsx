'use client';

import Image from 'next/image';
import { Icons } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import type { Product } from '../api/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className='group relative rounded-lg border bg-card p-3 transition-colors hover:bg-accent/50'>
      <div className='mb-2 flex items-center justify-between'>
        <div className='flex gap-1'>
          <span className='h-1.5 w-1.5 rounded-full bg-destructive' />
          <span className='h-1.5 w-1.5 rounded-full bg-muted-foreground/40' />
          <span className='h-1.5 w-1.5 rounded-full bg-muted-foreground/40' />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='rounded p-1 opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100'>
              <Icons.ellipsis className='h-4 w-4 text-muted-foreground' />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuItem>
              <Icons.edit className='mr-2 h-4 w-4' />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className='text-destructive'>
              <Icons.trash className='mr-2 h-4 w-4' />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className='relative mb-3 aspect-square overflow-hidden rounded-md bg-muted'>
        <Image
          src={product.photo_url}
          alt={product.name}
          fill
          sizes='200px'
          className='object-cover transition-transform group-hover:scale-105'
        />
      </div>

      <div className='space-y-1'>
        <h3 className='line-clamp-1 text-sm font-medium text-foreground'>{product.name}</h3>
        <p className='text-sm font-semibold text-foreground'>${product.price.toFixed(2)}</p>
        <div className='flex items-center gap-1'>
          <Icons.star className='h-3.5 w-3.5 fill-amber-400 text-amber-400' />
          <span className='text-xs font-medium text-muted-foreground'>4.6</span>
        </div>
      </div>
    </div>
  );
}
