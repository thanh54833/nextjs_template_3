import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Icons } from '@/components/icons';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger
} from './sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './dropdown-menu';
import { Separator } from './separator';
import { Button } from './button';

const meta = {
  title: 'UI/Sidebar',
  parameters: { layout: 'fullscreen' }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const navItems = [
  { title: 'Dashboard', url: '/dashboard', icon: 'dashboard' as const },
  {
    title: 'Products',
    url: '/products',
    icon: 'page' as const,
    items: [
      { title: 'All Products', url: '/products' },
      { title: 'Add Product', url: '/products/new' }
    ]
  },
  {
    title: 'Users',
    url: '/users',
    icon: 'user' as const,
    items: [
      { title: 'All Users', url: '/users' },
      { title: 'Roles', url: '/users/roles' }
    ]
  },
  { title: 'Analytics', url: '/analytics', icon: 'trendingUp' as const },
  { title: 'Settings', url: '/settings', icon: 'settings' as const }
];

function NavMain({ items }: { items: typeof navItems }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const Icon = Icons[item.icon ?? 'logo'];
            return item.items && item.items.length > 0 ? (
              <Collapsible key={item.title} asChild defaultOpen className='group/collapsible'>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      <Icon />
                      <span>{item.title}</span>
                      <Icons.chevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((sub) => (
                        <SidebarMenuSubItem key={sub.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={sub.url}>{sub.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href={item.url}>
                    <Icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

function NavUser() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='h-8 w-8 rounded-lg'>
                <AvatarImage src='https://github.com/shadcn.png' alt='User' />
                <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
              </Avatar>
              <div className='grid flex-1 text-left text-sm leading-tight'>
                <span className='truncate font-semibold'>John Doe</span>
                <span className='truncate text-xs'>john@example.com</span>
              </div>
              <Icons.chevronsDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='min-w-56 rounded-lg' side='right' align='end'>
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8 rounded-lg'>
                  <AvatarImage src='https://github.com/shadcn.png' alt='User' />
                  <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                </Avatar>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>John Doe</span>
                  <span className='truncate text-xs'>john@example.com</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Icons.settings className='mr-2 h-4 w-4' />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Icons.logout className='mr-2 h-4 w-4' />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function DemoSidebar() {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader className='group-data-[collapsible=icon]:pt-4'>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='/'>
                <Icons.logo className='size-5' />
                <span className='font-semibold'>Acme Inc</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className='overflow-x-hidden'>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <DemoSidebar />
      <SidebarInset>
        <header className='flex h-12 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='h-4' />
          <span className='text-sm text-muted-foreground'>Dashboard</span>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4'>
          <div className='grid auto-rows-min gap-4 md:grid-cols-3'>
            <div className='aspect-video rounded-xl bg-muted/50' />
            <div className='aspect-video rounded-xl bg-muted/50' />
            <div className='aspect-video rounded-xl bg-muted/50' />
          </div>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
};

export const Collapsed: Story = {
  render: () => (
    <SidebarProvider defaultOpen={false}>
      <DemoSidebar />
      <SidebarInset>
        <header className='flex h-12 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='h-4' />
          <span className='text-sm text-muted-foreground'>Dashboard</span>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4'>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
};

export const FloatingVariant: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant='floating' collapsible='icon'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild>
                <a href='/'>
                  <Icons.logo className='size-5' />
                  <span className='font-semibold'>Acme Inc</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={navItems} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-12 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='h-4' />
          <span className='text-sm text-muted-foreground'>Floating Sidebar</span>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4'>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
};

export const InsetVariant: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant='inset' collapsible='icon'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild>
                <a href='/'>
                  <Icons.logo className='size-5' />
                  <span className='font-semibold'>Acme Inc</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={navItems} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className='flex h-12 shrink-0 items-center gap-2 px-4'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='h-4' />
          <span className='text-sm text-muted-foreground'>Inset Sidebar</span>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4'>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
};

export const IconOnly: Story = {
  render: () => (
    <SidebarProvider defaultOpen={true}>
      <Sidebar collapsible='icon'>
        <SidebarHeader className='group-data-[collapsible=icon]:pt-4'>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild>
                <a href='/'>
                  <Icons.logo className='size-5' />
                  <span className='font-semibold'>Acme Inc</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent className='overflow-x-hidden'>
          <NavMain items={navItems} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className='flex h-12 shrink-0 items-center gap-2 border-b px-4'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='h-4' />
          <span className='text-sm text-muted-foreground'>Click rail to collapse</span>
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4'>
          <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
};
