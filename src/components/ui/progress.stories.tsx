/**
 * Progress component for displaying task completion and loading states.
 *
 * @see https://ui.shadcn.com/docs/components/progress
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta = {
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Progress component displays the progress of an operation or task. It shows a filled bar that represents a percentage value from 0 to 100.',
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default progress bar at 50% completion */
export const Default: Story = {
  args: {
    value: 50,
  },
};

/** Progress bar showing 75% completion */
export const WithValue: Story = {
  args: {
    value: 75,
  },
};

/** Progress bar showing low progress at 25% */
export const LowProgress: Story = {
  args: {
    value: 25,
  },
};

/** Progress bar showing full completion at 100% */
export const HighProgress: Story = {
  args: {
    value: 100,
  },
};

/** Progress bar with no progress at 0% */
export const NoProgress: Story = {
  args: {
    value: 0,
  },
};
