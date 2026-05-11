import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './alert';
import { Icons } from '@/components/icons';

/**
 * Alert component for displaying important messages and notifications.
 *
 * @see https://ui.shadcn.com/docs/components/alert
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Alert is a component used to display important messages and notifications. It supports different variants like `destructive` for error states and can contain `AlertTitle` and `AlertDescription` sub-components.',
      },
    },
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default alert with informational message */
export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </>
    ),
  },
};

/** Destructive alert variant for error and warning states */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
    ),
  },
};

/** Alert with icon for informational warnings */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Icons.alertCircle aria-hidden />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This action could have unintended consequences.</AlertDescription>
      </>
    ),
  },
};

/** Success state — confirms a completed action */
export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <Icons.circleCheck aria-hidden />
        <AlertTitle>Post published</AlertTitle>
        <AlertDescription>
          Your Instagram post went live successfully. Reach is updating now.
        </AlertDescription>
      </>
    ),
  },
};

/** Warning state — caution before a risky or time-sensitive action */
export const Warning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <Icons.warning aria-hidden />
        <AlertTitle>Scheduled in less than 15 minutes</AlertTitle>
        <AlertDescription>
          This post is scheduled for 9:45 AM. Changes made now may not propagate in time.
        </AlertDescription>
      </>
    ),
  },
};

/** Info state — non-critical context or system notice */
export const Info: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <Icons.info aria-hidden />
        <AlertTitle>Twitter API rate limit at 80%</AlertTitle>
        <AlertDescription>
          Scheduled posts will continue normally. Analytics refresh will slow after 5 PM.
        </AlertDescription>
      </>
    ),
  },
};
