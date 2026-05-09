import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './sonner';

/**
 * Sonner Toaster component for displaying toast notifications.
 *
 * @see https://ui.shadcn.com/docs/components/sonner
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Sonner Toaster is a component for displaying toast notifications. It provides a modern, accessible way to show temporary messages to users.',
      },
    },
  },
} as Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default toast toaster component */
export const Default: Story = {
  render: () => {
    return <Toaster />;
  },
};
