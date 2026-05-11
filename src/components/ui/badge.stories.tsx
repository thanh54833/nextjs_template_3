import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Icons } from '@/components/icons';

/**
 * Badge component for highlighting information and statuses.
 *
 * @see https://ui.shadcn.com/docs/components/badge
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A small label component for highlighting statuses, categories, or counts. Supports multiple variants like default, secondary, destructive, and outline.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Visual style variant of the badge',
    },
  },
} as Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default badge with primary styling. */
export const Default: Story = {
  args: {
    children: 'Default',
  },
};

/** Secondary variant badge. */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

/** Destructive variant for error or warning states. */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

/** Outline variant with border styling. */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

/** Badge with an icon prefix, common in status indicators */
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default"><Icons.circleCheck className="size-3" />Published</Badge>
      <Badge variant="secondary"><Icons.clock className="size-3" />Scheduled</Badge>
      <Badge variant="outline"><Icons.edit className="size-3" />Draft</Badge>
      <Badge variant="destructive"><Icons.circleX className="size-3" />Failed</Badge>
    </div>
  ),
};

/** Badges as post status labels in a social media context */
export const PostStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Live</Badge>
      <Badge variant="secondary">Scheduled</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="destructive">Error</Badge>
    </div>
  ),
};

/** Badge inside a card header, the most common layout context */
export const InCardHeader: Story = {
  render: () => (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <p className="text-sm font-semibold">Instagram Post</p>
        <p className="text-xs text-muted-foreground mt-0.5">Scheduled for 9:00 AM</p>
      </div>
      <Badge variant="secondary">Scheduled</Badge>
    </div>
  ),
};
