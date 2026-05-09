import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Icons } from '@/components/icons';
import {
  Infobar,
  InfobarContent,
  InfobarFooter,
  InfobarGroup,
  InfobarGroupAction,
  InfobarGroupContent,
  InfobarGroupLabel,
  InfobarHeader,
  InfobarInset,
  InfobarInput,
  InfobarMenu,
  InfobarMenuAction,
  InfobarMenuBadge,
  InfobarMenuButton,
  InfobarMenuItem,
  InfobarMenuSkeleton,
  InfobarProvider,
  InfobarRail,
  InfobarSeparator,
  InfobarTrigger,
  useInfobar,
  type InfobarContent as InfobarContentType,
} from './infobar';

/**
 * Expandable sidebar/infobar component with sections, menus, and keyboard shortcuts.
 *
 * @see https://github.com/Kiranism/next-shadcn-dashboard-starter - Original source
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
const meta = {
  component: InfobarProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'An expandable sidebar/infobar component with sections, menus, and keyboard shortcuts (press ⌘I to toggle).',
      },
    },
  },
} as Meta<typeof InfobarProvider>;

export default meta;
type Story = StoryObj;

const sampleContent: InfobarContentType = {
  title: 'Dashboard Help',
  sections: [
    {
      title: 'Getting Started',
      description: 'Learn how to use the dashboard features.',
      links: [
        { title: 'Quick Start Guide', url: '#' },
        { title: 'Video Tutorials', url: '#' },
      ],
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Speed up your workflow with these shortcuts.',
      links: [
        { title: 'View All Shortcuts', url: '#' },
      ],
    },
  ],
};

function InfobarShowcase() {
  const { setContent } = useInfobar();

  React.useEffect(() => {
    setContent(sampleContent);
  }, [setContent]);

  return (
    <div className="flex h-[500px]">
      <Infobar>
        <InfobarHeader>
          <InfobarInput placeholder="Search..." />
        </InfobarHeader>
        <InfobarSeparator />
        <InfobarContent>
          <InfobarGroup>
            <InfobarGroupLabel>Navigation</InfobarGroupLabel>
            <InfobarMenu>
              <InfobarMenuItem>
                <InfobarMenuButton isActive tooltip="Overview">
                  <Icons.dashboard />
                  <span>Overview</span>
                </InfobarMenuButton>
                <InfobarMenuBadge>3</InfobarMenuBadge>
              </InfobarMenuItem>
              <InfobarMenuItem>
                <InfobarMenuButton tooltip="Analytics">
                  <Icons.trendingUp />
                  <span>Analytics</span>
                </InfobarMenuButton>
              </InfobarMenuItem>
              <InfobarMenuItem>
                <InfobarMenuButton tooltip="Reports">
                  <Icons.fileTypePdf />
                  <span>Reports</span>
                </InfobarMenuButton>
              </InfobarMenuItem>
            </InfobarMenu>
          </InfobarGroup>

          <InfobarSeparator />

          <InfobarGroup>
            <InfobarGroupLabel>Settings</InfobarGroupLabel>
            <InfobarMenu>
              <InfobarMenuItem>
                <InfobarMenuButton tooltip="Profile">
                  <Icons.user />
                  <span>Profile</span>
                </InfobarMenuButton>
              </InfobarMenuItem>
              <InfobarMenuItem>
                <InfobarMenuButton tooltip="Notifications">
                  <Icons.notification />
                  <span>Notifications</span>
                </InfobarMenuButton>
              </InfobarMenuItem>
            </InfobarMenu>
          </InfobarGroup>
        </InfobarContent>
        <InfobarFooter>
          <InfobarMenuItem>
            <InfobarMenuButton tooltip="Help & Support">
              <Icons.info />
              <span>Help</span>
            </InfobarMenuButton>
          </InfobarMenuItem>
        </InfobarFooter>
      </Infobar>
      <InfobarRail />
      <InfobarInset>
        <div className="p-8">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
          <p className="mt-2 text-muted-foreground">
            Press <kbd className="rounded-md border px-1.5 py-0.5 text-xs">⌘I</kbd> to toggle the
            infobar.
          </p>
        </div>
      </InfobarInset>
    </div>
  );
}

/** Default expanded infobar with navigation and settings. */
export const Default: Story = {
  render: () => <InfobarShowcase />,
};

/** Collapsed icon-only mode for compact display. */
export const Collapsed: Story = {
  render: () => {
    function CollapsedExample() {
      const { setContent } = useInfobar();

      React.useEffect(() => {
        setContent(sampleContent);
      }, [setContent]);

      return (
        <div className="flex h-[500px]">
          <Infobar collapsible="icon">
            <InfobarContent>
              <InfobarMenu>
                <InfobarMenuItem>
                  <InfobarMenuButton isActive>
                    <Icons.dashboard />
                    <span>Overview</span>
                  </InfobarMenuButton>
                </InfobarMenuItem>
                <InfobarMenuItem>
                  <InfobarMenuButton>
                    <Icons.trendingUp />
                    <span>Analytics</span>
                  </InfobarMenuButton>
                </InfobarMenuItem>
              </InfobarMenu>
            </InfobarContent>
          </Infobar>
          <InfobarRail />
          <InfobarInset>
            <div className="p-8">
              <h1 className="text-2xl font-bold">Collapsed View</h1>
            </div>
          </InfobarInset>
        </div>
      );
    }

    return <CollapsedExample />;
  },
};

/** Fixed mode with no collapse functionality. */
export const WithoutCollapsible: Story = {
  render: () => {
    function FixedExample() {
      const { setContent } = useInfobar();

      React.useEffect(() => {
        setContent(sampleContent);
      }, [setContent]);

      return (
        <div className="flex h-[500px]">
          <Infobar collapsible="none">
            <InfobarHeader>
              <h2 className="text-sm font-semibold">Fixed Sidebar</h2>
            </InfobarHeader>
            <InfobarSeparator />
            <InfobarContent>
              <p className="text-sm text-muted-foreground">This sidebar cannot be collapsed.</p>
            </InfobarContent>
          </Infobar>
          <InfobarInset>
            <div className="p-8">
              <h1 className="text-2xl font-bold">Fixed Infobar</h1>
            </div>
          </InfobarInset>
        </div>
      );
    }

    return <FixedExample />;
  },
};

/** Loading state with skeleton placeholders. */
export const WithSkeletonLoading: Story = {
  render: () => {
    function SkeletonExample() {
      const { setContent } = useInfobar();

      React.useEffect(() => {
        setContent(sampleContent);
      }, [setContent]);

      return (
        <div className="flex h-[500px]">
          <Infobar>
            <InfobarHeader>
              <InfobarInput placeholder="Search..." />
            </InfobarHeader>
            <InfobarSeparator />
            <InfobarContent>
              <InfobarGroup>
                <InfobarGroupLabel>Loading...</InfobarGroupLabel>
                <InfobarMenu>
                  <InfobarMenuSkeleton showIcon />
                  <InfobarMenuSkeleton />
                  <InfobarMenuSkeleton showIcon />
                  <InfobarMenuSkeleton />
                  <InfobarMenuSkeleton showIcon />
                </InfobarMenu>
              </InfobarGroup>
            </InfobarContent>
          </Infobar>
          <InfobarRail />
          <InfobarInset>
            <div className="p-8">
              <h1 className="text-2xl font-bold">With Skeleton Loading</h1>
            </div>
          </InfobarInset>
        </div>
      );
    }

    return <SkeletonExample />;
  },
};