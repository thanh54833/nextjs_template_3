import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

/**
 * Input component for text entry in forms.
 *
 * @see https://ui.shadcn.com/docs/components/input
 * @see https://storybook.js.org/docs/writing-stories
 */
const meta = {
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A flexible text input component that supports various types including text, email, password, number, and file. Integrates seamlessly with form labels and validation states.',
      },
    },
  },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default input with placeholder text */
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

/** Input with associated label for form accessibility */
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
  ),
};

/** Disabled input that prevents user interaction */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

/** Input with error state, typically shown with aria-invalid and red border */
export const WithError: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input',
    defaultValue: 'invalid@example',
  },
};

/** Password input with masked characters */
export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

/** Number input for numeric values only */
export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

/** File input for file uploads */
export const File: Story = {
  args: {
    type: 'file',
    className: 'file:h-10 file:cursor-pointer',
  },
};

/** Small-sized input variant */
export const Small: Story = {
  args: {
    className: 'h-8 text-sm',
    placeholder: 'Small input',
  },
};
