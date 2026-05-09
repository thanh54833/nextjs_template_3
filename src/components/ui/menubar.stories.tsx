import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger
} from './menubar';

/**
 * Menubar component for application-style navigation menus.
 *
 * @see https://ui.shadcn.com/docs/components/menubar
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A menubar component for application-style navigation. Inspired by desktop application menus with support for nested submenus, checkboxes, and radio groups.'
      }
    }
  }
} as Meta<typeof Menubar>;

export default meta;
type Story = StoryObj;

/** Default menubar with File, Edit, View, and Help menus */
export const Default: Story = {
  render: () => {
    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Save
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem variant="destructive">
              Exit
              <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo
              <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Toolbar</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup>
              <MenubarLabel>Theme</MenubarLabel>
<MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Documentation</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>More</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Community</MenubarItem>
                <MenubarItem>Support</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  }
};