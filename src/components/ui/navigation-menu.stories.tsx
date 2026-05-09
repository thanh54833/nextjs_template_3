/**
 * A navigation menu component that displays a list of links for navigation between pages.
 *
 * @see https://ui.shadcn.com/docs/components/navigation-menu
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from './navigation-menu';

const meta = {
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A navigation menu component that displays a list of links for navigation between pages. Supports dropdown menus with triggers and content, as well as viewport indicators for showing active states.',
      },
    },
  },
  argTypes: {
    viewport: { control: 'boolean', description: 'Whether to show the viewport indicator' },
  },
} as Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /** Default navigation menu with triggers and dropdown content */
  render: () => (
    <div className='flex justify-center p-8'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid gap-3 p-6 w-[400px]'>
                <NavigationMenuLink href='#'>Introduction</NavigationMenuLink>
                <NavigationMenuLink href='#'>Installation</NavigationMenuLink>
                <NavigationMenuLink href='#'>Quick Start</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='grid gap-3 p-6 w-[400px]'>
                <NavigationMenuLink href='#'>Button</NavigationMenuLink>
                <NavigationMenuLink href='#'>Input</NavigationMenuLink>
                <NavigationMenuLink href='#'>Card</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='#'>Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  ),
};

export const WithoutViewport: Story = {
  /** Navigation menu without viewport indicator */
  render: () => (
    <div className='flex justify-center p-8'>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu Item</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='p-6 w-[300px]'>
                <NavigationMenuLink href='#'>Content Here</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};

export const WithLinks: Story = {
  /** Navigation menu with simple links only */
  render: () => (
    <div className='flex justify-center p-8'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href='#'>Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='#'>About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href='#'>Contact</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </div>
  ),
};

export const TriggerStyles: Story = {
  /** Navigation menu trigger button styles */
  render: () => (
    <div className='flex flex-col gap-4 p-8'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Default Trigger
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </div>
  ),
};
