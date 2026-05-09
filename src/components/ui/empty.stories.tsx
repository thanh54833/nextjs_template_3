/**
 * Empty state component for displaying when no content is available.
 *
 * @see https://ui.shadcn.com/docs/components/empty
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from './empty';

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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>No conversations</EmptyTitle>
          <EmptyDescription>Start a new conversation to get started.</EmptyDescription>
        </EmptyHeader>
      </>
    ),
  },
};

/** Empty state with action link */
export const WithAction: Story = {
  args: {
    children: (
      <>
        <EmptyHeader>
          <EmptyTitle>No data</EmptyTitle>
          <EmptyDescription>
            <a href="#">Add your first item</a> to get started.
          </EmptyDescription>
        </EmptyHeader>
      </>
    ),
  },
};
