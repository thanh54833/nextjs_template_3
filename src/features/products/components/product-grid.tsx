'use client';

import { useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { parseAsInteger, parseAsString, parseAsBoolean, useQueryStates } from 'nuqs';
import { productsQueryOptions } from '../api/queries';
import { ProductCard } from './product-card';
import { ProductListRow } from './product-list-row';
import { ProductFilters } from './product-filters';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription } from '@/components/ui/empty';
import { Pagination } from '@/components/ui/pagination';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ActiveFilterChips } from './active-filter-chips';

export function ProductGrid() {
  const [params, setParams] = useQueryStates({
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(12),
    name: parseAsString,
    categories: parseAsString,
    manufacturers: parseAsString,
    priceMin: parseAsInteger,
    priceMax: parseAsInteger,
    hasDiscount: parseAsBoolean,
    isFreeShip: parseAsBoolean,
    isSuperFastDelivery: parseAsBoolean,
    isSelling: parseAsBoolean,
    stockStatus: parseAsString,
    sortBy: parseAsString
  });

  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'non-active'>('all');
  const [searchValue, setSearchValue] = useState(params.name || '');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = {
    page: params.page,
    limit: params.perPage,
    ...(params.name && { search: params.name }),
    ...(params.categories && { categories: params.categories }),
    ...(params.manufacturers && { manufacturers: params.manufacturers }),
    ...(params.priceMin !== null && { priceMin: params.priceMin }),
    ...(params.priceMax !== null && { priceMax: params.priceMax }),
    ...(params.hasDiscount === true && { hasDiscount: true }),
    ...(params.isFreeShip === true && { isFreeShip: true }),
    ...(params.isSuperFastDelivery === true && { isSuperFastDelivery: true }),
    ...(params.isSelling === true && { isSelling: true }),
    ...(params.stockStatus && { stockStatus: params.stockStatus as 'all' | 'in_stock' | 'out_stock' }),
    ...(params.sortBy && {
      sortBy: params.sortBy.split(':')[0] as 'sold_quantity' | 'created_date' | 'price' | 'rating_star',
      sortOrder: params.sortBy.split(':')[1] as 'asc' | 'desc'
    })
  };

  const { data, isFetching } = useSuspenseQuery(productsQueryOptions(filters));
  const pageCount = Math.ceil(data.total_products / params.perPage);

  const handleSearch = () => {
    setParams({ name: searchValue || null, page: 1 });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const hasProducts = data.products.length > 0;

  return (
    <div className='flex gap-2'>
      <div className='hidden lg:block lg:self-start lg:sticky lg:top-2'>
        <ProductFilters
          collapsed={filtersCollapsed}
          onToggleCollapse={() => setFiltersCollapsed(!filtersCollapsed)}
        />
      </div>

      <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <SheetTrigger asChild>
          <div className='lg:hidden'>
            <ProductFilters />
          </div>
        </SheetTrigger>
        <SheetContent side='left' className='w-80 p-0'>
          <ProductFilters />
        </SheetContent>
      </Sheet>

<div className='flex-1'>
        <div className='flex flex-wrap items-center gap-2'>
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'all' | 'active' | 'non-active')}>
            <TabsList className='h-9'>
              <TabsTrigger value='all' className='px-3 text-xs'>All</TabsTrigger>
              <TabsTrigger value='active' className='px-3 text-xs'>Active</TabsTrigger>
              <TabsTrigger value='non-active' className='px-3 text-xs'>Non Active</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* CENTER: Search input — dominant, takes available space */}
          <div className='relative min-w-[200px] flex-1'>
            <Icons.search className='absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input
              placeholder='Search product...'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className='h-9 pl-8 text-sm'
            />
          </div>

          <div className='flex gap-2'>
            <div className='flex gap-1 rounded-lg border bg-muted p-1'>
              <button
                type='button'
                onClick={() => setViewMode('grid')}
                className={`rounded-md p-1.5 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label='Grid view'
              >
                <Icons.layoutGrid className='h-4 w-4' />
              </button>
              <button
                type='button'
                onClick={() => setViewMode('list')}
                className={`rounded-md p-1.5 transition-colors ${
                  viewMode === 'list'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label='List view'
              >
                <Icons.list className='h-4 w-4' />
              </button>
            </div>

            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant='outline' size='sm' className='h-9 gap-1.5 text-sm lg:hidden'>
                  <Icons.adjustments className='h-3.5 w-3.5' />
                  Filter
                  {data.total_products > 0 && (
                    <span className='ml-1 text-muted-foreground'>({data.total_products})</span>
                  )}
                </Button>
              </SheetTrigger>
            </Sheet>
          </div>
        </div>

        {isFetching && (
          <div className='flex items-center justify-center py-8'>
            <Icons.spinner className='h-6 w-6 animate-spin text-muted-foreground' />
          </div>
        )}

        <div className='mt-2'>
          <ActiveFilterChips />
        </div>

        {!hasProducts && !isFetching && (
          <Empty className='py-12'>
            <EmptyHeader>
              <EmptyMedia variant='icon'>
                <Icons.search className='h-6 w-6 text-muted-foreground' />
              </EmptyMedia>
              <EmptyTitle>No products found</EmptyTitle>
              <EmptyDescription>Try adjusting your search or filter criteria</EmptyDescription>
            </EmptyHeader>
          </Empty>
        )}

        {hasProducts && viewMode === 'grid' && (
          <div className='mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {hasProducts && viewMode === 'list' && (
          <div className='mt-2 space-y-1.5'>
            {data.products.map((product) => (
              <ProductListRow key={product.id} product={product} />
            ))}
          </div>
        )}

        {hasProducts && (
          <div className='mt-3 border-t pt-2'>
            <Pagination
              currentPage={params.page}
              totalPages={pageCount}
              onPageChange={(page) => setParams({ page })}
              perPage={params.perPage}
              showPerPageSelect={true}
              onPerPageChange={(perPage) => setParams({ perPage, page: 1 })}
            />
          </div>
        )}
      </div>
    </div>
  );
}
