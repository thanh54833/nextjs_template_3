import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './radio-group';

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="r1" />
        <label htmlFor="r1" className="text-sm font-medium">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="r2" />
        <label htmlFor="r2" className="text-sm font-medium">
          Option 2
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="r3" />
        <label htmlFor="r3" className="text-sm font-medium">
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" orientation="horizontal">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="hr1" />
        <label htmlFor="hr1" className="text-sm font-medium">
          Small
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="hr2" />
        <label htmlFor="hr2" className="text-sm font-medium">
          Medium
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-3" id="hr3" />
        <label htmlFor="hr3" className="text-sm font-medium">
          Large
        </label>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-2" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="dr1" />
        <label htmlFor="dr1" className="text-sm font-medium">
          Option 1
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="dr2" />
        <label htmlFor="dr2" className="text-sm font-medium">
          Option 2
        </label>
      </div>
    </RadioGroup>
  ),
};
