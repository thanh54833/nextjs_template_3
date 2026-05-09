import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

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
