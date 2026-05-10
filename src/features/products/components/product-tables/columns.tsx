'use client';
import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/components/ui/table/data-table-column-header';
import type { Product } from '../../api/types';
import { Column, ColumnDef } from '@tanstack/react-table';
import { Icons } from '@/components/icons';
import Image from 'next/image';
import { CellAction } from './cell-action';
import { CATEGORY_OPTIONS } from './options';

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'product_image_cover',
    header: 'IMAGE',
    cell: ({ row }) => {
      const src = row.getValue<string>('product_image_cover');
      return (
        <div className='relative aspect-square w-20'>
          {src ? (
            <Image
              src={src}
              alt={row.original.ecom_product_name}
              fill
              sizes='80px'
              className='rounded-lg object-cover'
            />
          ) : (
            <div className='flex h-full items-center justify-center rounded-lg bg-muted'>
              <span className='text-xs text-muted-foreground'>-</span>
            </div>
          )}
        </div>
      );
    }
  },
  {
    id: 'ecom_product_name',
    accessorKey: 'ecom_product_name',
    header: ({ column }: { column: Column<Product, unknown> }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ cell }) => <div>{cell.getValue<string>()}</div>,
    meta: {
      label: 'Name',
      placeholder: 'Search products...',
      variant: 'text',
      icon: Icons.text
    },
    enableColumnFilter: true
  },
  {
    id: 'com_category_name',
    accessorKey: 'com_category_name',
    enableSorting: false,
    header: ({ column }: { column: Column<Product, unknown> }) => (
      <DataTableColumnHeader column={column} title='Category' />
    ),
    cell: ({ cell }) => {
      const status = cell.getValue<string>();
      const Icon = status === 'active' ? Icons.circleCheck : Icons.xCircle;

      return (
        <Badge variant='outline' className='capitalize'>
          <Icon />
          {status}
        </Badge>
      );
    },
    enableColumnFilter: true,
    meta: {
      label: 'categories',
      variant: 'multiSelect',
      options: CATEGORY_OPTIONS
    }
  },
  {
    accessorKey: 'sale_price_vat',
    header: 'PRICE'
  },
  {
    accessorKey: 'description',
    header: 'DESCRIPTION'
  },

  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
