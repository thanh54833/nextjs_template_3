import type { Meta, StoryObj } from '@storybook/react';
import { Toaster } from './sonner';

const meta = {
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return <Toaster />;
  },
};
