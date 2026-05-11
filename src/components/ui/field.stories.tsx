import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';
import { Input } from './input';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Switch } from './switch';
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
} from './field';

/**
 * Layout primitives for building structured forms.
 *
 * `Field`, `FieldGroup`, and `FieldSet` handle orientation, spacing, and
 * error state. Pair them with any form control — Input, Select, Switch,
 * Checkbox, RadioGroup. The `orientation` prop gives you vertical (default),
 * horizontal, or responsive (vertical → horizontal at md breakpoint).
 *
 * @see docs/forms.md for the full integration guide with TanStack Form.
 */
const meta = {
  component: Field,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Layout primitives for form fields: Field, FieldGroup, FieldSet, FieldLabel, FieldDescription, FieldError, FieldSeparator, FieldTitle. Orientation-aware, error-aware, composable with any form control.',
      },
    },
  },
} as Meta<typeof Field>;

export default meta;
type Story = StoryObj;

// ---------------------------------------------------------------------------
// Default — vertical layout, the most common pattern
// ---------------------------------------------------------------------------

/** Standard vertical layout — label above input. Use for most form fields. */
export const Default: Story = {
  render: () => (
    <FieldSet className='max-w-sm'>
      <FieldLegend>Schedule a post</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor='post-title'>Post title</FieldLabel>
          <FieldContent>
            <Input id='post-title' placeholder='Summer campaign launch' />
            <FieldDescription>Internal label — not shown to audiences.</FieldDescription>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor='post-caption'>Caption</FieldLabel>
          <FieldContent>
            <Input id='post-caption' placeholder='Check out our latest collection. Link in bio!' />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// Horizontal — label left, control right
// ---------------------------------------------------------------------------

/**
 * Horizontal orientation: label on the left, control flush right.
 * Best for settings panels where vertical space is scarce.
 */
export const HorizontalOrientation: Story = {
  render: () => (
    <FieldSet className='max-w-md'>
      <FieldLegend>Publishing settings</FieldLegend>
      <FieldGroup>
        <Field orientation='horizontal'>
          <FieldLabel htmlFor='handle'>Instagram handle</FieldLabel>
          <FieldContent>
            <Input id='handle' placeholder='@yourbrand' />
          </FieldContent>
        </Field>

        <Field orientation='horizontal'>
          <FieldLabel htmlFor='hashtags'>Default hashtags</FieldLabel>
          <FieldContent>
            <Input id='hashtags' placeholder='#socialmedia #marketing' />
            <FieldDescription>Added to every post automatically.</FieldDescription>
          </FieldContent>
        </Field>

        <Field orientation='horizontal'>
          <FieldLabel htmlFor='timezone'>Timezone</FieldLabel>
          <FieldContent>
            <Input id='timezone' placeholder='Asia/Ho_Chi_Minh' />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// Responsive — stacks vertically on narrow, horizontal on wide
// ---------------------------------------------------------------------------

/**
 * Responsive orientation: vertical on narrow containers, horizontal at `@md`.
 * Wrap the parent in a `@container` — FieldGroup already applies `@container/field-group`.
 */
export const ResponsiveOrientation: Story = {
  render: () => (
    <FieldSet>
      <FieldLegend>Profile</FieldLegend>
      <FieldGroup>
        <Field orientation='responsive'>
          <FieldLabel htmlFor='display-name'>Display name</FieldLabel>
          <FieldContent>
            <Input id='display-name' placeholder='Social Media Manager' />
            <FieldDescription>Shown in exported reports and team views.</FieldDescription>
          </FieldContent>
        </Field>

        <Field orientation='responsive'>
          <FieldLabel htmlFor='company'>Company</FieldLabel>
          <FieldContent>
            <Input id='company' placeholder='Acme Agency' />
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// WithDescription — prominent helper text
// ---------------------------------------------------------------------------

/**
 * `FieldDescription` renders below the control with muted styling.
 * Use it to prevent errors before they happen — constraints, format hints,
 * what the value is used for.
 */
export const WithDescription: Story = {
  render: () => (
    <FieldSet className='max-w-sm'>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor='report-title'>Report title</FieldLabel>
          <FieldContent>
            <Input id='report-title' placeholder='Q3 Instagram Performance' />
            <FieldDescription>
              Shown to clients at the top of exported PDFs. Keep it under 60 characters.
            </FieldDescription>
          </FieldContent>
        </Field>

        <Field>
          <FieldLabel htmlFor='webhook-url'>Webhook URL</FieldLabel>
          <FieldContent>
            <Input id='webhook-url' type='url' placeholder='https://hooks.zapier.com/…' />
            <FieldDescription>
              Called after each post publishes. Must accept POST with{' '}
              <code>application/json</code>.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// WithErrors — validation feedback
// ---------------------------------------------------------------------------

/**
 * `FieldError` accepts an `errors` array (strings or `{ message }` objects)
 * and deduplicates them. Multiple errors render as a list; a single error
 * renders inline. The field root gains `text-destructive` automatically.
 */
export const WithErrors: Story = {
  render: () => (
    <FieldSet className='max-w-sm'>
      <FieldGroup>
        <Field data-invalid='true'>
          <FieldLabel htmlFor='schedule-time'>Schedule time</FieldLabel>
          <FieldContent>
            <Input id='schedule-time' defaultValue='25:99' />
          </FieldContent>
          <FieldError errors={['Invalid time format — use HH:MM (24h)']} />
        </Field>

        <Field data-invalid='true'>
          <FieldLabel htmlFor='platforms'>Platforms</FieldLabel>
          <FieldContent>
            <Input id='platforms' defaultValue='' />
          </FieldContent>
          <FieldError
            errors={[
              'Select at least one platform',
              'Instagram account is not connected',
            ]}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// WithSeparator — or/and divider between alternatives
// ---------------------------------------------------------------------------

/**
 * `FieldSeparator` places a visual divider between field groups, optionally
 * with a text label like "or". Useful when two inputs are mutually exclusive.
 */
export const WithSeparator: Story = {
  render: () => (
    <FieldSet className='max-w-sm'>
      <FieldLegend>Schedule or publish</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor='schedule-date'>Scheduled date</FieldLabel>
          <FieldContent>
            <Input id='schedule-date' placeholder='2025-06-15 09:00' />
            <FieldDescription>Post will publish automatically at this time.</FieldDescription>
          </FieldContent>
        </Field>

        <FieldSeparator>or</FieldSeparator>

        <Field>
          <FieldLabel htmlFor='publish-now'>Publish reason</FieldLabel>
          <FieldContent>
            <Input id='publish-now' placeholder='Breaking news, immediate response…' />
            <FieldDescription>Leave the date blank to publish immediately.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// CheckboxField — horizontal checkbox with label
// ---------------------------------------------------------------------------

/**
 * Checkbox and Switch fields use `orientation="horizontal"` so the control
 * and its label sit on the same line. `FieldDescription` stacks below.
 * Use `FieldTitle` (not `FieldLabel`) when there is no native form control
 * to bind with `htmlFor`.
 */
export const NotificationPreferences: Story = {
  render: () => (
    <FieldSet className='max-w-md'>
      <FieldLegend>Notifications</FieldLegend>
      <FieldGroup>
        <Field orientation='horizontal'>
          <FieldTitle>Post published</FieldTitle>
          <FieldContent>
            <FieldDescription>Notify when a scheduled post goes live.</FieldDescription>
          </FieldContent>
          <Switch defaultChecked />
        </Field>

        <Field orientation='horizontal'>
          <FieldTitle>Engagement spike</FieldTitle>
          <FieldContent>
            <FieldDescription>Alert when a post gets 2× your average engagement.</FieldDescription>
          </FieldContent>
          <Switch defaultChecked />
        </Field>

        <Field orientation='horizontal'>
          <FieldTitle>Weekly digest</FieldTitle>
          <FieldContent>
            <FieldDescription>Sunday summary of top-performing content.</FieldDescription>
          </FieldContent>
          <Switch />
        </Field>

        <Field orientation='horizontal'>
          <FieldTitle>Team mentions</FieldTitle>
          <FieldContent>
            <FieldDescription>Alert when a teammate mentions you in a comment.</FieldDescription>
          </FieldContent>
          <Switch defaultChecked />
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// RadioGroupField — single selection
// ---------------------------------------------------------------------------

/**
 * Radio groups pair with `FieldSet` + `FieldLegend` for accessible grouping.
 * Each option is its own `Field orientation="horizontal"`.
 */
export const ContentTypeSelector: Story = {
  render: () => (
    <FieldSet className='max-w-xs'>
      <FieldLegend>Content type</FieldLegend>
      <FieldGroup>
        <Field>
          <RadioGroup defaultValue='reel'>
            <Field orientation='horizontal'>
              <FieldLabel htmlFor='type-reel' className='flex-row-reverse gap-3'>
                <RadioGroupItem id='type-reel' value='reel' />
                Reel
              </FieldLabel>
            </Field>
            <Field orientation='horizontal'>
              <FieldLabel htmlFor='type-carousel' className='flex-row-reverse gap-3'>
                <RadioGroupItem id='type-carousel' value='carousel' />
                Carousel
              </FieldLabel>
            </Field>
            <Field orientation='horizontal'>
              <FieldLabel htmlFor='type-static' className='flex-row-reverse gap-3'>
                <RadioGroupItem id='type-static' value='static' />
                Static image
              </FieldLabel>
            </Field>
            <Field orientation='horizontal'>
              <FieldLabel htmlFor='type-story' className='flex-row-reverse gap-3'>
                <RadioGroupItem id='type-story' value='story' />
                Story
              </FieldLabel>
            </Field>
          </RadioGroup>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};

// ---------------------------------------------------------------------------
// CompleteSettingsSection — multi-group real-world form
// ---------------------------------------------------------------------------

/**
 * Multiple `FieldSet` + `FieldGroup` sections compose a full settings page.
 * Each section has its own `FieldLegend` as a semantic heading, and the
 * sections are separated by `gap-8` on the outer wrapper.
 */
export const CompleteSettingsSection: Story = {
  render: () => (
    <div className='flex max-w-lg flex-col gap-10'>
      <FieldSet>
        <FieldLegend>Workspace</FieldLegend>
        <FieldGroup>
          <Field orientation='horizontal'>
            <FieldLabel htmlFor='ws-name'>Workspace name</FieldLabel>
            <FieldContent>
              <Input id='ws-name' defaultValue='Acme Social' />
            </FieldContent>
          </Field>
          <Field orientation='horizontal'>
            <FieldLabel htmlFor='ws-timezone'>Default timezone</FieldLabel>
            <FieldContent>
              <Input id='ws-timezone' defaultValue='Asia/Ho_Chi_Minh' />
              <FieldDescription>Used for scheduling and report timestamps.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Publishing</FieldLegend>
        <FieldGroup>
          <Field orientation='horizontal'>
            <FieldTitle>Auto-publish drafts</FieldTitle>
            <FieldContent>
              <FieldDescription>Publish approved drafts without a manual confirm step.</FieldDescription>
            </FieldContent>
            <Switch />
          </Field>

          <Field orientation='horizontal'>
            <FieldTitle>Smart scheduling</FieldTitle>
            <FieldContent>
              <FieldDescription>
                Auto-pick the best time based on your audience's activity.
              </FieldDescription>
            </FieldContent>
            <Switch defaultChecked />
          </Field>
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Danger zone</FieldLegend>
        <FieldGroup>
          <Field orientation='horizontal'>
            <FieldLabel htmlFor='ws-slug'>Workspace slug</FieldLabel>
            <FieldContent>
              <Input id='ws-slug' defaultValue='acme-social' />
              <FieldDescription>
                Changing this invalidates all existing share links.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// CheckboxField — multi-select with checkboxes
// ---------------------------------------------------------------------------

/** Checkbox fields for multi-select preferences — platform distribution. */
export const PlatformDistribution: Story = {
  render: () => (
    <FieldSet className='max-w-xs'>
      <FieldLegend>Distribute to</FieldLegend>
      <FieldGroup>
        {[
          { id: 'plat-ig', label: 'Instagram', defaultChecked: true },
          { id: 'plat-tw', label: 'Twitter / X', defaultChecked: true },
          { id: 'plat-li', label: 'LinkedIn', defaultChecked: false },
          { id: 'plat-tt', label: 'TikTok', defaultChecked: false },
          { id: 'plat-fb', label: 'Facebook', defaultChecked: false },
        ].map(({ id, label, defaultChecked }) => (
          <Field key={id} orientation='horizontal'>
            <FieldLabel htmlFor={id} className='flex-row-reverse gap-3'>
              <Checkbox id={id} defaultChecked={defaultChecked} />
              {label}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  ),
};
