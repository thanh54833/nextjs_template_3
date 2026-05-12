import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Badge } from './badge';
import { Button } from './button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

/**
 * A set of tabbed sections that allow users to navigate between different content areas.
 *
 * @see https://ui.shadcn.com/docs/components/tabs
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 *
 * Tabs component includes:
 * - `Tabs` - Main wrapper with orientation and activation mode controls
 * - `TabsList` - Container for tab triggers
 * - `TabsTrigger` - Individual tab button with disabled state support
 * - `TabsContent` - Content panel associated with a tab value
 */
const meta = {
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A set of tabbed sections that allow users to navigate between different content areas. Use tabs to organize content into logical groups that can be selected without navigating away from the page.',
      },
    },
  },
  argTypes: {
    defaultValue: { control: 'text', description: 'The value of the tab that should be active by default' },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
    activationMode: {
      control: 'select',
      options: ['automatic', 'manual'],
      description: 'How tabs are activated',
    },
  },
} as Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default tabs with three tab items and their content */
export const Default: Story = {
  args: {
    defaultValue: 'overview',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='overview'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <p className='text-sm text-muted-foreground'>Overview content displayed here.</p>
      </TabsContent>
      <TabsContent value='analytics'>
        <p className='text-sm text-muted-foreground'>Analytics data shown in this tab.</p>
      </TabsContent>
      <TabsContent value='reports'>
        <p className='text-sm text-muted-foreground'>Reports content goes here.</p>
      </TabsContent>
    </Tabs>
  ),
};

/** Tabs with one item disabled */
export const DisabledTabs: Story = {
  args: {
    defaultValue: 'active',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='active'>
      <TabsList>
        <TabsTrigger value='active'>Active Tab</TabsTrigger>
        <TabsTrigger value='disabled' disabled>
          Disabled Tab
        </TabsTrigger>
        <TabsTrigger value='another'>Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent value='active'>
        <p className='text-sm text-muted-foreground'>Content for active tab.</p>
      </TabsContent>
      <TabsContent value='disabled'>
        <p className='text-sm text-muted-foreground'>This content is disabled.</p>
      </TabsContent>
      <TabsContent value='another'>
        <p className='text-sm text-muted-foreground'>Content for another tab.</p>
      </TabsContent>
    </Tabs>
  ),
};

/** Tabs with vertical orientation */
export const VerticalTabs: Story = {
  args: {
    defaultValue: 'details',
    orientation: 'vertical',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='details' orientation='vertical'>
      <TabsList>
        <TabsTrigger value='details'>Details</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
        <TabsTrigger value='history'>History</TabsTrigger>
      </TabsList>
      <TabsContent value='details'>
        <p className='text-sm text-muted-foreground'>Vertical details content.</p>
      </TabsContent>
      <TabsContent value='settings'>
        <p className='text-sm text-muted-foreground'>Settings panel with configuration options.</p>
      </TabsContent>
      <TabsContent value='history'>
        <p className='text-sm text-muted-foreground'>Historical records and activity log.</p>
      </TabsContent>
    </Tabs>
  ),
};

/** Tabs with manual activation mode - requires click to switch */
export const ManualActivation: Story = {
  args: {
    defaultValue: 'first',
    activationMode: 'manual',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='first' activationMode='manual'>
      <TabsList>
        <TabsTrigger value='first'>Step 1</TabsTrigger>
        <TabsTrigger value='second'>Step 2</TabsTrigger>
        <TabsTrigger value='third'>Step 3</TabsTrigger>
      </TabsList>
      <TabsContent value='first'>
        <p className='text-sm text-muted-foreground'>Step 1 content - click next to proceed.</p>
      </TabsContent>
      <TabsContent value='second'>
        <p className='text-sm text-muted-foreground'>Step 2 content - continue to final step.</p>
      </TabsContent>
      <TabsContent value='third'>
        <p className='text-sm text-muted-foreground'>Final step - wizard completed.</p>
      </TabsContent>
    </Tabs>
  ),
};

/** Tabs with Badge indicators showing counts */
export const WithBadges: Story = {
  args: {
    defaultValue: 'notifications',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='notifications'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='notifications'>
          Notifications
          <Badge variant='secondary' className='ml-2'>3</Badge>
        </TabsTrigger>
        <TabsTrigger value='messages'>
          Messages
          <Badge variant='destructive' className='ml-2'>12</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <p className='text-sm text-muted-foreground'>Dashboard overview with key metrics.</p>
      </TabsContent>
      <TabsContent value='notifications'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between rounded-lg border p-3'>
            <div>
              <p className='text-sm font-medium'>New user registered</p>
              <p className='text-xs text-muted-foreground'>2 minutes ago</p>
            </div>
            <Badge variant='secondary'>New</Badge>
          </div>
          <div className='flex items-center justify-between rounded-lg border p-3'>
            <div>
              <p className='text-sm font-medium'>Payment received</p>
              <p className='text-xs text-muted-foreground'>1 hour ago</p>
            </div>
            <Badge variant='secondary'>Done</Badge>
          </div>
        </div>
      </TabsContent>
      <TabsContent value='messages'>
        <p className='text-sm text-muted-foreground'>12 unread messages in your inbox.</p>
      </TabsContent>
    </Tabs>
  ),
};

