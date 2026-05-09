import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Accept terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    children: 'I agree to receive marketing emails',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled checkbox',
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
    children: 'Disabled checked',
  },
};

export const WithError: Story = {
  args: {
    'aria-invalid': true,
    children: 'Checkbox with error state',
  },
};

export const Standalone: Story = {
  render: () => <Checkbox aria-label="Standalone checkbox" />,
};
