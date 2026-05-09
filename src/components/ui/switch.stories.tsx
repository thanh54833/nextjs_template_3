import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

/**
 * Switch component for toggle selections.
 *
 * @see https://ui.shadcn.com/docs/components/switch
 * @see https://storybook.js.org/docs/writing-stories
 */
const meta = {
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A switch component (also known as a toggle) for binary on/off decisions. Often used for enabling or disabling features like notifications or settings.',
      },
    },
  },
} as Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default switch with label */
export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="notifications" />
      <label htmlFor="notifications" className="text-sm font-medium">
        Enable notifications
      </label>
    </div>
  ),
};

/** Pre-checked switch for pre-enabled options */
export const Checked: Story = {
  args: {
    checked: true,
  },
};

/** Disabled switch that prevents interaction */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/** Disabled and checked switch */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
