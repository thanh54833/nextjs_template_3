import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

const meta = {
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: () => (
    <div className='flex h-[200px] gap-4'>
      <div className='w-24 bg-muted' />
      <Separator orientation='vertical' />
      <div className='w-24 bg-muted' />
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <div className='w-[300px] space-y-4'>
      <div className='bg-muted h-8 w-full' />
      <Separator orientation='horizontal' />
      <div className='bg-muted h-8 w-full' />
    </div>
  ),
};