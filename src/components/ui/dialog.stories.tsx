import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { useState } from 'react';
import { z } from 'zod';

import { Icons } from '@/components/icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useAppForm, useFormFields } from '@/components/ui/tanstack-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './dialog';
import { Input } from './input';

/**
 * Dialog component for displaying overlay content that requires user attention or action.
 *
 * @see https://ui.shadcn.com/docs/components/dialog
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dialog component that overlays the page to capture user attention. Built on Radix UI primitives for accessibility and animation support.'
      }
    }
  }
} as Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default dialog with title, description, and action buttons */
export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: /open dialog/i });
    await userEvent.click(trigger);
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a description of the dialog. It provides additional context about the
              content.
            </DialogDescription>
          </DialogHeader>
          <p>Dialog content goes here. You can put any React content inside.</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
};

// ---------------------------------------------------------------------------
// FormDialog — rich sectioned form matching the design spec
// ---------------------------------------------------------------------------

const interviewSchema = z.object({
  interviewTitle: z.string().min(1, 'Interview title is required'),
  meetingUrl: z.url('Must be a valid URL').or(z.literal('')),
  interviewDate: z.string().min(1, 'Please pick a date & time'),
  duration: z.enum(['30', '60', '90']),
  prospectName: z.string().min(1, 'Name is required'),
  prospectEmail: z.email('Must be a valid email'),
});

type InterviewValues = z.infer<typeof interviewSchema>;

const DURATION_OPTIONS = [
  { value: '30', label: '30 min' },
  { value: '60', label: '60 min' },
  { value: '90', label: '90 min' },
] as const;

function ScheduleInterviewFormDialog({ onClose }: { onClose: () => void }) {
  const form = useAppForm({
    defaultValues: {
      interviewTitle: 'UX Designer Interview - Jake and Aspect Team',
      meetingUrl: 'https://us04web.zoom.us/j/75806772593?pwd=hb0098d8...',
      interviewDate: '',
      duration: '30' as '30' | '60' | '90',
      prospectName: 'Jack Sparrow',
      prospectEmail: 'jacksparrow@gmail.com',
    } as InterviewValues,
    validators: { onSubmit: interviewSchema },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 800));
      console.info('Interview scheduled:', value);
      onClose();
    },
  });

  const { FormTextField } = useFormFields<InterviewValues>();

  return (
    <form.AppForm>
      <form.Form id="schedule-interview-form" className="p-0">
        <div className="space-y-4">

          {/* ── Interview Details ── */}
          <section className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Interview Details</p>

            {/* Candidate card */}
            <div className="flex items-start gap-3 rounded-lg border bg-muted/40 px-3 py-2.5">
              <Avatar className="mt-0.5 h-9 w-9 shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" alt="Senior Frontend Angular Developer" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
                  SF
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 space-y-1">
                <p className="text-sm font-medium leading-tight">Senior Frontend Angular Developer</p>
                <p className="text-xs text-muted-foreground">Offtoc LLC</p>
                <div className="space-y-1 pt-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-muted-foreground shrink-0">Skills</span>
                    <div className="flex gap-1 flex-wrap">
                      {['Angular', 'Javascript', 'Tailwind'].map((s) => (
                        <Badge key={s} variant="secondary" className="h-4 rounded-full px-2 text-[10px]">{s}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-muted-foreground shrink-0">Position type</span>
                    <div className="flex gap-1">
                      {['Remote', 'Full-time'].map((t) => (
                        <Badge key={t} variant="outline" className="h-4 rounded-full px-2 text-[10px]">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FormTextField
              name="interviewTitle"
              label="Interview Title"
              placeholder="e.g. UX Designer Interview"
            />

            <FormTextField
              name="meetingUrl"
              label="Meeting URL"
              placeholder="https://..."
              type="url"
            />

            {/* Date & Duration side by side */}
            <div className="grid grid-cols-2 gap-3">
              <form.AppField name="interviewDate">
                {(field) => (
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium leading-none">
                      Interview date &amp; time
                    </label>
                    <div className="relative">
                      <Input
                        placeholder="Pick a slot"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        onBlur={field.handleBlur}
                        className="pl-9"
                      />
                      <Icons.calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    </div>
                    <field.FieldError />
                  </div>
                )}
              </form.AppField>

              <form.AppField name="duration">
                {(field) => (
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium leading-none">
                      Duration
                    </label>
                    <ToggleGroup
                      type="single"
                      variant="outline"
                      value={field.state.value}
                      onValueChange={(v) => { if (v) field.handleChange(v as '30' | '60' | '90'); }}
                      className="w-full"
                    >
                      {DURATION_OPTIONS.map(({ value, label }) => (
                        <ToggleGroupItem
                          key={value}
                          value={value}
                          className="flex-1 text-xs font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
                        >
                          {label}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>
                )}
              </form.AppField>
            </div>
          </section>

          <Separator />

          {/* ── Prospect Details ── */}
          <section className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Prospect Details</p>

            <div className="grid grid-cols-2 gap-3">
              <FormTextField name="prospectName" label="Name" placeholder="Jack Sparrow" />
              <FormTextField name="prospectEmail" label="Email Address" type="email" placeholder="jack@example.com" />
            </div>

            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-auto gap-1.5 px-0 py-0 text-sm font-normal text-primary hover:bg-transparent hover:text-primary/80"
            >
              <Icons.plusCircle className="h-4 w-4" />
              Add Prospect
            </Button>
          </section>

        </div>
      </form.Form>
    </form.AppForm>
  );
}

/** Sectioned dialog form: candidate card, date/duration grid, prospect list */
export const FormDialog: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: /schedule interview/i });
    await userEvent.click(trigger);
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Schedule Interview</Button>
        </DialogTrigger>
        <DialogContent className="flex max-h-[90vh] flex-col gap-0 p-0 sm:max-w-lg">
          <DialogHeader className="shrink-0 border-b px-6 pb-4 pt-4 pr-10 text-left">
            <DialogTitle className="text-xl font-semibold tracking-tight">
              Schedule new interview
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              Fill in the correct information for this interview.
            </DialogDescription>
          </DialogHeader>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <ScheduleInterviewFormDialog onClose={() => setOpen(false)} />
          </div>

          <DialogFooter className="shrink-0 flex-row items-center border-t px-6 py-4">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="schedule-interview-form"
              className="flex-1"
            >
              Schedule Interview
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
};