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
          'A small dot indicator for status, activity, or notification states. Supports color variants and optional pulse animation.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'success', 'warning', 'destructive', 'muted'],
      description: 'Color variant of the dot',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the dot',
    },
    pulse: {
      control: 'boolean',
      description: 'Enable pulse animation',
    },
  },
} satisfies Meta<typeof DotIndicator>;

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

export const SizeComparison: Story = {
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

export const StatusGrid: Story = {
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

export const NotificationBadge: Story = {
  render: () => (
    <div className="flex items-center gap-2 rounded-full border px-3 py-1.5">
      <DotIndicator color="destructive" size="sm" pulse />
      <span className="text-sm font-medium">New notifications</span>
    </div>
  ),
};

// ---------------------------------------------------------------------------
// PaginationDots
// ---------------------------------------------------------------------------

const paginationMeta = {
  component: PaginationDots,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A row of dots representing pagination state. Shows which page is active and supports size variants.',
      },
    },
  },
  argTypes: {
    total: {
      control: { type: 'number', min: 1, max: 20 },
      description: 'Total number of dots',
    },
    active: {
      control: { type: 'number', min: 0 },
      description: 'Currently active dot index',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the dots',
    },
  },
} satisfies Meta<typeof PaginationDots>;

export default paginationMeta;
type PaginationStory = StoryObj<typeof paginationMeta>;

export const PaginationDefault: PaginationStory = {
  args: {
    total: 5,
    active: 0,
    size: 'md',
  },
};

export const PaginationActive2: PaginationStory = {
  args: {
    total: 5,
    active: 2,
    size: 'md',
  },
};

export const PaginationActive4: PaginationStory = {
  args: {
    total: 5,
    active: 4,
    size: 'md',
  },
};

export const PaginationSmall: PaginationStory = {
  args: {
    total: 4,
    active: 1,
    size: 'sm',
  },
};

export const PaginationLarge: PaginationStory = {
  args: {
    total: 4,
    active: 1,
    size: 'lg',
  },
};

export const PaginationManyDots: PaginationStory = {
  args: {
    total: 10,
    active: 5,
    size: 'md',
  },
};

export const PaginationSizes: PaginationStory = {
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
