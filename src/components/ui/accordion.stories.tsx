import type { Meta, StoryObj } from '@storybook/react';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './accordion';

const meta = {
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
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

export const MultipleOpen: Story = {
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

export const AllCollapsed: Story = {
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
