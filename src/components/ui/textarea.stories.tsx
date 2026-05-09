import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './textarea';

const meta = {
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

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

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
};

export const WithError: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid text content',
  },
};

export const Small: Story = {
  args: {
    className: 'min-h-10',
    placeholder: 'Short text...',
  },
};

export const Large: Story = {
  args: {
    className: 'min-h-32',
    defaultValue: 'This is a larger textarea that can accommodate more content. Perfect for longer form inputs like descriptions, comments, or detailed messages.',
  },
};
