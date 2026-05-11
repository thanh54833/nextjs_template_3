import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
        success:
          'bg-card border-[oklch(0.75_0.12_175)] text-[oklch(0.35_0.1_175)] [&>svg]:text-[oklch(0.45_0.15_175)] *:data-[slot=alert-description]:text-[oklch(0.45_0.1_175)]',
        warning:
          'bg-card border-[oklch(0.82_0.12_85)] text-[oklch(0.40_0.1_85)] [&>svg]:text-[oklch(0.55_0.15_85)] *:data-[slot=alert-description]:text-[oklch(0.50_0.1_85)]',
        info:
          'bg-card border-[oklch(0.70_0.09_210)] text-[oklch(0.35_0.08_210)] [&>svg]:text-[oklch(0.50_0.12_210)] *:data-[slot=alert-description]:text-[oklch(0.45_0.08_210)]'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot='alert'
      role='alert'
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({
  className,
  as: Comp = 'div',
  ...props
}: React.ComponentProps<'div'> & { as?: React.ElementType }) {
  return (
    <Comp
      data-slot='alert-title'
      className={cn('col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight', className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='alert-description'
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
