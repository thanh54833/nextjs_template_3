import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';

const meta = {
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
  },
};

export const WithValue: Story = {
  args: {
    value: 75,
  },
};

export const LowProgress: Story = {
  args: {
    value: 25,
  },
};

export const HighProgress: Story = {
  args: {
    value: 100,
  },
};

export const NoProgress: Story = {
  args: {
    value: 0,
  },
};
