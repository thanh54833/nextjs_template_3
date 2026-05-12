import type { Meta, StoryObj } from '@storybook/react';
import { DotIndicator, PaginationDots } from './dot-indicator';

const meta = {
  title: 'UI/DotIndicator',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Dot indicators for status, activity, or pagination states. DotIndicator for single dots, PaginationDots for pagination rows.',
      },
    },
  },
} as Meta<typeof DotIndicator>;

export default meta;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Story = StoryObj<any>;

export const Default: Story = {
  args: {
    color: 'default',
    size: 'md',
    pulse: false,
  },
  render: (args) => <DotIndicator {...args} />,
};

export const Success: Story = {
  args: {
    color: 'success',
    size: 'md',
    pulse: false,
  },
  render: (args) => <DotIndicator {...args} />,
};

export const Warning: Story = {
  args: {
    color: 'warning',
    size: 'md',
    pulse: false,
  },
  render: (args) => <DotIndicator {...args} />,
};

export const Destructive: Story = {
  args: {
    color: 'destructive',
    size: 'md',
    pulse: false,
  },
  render: (args) => <DotIndicator {...args} />,
};

export const Muted: Story = {
  args: {
    color: 'muted',
    size: 'md',
    pulse: false,
  },
  render: (args) => <DotIndicator {...args} />,
};

export const WithPulse: Story = {
  args: {
    color: 'destructive',
    size: 'md',
    pulse: true,
  },
  render: (args) => <DotIndicator {...args} />,
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
  args: {
    total: 5,
    active: 0,
    size: 'md',
  },
  render: (args) => <PaginationDots {...args} />,
};

export const PaginationActive2: Story = {
  name: 'PaginationDots/Active2',
  args: {
    total: 5,
    active: 2,
    size: 'md',
  },
  render: (args) => <PaginationDots {...args} />,
};

export const PaginationActive4: Story = {
  name: 'PaginationDots/Active4',
  args: {
    total: 5,
    active: 4,
    size: 'md',
  },
  render: (args) => <PaginationDots {...args} />,
};

export const PaginationSmall: Story = {
  name: 'PaginationDots/Small',
  args: {
    total: 4,
    active: 1,
    size: 'sm',
  },
  render: (args) => <PaginationDots {...args} />,
};

export const PaginationLarge: Story = {
  name: 'PaginationDots/Large',
  args: {
    total: 4,
    active: 1,
    size: 'lg',
  },
  render: (args) => <PaginationDots {...args} />,
};

export const PaginationManyDots: Story = {
  name: 'PaginationDots/ManyDots',
  args: {
    total: 10,
    active: 5,
    size: 'md',
  },
  render: (args) => <PaginationDots {...args} />,
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
