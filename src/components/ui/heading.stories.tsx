import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';

const meta = {
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Dashboard',
    description: 'Overview of your metrics and activity.',
  },
};

export const WithInfo: Story = {
  args: {
    title: 'Analytics',
    description: 'Detailed analytics for your workspace.',
    infoContent: {
      title: 'Analytics Info',
      sections: [
        {
          title: 'Overview',
          description: 'This page shows detailed analytics about your workspace performance.',
        },
      ],
    },
  },
};

export const SmallTitle: Story = {
  args: {
    title: 'Settings',
    description: 'Manage your account and workspace settings.',
  },
};

export const LargeTitle: Story = {
  args: {
    title: 'Product Management',
    description: 'Manage your products, inventory, and orders.',
  },
};