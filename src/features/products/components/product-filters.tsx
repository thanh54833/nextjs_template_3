'use client';

import { useState } from 'react';
import { useQueryState, parseAsString, parseAsArrayOf } from 'nuqs';
import { Icons } from '@/components/icons';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const TYPE_OPTIONS = ['Clothing', 'Shoes', 'Bags', 'Accessories', 'Jewelry'];

const BRAND_OPTIONS = [
  { name: 'Gucci', count: 12 },
  { name: 'Dolce & Gabbana', count: 8 },
  { name: 'Chanel', count: 12 },
  { name: 'Louis Vuitton', count: 12 },
  { name: 'Versace', count: 12 },
  { name: 'Adidas', count: 12 }
];

const COLOR_OPTIONS = [
  { value: 'red', bg: 'bg-red-500' },
  { value: 'orange', bg: 'bg-orange-500' },
  { value: 'yellow', bg: 'bg-yellow-500' },
  { value: 'green', bg: 'bg-green-500' },
  { value: 'blue', bg: 'bg-blue-500' },
  { value: 'purple', bg: 'bg-purple-500' },
  { value: 'black', bg: 'bg-gray-900' },
  { value: 'white', bg: 'bg-white border border-gray-300' },
  { value: 'emerald', bg: 'bg-emerald-500' }
];

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
  const [selectedTypes, setSelectedTypes] = useQueryState('types', parseAsArrayOf(parseAsString).withDefault([]));
  const [selectedBrands, setSelectedBrands] = useQueryState('brands', parseAsArrayOf(parseAsString).withDefault([]));
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useQueryState('colors', parseAsArrayOf(parseAsString).withDefault([]));

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev?.includes(type) ? prev.filter((t) => t !== type) : [...(prev || []), type]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev?.includes(brand) ? prev.filter((b) => b !== brand) : [...(prev || []), brand]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev?.includes(color) ? prev.filter((c) => c !== color) : [...(prev || []), color]
    );
  };

  const clearTypes = () => setSelectedTypes(null);
  const clearBrands = () => setSelectedBrands(null);
  const clearColors = () => setSelectedColors(null);

  const hasActiveFilters =
    selectedTypes.length > 0 || selectedBrands.length > 0 || selectedColors.length > 0;

  return (
    <div className='w-64 shrink-0 rounded-lg border bg-card'>
      <div className='flex items-center justify-between border-b px-4 py-3'>
        <div className='flex items-center gap-2'>
          <h3 className='text-sm font-semibold text-foreground'>Filters</h3>
          {hasActiveFilters && (
            <span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-medium text-primary-foreground'>
              {selectedTypes.length + selectedBrands.length + selectedColors.length}
            </span>
          )}
        </div>
        {hasActiveFilters && (
          <Button
            variant='ghost'
            size='sm'
            className='h-6 px-2 text-xs text-muted-foreground hover:text-foreground'
            onClick={() => {
              clearTypes();
              clearBrands();
              clearColors();
              setPriceRange([0, 500]);
            }}
          >
            Clear all
          </Button>
        )}
      </div>
      <ScrollArea className='h-[calc(100vh-200px)]'>
        <div className='space-y-5 p-4'>
          <FilterSection title='Type' onClear={selectedTypes.length > 0 ? clearTypes : undefined}>
            <div className='grid grid-cols-2 gap-2'>
              {TYPE_OPTIONS.map((type) => (
                <label key={type} className='flex items-center gap-2 text-xs text-muted-foreground'>
                  <Checkbox
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={() => toggleType(type)}
                    className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                  />
                  {type}
                </label>
              ))}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Brands' onClear={selectedBrands.length > 0 ? clearBrands : undefined}>
            <div className='space-y-2'>
              {BRAND_OPTIONS.map((brand) => (
                <label key={brand.name} className='flex items-center gap-2 text-xs text-muted-foreground'>
                  <Checkbox
                    checked={selectedBrands.includes(brand.name)}
                    onCheckedChange={() => toggleBrand(brand.name)}
                    className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                  />
                  {brand.name} ({brand.count})
                </label>
              ))}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Price'>
            <div className='space-y-3'>
              <div className='flex gap-2'>
                <div className='flex-1'>
                  <label className='mb-1 block text-xs text-muted-foreground'>From</label>
                  <Input
                    type='text'
                    value={`$${priceRange[0]}`}
                    className='h-8 text-xs'
                    readOnly
                  />
                </div>
                <div className='flex-1'>
                  <label className='mb-1 block text-xs text-muted-foreground'>To</label>
                  <Input
                    type='text'
                    value={`$${priceRange[1]}`}
                    className='h-8 text-xs'
                    readOnly
                  />
                </div>
              </div>
              <div className='px-1'>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  className='my-2'
                />
              </div>
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Colors Options' onClear={selectedColors.length > 0 ? clearColors : undefined}>
            <div className='flex flex-wrap gap-2'>
              {COLOR_OPTIONS.map((color) => (
                <button
                  key={color.value}
                  onClick={() => toggleColor(color.value)}
                  className={`h-5 w-5 rounded-full ${color.bg} ring-1 ring-black/10 transition-all hover:scale-110 ${
                    selectedColors.includes(color.value) ? 'ring-2 ring-primary ring-offset-1' : ''
                  }`}
                />
              ))}
            </div>
          </FilterSection>

          <Separator />

          <FilterSection title='Availability'>
            <div className='grid grid-cols-2 gap-2'>
              {TYPE_OPTIONS.slice(0, 3).map((type) => (
                <label key={type} className='flex items-center gap-2 text-xs text-muted-foreground'>
                  <Checkbox
                    checked={selectedTypes.includes(type)}
                    onCheckedChange={() => toggleType(type)}
                    className='h-3.5 w-3.5 data-[state=checked]:bg-primary'
                  />
                  {type}
                </label>
              ))}
            </div>
          </FilterSection>
        </div>
      </ScrollArea>
    </div>
  );
}
