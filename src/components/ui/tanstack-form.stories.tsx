import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { z } from 'zod';

import { Button } from './button';
import { Input } from './input';
import { tanstackFormHooks } from './form-context';

const meta = {
  component: tanstackFormHooks,
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
} satisfies Meta<typeof tanstackFormHooks>;

export default meta;
type Story = StoryObj<typeof meta>;

const { useAppForm, withForm } = tanstackFormHooks;

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
