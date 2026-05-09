/**
 * ToggleGroup component for grouped toggle selections.
 *
 * @see https://ui.shadcn.com/docs/components/toggle-group
 * @see https://storybook.js.org/docs/writing-stories
 */
import type { Meta, StoryObj } from '@storybook/react';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';

const meta = {
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toggle group component for managing multiple related toggle buttons. Supports single-selection (only one pressed at a time) and multiple-selection modes.',
      },
    },
  },
} as Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default toggle group with single selection */
export const Default: Story = {
  render: () => (
    <ToggleGroup defaultValue="bold">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/** Toggle group with multiple selection (multiple items can be pressed) */
export const Multiple: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/** Toggle group with single selection mode explicitly set */
export const Single: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Left">
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center">
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right">
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/** Toggle group with outline variant styling */
export const Outline: Story = {
  render: () => (
    <ToggleGroup defaultValue="bold" variant="outline">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/** Small-sized toggle group */
export const Small: Story = {
  render: () => (
    <ToggleGroup defaultValue="bold" size="sm">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Underline">
        U
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

/** Disabled toggle group that prevents interaction */
export const Disabled: Story = {
  render: () => (
    <ToggleGroup disabled defaultValue="bold">
      <ToggleGroupItem value="bold" aria-label="Bold">
        B
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Italic">
        I
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
