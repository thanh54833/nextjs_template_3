import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

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

/** Icon-only button with default icon size. */
export const Icon: Story = {
  args: {
    size: 'icon',
    children: '🔔',
  },
};

/** Icon-only button with extra small size. */
export const IconXSmall: Story = {
  args: {
    size: 'icon-xs',
    children: '×',
  },
};

/** Icon-only button with small size. */
export const IconSmall: Story = {
  args: {
    size: 'icon-sm',
    children: '★',
  },
};

/** Icon-only button with large size. */
export const IconLarge: Story = {
  args: {
    size: 'icon-lg',
    children: '👍',
  },
};

/** Disabled button that cannot be clicked. */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};
