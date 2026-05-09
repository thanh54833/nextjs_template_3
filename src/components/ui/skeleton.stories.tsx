/**
 * Skeleton component for displaying loading placeholders.
 *
 * @see https://ui.shadcn.com/docs/components/skeleton
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './skeleton';

const meta = {
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A placeholder component that displays a loading animation while content is being fetched. Can be styled with Tailwind classes to match various shapes and sizes.',
      },
    },
  },
} as Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default skeleton with standard dimensions. */
export const Default: Story = {
  args: {
    className: 'h-4 w-[200px]',
  },
};

/** Card skeleton with avatar and text lines. */
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

/** Text line skeleton for paragraph placeholders. */
export const TextLine: Story = {
  args: {
    className: 'h-4 w-full',
  },
};

/** Wide line skeleton for headings or descriptions. */
export const WideLine: Story = {
  args: {
    className: 'h-4 w-[400px]',
  },
};

/** Short line skeleton for compact text. */
export const ShortLine: Story = {
  args: {
    className: 'h-4 w-[100px]',
  },
};

/** Rectangular skeleton for images or cards. */
export const Rectangle: Story = {
  args: {
    className: 'h-[200px] w-[300px]',
  },
};

/** Circular skeleton for avatar placeholders. */
export const Circle: Story = {
  args: {
    className: 'h-12 w-12 rounded-full',
  },
};
