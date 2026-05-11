import type { Meta, StoryObj } from '@storybook/react';
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from './empty';
import { Button } from './button';
import { Icons } from '@/components/icons';

/**
 * Empty state component for displaying when no content is available.
 *
 * @see https://ui.shadcn.com/docs/components/empty
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Empty state component for displaying when no content is available. It includes sub-components: `EmptyHeader`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`, and `EmptyMedia` for flexible layouts.',
      },
    },
  },
} as Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default empty state with title and description */
export const Default: Story = {
  args: {
    children: (
      <>
        <EmptyHeader>
          <EmptyTitle>No items found</EmptyTitle>
          <EmptyDescription>Try adjusting your search or filter to find what you're looking for.</EmptyDescription>
        </EmptyHeader>
      </>
    ),
  },
};

/** Empty state with icon media variant */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <EmptyMedia variant="icon">
          <Icons.messageSquare aria-hidden />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No conversations</EmptyTitle>
          <EmptyDescription>Start a new conversation to get started.</EmptyDescription>
        </EmptyHeader>
      </>
    ),
  },
};

/** Empty state with a primary action button */
export const WithAction: Story = {
  args: {
    children: (
      <>
        <EmptyHeader>
          <EmptyTitle>No posts scheduled</EmptyTitle>
          <EmptyDescription>
            You have no posts scheduled for this week. Start planning your content.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <Icons.add />
            Schedule a post
          </Button>
        </EmptyContent>
      </>
    ),
  },
};

/** Scheduled posts empty state — the most common empty state in this product */
export const ScheduledPostsEmpty: Story = {
  args: {
    children: (
      <>
        <EmptyMedia variant="icon">
          <Icons.calendar aria-hidden />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No posts this week</EmptyTitle>
          <EmptyDescription>
            Your content calendar is clear. Schedule posts to start building your pipeline.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <Icons.add />
            Schedule a post
          </Button>
        </EmptyContent>
      </>
    ),
  },
};
