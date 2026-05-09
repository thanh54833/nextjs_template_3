/**
 * RadioGroup component for exclusive option selection.
 *
 * @see https://ui.shadcn.com/docs/components/radio-group
 * @see https://storybook.js.org/docs/writing-stories
 */
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './radio-group';

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A radio group component that allows users to select a single option from a list of mutually exclusive options. Supports horizontal and vertical orientations, plus disabled state.',
      },
    },
  },
} as Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default vertical radio group */
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

/** Horizontal radio group for inline options like size selection */
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

/** Disabled radio group that prevents user interaction */
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
