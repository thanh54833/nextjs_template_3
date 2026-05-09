'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { DEFAULT_THEME } from './theme.config';

const COOKIE_NAME = 'active_theme';

type ThemeContextType = {
  activeTheme: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
  children,
  initialTheme
}: {
  children: ReactNode;
  initialTheme?: string;
}) {
  const [activeTheme] = useState<string>(initialTheme || DEFAULT_THEME);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme !== activeTheme) {
      document.cookie = `${COOKIE_NAME}=${activeTheme}; path=/; max-age=31536000; SameSite=Lax; ${window.location.protocol === 'https:' ? 'Secure;' : ''}`;
      document.documentElement.setAttribute('data-theme', activeTheme);
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeConfig must be used within an ActiveThemeProvider');
  }
  return context;
}
