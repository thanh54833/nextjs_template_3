/**
 * Command component for searchable command palettes and dialogs.
 *
 * @see https://ui.shadcn.com/docs/components/command
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from './command';

const meta = {
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A command component for building searchable command palettes. Inspired by Spotlight/Alfred-style interfaces with keyboard navigation support.'
      }
    }
  }
} as Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default inline command with input and grouped list */
export const Default: Story = {
  render: () => {
    return (
      <Command className="w-[350px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem>
              <span>Settings</span>
            </CommandItem>
            <CommandItem>
              <span>Profile</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem>
              <span>Create New</span>
            </CommandItem>
            <CommandItem>
              <span>Delete All</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  }
};

/** Command dialog modal with trigger button */
export const WithDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search for commands..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => setOpen(false)}>
                Go to Dashboard
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                Go to Settings
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                Go to Profile
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem onSelect={() => setOpen(false)}>
                Create New Project
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                Invite Team Member
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  }
};