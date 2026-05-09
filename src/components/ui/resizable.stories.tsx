import type { Meta, StoryObj } from '@storybook/react';

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable';

/**
 * A component that allows users to resize panels by dragging handles.
 *
 * @see https://ui.shadcn.com/docs/components/resizable
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A component that allows users to resize panels by dragging handles. Useful for creating resizable layouts like dashboards, email clients, or document editors.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the panel group',
    },
  },
} as Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /** Default horizontal resizable panel group with two panels */
  render: () => (
    <div className='h-[500px] w-full'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={50}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Left Panel</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Right Panel</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const VerticalLayout: Story = {
  /** Vertical resizable panel group */
  render: () => (
    <div className='h-[500px] w-full'>
      <ResizablePanelGroup direction='vertical'>
        <ResizablePanel defaultSize={50}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Top Panel</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Bottom Panel</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const ThreePanels: Story = {
  /** Horizontal layout with three panels */
  render: () => (
    <div className='h-[500px] w-full'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={25}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Left</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Center</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Right</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const WithHandle: Story = {
  /** Resizable panel with visible handle indicator */
  render: () => (
    <div className='h-[500px] w-full'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={50}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Left Panel</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <div className='flex h-full items-center justify-center p-4'>
            <span className='text-sm'>Right Panel</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
