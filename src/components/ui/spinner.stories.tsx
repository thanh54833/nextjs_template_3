/**
 * Spinner component for indicating loading states.
 *
 * @see https://ui.shadcn.com/docs/components/spinner
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';

const meta = {
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Spinner is a loading indicator component that displays an animated spinning circle. Size can be customized using Tailwind CSS utility classes.',
      },
    },
  },
} as Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default spinner with medium size */
export const Default: Story = {};

/** Small size spinner */
export const Small: Story = {
  args: {
    className: 'size-2',
  },
};

/** Large size spinner */
export const Large: Story = {
  args: {
    className: 'size-8',
  },
};

/** Medium size spinner */
export const Medium: Story = {
  args: {
    className: 'size-6',
  },
};
