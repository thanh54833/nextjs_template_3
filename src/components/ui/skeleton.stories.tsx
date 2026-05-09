import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

const meta = {
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: 'h-4 w-[200px]',
  },
};

export const Card: Story = {
  render: () => (
    <div className='flex items-center space-x-4'>
      <Skeleton className='h-12 w-12 rounded-full' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  ),
};

export const TextLine: Story = {
  args: {
    className: 'h-4 w-full',
  },
};

export const WideLine: Story = {
  args: {
    className: 'h-4 w-[400px]',
  },
};

export const ShortLine: Story = {
  args: {
    className: 'h-4 w-[100px]',
  },
};

export const Rectangle: Story = {
  args: {
    className: 'h-[200px] w-[300px]',
  },
};

export const Circle: Story = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
};