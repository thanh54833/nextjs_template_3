'use client';

import { useState, useMemo } from 'react';
import { useQueryState, parseAsString, parseAsInteger, parseAsBoolean } from 'nuqs';
import { Icons } from '@/components/icons';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { categoryOptions, brandOptions, sortOptions, stockStatusOptions } from '../constants/product-options';

const PRICE_MIN = 0;
const PRICE_MAX = 500000;
const PRICE_STEP = 10000;

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  onClear?: () => void;
  defaultExpanded?: boolean;
}

function FilterSection({ title, children, onClear, defaultExpanded = true }: FilterSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between'>
        <button
          type='button'
          onClick={() => setExpanded(!expanded)}
          className='flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors'
        >
          <Icons.chevronDown
            className={cn(
              'h-4 w-4 text-muted-foreground transition-transform duration-200',
              !expanded && '-rotate-90'
            )}
          />
          {title}
        </button>
        {onClear && (
          <button
            type='button'
            onClick={onClear}
            className='rounded p-1 hover:bg-muted transition-colors'
            aria-label={`Clear ${title} filter`}
          >
            <Icons.close className='h-3.5 w-3.5 text-muted-foreground' />
          </button>
        )}
      </div>
      {expanded && children}
    </div>
  );
}

function formatPrice(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(value);
}

