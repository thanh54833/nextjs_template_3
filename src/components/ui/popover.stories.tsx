import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta = {
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Popover open>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent align="center" sideOffset={4}>
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Popover Title</h4>
            <p className="text-sm text-muted-foreground">
              This is popover content. It can contain any React elements.
            </p>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
};

export const WithLink: Story = {
  render: () => {
    return (
      <Popover open>
        <PopoverTrigger asChild>
          <Button variant="outline">Quick Links</Button>
        </PopoverTrigger>
        <PopoverContent align="start" sideOffset={4} className="w-52">
          <div className="space-y-1">
            <a href="#" className="block px-2 py-1.5 text-sm hover:bg-accent rounded">
              Documentation
            </a>
            <a href="#" className="block px-2 py-1.5 text-sm hover:bg-accent rounded">
              API Reference
            </a>
            <a href="#" className="block px-2 py-1.5 text-sm hover:bg-accent rounded">
              Support
            </a>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
};