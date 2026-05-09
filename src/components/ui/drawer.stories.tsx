import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from './drawer';

/**
 * Drawer component for sidebar panels that slide in from different directions.
 *
 * @see https://ui.shadcn.com/docs/components/drawer
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A drawer component that slides in from different directions. Useful for mobile-friendly side panels, forms, and navigation.'
      }
    }
  }
} as Meta<typeof Drawer>;

export default meta;
type Story = StoryObj;

/** Default drawer sliding from the bottom */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>
              This is a description of the drawer content.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here. You can put any content inside.</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            </DrawerClose>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
};

/** Drawer with trigger button for interactive open/close */
export const WithTrigger: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Edit Profile</DrawerTitle>
            <DrawerDescription>
              Make changes to your profile here.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <p>Profile form content goes here...</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DrawerClose>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
};

/** Drawer sliding from the top */
export const TopDirection: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Top Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Top Drawer</DrawerTitle>
            <DrawerDescription>This drawer slides in from the top.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content...</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
};

/** Drawer sliding from the left */
export const LeftDirection: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Open Left Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerDescription>This drawer slides in from the left.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content...</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }
};