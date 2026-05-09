import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

/**
 * Accordion component for displaying collapsible content panels.
 *
 * @see https://ui.shadcn.com/docs/components/accordion
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A vertically stacked set of interactive headings that expand or collapse to reveal their associated sections of content. Built on Radix UI primitives for accessibility.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Whether single or multiple items can be open at once',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether items can be closed once opened (for type="single")',
    },
    defaultValue: {
      control: 'text',
      description: 'The default open item value(s)',
    },
  },
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default accordion with single selection mode.
 * The first item is open by default and can be collapsed.
 */
export const Default: Story = {
  args: {},
  render: () => (
    <Accordion type='single' collapsible defaultValue='item1'>
      <AccordionItem value='item1'>
        <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>
            shadcn/ui is a collection of re-usable components built using Radix UI primitives and Tailwind CSS.
            Unlike other component libraries, shadcn/ui is not a package you install. Instead, you can copy and paste
            the components into your project.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item2'>
        <AccordionTrigger>How do I use these components?</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>
            You can use the components by copying them into your project. Each component comes with all its styles
            and dependencies already configured.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item3'>
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>
            Yes! All components are built on top of Radix UI primitives, which provide accessibility out of the box.
            They support keyboard navigation and screen readers.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * Accordion with multiple selection mode enabled.
 * Multiple items can be open at the same time.
 */
export const MultipleOpen: Story = {
  args: {},
  render: () => (
    <Accordion type='multiple' defaultValue={['item1', 'item2']}>
      <AccordionItem value='item1'>
        <AccordionTrigger>First Item (open by default)</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>This content is visible because it is set as default open.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item2'>
        <AccordionTrigger>Second Item (open by default)</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>This content is also visible because multiple items can be open.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item3'>
        <AccordionTrigger>Third Item (collapsed)</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>This item is collapsed by default.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

/**
 * All items collapsed by default.
 * User must click to expand any section.
 */
export const AllCollapsed: Story = {
  args: {},
  render: () => (
    <Accordion type='single' collapsible>
      <AccordionItem value='item1'>
        <AccordionTrigger>Item One</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>Content for item one.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item2'>
        <AccordionTrigger>Item Two</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>Content for item two.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item3'>
        <AccordionTrigger>Item Three</AccordionTrigger>
        <AccordionContent>
          <p className='text-sm'>Content for item three.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
