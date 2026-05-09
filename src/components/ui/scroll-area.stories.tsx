/**
 * A scrollable area component that provides a styled scrollbar.
 *
 * @see https://ui.shadcn.com/docs/components/scroll-area
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea, ScrollBar } from './scroll-area';

const meta = {
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A scrollable area component that provides a styled scrollbar. Uses native scroll behavior with custom styling for the scrollbar track and thumb.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'Scroll bar orientation',
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /** Default vertical scroll area */
  render: () => (
    <ScrollArea className='h-[200px] w-[350px] rounded-md border p-4'>
      <div className='space-y-4'>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-sm'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className='text-sm'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className='text-sm'>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
        <p className='text-sm'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  /** Scroll area with horizontal scrolling */
  render: () => (
    <ScrollArea className='h-[200px] w-[350px] rounded-md border'>
      <div className='flex w-[600px] p-4'>
        <p className='text-sm whitespace-nowrap'>
          This is a horizontal scroll area with content that extends beyond the visible width. The scrollbar will appear at the bottom.
        </p>
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  ),
};

export const BothOrientations: Story = {
  /** Scroll area with both vertical and horizontal scrollbars */
  render: () => (
    <ScrollArea className='h-[200px] w-[350px] rounded-md border p-4'>
      <div className='space-y-4'>
        <p className='text-sm whitespace-nowrap'>
          Horizontal content that extends beyond the visible width with vertical scroll capability.
        </p>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='text-sm whitespace-nowrap'>
          More horizontal text to enable both scroll orientations.
        </p>
        <p className='text-sm'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className='text-sm whitespace-nowrap'>
          Even more horizontal text to demonstrate the scroll area capabilities.
        </p>
      </div>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
  ),
};
