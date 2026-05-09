import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';

/**
 * Checkbox component for binary selection in forms.
 *
 * @see https://ui.shadcn.com/docs/components/checkbox
 * @see https://storybook.js.org/docs/writing-stories
 */
const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A checkbox component for selecting or deselecting options. Supports checked, unchecked, and indeterminate states, as well as disabled and error states.',
      },
    },
  },
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default unchecked checkbox */
export const Default: Story = {
  args: {
    children: 'Accept terms and conditions',
  },
};

/** Checked checkbox for pre-selected options */
export const Checked: Story = {
  args: {
    checked: true,
    children: 'I agree to receive marketing emails',
  },
};

/** Disabled unchecked checkbox */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled checkbox',
  },
};

/** Disabled checked checkbox */
export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    children: 'Disabled checked',
  },
};

/** Checkbox with error state for validation feedback */
export const WithError: Story = {
  args: {
    'aria-invalid': true,
    children: 'Checkbox with error state',
  },
};

/** Standalone checkbox without visible label text */
export const Standalone: Story = {
  render: () => <Checkbox aria-label="Standalone checkbox" />,
};