export interface ProductFiltersProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export function ProductFilters({ collapsed, onToggleCollapse }: ProductFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useQueryState('categories');
  const [selectedManufacturers, setSelectedManufacturers] = useQueryState('manufacturers');
  const [priceMin, setPriceMin] = useQueryState('priceMin', parseAsInteger);
  const [priceMax, setPriceMax] = useQueryState('priceMax', parseAsInteger);
  const [hasDiscount, setHasDiscount] = useQueryState('hasDiscount', parseAsBoolean);
  const [isFreeShip, setIsFreeShip] = useQueryState('isFreeShip', parseAsBoolean);
  const [isSuperFastDelivery, setIsSuperFastDelivery] = useQueryState('isSuperFastDelivery', parseAsBoolean);
  const [isSelling, setIsSelling] = useQueryState('isSelling', parseAsBoolean);
  const [stockStatus, setStockStatus] = useQueryState('stockStatus');
  const [sortBy, setSortBy] = useQueryState('sortBy');

  const selectedCategoriesList = selectedCategories
    ? selectedCategories.split(',').filter(Boolean)
    : [];
  const selectedManufacturersList = selectedManufacturers
    ? selectedManufacturers.split(',').filter(Boolean)
    : [];

  const toggleCategory = (categoryId: string) => {
    const current = selectedCategoriesList;
    if (current.includes(categoryId)) {
      const newList = current.filter((c) => c !== categoryId);
      setSelectedCategories(newList.length > 0 ? newList.join(',') : null);
    } else {
      setSelectedCategories([...current, categoryId].join(','));
    }
  };

  const toggleManufacturer = (manufacturerId: string) => {
    const current = selectedManufacturersList;
    if (current.includes(manufacturerId)) {
      const newList = current.filter((m) => m !== manufacturerId);
      setSelectedManufacturers(newList.length > 0 ? newList.join(',') : null);
    } else {
      setSelectedManufacturers([...current, manufacturerId].join(','));
    }
  };

  const clearCategories = () => setSelectedCategories(null);
  const clearManufacturers = () => setSelectedManufacturers(null);
  const clearPrice = () => {
    setPriceMin(null);
    setPriceMax(null);
  };
  const clearDiscount = () => setHasDiscount(null);
  const clearFreeShip = () => setIsFreeShip(null);
  const clearFastDelivery = () => setIsSuperFastDelivery(null);
  const clearSelling = () => setIsSelling(null);
  const clearStock = () => setStockStatus(null);
  const clearSort = () => setSortBy(null);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategoriesList.length > 0) count += selectedCategoriesList.length;
    if (selectedManufacturersList.length > 0) count += selectedManufacturersList.length;
    if (priceMin !== null || priceMax !== null) count += 1;
    if (hasDiscount === true) count += 1;
    if (isFreeShip === true) count += 1;
    if (isSuperFastDelivery === true) count += 1;
    if (isSelling === true) count += 1;
    if (stockStatus !== null) count += 1;
    if (sortBy !== null) count += 1;
    return count;
  }, [selectedCategoriesList, selectedManufacturersList, priceMin, priceMax, hasDiscount, isFreeShip, isSuperFastDelivery, isSelling, stockStatus, sortBy]);

  const clearAll = () => {
    clearCategories();
    clearManufacturers();
    clearPrice();
    clearDiscount();
    clearFreeShip();
    clearFastDelivery();
    clearSelling();
    clearStock();
    clearSort();
  };

  // Slider needs controlled values; fall back to full range when no filter is set
  const sliderMin = priceMin ?? PRICE_MIN;
  const sliderMax = priceMax ?? PRICE_MAX;

  return (
    <div
      className={cn(
        'shrink-0 rounded-lg border bg-card transition-all duration-200 ease-out',
        collapsed ? 'w-8 overflow-hidden' : 'w-64'
      )}
    >
      {collapsed ? (
        <button
          type='button'
          onClick={onToggleCollapse}
          className='flex h-10 w-full items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors'
          aria-label='Expand filters'
        >
          <Icons.panelLeft className='h-4 w-4' />
        </button>
      ) : (
        <>
          <div className='flex items-center justify-between border-b px-4 py-3'>
            <div className='flex items-center gap-2'>
              <h3 className='text-sm font-semibold text-foreground'>Filters</h3>
              {activeFilterCount > 0 && (
                <span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-medium text-primary-foreground'>
                  {activeFilterCount}
                </span>
              )}
            </div>
            <div className='flex items-center gap-1'>
              {activeFilterCount > 0 && (
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-6 px-2 text-xs text-muted-foreground hover:text-foreground'
                  onClick={clearAll}
                >
                  Clear all
                </Button>
              )}
              {onToggleCollapse && (
                <button
                  type='button'
                  onClick={onToggleCollapse}
                  className='rounded p-1 hover:bg-muted transition-colors'
                  aria-label='Collapse filters'
                >
                  <Icons.chevronLeft className='h-4 w-4 text-muted-foreground' />
                </button>
              )}
            </div>
          </div>
      <ScrollArea className='h-[calc(100vh-8rem)]'>
        <div className='space-y-5 p-4'>
          <FilterSection
            title='Category'
            onClear={selectedCategoriesList.length > 0 ? clearCategories : undefined}
          >
            <div className='space-y-2.5'>
              {categoryOptions.map((cat) => (
                <label
                  key={cat.value}
                  className='flex items-center gap-2 text-sm text-foreground cursor-pointer rounded px-1 -mx-1 py-0.5 hover:bg-muted/50 transition-colors'
                >
                  <Checkbox
                    checked={selectedCategoriesList.includes(cat.value)}
                    onCheckedChange={() => toggleCategory(cat.value)}
                    className='h-3.5 w-3.5 shrink-0'
                  />
                  <span className='truncate'>{cat.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection
            title='Brand'
            onClear={selectedManufacturersList.length > 0 ? clearManufacturers : undefined}
          >
            <div className='space-y-2.5'>
              {brandOptions.map((brand) => (
                <label
                  key={brand.value}
                  className='flex items-center gap-2 text-sm text-foreground cursor-pointer rounded px-1 -mx-1 py-0.5 hover:bg-muted/50 transition-colors'
                >
                  <Checkbox
                    checked={selectedManufacturersList.includes(brand.value)}
                    onCheckedChange={() => toggleManufacturer(brand.value)}
                    className='h-3.5 w-3.5 shrink-0'
                  />
                  <span className='truncate'>{brand.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection
            title='Price Range'
            onClear={priceMin !== null || priceMax !== null ? clearPrice : undefined}
          >
            <div className='space-y-3'>
              <div className='flex gap-2'>
                <div className='flex-1'>
                  <Label className='mb-1.5 block text-xs text-muted-foreground'>From</Label>
                  <Input
                    type='text'
                    value={priceMin !== null ? formatPrice(priceMin) : ''}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setPriceMin(val ? parseInt(val) : null);
                    }}
                    className='h-8 text-xs'
                    placeholder='0'
                  />
                </div>
                <div className='flex-1'>
                  <Label className='mb-1.5 block text-xs text-muted-foreground'>To</Label>
                  <Input
                    type='text'
                    value={priceMax !== null ? formatPrice(priceMax) : ''}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setPriceMax(val ? parseInt(val) : null);
                    }}
                    className='h-8 text-xs'
                    placeholder='500,000'
                  />
                </div>
              </div>
              <div className='px-1'>
                <Slider
                  value={[sliderMin, sliderMax]}
                  onValueChange={([min, max]) => {
                    setPriceMin(min === PRICE_MIN ? null : min);
                    setPriceMax(max === PRICE_MAX ? null : max);
                  }}
                  min={PRICE_MIN}
                  max={PRICE_MAX}
                  step={PRICE_STEP}
                  className='my-2'
                />
              </div>
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Features'>
            <div className='space-y-2.5'>
              <label className='flex items-center gap-2 text-sm text-foreground cursor-pointer rounded px-1 -mx-1 py-0.5 hover:bg-muted/50 transition-colors'>
                <Checkbox
                  checked={hasDiscount === true}
                  onCheckedChange={(checked) => setHasDiscount(checked ? true : null)}
                  className='h-3.5 w-3.5 shrink-0'
                />
                Has Discount
              </label>
              <label className='flex items-center gap-2 text-sm text-foreground cursor-pointer rounded px-1 -mx-1 py-0.5 hover:bg-muted/50 transition-colors'>
                <Checkbox
                  checked={isFreeShip === true}
                  onCheckedChange={(checked) => setIsFreeShip(checked ? true : null)}
                  className='h-3.5 w-3.5 shrink-0'
                />
                Free Shipping
              </label>
              <label className='flex items-center gap-2 text-sm text-foreground cursor-pointer rounded px-1 -mx-1 py-0.5 hover:bg-muted/50 transition-colors'>
                <Checkbox
                  checked={isSuperFastDelivery === true}
                  onCheckedChange={(checked) => setIsSuperFastDelivery(checked ? true : null)}
                  className='h-3.5 w-3.5 shrink-0'
                />
                Super Fast Delivery
              </label>
              <label className='flex items-center gap-2 text-sm text-foreground cursor-pointer rounded px-1 -mx-1 py-0.5 hover:bg-muted/50 transition-colors'>
                <Checkbox
                  checked={isSelling === true}
                  onCheckedChange={(checked) => setIsSelling(checked ? true : null)}
                  className='h-3.5 w-3.5 shrink-0'
                />
                Currently Selling
              </label>
            </div>
          </FilterSection>

          <Separator />

          <FilterSection
            title='Stock Status'
            onClear={stockStatus !== null ? clearStock : undefined}
          >
            <div className='space-y-2.5'>
              {stockStatusOptions.map((option) => (
                <label
                  key={option.value}
                  className='flex items-center gap-2 text-sm text-foreground cursor-pointer rounded px-1 -mx-1 py-0.5 hover:bg-muted/50 transition-colors'
                >
                  <Checkbox
                    checked={stockStatus === option.value}
                    onCheckedChange={() =>
                      setStockStatus(stockStatus === option.value ? null : option.value)
                    }
                    className='h-3.5 w-3.5 shrink-0'
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection
            title='Sort By'
            onClear={sortBy !== null ? clearSort : undefined}
          >
            <div className='space-y-1'>
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  type='button'
                  onClick={() => setSortBy(sortBy === option.value ? null : option.value)}
                  className={cn(
                    'flex w-full items-center gap-2 text-sm rounded px-2 py-1.5 transition-colors text-left',
                    sortBy === option.value
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  )}
                >
                  {sortBy === option.value && (
                    <Icons.check className='h-3.5 w-3.5 shrink-0' />
                  )}
                  <span className={cn('truncate', sortBy !== option.value && 'pl-5')}>
                    {option.label}
                  </span>
                </button>
              ))}
            </div>
          </FilterSection>
        </div>
      </ScrollArea>
        </>
      )}
    </div>
  );
}
