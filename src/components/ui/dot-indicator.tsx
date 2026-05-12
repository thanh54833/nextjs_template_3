import * as React from 'react';

import { cn } from '@/lib/utils';

export interface DotIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant of the dot */
  color?: 'default' | 'success' | 'warning' | 'destructive' | 'muted';
  /** Size of the dot */
  size?: 'sm' | 'md' | 'lg';
  /** Pulse animation when true */
  pulse?: boolean;
}

function DotIndicator({
  className,
  color = 'default',
  size = 'md',
  pulse = false,
  ...props
}: DotIndicatorProps) {
  return (
    <span
      data-slot="dot-indicator"
      data-color={color}
      data-size={size}
      data-pulse={pulse}
      className={cn(
        'inline-block shrink-0 rounded-full bg-current',
        {
          'size-1.5': size === 'sm',
          'size-2': size === 'md',
          'size-2.5': size === 'lg',
        },
        {
          'bg-primary text-primary': color === 'default',
          'bg-emerald-500 text-emerald-500': color === 'success',
          'bg-amber-500 text-amber-500': color === 'warning',
          'bg-destructive text-destructive': color === 'destructive',
          'bg-muted-foreground/40 text-muted-foreground/40': color === 'muted',
        },
        pulse && 'animate-pulse',
        className
      )}
      {...props}
    />
  );
}

export interface PaginationDotsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  total?: number;
  active?: number;
  size?: 'sm' | 'md' | 'lg';
}

const PaginationDots = React.forwardRef<HTMLDivElement, PaginationDotsProps>(
  ({ className, total = 5, active = 0, size = 'md', ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="pagination-dots"
        className={cn('inline-flex items-center gap-1.5', className)}
        {...props}
      >
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            data-active={i === active}
            className={cn(
              'rounded-full transition-all duration-200',
              {
                'size-1.5': size === 'sm',
                'size-2': size === 'md',
                'size-2.5': size === 'lg',
              },
              i === active
                ? 'bg-primary'
                : 'bg-muted-foreground/30'
            )}
          />
        ))}
      </div>
    );
  }
);

PaginationDots.displayName = 'PaginationDots';

export { DotIndicator, PaginationDots };
