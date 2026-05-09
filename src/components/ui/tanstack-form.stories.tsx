/**
 * TanStack Form integration with shadcn/ui components for type-safe form handling.
 *
 * @see https://tanstack.com/form - TanStack Form official documentation
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const meta = {
  component: null,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'TanStack Form integration with shadcn/ui components. Provides type-safe form handling with validation.',
      },
    },
  },
} satisfies Meta<null>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Overview of TanStack Form configuration and usage. */
export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md p-4">
      <p className="text-muted-foreground">
        TanStack Form is configured via the form-context.tsx and tanstack-form.tsx files.
        See the form-context stories for the full form component system.
      </p>
    </div>
  ),
};