import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './toggle';

const meta = {
  component: Toggle,
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Toggle>Toggle</Toggle>,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: () => <Toggle variant="outline">Outline Toggle</Toggle>,
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: () => <Toggle size="sm">Small</Toggle>,
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: () => <Toggle size="lg">Large</Toggle>,
};

export const Pressed: Story = {
  args: {
    defaultPressed: true,
  },
  render: () => <Toggle defaultPressed>Pressed by Default</Toggle>,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: () => <Toggle disabled>Disabled</Toggle>,
};
