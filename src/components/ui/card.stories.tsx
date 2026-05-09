/**
 * Card component for grouping and displaying content in a container.
 *
 * @see https://ui.shadcn.com/docs/components/card
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 *
 * Card is a flexible container component that supports the following sub-components:
 * - `Card` - The main container
 * - `CardHeader` - Header section for title and description
 * - `CardTitle` - Card title text
 * - `CardDescription` - Card description text
 * - `CardAction` - Action buttons in the header
 * - `CardContent` - Main content area
 * - `CardFooter` - Footer section for actions
 */
import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from './card';
import { Button } from './button';

const meta = {
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card is a container component for grouping and displaying content. It includes sub-components: `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, and `CardFooter` for flexible layouts.',
      },
    },
  },
} as Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default card with header, title, description, and content */
export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a card description.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
      </>
    ),
  },
};

/** Card with action buttons in header and footer */
export const WithAction: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardAction>
            <Button variant="ghost" size="icon-xs">Edit</Button>
          </CardAction>
          <CardDescription>Manage your profile settings</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your profile information</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </>
    ),
  },
};

/** Simple card with just content */
export const SimpleCard: Story = {
  args: {
    children: <CardContent>Simple card content</CardContent>,
  },
};
