import type { Meta, StoryObj } from '@storybook/react';
import { z } from 'zod';
import { useAppForm } from './tanstack-form';

const meta = {
  title: 'UI/TanStack Form',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Project-standard form system. useAppForm + form.AppField + Zod validators. See docs/forms.md for the full guide.',
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// ---------------------------------------------------------------------------
// Story 1: BasicForm
// ---------------------------------------------------------------------------

const basicSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  platform: z.string().min(1, 'Platform is required'),
  scheduledAt: z.string().min(1, 'Schedule date is required'),
});

const platformOptions = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'twitter', label: 'Twitter / X' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'tiktok', label: 'TikTok' },
];

function BasicFormExample() {
  const form = useAppForm({
    defaultValues: {
      title: '',
      platform: '',
      scheduledAt: '',
    },
    validators: { onChange: basicSchema },
    onSubmit: async ({ value }) => {
      console.log('Create Post submitted:', value);
    },
  });

  return (
    <div className='max-w-md'>
      <form.Form>
        <form.AppField name='title'>
          {(field) => (
            <field.TextField
              label='Post Title'
              description='A short title for your scheduled post.'
              required
            />
          )}
        </form.AppField>

        <form.AppField name='platform'>
          {(field) => (
            <field.SelectField
              label='Platform'
              options={platformOptions}
              placeholder='Choose a platform'
              required
            />
          )}
        </form.AppField>

        <form.AppField name='scheduledAt'>
          {(field) => (
            <field.TextField
              label='Scheduled At'
              placeholder='YYYY-MM-DD HH:MM'
              description='Enter date and time (e.g. 2025-06-15 09:00)'
              required
            />
          )}
        </form.AppField>

        <form.SubmitButton className='mt-2 w-full'>Schedule Post</form.SubmitButton>
      </form.Form>
    </div>
  );
}

export const BasicForm: Story = {
  render: () => <BasicFormExample />,
};

// ---------------------------------------------------------------------------
// Story 2: AllFieldTypes
// ---------------------------------------------------------------------------

const contentTypeOptions = [
  { value: 'reel', label: 'Reel' },
  { value: 'carousel', label: 'Carousel' },
  { value: 'static', label: 'Static Image' },
  { value: 'story', label: 'Story' },
];

function AllFieldTypesExample() {
  const form = useAppForm({
    defaultValues: {
      title: 'Summer campaign launch',
      platform: 'instagram',
      caption: 'Check out our latest collection. Link in bio!',
      enableNotifications: true,
      autoPublish: false,
    },
    onSubmit: async ({ value }) => {
      console.log('All field types submitted:', value);
    },
  });

  return (
    <div className='max-w-md'>
      <form.Form>
        <form.AppField name='title'>
          {(field) => (
            <field.TextField label='Post Title' />
          )}
        </form.AppField>

        <form.AppField name='platform'>
          {(field) => (
            <field.SelectField
              label='Platform'
              options={contentTypeOptions}
              placeholder='Choose content type'
            />
          )}
        </form.AppField>

        <form.AppField name='caption'>
          {(field) => (
            <field.TextareaField
              label='Caption'
              description='Write the post caption. Hashtags and emojis are supported.'
            />
          )}
        </form.AppField>

        <form.AppField name='enableNotifications'>
          {(field) => (
            <field.CheckboxField
              label='Enable notifications'
              description='Receive an alert when the post goes live.'
            />
          )}
        </form.AppField>

        <form.AppField name='autoPublish'>
          {(field) => (
            <field.SwitchField
              label='Auto-publish'
              description='Automatically publish at the scheduled time without manual confirmation.'
            />
          )}
        </form.AppField>

        <form.SubmitButton className='mt-2 w-full'>Save Draft</form.SubmitButton>
      </form.Form>
    </div>
  );
}

export const AllFieldTypes: Story = {
  render: () => <AllFieldTypesExample />,
};

// ---------------------------------------------------------------------------
// Story 3: WithValidationErrors
// ---------------------------------------------------------------------------

const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Must be a valid email address'),
  website: z.string(),
});

function WithValidationErrorsExample() {
  const form = useAppForm({
    defaultValues: {
      name: 'A',
      email: 'not-an-email',
      website: '',
    },
    validators: { onChange: profileSchema },
    onSubmit: async ({ value }) => {
      console.log('Profile update submitted:', value);
    },
  });

  return (
    <div className='max-w-md'>
      <form.Form>
        <form.AppField name='name'>
          {(field) => (
            <field.TextField
              label='Display Name'
              required
            />
          )}
        </form.AppField>

        <form.AppField name='email'>
          {(field) => (
            <field.TextField
              label='Email Address'
              type='email'
              required
            />
          )}
        </form.AppField>

        <form.AppField name='website'>
          {(field) => (
            <field.TextField
              label='Website'
              type='url'
              description='Optional. Must start with https://'
            />
          )}
        </form.AppField>

        <form.SubmitButton className='mt-2 w-full'>Update Profile</form.SubmitButton>
      </form.Form>
      <p className='text-xs text-muted-foreground px-2'>
        Type in any field to trigger inline validation.
      </p>
    </div>
  );
}

export const WithValidationErrors: Story = {
  render: () => <WithValidationErrorsExample />,
};

// ---------------------------------------------------------------------------
// Story 4: LoadingState
// ---------------------------------------------------------------------------

function LoadingStateExample() {
  const form = useAppForm({
    defaultValues: {
      email: '',
    },
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log('Subscribed:', value);
    },
  });

  return (
    <div className='max-w-md'>
      <form.Form>
        <form.AppField name='email'>
          {(field) => (
            <field.TextField
              label='Email Address'
              type='email'
              description='Subscribe to receive social media performance reports.'
            />
          )}
        </form.AppField>

        <form.SubmitButton className='mt-2 w-full'>Subscribe</form.SubmitButton>
      </form.Form>
      <p className='text-xs text-muted-foreground px-2'>
        Submit to see the loading state (3 second delay).
      </p>
    </div>
  );
}

export const LoadingState: Story = {
  render: () => <LoadingStateExample />,
};
