/**
 * Select component for dropdown option selection.
 *
 * @see https://ui.shadcn.com/docs/components/select
 * @see https://storybook.js.org/docs/writing-stories
 */
import type { Meta, StoryObj } from '@storybook/react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select';

const meta = {
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A select dropdown component for choosing one option from a list. Supports grouped options, placeholder text, and disabled state.',
      },
    },
  },
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default select dropdown */
export const Default: Story = {
  render: () => (
    <Select defaultValue="option-1">
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
        <SelectItem value="option-3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/** Select with grouped options using SelectGroup */
export const WithGroups: Story = {
  render: () => (
    <Select defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

/** Small-sized select trigger */
export const Small: Story = {
  render: () => (
    <Select defaultValue="option-1">
      <SelectTrigger size="sm">
        <SelectValue placeholder="Select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
        <SelectItem value="option-2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  ),
};

/** Disabled select that prevents interaction */
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger>
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option-1">Option 1</SelectItem>
      </SelectContent>
    </Select>
  ),
};
