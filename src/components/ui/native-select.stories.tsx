import type { Meta, StoryObj } from '@storybook/react';

import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from './native-select';

/**
 * NativeSelect component using native HTML select element.
 *
 * @see https://ui.shadcn.com/docs/components/select
 * @see https://storybook.js.org/docs/writing-stories
 */
const meta = {
  component: NativeSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A native HTML select element wrapper that provides better browser performance and accessibility. Supports options, optgroups, and all standard select attributes.',
      },
    },
  },
} as Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default native select dropdown */
export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option-3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
};

/** Native select with grouped options using NativeSelectOptGroup */
export const WithGroups: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOptGroup label="Fruits">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Vegetables">
        <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
        <NativeSelectOption value="potato">Potato</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
};

/** Small-sized native select */
export const Small: Story = {
  render: () => (
    <NativeSelect size="sm">
      <NativeSelectOption value="option-1">Small Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Small Option 2</NativeSelectOption>
    </NativeSelect>
  ),
};

/** Disabled native select that prevents interaction */
export const Disabled: Story = {
  render: () => (
    <NativeSelect disabled>
      <NativeSelectOption value="option-1">Disabled Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Disabled Option 2</NativeSelectOption>
    </NativeSelect>
  ),
};

/** Native select with placeholder option */
export const WithPlaceholder: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
    </NativeSelect>
  ),
};
