/**
 * Label component for form element identification.
 *
 * @see https://ui.shadcn.com/docs/components/label
 * @see https://storybook.js.org/docs/writing-stories
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';

const meta = {
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A label component for identifying form elements like inputs and textareas. Supports association via htmlFor attribute and required field indicators.',
      },
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default label with text content */
export const Default: Story = {
  args: {
    children: 'Label text',
  },
};

/** Label associated with an input element via htmlFor */
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

/** Label with required field indicator */
export const Required: Story = {
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

/** Disabled label with disabled input field */
export const Disabled: Story = {
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
