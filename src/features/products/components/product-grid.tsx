'use client';

import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';
import { getSortingStateParser } from '@/lib/parsers';
import { productsQueryOptions } from '../api/queries';
import { ProductCard } from './product-card';
import { ProductFilters } from './product-filters';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const columnIds = ['name', 'category', 'price', 'description'];

export function ProductGrid() {
  const [params, setParams] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(8),
    name: parseAsString,
    category: parseAsString,
    sort: getSortingStateParser(columnIds).withDefault([])
  });

  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'non-active'>('all');
  const [searchValue, setSearchValue] = useState(params.name || '');

  const filters = {
    page: params.page,
    limit: params.perPage,
    ...(params.name && { search: params.name }),
    ...(params.category && { categories: params.category }),
    ...(params.sort.length > 0 && { sort: JSON.stringify(params.sort) })
  };

  const { data } = useSuspenseQuery(productsQueryOptions(filters));
  const pageCount = Math.ceil(data.total_products / params.perPage);

  const handleSearch = () => {
    setParams({ name: searchValue || null, page: 1 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex gap-4'>
      <ProductFilters />

      <div className='flex-1 space-y-4'>
        <div className='flex flex-wrap items-center gap-3'>
          <div className='flex gap-1 rounded-lg border bg-muted p-1'>
            {(['all', 'active', 'non-active'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab === 'all' ? 'All' : tab === 'active' ? 'Active' : 'Non Active'}
              </button>
            ))}
          </div>

          <div className='relative flex-1 min-w-[200px]'>
            <Icons.search className='absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              placeholder='Search product'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className='h-8 pl-9 text-xs'
            />
          </div>

          <Button variant='outline' size='sm' className='h-8 gap-1.5 text-xs'>
            <Icons.adjustments className='h-3.5 w-3.5' />
            Filter
          </Button>

          <Button size='sm' className='h-8 gap-1.5 text-xs bg-foreground text-background hover:bg-foreground/90'>
            <Icons.add className='h-3.5 w-3.5' />
            New Product
          </Button>
        </div>

        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-xs text-muted-foreground'>
            <span>Show</span>
            <Select
              value={String(params.perPage)}
              onValueChange={(value) => setParams({ perPage: parseInt(value), page: 1 })}
            >
              <SelectTrigger className='h-7 w-16 text-xs'>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='8'>8</SelectItem>
                <SelectItem value='12'>12</SelectItem>
                <SelectItem value='20'>20</SelectItem>
              </SelectContent>
            </Select>
            <span>Per Page</span>
          </div>

          <div className='flex items-center gap-1'>
            <Button
              variant='outline'
              size='sm'
              className='h-7 w-7 p-0'
              disabled={params.page <= 1}
              onClick={() => setParams({ page: params.page - 1 })}
            >
              <Icons.chevronLeft className='h-3.5 w-3.5' />
            </Button>

            {Array.from({ length: Math.min(5, pageCount) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <Button
                  key={pageNum}
                  variant={params.page === pageNum ? 'default' : 'outline'}
                  size='sm'
                  className={`h-7 w-7 p-0 text-xs ${
                    params.page === pageNum
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : ''
                  }`}
                  onClick={() => setParams({ page: pageNum })}
                >
                  {pageNum}
                </Button>
              );
            })}

            {pageCount > 5 && (
              <>
                <span className='px-1 text-xs text-muted-foreground'>...</span>
                <Button
                  variant='outline'
                  size='sm'
                  className='h-7 w-7 p-0 text-xs'
                  onClick={() => setParams({ page: pageCount })}
                >
                  {pageCount}
                </Button>
              </>
            )}

            <Button
              variant='outline'
              size='sm'
              className='h-7 w-7 p-0'
              disabled={params.page >= pageCount}
              onClick={() => setParams({ page: params.page + 1 })}
            >
              <Icons.chevronRight className='h-3.5 w-3.5' />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
