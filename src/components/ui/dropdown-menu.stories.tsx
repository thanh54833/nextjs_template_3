import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from './dropdown-menu';

/**
 * DropdownMenu component for revealing a list of actions or options.
 *
 * @see https://ui.shadcn.com/docs/components/dropdown-menu
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A dropdown menu component for revealing actions, options, or navigation. Built on Radix UI primitives with support for checkboxes, radio groups, and nested submenus.'
      }
    }
  }
} as Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default dropdown menu with common actions and shortcuts */
export const Default: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            New Tab
            <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Save Page As...
            <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            Delete
            <DropdownMenuShortcut>⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

/** Dropdown menu with nested submenu */
export const WithSubmenu: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Keyboard Shortcuts</DropdownMenuItem>
              <DropdownMenuItem>API Documentation</DropdownMenuItem>
              <DropdownMenuItem>Community</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

/** Dropdown menu with checkbox items for toggling options */
export const WithCheckbox: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked>Show Sidebar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Show Toolbar</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Show Status Bar</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

/** Dropdown menu with radio group for single selection */
export const WithRadioGroup: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value="light">
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};

/** Dropdown menu with grouped items for organizing related actions */
export const WithGroup: Story = {
  render: () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Dropdown</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Workspace</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Team Members</DropdownMenuItem>
            <DropdownMenuItem>Invitations</DropdownMenuItem>
            <DropdownMenuItem>Roles & Permissions</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};