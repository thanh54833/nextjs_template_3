'use client';

import { useQueryStates, parseAsString, parseAsInteger, parseAsBoolean } from 'nuqs';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function formatPrice(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(value) + 'đ';
}

export function ActiveFilterChips() {
  const [params, setParams] = useQueryStates({
    categories: parseAsString,
    manufacturers: parseAsString,
    priceMin: parseAsInteger,
    priceMax: parseAsInteger,
    hasDiscount: parseAsBoolean,
    isFreeShip: parseAsBoolean,
    isSuperFastDelivery: parseAsBoolean,
    isSelling: parseAsBoolean,
    stockStatus: parseAsString
  });

  const chips: { label: string; onRemove: () => void }[] = [];

  if (params.categories) {
    const cats = params.categories.split(',').filter(Boolean);
    cats.forEach((cat) => {
      chips.push({
        label: cat,
        onRemove: () => {
          const remaining = cats.filter((c) => c !== cat);
          setParams({
            categories: remaining.length > 0 ? remaining.join(',') : null
          });
        }
      });
    });
  }

  if (params.manufacturers) {
    const mans = params.manufacturers.split(',').filter(Boolean);
    mans.forEach((man) => {
      chips.push({
        label: man,
        onRemove: () => {
          const remaining = mans.filter((m) => m !== man);
          setParams({
            manufacturers: remaining.length > 0 ? remaining.join(',') : null
          });
        }
      });
    });
  }

  if (params.priceMin !== null || params.priceMax !== null) {
    const label =
      params.priceMin !== null && params.priceMax !== null
        ? `${formatPrice(params.priceMin)} - ${formatPrice(params.priceMax)}`
        : params.priceMin !== null
          ? `From ${formatPrice(params.priceMin)}`
          : `To ${formatPrice(params.priceMax!)}`;

    chips.push({
      label,
      onRemove: () => setParams({ priceMin: null, priceMax: null })
    });
  }

  if (params.hasDiscount === true) {
    chips.push({ label: 'Has Discount', onRemove: () => setParams({ hasDiscount: null }) });
  }
  if (params.isFreeShip === true) {
    chips.push({ label: 'Free Ship', onRemove: () => setParams({ isFreeShip: null }) });
  }
  if (params.isSuperFastDelivery === true) {
    chips.push({
      label: 'Super Fast',
      onRemove: () => setParams({ isSuperFastDelivery: null })
    });
  }
  if (params.isSelling === true) {
    chips.push({ label: 'Selling', onRemove: () => setParams({ isSelling: null }) });
  }

  if (params.stockStatus === 'in_stock') {
    chips.push({ label: 'In Stock', onRemove: () => setParams({ stockStatus: null }) });
  } else if (params.stockStatus === 'out_stock') {
    chips.push({ label: 'Out of Stock', onRemove: () => setParams({ stockStatus: null }) });
  }

  if (chips.length === 0) return null;

  const clearAll = () => {
    setParams({
      categories: null,
      manufacturers: null,
      priceMin: null,
      priceMax: null,
      hasDiscount: null,
      isFreeShip: null,
      isSuperFastDelivery: null,
      isSelling: null,
      stockStatus: null
    });
  };

  return (
    <div className='flex flex-wrap items-center gap-2'>
      <span className='text-xs text-muted-foreground'>Active filters:</span>
      {chips.map((chip, index) => (
        <Badge key={index} variant='secondary' className='gap-1 px-2 py-1 text-xs font-normal'>
          {chip.label}
          <button
            onClick={chip.onRemove}
            className='ml-0.5 rounded-full hover:bg-muted-foreground/20'
          >
            <Icons.close className='h-3 w-3' />
            <span className='sr-only'>Remove {chip.label} filter</span>
          </button>
        </Badge>
      ))}
      <Button
        variant='ghost'
        size='sm'
        onClick={clearAll}
        className='h-6 px-2 text-xs text-muted-foreground hover:text-foreground'
      >
        Clear all
      </Button>
    </div>
  );
}