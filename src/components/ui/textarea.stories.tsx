/**
 * Textarea component for multi-line text entry.
 *
 * @see https://ui.shadcn.com/docs/components/textarea
 * @see https://storybook.js.org/docs/writing-stories
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './textarea';

const meta = {
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A multi-line text input component for longer form content such as messages, descriptions, and comments. Supports resizing and validation states.',
      },
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default textarea with placeholder */
export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

/** Textarea with associated label for form accessibility */
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

/** Disabled textarea that prevents user interaction */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
};

/** Textarea with error state for validation feedback */
export const WithError: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid text content',
  },
};

/** Small textarea variant for minimal content */
export const Small: Story = {
  args: {
    className: 'min-h-10',
    placeholder: 'Short text...',
  },
};

/** Large textarea variant for detailed content */
export const Large: Story = {
  args: {
    className: 'min-h-32',
    defaultValue: 'This is a larger textarea that can accommodate more content. Perfect for longer form inputs like descriptions, comments, or detailed messages.',
  },
};
