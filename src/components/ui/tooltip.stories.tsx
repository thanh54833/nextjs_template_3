import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip';

/**
 * Tooltip component for displaying additional information on hover.
 *
 * @see https://ui.shadcn.com/docs/components/tooltip
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A tooltip component for revealing content on hover. Positioned intelligently to stay within viewport bounds.'
      }
    }
  }
} as Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default tooltip with hover trigger */
export const Default: Story = {
  render: () => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={0}>
          This is a tooltip
        </TooltipContent>
      </Tooltip>
    );
  }
};

/** Tooltip with longer text content */
export const WithText: Story = {
  render: () => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            ?
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p>Need help? Click to learn more.</p>
        </TooltipContent>
      </Tooltip>
    );
  }
};

/** Multiple tooltips showing all four positioning directions */
export const Multiple: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">Tooltip on top</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">Tooltip on left</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="secondary">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">Tooltip on right</TooltipContent>
        </Tooltip>
      </div>
    );
  }
};