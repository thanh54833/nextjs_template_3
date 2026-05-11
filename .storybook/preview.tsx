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
