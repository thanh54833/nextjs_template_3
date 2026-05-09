/**
 * A collapsible sidebar component that provides navigation and context for users.
 *
 * @see https://ui.shadcn.com/docs/components/sidebar
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarTrigger } from './sidebar';

const meta = {
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A collapsible sidebar component that provides navigation and context for users. The sidebar can be used with a provider to manage its state including open/close and collapsed states.',
      },
    },
  },
  argTypes: {
    defaultOpen: { control: 'boolean', description: 'Whether the sidebar is open by default' },
  },
} as Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /** Default sidebar with header, content, and footer */
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
  /** Collapsed sidebar with defaultOpen set to false */
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
