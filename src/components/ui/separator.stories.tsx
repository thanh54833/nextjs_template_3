import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';

/**
 * Separator component for dividing content with horizontal or vertical lines.
 *
 * @see https://ui.shadcn.com/docs/components/separator
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Separator,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A visual divider component for separating content sections. Supports both horizontal and vertical orientations with configurable spacing and styling.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the separator line',
    },
  },
} as Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default horizontal separator. */
export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
};

/** Vertical separator for side-by-side content. */
export const Vertical: Story = {
  render: () => (
    <div className='flex h-[200px] gap-4'>
      <div className='w-24 bg-muted' />
      <Separator orientation='vertical' />
      <div className='w-24 bg-muted' />
    </div>
  ),
};

/** Horizontal separator for stacked content. */
export const Horizontal: Story = {
  render: () => (
    <div className='w-[300px] space-y-4'>
      <div className='bg-muted h-8 w-full' />
      <Separator orientation='horizontal' />
      <div className='bg-muted h-8 w-full' />
    </div>
  ),
};
