import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p className='text-sm'>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm'>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm'>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};

export const DisabledTabs: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Active Tab</TabsTrigger>
        <TabsTrigger value='tab2' disabled>
          Disabled Tab
        </TabsTrigger>
        <TabsTrigger value='tab3'>Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p className='text-sm'>Content for active tab</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm'>This content is disabled</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm'>Content for another tab</p>
      </TabsContent>
    </Tabs>
  ),
};

export const VerticalTabs: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue='tab1' orientation='vertical'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p className='text-sm'>Vertical content for Tab 1</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm'>Vertical content for Tab 2</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm'>Vertical content for Tab 3</p>
      </TabsContent>
    </Tabs>
  ),
};