/** Tabs inside a Card container for dashboard-style layouts */
export const CardContainer: Story = {
  args: {
    defaultValue: 'overview',
  },
  render: (args) => (
    <Card>
      <CardHeader>
        <CardTitle>Project Dashboard</CardTitle>
        <CardDescription>Monitor your project metrics and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs {...args} defaultValue='overview'>
          <TabsList className='w-full'>
            <TabsTrigger value='overview' className='flex-1'>Overview</TabsTrigger>
            <TabsTrigger value='tasks' className='flex-1'>Tasks</TabsTrigger>
            <TabsTrigger value='team' className='flex-1'>Team</TabsTrigger>
          </TabsList>
          <TabsContent value='overview' className='mt-4'>
            <div className='grid gap-4 md:grid-cols-3'>
              <div className='rounded-lg border p-4'>
                <p className='text-2xl font-bold'>248</p>
                <p className='text-xs text-muted-foreground'>Total Tasks</p>
              </div>
              <div className='rounded-lg border p-4'>
                <p className='text-2xl font-bold'>156</p>
                <p className='text-xs text-muted-foreground'>Completed</p>
              </div>
              <div className='rounded-lg border p-4'>
                <p className='text-2xl font-bold'>92</p>
                <p className='text-xs text-muted-foreground'>In Progress</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='tasks' className='mt-4'>
            <p className='text-sm text-muted-foreground'>Task list with 248 items.</p>
          </TabsContent>
          <TabsContent value='team' className='mt-4'>
            <p className='text-sm text-muted-foreground'>Team members and assignments.</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  ),
};

