import type { Meta, StoryObj } from '@storybook/react';

import { NativeSelect, NativeSelectOption, NativeSelectOptGroup } from './native-select';

const meta = {
  component: NativeSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof NativeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
      <NativeSelectOption value="option-3">Option 3</NativeSelectOption>
    </NativeSelect>
  ),
};

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

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: () => (
    <NativeSelect size="sm">
      <NativeSelectOption value="option-1">Small Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Small Option 2</NativeSelectOption>
    </NativeSelect>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: () => (
    <NativeSelect disabled>
      <NativeSelectOption value="option-1">Disabled Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Disabled Option 2</NativeSelectOption>
    </NativeSelect>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select an option...</NativeSelectOption>
      <NativeSelectOption value="option-1">Option 1</NativeSelectOption>
      <NativeSelectOption value="option-2">Option 2</NativeSelectOption>
    </NativeSelect>
  ),
};
