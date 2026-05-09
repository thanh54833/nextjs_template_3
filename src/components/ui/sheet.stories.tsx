import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from './sheet';

/**
 * Sheet component for slide-out panels similar to mobile navigation drawers.
 *
 * @see https://ui.shadcn.com/docs/components/sheet
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A sheet component for slide-out panels. Supports four sides (top, bottom, left, right) and is often used for mobile navigation, settings panels, and filters.'
      }
    }
  }
} as Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default sheet sliding from the right */
export const Default: Story = {
  render: () => {
    return (
      <Sheet open>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a description of the sheet content.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content goes here. You can put any content inside.</p>
          </div>
          <SheetFooter>
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }
};

/** Sheet with trigger button for interactive open/close */
export const WithTrigger: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Edit Settings</SheetTitle>
            <SheetDescription>
              Make changes to your settings here.
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Settings form content...</p>
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }
};

/** Sheet sliding from the top */
export const TopSide: Story = {
  render: () => {
    return (
      <Sheet open>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the top.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
};

/** Sheet sliding from the bottom */
export const BottomSide: Story = {
  render: () => {
    return (
      <Sheet open>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
};

/** Sheet sliding from the left */
export const LeftSide: Story = {
  render: () => {
    return (
      <Sheet open>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>This sheet slides in from the left.</SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <p>Sheet content...</p>
          </div>
        </SheetContent>
      </Sheet>
    );
  }
};