import type { Meta, StoryObj } from '@storybook/react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarTrigger } from './sidebar';

const meta = {
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <h2>Sidebar Header</h2>
        </SidebarHeader>
        <SidebarContent>
          <p>Sidebar content</p>
        </SidebarContent>
        <SidebarFooter>
          <p>Sidebar Footer</p>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <Sidebar>
        <SidebarHeader>
          <h2>Collapsed Sidebar</h2>
        </SidebarHeader>
        <SidebarContent>
          <p>Sidebar content</p>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  ),
};