/** Tabs with rich content including images and text */
export const RichContent: Story = {
  args: {
    defaultValue: 'description',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='description'>
      <TabsList>
        <TabsTrigger value='description'>Description</TabsTrigger>
        <TabsTrigger value='specifications'>Specifications</TabsTrigger>
        <TabsTrigger value='reviews'>Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value='description' className='space-y-3'>
        <p className='text-sm'>
          This product offers a comprehensive solution for modern web applications. Built with
          scalability in mind, it provides robust APIs and intuitive interfaces.
        </p>
        <p className='text-sm text-muted-foreground'>
          Perfect for teams looking to streamline their workflow and improve productivity.
        </p>
      </TabsContent>
      <TabsContent value='specifications' className='space-y-3'>
        <div className='grid gap-2 text-sm'>
          <div className='flex justify-between border-b py-2'>
            <span className='text-muted-foreground'>Weight</span>
            <span className='font-medium'>2.5 kg</span>
          </div>
          <div className='flex justify-between border-b py-2'>
            <span className='text-muted-foreground'>Dimensions</span>
            <span className='font-medium'>30 x 20 x 5 cm</span>
          </div>
          <div className='flex justify-between border-b py-2'>
            <span className='text-muted-foreground'>Material</span>
            <span className='font-medium'>Aluminum Alloy</span>
          </div>
          <div className='flex justify-between py-2'>
            <span className='text-muted-foreground'>Warranty</span>
            <span className='font-medium'>2 Years</span>
          </div>
        </div>
      </TabsContent>
      <TabsContent value='reviews' className='space-y-4'>
        <div className='rounded-lg border p-4'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-medium'>Sarah Chen</span>
            <Badge variant='outline'>Verified</Badge>
          </div>
          <p className='text-sm text-muted-foreground'>
            Excellent product quality and customer service. Highly recommended for teams of all sizes.
          </p>
          <p className='text-xs text-muted-foreground mt-2'>Posted 3 days ago</p>
        </div>
        <div className='rounded-lg border p-4'>
          <div className='flex items-center justify-between mb-2'>
            <span className='font-medium'>Michael Park</span>
            <Badge variant='outline'>Verified</Badge>
          </div>
          <p className='text-sm text-muted-foreground'>
            Great value for money. The build quality exceeds expectations.
          </p>
          <p className='text-xs text-muted-foreground mt-2'>Posted 1 week ago</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/** Stateful tabs with interactive content that changes */
export const InteractiveTabs: Story = {
  args: {
    defaultValue: 'count',
  },
  render: (args) => {
    const [count, setCount] = useState(0);
    return (
      <Tabs {...args} defaultValue='count'>
        <TabsList>
          <TabsTrigger value='count'>Counter</TabsTrigger>
          <TabsTrigger value='form'>Form</TabsTrigger>
          <TabsTrigger value='result'>Result</TabsTrigger>
        </TabsList>
        <TabsContent value='count' className='space-y-4'>
          <div className='flex items-center justify-between rounded-lg border p-6'>
            <span className='text-lg font-medium'>Count: {count}</span>
            <div className='flex gap-2'>
              <Button variant='outline' size='sm' onClick={() => setCount(c => c - 1)}>
                Decrement
              </Button>
              <Button variant='outline' size='sm' onClick={() => setCount(c => c + 1)}>
                Increment
              </Button>
              <Button variant='ghost' size='sm' onClick={() => setCount(0)}>
                Reset
              </Button>
            </div>
          </div>
          <p className='text-sm text-muted-foreground'>
            Navigate to Result tab to see the final count value.
          </p>
        </TabsContent>
        <TabsContent value='form' className='space-y-4'>
          <div className='space-y-3'>
            <div className='space-y-1.5'>
              <label className='text-sm font-medium'>Name</label>
              <input
                type='text'
                placeholder='Enter your name'
                className='h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50'
              />
            </div>
            <div className='space-y-1.5'>
              <label className='text-sm font-medium'>Email</label>
              <input
                type='email'
                placeholder='Enter your email'
                className='h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm outline-none focus-visible:border-ring focus-visible:ring-[1px] focus-visible:ring-ring/50'
              />
            </div>
            <Button className='w-full'>Submit Form</Button>
          </div>
        </TabsContent>
        <TabsContent value='result' className='space-y-4'>
          <div className='rounded-lg border bg-green-500/10 p-6 text-center'>
            <p className='text-2xl font-bold text-green-600 dark:text-green-400'>{count}</p>
            <p className='text-sm text-muted-foreground'>Final counter value</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
};

/** Long content with scrollable tabs panel */
export const ScrollableContent: Story = {
  args: {
    defaultValue: 'tab1',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
        <TabsTrigger value='tab4'>Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <div className='space-y-3'>
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className='rounded-lg border p-4'>
              <p className='font-medium'>Item {i + 1}</p>
              <p className='text-sm text-muted-foreground'>
                This is some content for item {i + 1} in the first tab panel.
              </p>
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value='tab2'>
        <p className='text-sm text-muted-foreground'>Content for tab 2.</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p className='text-sm text-muted-foreground'>Content for tab 3.</p>
      </TabsContent>
      <TabsContent value='tab4'>
        <p className='text-sm text-muted-foreground'>Content for tab 4.</p>
      </TabsContent>
    </Tabs>
  ),
};

/** Compact tabs for sidebar or dense layouts */
export const CompactTabs: Story = {
  args: {
    defaultValue: 'section1',
  },
  render: (args) => (
    <div className='w-64'>
      <Tabs {...args} defaultValue='section1'>
        <TabsList className='flex-col h-auto w-full'>
          <TabsTrigger value='section1' className='w-full justify-start'>
            Section One
          </TabsTrigger>
          <TabsTrigger value='section2' className='w-full justify-start'>
            Section Two
          </TabsTrigger>
          <TabsTrigger value='section3' className='w-full justify-start'>
            Section Three
          </TabsTrigger>
        </TabsList>
        <TabsContent value='section1' className='mt-4'>
          <p className='text-sm text-muted-foreground'>Content for section 1.</p>
        </TabsContent>
        <TabsContent value='section2' className='mt-4'>
          <p className='text-sm text-muted-foreground'>Content for section 2.</p>
        </TabsContent>
        <TabsContent value='section3' className='mt-4'>
          <p className='text-sm text-muted-foreground'>Content for section 3.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};

/** Tabs with icons in triggers */
export const WithIcons: Story = {
  args: {
    defaultValue: 'dashboard',
  },
  render: (args) => (
    <Tabs {...args} defaultValue='dashboard'>
      <TabsList>
        <TabsTrigger value='dashboard'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2'
          >
            <rect width='7' height='9' x='3' y='3' rx='1' />
            <rect width='7' height='5' x='14' y='3' rx='1' />
            <rect width='7' height='9' x='14' y='12' rx='1' />
            <rect width='7' height='5' x='3' y='16' rx='1' />
          </svg>
          Dashboard
        </TabsTrigger>
        <TabsTrigger value='analytics'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2'
          >
            <path d='M3 3v18h18' />
            <path d='m19 9-5 5-4-4-3 3' />
          </svg>
          Analytics
        </TabsTrigger>
        <TabsTrigger value='reports'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='mr-2'
          >
            <path d='M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z' />
            <polyline points='14 2 14 8 20 8' />
            <line width='2' x1='16' x2='8' y1='13' y2='13' />
            <line width='2' x1='16' x2='8' y1='17' y2='17' />
            <line width='2' x1='10' x2='8' y1='9' y2='9' />
          </svg>
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value='dashboard' className='mt-4'>
        <p className='text-sm text-muted-foreground'>Dashboard overview content.</p>
      </TabsContent>
      <TabsContent value='analytics' className='mt-4'>
        <p className='text-sm text-muted-foreground'>Analytics charts and metrics.</p>
      </TabsContent>
      <TabsContent value='reports' className='mt-4'>
        <p className='text-sm text-muted-foreground'>Generated reports and exports.</p>
      </TabsContent>
    </Tabs>
  ),
};