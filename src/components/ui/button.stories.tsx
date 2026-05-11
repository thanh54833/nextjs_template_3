import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { Icons } from '@/components/icons';

/**
 * Button component for triggering actions and events.
 *
 * @see https://ui.shadcn.com/docs/components/button
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A clickable button element with various styles and sizes. Supports multiple variants like default, secondary, destructive, outline, ghost, and link.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'xs', 'icon', 'icon-sm', 'icon-xs', 'icon-lg'],
      description: 'Size of the button',
    },
  },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default button with primary styling. */
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

/** Secondary variant button. */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

/** Destructive variant for dangerous actions. */
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

/** Outline variant with border styling. */
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

/** Ghost variant with transparent background. */
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

/** Link variant styled as hyperlink text. */
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
};

/** Extra small size button. */
export const XSmall: Story = {
  args: {
    size: 'xs',
    children: 'Extra Small',
  },
};

/** Small size button. */
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

/** Large size button. */
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

/** Icon-only button, default size — always include aria-label */
export const Icon: Story = {
  render: () => (
    <Button size="icon" aria-label="Notifications">
      <Icons.notification />
    </Button>
  ),
};

/** Icon-only button, extra-small — used in inline table actions */
export const IconXSmall: Story = {
  render: () => (
    <Button size="icon-xs" variant="ghost" aria-label="Dismiss">
      <Icons.close />
    </Button>
  ),
};

/** Icon-only button, small size */
export const IconSmall: Story = {
  render: () => (
    <Button size="icon-sm" variant="outline" aria-label="Edit">
      <Icons.edit />
    </Button>
  ),
};

/** Icon-only button, large size */
export const IconLarge: Story = {
  render: () => (
    <Button size="icon-lg" aria-label="Settings">
      <Icons.settings />
    </Button>
  ),
};

/** Disabled button that cannot be clicked. */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

/** Button in loading state with spinner icon. */
export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Loading',
  },
};

/** Button showing success state with check icon. */
export const Success: Story = {
  render: () => (
    <Button variant='default'>
      <Icons.check />
      Success
    </Button>
  ),
};

/** Button showing error state with close icon. */
export const Error: Story = {
  render: () => (
    <Button variant='destructive'>
      <Icons.close />
      Error
    </Button>
  ),
};

/** Button with leading icon, the most common pattern in this product */
export const WithLeadingIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button><Icons.add />New Post</Button>
      <Button variant="outline"><Icons.search />Search</Button>
      <Button variant="destructive"><Icons.trash />Delete</Button>
    </div>
  ),
};
