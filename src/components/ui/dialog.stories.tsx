/**
 * Dialog component for displaying overlay content that requires user attention or action.
 *
 * @see https://ui.shadcn.com/docs/components/dialog
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './dialog';

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
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default dialog with title, description, and action buttons */
export const Default: Story = {
  render: () => {
    return (
      <Dialog open>
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
            <Button variant="outline">Cancel</Button>
            <Button>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
};

/** Dialog with trigger button that manages open state */
export const WithTrigger: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Please confirm to proceed.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
};

/** Alert-style dialog for destructive actions with red accent */
export const AlertDialog: Story = {
  render: () => {
    return (
      <Dialog open>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Destructive Action</DialogTitle>
            <DialogDescription className="text-destructive">
              This will permanently delete your account and remove all associated data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
};