import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

interface PaginationProps extends React.ComponentProps<'div'> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  perPage?: number;
  perPageOptions?: number[];
  onPerPageChange?: (perPage: number) => void;
  showPrevNext?: boolean;
  showPerPageSelect?: boolean;
  perPageLabel?: string;
}

function Pagination({
  className,
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  perPage,
  perPageOptions = [8, 12, 24, 48],
  onPerPageChange,
  showPrevNext = true,
  showPerPageSelect = false,
  perPageLabel = 'per page',
  ...props
}: PaginationProps) {
  const range = React.useCallback((start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, []);

  const paginationRange = React.useMemo(() => {
    const totalPageNumbers = siblingCount + 5;

    if (totalPages <= totalPageNumbers) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 3;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      return [...range(1, 4), '...', totalPages - 1, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      return [1, 2, '...', ...range(totalPages - 3, totalPages)];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      return [1, '...', ...range(leftSiblingIndex, rightSiblingIndex), '...', totalPages];
    }

    return range(1, totalPages);
  }, [currentPage, totalPages, siblingCount, range]);

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      className={cn('flex items-center justify-between', className)}
      aria-label='Pagination'
      {...props}
    >
      {showPerPageSelect && (perPage || onPerPageChange) && (
        <div className='flex items-center gap-2 text-xs text-muted-foreground'>
          <Select
            value={String(perPage)}
            onValueChange={(value) => onPerPageChange?.(parseInt(value))}
            disabled={!onPerPageChange}
          >
            <SelectTrigger className='h-8 w-16 text-xs'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {perPageOptions.map((option) => (
                <SelectItem key={option} value={String(option)}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className='text-xs text-muted-foreground'>{perPageLabel}</span>
        </div>
      )}

      <div className='flex items-center gap-1'>
        {showPrevNext && (
          <>
            <button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'h-11 w-11 p-0'
              )}
              aria-label='Previous page'
            >
              <Icons.chevronLeft className='h-4 w-4' />
            </button>
          </>
        )}

        {paginationRange.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className='flex size-9 items-center justify-center'>
                ...
              </span>
            );
          }

          const isActive = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(page as number)}
              className={cn(
                buttonVariants({
                  variant: isActive ? 'default' : 'outline',
                  size: 'sm'
                }),
                'h-11 w-11 p-0 text-xs'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}

        {showPrevNext && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage >= totalPages}
            className={cn(
              buttonVariants({ variant: 'outline', size: 'sm' }),
              'h-11 w-11 p-0'
            )}
            aria-label='Next page'
          >
            <Icons.chevronRight className='h-4 w-4' />
          </button>
        )}
      </div>
    </nav>
  );
}

export { Pagination };