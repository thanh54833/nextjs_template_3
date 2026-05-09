import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './toggle';

/**
 * Toggle component for pressable button states.
 *
 * @see https://ui.shadcn.com/docs/components/toggle
 * @see https://storybook.js.org/docs/writing-stories
 */
const meta = {
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toggle component that can be pressed to switch between states. Supports default, outline variant, multiple sizes, and disabled state.',
      },
    },
  },
} as Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default toggle button */
export const Default: Story = {
  render: () => <Toggle>Toggle</Toggle>,
};

/** Outline variant toggle */
export const Outline: Story = {
  render: () => <Toggle variant="outline">Outline Toggle</Toggle>,
};

/** Small-sized toggle */
export const Small: Story = {
  render: () => <Toggle size="sm">Small</Toggle>,
};

/** Large-sized toggle */
export const Large: Story = {
  render: () => <Toggle size="lg">Large</Toggle>,
};

/** Toggle pressed by default */
export const Pressed: Story = {
  render: () => <Toggle defaultPressed>Pressed by Default</Toggle>,
};

/** Disabled toggle that prevents interaction */
export const Disabled: Story = {
  render: () => <Toggle disabled>Disabled</Toggle>,
};
