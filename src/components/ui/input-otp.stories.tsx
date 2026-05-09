import type { Meta, StoryObj } from '@storybook/react';

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp';

const meta: Meta = {
  component: InputOTP,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj = {
  args: {
    maxLength: 4,
  },
};

export const WithSeparator: StoryObj = {
  render: () => (
    <InputOTP maxLength={6} containerClassName="gap-2">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const Disabled: StoryObj = {
  render: () => <InputOTP maxLength={4} disabled />,
};

export const WithPattern: StoryObj = {
  render: () => <InputOTP maxLength={4} pattern="\d" placeholder="*" />,
};

export const FiveDigits: StoryObj = {
  args: {
    maxLength: 5,
  },
};

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6} containerClassName="gap-2">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

export const Disabled: Story = {
  render: () => <InputOTP maxLength={4} disabled />,
};

export const WithPattern: Story = {
  render: () => <InputOTP maxLength={4} pattern={/\d/} placeholder="*" />,
};

export const FiveDigits: Story = {
  args: {
    maxLength: 5,
  },
};
