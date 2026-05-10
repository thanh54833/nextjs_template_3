'use client';

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

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  onClear?: () => void;
}

function FilterSection({ title, children, onClear }: FilterSectionProps) {
  return (
    <div className='space-y-3'>
      <div className='flex items-center justify-between'>
        <h4 className='text-sm font-medium text-foreground'>{title}</h4>
        {onClear && (
          <button onClick={onClear} className='rounded p-0.5 hover:bg-muted'>
            <Icons.close className='h-3.5 w-3.5 text-muted-foreground' />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

export function ProductFilters() {
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

  const hasActiveFilters =
    selectedCategoriesList.length > 0 ||
    selectedManufacturersList.length > 0 ||
    priceMin !== null ||
    priceMax !== null ||
    hasDiscount === true ||
    isFreeShip === true ||
    isSuperFastDelivery === true ||
    isSelling === true ||
    stockStatus !== null;

  return (
    <div className='w-64 shrink-0 rounded-lg border bg-card'>
      <div className='flex items-center justify-between border-b px-4 py-3'>
        <div className='flex items-center gap-2'>
          <h3 className='text-sm font-semibold text-foreground'>Filters</h3>
          {hasActiveFilters && (
            <span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-medium text-primary-foreground'>
              {selectedCategoriesList.length +
                selectedManufacturersList.length +
                (priceMin !== null || priceMax !== null ? 1 : 0) +
                (hasDiscount === true ? 1 : 0) +
                (isFreeShip === true ? 1 : 0) +
                (isSuperFastDelivery === true ? 1 : 0) +
                (isSelling === true ? 1 : 0) +
                (stockStatus !== null ? 1 : 0)}
            </span>
          )}
        </div>
        {hasActiveFilters && (
          <Button
            variant='ghost'
            size='sm'
            className='h-6 px-2 text-xs text-muted-foreground hover:text-foreground'
            onClick={() => {
              clearCategories();
              clearManufacturers();
              clearPrice();
              clearDiscount();
              clearFreeShip();
              clearFastDelivery();
              clearSelling();
              clearStock();
              clearSort();
            }}
          >
            Clear all
          </Button>
        )}
      </div>
      <ScrollArea className='h-[calc(100vh-200px)]'>
        <div className='space-y-5 p-4'>
          <FilterSection
            title='Category'
            onClear={selectedCategoriesList.length > 0 ? clearCategories : undefined}
          >
            <div className='space-y-2'>
              {['842:Sữa nước', '865:Quà tặng', '725:Vitamin và Sức khỏe', '998:Chăm sóc da & Vệ sinh', '1021:Quần Áo Trẻ Em '].map((cat) => {
                const [id, name] = cat.split(':');
                return (
                  <label
                    key={id}
                    className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'
                  >
                    <Checkbox
                      checked={selectedCategoriesList.includes(id)}
                      onCheckedChange={() => toggleCategory(id)}
                      className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                    />
                    {name}
                  </label>
                );
              })}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection
            title='Brand'
            onClear={selectedManufacturersList.length > 0 ? clearManufacturers : undefined}
          >
            <div className='space-y-2'>
              {['954:Fruto Nyanya', '1443:Gumazing', '945:Animo', '692:Fysoline', '708:Quà tặng không bán'].map(
                (brand) => {
                  const [id, name] = brand.split(':');
                  return (
                    <label
                      key={id}
                      className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'
                    >
                      <Checkbox
                        checked={selectedManufacturersList.includes(id)}
                        onCheckedChange={() => toggleManufacturer(id)}
                        className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                      />
                      {name}
                    </label>
                  );
                }
              )}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Price Range' onClear={priceMin !== null || priceMax !== null ? clearPrice : undefined}>
            <div className='space-y-3'>
              <div className='flex gap-2'>
                <div className='flex-1'>
                  <Label className='mb-1 block text-xs text-muted-foreground'>From</Label>
                  <Input
                    type='text'
                    value={priceMin !== null ? `${priceMin.toLocaleString()}đ` : ''}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setPriceMin(val ? parseInt(val) : null);
                    }}
                    className='h-8 text-xs'
                    placeholder='0đ'
                  />
                </div>
                <div className='flex-1'>
                  <Label className='mb-1 block text-xs text-muted-foreground'>To</Label>
                  <Input
                    type='text'
                    value={priceMax !== null ? `${priceMax.toLocaleString()}đ` : ''}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setPriceMax(val ? parseInt(val) : null);
                    }}
                    className='h-8 text-xs'
                    placeholder='500,000đ'
                  />
                </div>
              </div>
              <div className='px-1'>
                <Slider
                  value={[priceMin || 0, priceMax || 500000]}
                  onValueChange={([min, max]) => {
                    setPriceMin(min || null);
                    setPriceMax(max || null);
                  }}
                  min={0}
                  max={500000}
                  step={10000}
                  className='my-2'
                />
              </div>
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Features'>
            <div className='space-y-2'>
              <label className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'>
                <Checkbox
                  checked={hasDiscount === true}
                  onCheckedChange={(checked) => setHasDiscount(checked ? true : null)}
                  className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                />
                Has Discount
              </label>
              <label className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'>
                <Checkbox
                  checked={isFreeShip === true}
                  onCheckedChange={(checked) => setIsFreeShip(checked ? true : null)}
                  className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                />
                Free Shipping
              </label>
              <label className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'>
                <Checkbox
                  checked={isSuperFastDelivery === true}
                  onCheckedChange={(checked) => setIsSuperFastDelivery(checked ? true : null)}
                  className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                />
                Super Fast Delivery
              </label>
              <label className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'>
                <Checkbox
                  checked={isSelling === true}
                  onCheckedChange={(checked) => setIsSelling(checked ? true : null)}
                  className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                />
                Currently Selling
              </label>
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Stock Status' onClear={stockStatus !== null ? clearStock : undefined}>
            <div className='space-y-2'>
              {[
                { value: 'all', label: 'All Products' },
                { value: 'in_stock', label: 'In Stock' },
                { value: 'out_stock', label: 'Out of Stock' }
              ].map((option) => (
                <label
                  key={option.value}
                  className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'
                >
                  <Checkbox
                    checked={stockStatus === option.value}
                    onCheckedChange={() =>
                      setStockStatus(option.value === 'all' ? null : option.value)
                    }
                    className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Sort By' onClear={sortBy !== null ? clearSort : undefined}>
            <div className='space-y-2'>
              {[
                { value: 'sold_quantity:desc', label: 'Best Selling' },
                { value: 'created_date:desc', label: 'Newest First' },
                { value: 'created_date:asc', label: 'Oldest First' },
                { value: 'price:asc', label: 'Price: Low to High' },
                { value: 'price:desc', label: 'Price: High to Low' },
                { value: 'rating_star:desc', label: 'Highest Rated' }
              ].map((option) => (
                <label
                  key={option.value}
                  className='flex items-center gap-2 text-xs text-muted-foreground cursor-pointer'
                >
                  <Checkbox
                    checked={sortBy === option.value}
                    onCheckedChange={() => setSortBy(option.value)}
                    className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </ScrollArea>
    </div>
  );
}
