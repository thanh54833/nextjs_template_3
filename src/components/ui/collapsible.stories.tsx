import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible';
import { Button } from './button';

/**
 * A component that allows content to be expanded or collapsed.
 *
 * @see https://ui.shadcn.com/docs/components/collapsible
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Collapsible,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A component that allows content to be expanded or collapsed. Useful for FAQs, content sections, or any UI pattern where hiding/showing content is needed.',
      },
    },
  },
  argTypes: {
    open: { control: 'boolean', description: 'Whether the collapsible is open' },
    disabled: { control: 'boolean', description: 'Whether the collapsible is disabled' },
  },
} as Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /** Default collapsible that starts in collapsed state */
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className='flex flex-col gap-4'>
          <CollapsibleTrigger asChild>
            <Button variant='outline' size='sm'>
              {isOpen ? 'Collapse' : 'Expand'}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='rounded-md border p-4'>
              <p className='text-sm'>
                This is the collapsible content. It can be expanded and collapsed by clicking the trigger button above.
              </p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    );
  },
};

export const OpenByDefault: Story = {
  /** Collapsible that starts in open state */
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className='flex flex-col gap-4'>
          <CollapsibleTrigger asChild>
            <Button variant='outline' size='sm'>
              {isOpen ? 'Collapse' : 'Expand'}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className='rounded-md border p-4'>
              <p className='text-sm'>
                This content is visible because the collapsible is open by default.
              </p>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    );
  },
};

export const Disabled: Story = {
  /** Collapsible in disabled state */
  render: () => (
    <Collapsible disabled>
      <CollapsibleTrigger asChild>
        <Button variant='outline' size='sm' disabled>
          Disabled Trigger
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className='rounded-md border p-4'>
          <p className='text-sm'>This content is hidden because the collapsible is disabled.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};
