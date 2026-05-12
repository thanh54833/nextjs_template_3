import type { Meta, StoryObj } from '@storybook/react';
import { DotIndicator, PaginationDots } from './dot-indicator';

const meta = {
  component: DotIndicator,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Dot indicators for status, activity, or pagination states.',
      },
    },
  },
} as Meta<typeof DotIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'default',
    size: 'md',
    pulse: false,
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    size: 'md',
    pulse: false,
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    size: 'md',
    pulse: false,
  },
};

export const Destructive: Story = {
  args: {
    color: 'destructive',
    size: 'md',
    pulse: false,
  },
};

export const Muted: Story = {
  args: {
    color: 'muted',
    size: 'md',
    pulse: false,
  },
};

export const WithPulse: Story = {
  args: {
    color: 'destructive',
    size: 'md',
    pulse: true,
  },
};

export const DotSizeComparison: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <DotIndicator size="sm" />
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DotIndicator size="md" />
        <span className="text-xs text-muted-foreground">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <DotIndicator size="lg" />
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
    </div>
  ),
};

export const DotStatusGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex items-center gap-2">
        <DotIndicator color="success" />
        <span className="text-sm">Online</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="warning" />
        <span className="text-sm">Away</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="destructive" />
        <span className="text-sm">Busy</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="muted" />
        <span className="text-sm">Offline</span>
      </div>
      <div className="flex items-center gap-2">
        <DotIndicator color="default" />
        <span className="text-sm">Default</span>
      </div>
    </div>
  ),
};

export const DotNotificationBadge: Story = {
  render: () => (
    <div className="flex items-center gap-2 rounded-full border px-3 py-1.5">
      <DotIndicator color="destructive" size="sm" pulse />
      <span className="text-sm font-medium">New notifications</span>
    </div>
  ),
};

export const PaginationDefault: Story = {
  name: 'PaginationDots/Default',
  render: () => <PaginationDots total={5} active={0} size="md" />,
};

export const PaginationActive2: Story = {
  name: 'PaginationDots/Active2',
  render: () => <PaginationDots total={5} active={2} size="md" />,
};

export const PaginationActive4: Story = {
  name: 'PaginationDots/Active4',
  render: () => <PaginationDots total={5} active={4} size="md" />,
};

export const PaginationSmall: Story = {
  name: 'PaginationDots/Small',
  render: () => <PaginationDots total={4} active={1} size="sm" />,
};

export const PaginationLarge: Story = {
  name: 'PaginationDots/Large',
  render: () => <PaginationDots total={4} active={1} size="lg" />,
};

export const PaginationManyDots: Story = {
  name: 'PaginationDots/ManyDots',
  render: () => <PaginationDots total={10} active={5} size="md" />,
};

export const PaginationSizes: Story = {
  name: 'PaginationDots/Sizes',
  render: () => (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <PaginationDots total={4} active={1} size="sm" />
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PaginationDots total={4} active={1} size="md" />
        <span className="text-xs text-muted-foreground">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <PaginationDots total={4} active={1} size="lg" />
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
    </div>
  ),
};
