import type { Meta, StoryObj } from '@storybook/react';
import { useAppForm } from './tanstack-form';

const meta = {
  title: 'UI/TanStack Form',
  tags: ['autodocs'],
  parameters: { layout: 'padded' }
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className='max-w-2xl space-y-6'>
      <div>
        <h3 className='text-lg font-semibold'>TanStack Form Integration</h3>
        <p className='text-sm text-muted-foreground mt-1'>
          Type-safe form system with Zod validation, automatic error handling, and pre-built field components.
        </p>
      </div>

      <div className='rounded-lg border p-4'>
        <h4 className='text-sm font-medium mb-2'>Exports</h4>
        <ul className='text-sm space-y-1 font-mono'>
          <li><code>useAppForm</code> — Main form hook</li>
          <li><code>useFormFields&lt;T&gt;</code> — Type-safe field components</li>
          <li><code>withForm</code> — HOC for form wrapping</li>
          <li><code>withFieldGroup</code> — HOC for field grouping</li>
        </ul>
      </div>

      <div className='rounded-lg border p-4'>
        <h4 className='text-sm font-medium mb-2'>Field Components</h4>
        <ul className='text-sm space-y-1 font-mono'>
          <li><code>FormTextField</code> — Text input</li>
          <li><code>FormTextareaField</code> — Textarea</li>
          <li><code>FormSelectField</code> — Select dropdown</li>
          <li><code>FormCheckboxField</code> — Checkbox</li>
          <li><code>FormSwitchField</code> — Toggle switch</li>
          <li><code>FormRadioGroupField</code> — Radio group</li>
          <li><code>FormSliderField</code> — Range slider</li>
          <li><code>FormFileUploadField</code> — File upload</li>
        </ul>
      </div>

      <div className='rounded-lg border p-4'>
        <h4 className='text-sm font-medium mb-2'>Usage</h4>
        <pre className='text-xs mt-2 overflow-x-auto'>
{`const form = useAppForm({
  defaultValues: { email: '', name: '' },
  validators: { onChange: schema }
});

const { FormTextField } = useFormFields<FormValues>();

<form.Form>
  <form.AppField
    name="email"
    children={(field) => (
      <FormTextField {...field} label="Email" />
    )}
  />
  <form.SubmitButton>Submit</form.SubmitButton>
</form.Form>`}
        </pre>
      </div>

      <div className='text-xs text-muted-foreground'>
        See <code>src/components/forms/fields/</code> for individual field implementations.
      </div>
    </div>
  )
};
