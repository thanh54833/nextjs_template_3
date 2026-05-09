/**
 * Slider component for value selection within a range.
 *
 * @see https://ui.shadcn.com/docs/components/slider
 * @see https://storybook.js.org/docs/writing-stories
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './slider';

const meta = {
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A slider component for selecting a value or range from a min/max boundary. Supports single values, ranges with two handles, and vertical orientation.',
      },
    },
  },
} as Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default slider with single value */
export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};

/** Slider with range selection (two handles) */
export const WithRange: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
  },
};

/** Small slider with limited range */
export const Small: Story = {
  args: {
    defaultValue: [30],
    max: 50,
  },
};

/** Disabled slider that prevents interaction */
export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: [60],
  },
};

/** Vertical slider variant for chart-like displays */
export const Vertical: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex h-44 gap-4">
      <Slider defaultValue={[25]} orientation="vertical" />
      <Slider defaultValue={[50]} orientation="vertical" />
      <Slider defaultValue={[75]} orientation="vertical" />
    </div>
  ),
};
