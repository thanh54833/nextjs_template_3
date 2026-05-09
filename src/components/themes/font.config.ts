import { Inter, DM_Sans, JetBrains_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

const fontSerif = DM_Sans({
  subsets: ['latin'],
  variable: '--font-serif'
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

export const fontVariables = cn(
  fontSans.variable,
  fontSerif.variable,
  fontMono.variable
);
