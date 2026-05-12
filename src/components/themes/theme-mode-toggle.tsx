'use client';

import { Icons } from '@/components/icons';
import { useTheme } from 'next-themes';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Kbd } from '@/components/ui/kbd';

export function ThemeModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleThemeToggle = React.useCallback(
    (e?: React.MouseEvent) => {
      const newMode = resolvedTheme === 'dark' ? 'light' : 'dark';
      const root = document.documentElement;

      if (!document.startViewTransition) {
        setTheme(newMode);
        return;
      }

      if (e) {
        root.style.setProperty('--x', `${e.clientX}px`);
        root.style.setProperty('--y', `${e.clientY}px`);
      }

      document.startViewTransition(() => {
        setTheme(newMode);
      });
    },
    [resolvedTheme, setTheme]
  );

  const isDark = resolvedTheme === 'dark';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant='secondary'
          size='icon'
          className='group/toggle relative size-8 overflow-hidden'
          onClick={handleThemeToggle}
          data-state={isDark ? 'dark' : 'light'}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
          suppressHydrationWarning
        >
          <Icons.sun className="size-4 transition-transform duration-300 ease-out text-primary group-data-[state=dark]:-rotate-90 group-data-[state=dark]:scale-0 group-data-[state=dark]:text-secondary-foreground" />
          <Icons.moon className="absolute size-4 transition-transform duration-300 ease-out text-primary rotate-90 scale-0 group-data-[state=dark]:rotate-0 group-data-[state=dark]:scale-100 group-data-[state=dark]:text-secondary-foreground" />
        </Button>
      </TooltipTrigger>
<TooltipContent className="flex items-center gap-2">
          {isDark ? 'Dark' : 'Light'} <Kbd>D D</Kbd>
        </TooltipContent>
    </Tooltip>
  );
}
