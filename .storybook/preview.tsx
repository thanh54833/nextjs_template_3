import type { Preview } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      toc: true,
    },
    a11y: {
      // Disable automatic scanning to prevent infinite loop with Next.js components
      // Run manually via the Accessibility panel button instead
      manual: true,
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
  decorators: [
    (Story) => {
      const isDark = useDarkMode();
      return (
        <div className={isDark ? 'dark' : 'light'}>
          <div
            className="p-4"
            style={{
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            }}
          >
            <Story />
          </div>
        </div>
      );
    },
  ],
  tags: ['autodocs'],
};

export default preview;
