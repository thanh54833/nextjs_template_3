/**
 * Alert component for displaying important messages and notifications.
 *
 * @see https://ui.shadcn.com/docs/components/alert
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './alert';

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
} satisfies Meta<typeof Alert>;

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

/** Alert with custom icon element */
export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This action could have unintended consequences.</AlertDescription>
      </>
    ),
  },
};
