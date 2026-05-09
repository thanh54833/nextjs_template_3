import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';

const meta = {
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <HoverCard open>
        <HoverCardTrigger asChild>
          <Button variant="link">@username</Button>
        </HoverCardTrigger>
        <HoverCardContent align="center" sideOffset={4}>
          <div className="space-y-2">
            <h4 className="font-semibold">@username</h4>
            <p className="text-sm text-muted-foreground">
              Frontend developer building accessible UI components. Passionate about design systems
              and user experience.
            </p>
            <div className="flex gap-2 text-xs text-muted-foreground">
              <span>42 Following</span>
              <span>·</span>
              <span>128 Followers</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }
};

export const WithAction: Story = {
  render: () => {
    return (
      <HoverCard open>
        <HoverCardTrigger asChild>
          <Button variant="link">Hover for profile</Button>
        </HoverCardTrigger>
        <HoverCardContent align="start" sideOffset={8}>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-muted" />
              <div>
                <p className="font-medium">Jane Doe</p>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
            </div>
            <p className="text-sm">
              Creating beautiful user interfaces with attention to detail and accessibility.
            </p>
            <Button size="sm" className="w-full">
              Follow
            </Button>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }
};