/**
 * TanStack Form contexts and structural components for building complex forms.
 *
 * @see https://tanstack.com/form - TanStack Form official documentation
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from './button';
import { Input } from './input';
import {
  useFormContext,
  FormFieldSet,
  FormField,
  FormFieldError,
  FormErrors,
} from './form-context';

const meta = {
  component: useFormContext,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'TanStack Form contexts and structural components for building complex forms with validation and error handling.',
      },
    },
  },
} satisfies Meta<typeof useFormContext>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Overview of form context components and usage patterns. */
export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md p-4">
      <p className="text-muted-foreground">
        Form Context is used internally by TanStack Form. See tanstack-form.tsx for the full form system.
      </p>
    </div>
  ),
};

/** Form field structure with vertical and horizontal orientations. */
export const FormFieldStructure: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6 p-4">
      <FormFieldSet>
        <FormField orientation="vertical">
          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
          <Input id="name" placeholder="John Doe" />
        </FormField>

        <FormField orientation="vertical">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <Input id="email" type="email" placeholder="john@example.com" />
        </FormField>
      </FormFieldSet>

      <FormFieldSet>
        <FormField orientation="horizontal">
          <label htmlFor="username" className="text-sm font-medium">Username</label>
          <Input id="username" placeholder="johndoe" />
        </FormField>

        <FormField orientation="horizontal">
          <label htmlFor="password" className="text-sm font-medium">Password</label>
          <Input id="password" type="password" placeholder="••••••••" />
        </FormField>
      </FormFieldSet>
    </div>
  ),
};

/** Form fields with error message display. */
export const WithFieldErrors: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6 p-4">
      <FormFieldSet>
        <FormField orientation="vertical">
          <label htmlFor="email-error" className="text-sm font-medium">Email</label>
          <Input id="email-error" defaultValue="invalid-email" />
          <FormFieldError errors={['Invalid email format']} />
        </FormField>
      </FormFieldSet>

      <FormFieldSet>
        <FormField orientation="vertical">
          <label htmlFor="password-error" className="text-sm font-medium">Password</label>
          <Input id="password-error" type="password" defaultValue="123" />
          <FormFieldError errors={['Password must be at least 8 characters', 'Must contain a number']} />
        </FormField>
      </FormFieldSet>
    </div>
  ),
};

/** Form errors component for displaying form-level validation messages. */
export const FormErrorsDemo: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6 p-4">
      <p className="text-sm text-muted-foreground">
        FormErrors displays form-level validation errors at the top of the form.
      </p>
      <div className="rounded-lg border p-4">
        <FormErrors className="mb-4" />
        <FormFieldSet>
          <FormField orientation="vertical">
            <label htmlFor="field1" className="text-sm font-medium">Field 1</label>
            <Input id="field1" placeholder="Enter value..." />
          </FormField>
        </FormFieldSet>
      </div>
    </div>
  ),
};