import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

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

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithError: Story = {
  args: {
    'aria-invalid': true,
    placeholder: 'Invalid input',
    defaultValue: 'invalid@example',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const File: Story = {
  args: {
    type: 'file',
    className: 'file:h-10 file:cursor-pointer',
  },
};

export const Small: Story = {
  args: {
    className: 'h-8 text-sm',
    placeholder: 'Small input',
  },
};
