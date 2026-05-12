'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1 p-1 border-b bg-muted/30',
        className
      )}
      {...props}
    />
  )
);
Toolbar.displayName = 'Toolbar';

interface ToolbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const ToolbarButton = React.forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ className, active, disabled, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded px-2 py-1.5 text-sm font-medium',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        active && 'bg-accent text-accent-foreground',
        className
      )}
      disabled={disabled}
      {...props}
    />
  )
);
ToolbarButton.displayName = 'ToolbarButton';

const ToolbarDivider = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('mx-1 h-6 w-px bg-border', className)}
      {...props}
    />
  )
);
ToolbarDivider.displayName = 'ToolbarDivider';

export { Toolbar, ToolbarButton, ToolbarDivider };
export type { ToolbarProps, ToolbarButtonProps, ToolbarDividerProps };