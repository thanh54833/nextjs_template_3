import type { Meta, StoryObj } from '@storybook/react';

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from './input-otp';

/**
 * InputOTP component for one-time password entry.
 *
 * @see https://ui.shadcn.com/docs/components/input-otp
 * @see https://storybook.js.org/docs/writing-stories
 */
const meta = {
  component: InputOTP,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A one-time password input component for verification codes. Supports customizable length, separators between groups, patterns for validation, and disabled state.',
      },
    },
  },
} as Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj;

/** Default OTP input with 4 digits */
export const Default: Story = {
  args: {
    maxLength: 4,
  },
};

/** OTP input with separator between digit groups */
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

/** Disabled OTP input that prevents interaction */
export const Disabled: Story = {
  render: () => (
    <InputOTP maxLength={4} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

/** OTP input with pattern for numeric-only validation */
export const WithPattern: Story = {
  render: () => (
    <InputOTP maxLength={4} pattern="\d" placeholder="*">
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
};

/** OTP input with 5 digits */
export const FiveDigits: Story = {
  args: {
    maxLength: 5,
  },
};
