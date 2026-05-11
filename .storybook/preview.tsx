import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-theming';
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
    (Story) => (
      <div
        className="p-4"
        style={{
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <Story />
      </div>
    ),
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  tags: ['autodocs'],
};

export default preview;
