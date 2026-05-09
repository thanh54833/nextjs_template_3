import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from './button';
import { Input } from './input';
import {
  useFormContext,
  FieldSet as FormFieldSet,
  Field as FormField,
  FieldError as FormFieldError,
  FormErrors,
  FieldContent,
  FieldLabel,
  FieldDescription,
  FieldSeparator,
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

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md p-4">
      <p className="text-muted-foreground">
        Form Context is used internally by TanStack Form. See tanstack-form.tsx for the full form system.
      </p>
    </div>
  ),
};

export const FormFieldStructure: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6 p-4">
      <FormFieldSet>
        <FieldSeparator>
          <span className="text-xs text-muted-foreground">Personal Information</span>
        </FieldSeparator>

        <FormField orientation="vertical">
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <FieldContent>
            <Input id="name" placeholder="John Doe" />
          </FieldContent>
          <FieldDescription>Enter your full legal name as it appears on your ID.</FieldDescription>
        </FormField>

        <FormField orientation="vertical">
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <FieldContent>
            <Input id="email" type="email" placeholder="john@example.com" />
          </FieldContent>
        </FormField>
      </FormFieldSet>

      <FormFieldSet>
        <FieldSeparator>
          <span className="text-xs text-muted-foreground">Account Details</span>
        </FieldSeparator>

        <FormField orientation="horizontal">
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <FieldContent>
            <Input id="username" placeholder="johndoe" />
          </FieldContent>
        </FormField>

        <FormField orientation="horizontal">
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldContent>
            <Input id="password" type="password" placeholder="••••••••" />
          </FieldContent>
        </FormField>
      </FormFieldSet>
    </div>
  ),
};

export const WithFieldErrors: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6 p-4">
      <FormFieldSet>
        <FormField orientation="vertical">
          <FieldLabel htmlFor="email-error">Email</FieldLabel>
          <FieldContent>
            <Input id="email-error" defaultValue="invalid-email" />
          </FieldContent>
          <FormFieldError errors={['Invalid email format']} />
        </FormField>
      </FormFieldSet>

      <FormFieldSet>
        <FormField orientation="vertical">
          <FieldLabel htmlFor="password-error">Password</FieldLabel>
          <FieldContent>
            <Input id="password-error" type="password" defaultValue="123" />
          </FieldContent>
          <FormFieldError errors={['Password must be at least 8 characters', 'Must contain a number']} />
        </FormField>
      </FormFieldSet>
    </div>
  ),
};

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
            <FieldLabel htmlFor="field1">Field 1</FieldLabel>
            <FieldContent>
              <Input id="field1" placeholder="Enter value..." />
            </FieldContent>
          </FormField>
        </FormFieldSet>
      </div>
    </div>
  ),
};

export const ResponsiveFields: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-6 p-4">
      <FormFieldSet>
        <FieldSeparator>
          <span className="text-xs text-muted-foreground">Responsive Layout</span>
        </FieldSeparator>

        <FormField orientation="vertical">
          <FieldLabel htmlFor="responsive-1">First Field</FieldLabel>
          <FieldContent>
            <Input id="responsive-1" />
          </FieldContent>
        </FormField>

        <FormField orientation="vertical">
          <FieldLabel htmlFor="responsive-2">Second Field</FieldLabel>
          <FieldContent>
            <Input id="responsive-2" />
          </FieldContent>
        </FormField>

        <FormField orientation="vertical">
          <FieldLabel htmlFor="responsive-3">Third Field</FieldLabel>
          <FieldContent>
            <Input id="responsive-3" />
          </FieldContent>
        </FormField>
      </FormFieldSet>
    </div>
  ),
};
