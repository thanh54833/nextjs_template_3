import type { Preview } from '@storybook/react';
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
      default: 'light',
      values: [
        { name: 'light', value: 'oklch(0.989 0.002 175)' },
        { name: 'dark', value: 'oklch(0.039 0.02 175)' },
      ],
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
  ],
  tags: ['autodocs'],
};

export default preview;
