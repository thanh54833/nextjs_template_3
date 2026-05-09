import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';

const meta = {
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label text',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email">Email</Label>
      <input
        id="email"
        type="email"
        placeholder="email@example.com"
        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      />
    </div>
  ),
};

export const Required: Story = {
  args: {
    children: 'Email',
    htmlFor: 'email-required',
  },
  render: () => (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor="email-required">
        Email <span className="text-destructive">*</span>
      </Label>
      <input
        id="email-required"
        type="email"
        required
        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs"
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled label',
  },
  render: () => (
    <div className="flex flex-col gap-1.5 group" data-disabled="true">
      <Label>Disabled Label</Label>
      <input
        disabled
        type="text"
        placeholder="Disabled input"
        className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 opacity-50"
      />
    </div>
  ),
};
