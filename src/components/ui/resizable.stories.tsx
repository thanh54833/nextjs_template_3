import type { Meta, StoryObj } from '@storybook/react';

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './resizable';

const meta = {
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
