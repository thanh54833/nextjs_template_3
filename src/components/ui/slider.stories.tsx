import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './slider';

const meta = {
  component: Slider,
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};

export const WithRange: Story = {
  args: {
    defaultValue: [25, 75],
    min: 0,
    max: 100,
  },
};

export const Small: Story = {
  args: {
    defaultValue: [30],
    max: 50,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: [60],
  },
};

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
