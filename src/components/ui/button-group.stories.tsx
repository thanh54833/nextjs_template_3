/**
 * Button group component for combining buttons, inputs, and text in unified layouts.
 *
 * @see https://github.com/Kiranism/next-shadcn-dashboard-starter - Original source
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { Input } from './input';
import { Select } from './select';
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './button-group';

const meta = {
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A button group component for combining buttons, inputs, and text in a unified horizontal or vertical layout.',
      },
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default horizontal button group with three buttons. */
export const Default: Story = {
  args: {},
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Center</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

/** Explicit horizontal orientation. */
export const Horizontal: Story = {
  args: {},
  render: () => (
    <ButtonGroup orientation="horizontal">
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
      <Button variant="outline">Third</Button>
    </ButtonGroup>
  ),
};

/** Vertical orientation for narrow containers. */
export const Vertical: Story = {
  args: {},
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Top</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Bottom</Button>
    </ButtonGroup>
  ),
};

/** Button group with text input for search patterns. */
export const WithInput: Story = {
  args: {},
  render: () => (
    <ButtonGroup className="w-[400px]">
      <Button variant="outline">Search</Button>
      <Input placeholder="Search..." className="flex-1" />
    </ButtonGroup>
  ),
};

/** Button group with select dropdown for filter patterns. */
export const WithSelect: Story = {
  args: {},
  render: () => (
    <ButtonGroup className="w-[400px]">
      <Button variant="outline">Filter</Button>
      <Select className="flex-1">
        <option>All Items</option>
        <option>Active</option>
        <option>Archived</option>
      </Select>
    </ButtonGroup>
  ),
};

/** Button group with text label for formatting toolbars. */
export const WithTextLabel: Story = {
  args: {},
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Text formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
  ),
};

/** Button group with separator for grouped actions. */
export const WithSeparator: Story = {
  args: {},
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Cut</Button>
      <Button variant="outline">Copy</Button>
      <ButtonGroupSeparator orientation="vertical" />
      <Button variant="outline">Paste</Button>
      <Button variant="outline">Delete</Button>
    </ButtonGroup>
  ),
};

/** Vertical button group with text label. */
export const WithTextLabelVertical: Story = {
  args: {},
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button variant="outline">Bold</Button>
      <Button variant="outline">Italic</Button>
      <ButtonGroupText>Formatting</ButtonGroupText>
      <Button variant="outline">Underline</Button>
    </ButtonGroup>
  ),
};

/** Icon-only buttons for compact toolbars. */
export const IconButtons: Story = {
  args: {},
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </Button>
      <Button variant="outline" size="icon">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      </Button>
      <Button variant="outline" size="icon">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </Button>
    </ButtonGroup>
  ),
};

/** Mixed content with buttons, text, and input. */
export const MixedContent: Story = {
  args: {},
  render: () => (
    <ButtonGroup className="w-[500px]">
      <Button variant="outline">Save</Button>
      <Button variant="outline">Export</Button>
      <ButtonGroupText>or</ButtonGroupText>
      <Input placeholder="Quick search..." className="w-[200px]" />
      <Button variant="default">Search</Button>
    </ButtonGroup>
  ),
};