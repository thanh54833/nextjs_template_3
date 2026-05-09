/**
 * Flexible field components with CVA-based variants for building complex forms.
 *
 * @see https://github.com/joebell/plua - Original Field component inspiration
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';
import { Input } from './input';
import { RadioGroup } from './radio-group';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  fieldVariants,
} from './field';
import { Label } from './label';

const meta = {
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Flexible field components with CVA-based variants for building complex forms with various orientations and layouts.',
      },
    },
  },
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default vertical field layout with two inputs. */
export const Default: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Personal Information</FieldLegend>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="first-name">First Name</FieldLabel>
          <FieldContent>
            <Input id="first-name" placeholder="John" />
          </FieldContent>
        </Field>

        <Field orientation="vertical">
          <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
          <FieldContent>
            <Input id="last-name" placeholder="Doe" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Horizontal orientation for compact field layouts. */
export const HorizontalOrientation: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Account Details</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <FieldContent>
            <Input id="username" placeholder="johndoe" />
          </FieldContent>
        </Field>

        <Field orientation="horizontal">
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldContent>
            <Input id="email" type="email" placeholder="john@example.com" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Responsive orientation that adapts to container width. */
export const ResponsiveOrientation: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Responsive Example</FieldLegend>
      <FieldGroup>
        <Field orientation="responsive">
          <FieldLabel htmlFor="display-name">Display Name</FieldLabel>
          <FieldContent>
            <Input id="display-name" placeholder="John Doe" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Field with title subtitle for additional context. */
export const WithFieldTitle: Story = {
  render: () => (
    <FieldSet>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="project">Project Name</FieldLabel>
          <FieldTitle>Required for public visibility</FieldTitle>
          <FieldContent>
            <Input id="project" placeholder="My Awesome Project" />
          </FieldContent>
          <FieldDescription>This name will be displayed on your public profile.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Field with error messages for validation feedback. */
export const WithErrors: Story = {
  render: () => (
    <FieldSet>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="email-error">Email</FieldLabel>
          <FieldContent>
            <Input id="email-error" type="email" defaultValue="invalid-email" />
          </FieldContent>
          <FieldError errors={['Invalid email format', 'Email already exists']} />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Field with separator for grouping alternative options. */
export const WithSeparator: Story = {
  render: () => (
    <FieldSet>
      <FieldGroup>
        <Field orientation="vertical">
          <FieldLabel htmlFor="section-title">Section Title</FieldLabel>
          <FieldContent>
            <Input id="section-title" placeholder="Enter title" />
          </FieldContent>
        </Field>

        <FieldSeparator>or</FieldSeparator>

        <Field orientation="vertical">
          <FieldLabel htmlFor="section-link">Section Link</FieldLabel>
          <FieldContent>
            <Input id="section-link" placeholder="https://" />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Checkbox field with horizontal label layout. */
export const CheckboxField: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Preferences</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="notifications" className="flex-row-reverse">
            <Checkbox id="notifications" />
            Enable notifications
          </FieldLabel>
        </Field>

        <Field orientation="horizontal">
          <FieldLabel htmlFor="marketing" className="flex-row-reverse">
            <Checkbox id="marketing" />
            Marketing emails
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Radio group field for single selection from options. */
export const RadioGroupField: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Plan Selection</FieldLegend>
      <FieldGroup>
        <Field orientation="vertical">
          <RadioGroup defaultValue="pro">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="radio-basic" className="flex-row-reverse">
                <RadioGroup.Item id="radio-basic" value="basic" />
                Basic Plan
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="radio-pro" className="flex-row-reverse">
                <RadioGroup.Item id="radio-pro" value="pro" />
                Pro Plan
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="radio-enterprise" className="flex-row-reverse">
                <RadioGroup.Item id="radio-enterprise" value="enterprise" />
                Enterprise Plan
              </FieldLabel>
            </Field>
          </RadioGroup>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

/** Multiple field groups for organizing complex forms. */
export const MultipleFieldGroups: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <FieldSet>
        <FieldLegend>Personal Info</FieldLegend>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="first">First Name</FieldLabel>
            <FieldContent>
              <Input id="first" placeholder="John" />
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="last">Last Name</FieldLabel>
            <FieldContent>
              <Input id="last" placeholder="Doe" />
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Contact</FieldLegend>
        <FieldGroup>
          <Field orientation="horizontal">
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <FieldContent>
              <Input id="contact-email" type="email" placeholder="john@example.com" />
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};