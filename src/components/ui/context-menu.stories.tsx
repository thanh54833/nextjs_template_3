import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from './context-menu';

const meta = {
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof ContextMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="flex h-[200px] w-[300px] items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">Right-click here</p>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Save Page As...
            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  }
};

export const WithSubmenu: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="flex h-[200px] w-[300px] items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">Right-click for submenu</p>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>New Folder</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Paste</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Duplicate</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
        </ContextMenuContent>
      </ContextMenu>
    );
  }
};

export const WithCheckbox: Story = {
  render: () => {
    return (
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <div className="flex h-[200px] w-[300px] items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">Right-click for checkbox options</p>
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuLabel>View Options</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>Show Sidebar</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem checked>Show Toolbar</ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Status Bar</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup>
            <ContextMenuLabel>Theme</ContextMenuLabel>
            <ContextMenuRadioItem checked>Light</ContextMenuRadioItem>
            <ContextMenuRadioItem>Dark</ContextMenuRadioItem>
            <ContextMenuRadioItem>System</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    );
  }
};