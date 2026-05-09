/**
 * Frame component for creating panel-based layouts with header, content, and footer.
 *
 * @see https://github.com/Kiranism/next-shadcn-dashboard-starter - Original source
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import {
  Frame,
  FramePanel,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FrameTitle,
} from './frame';

const meta = {
  component: Frame,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A frame component for creating panel-based layouts with header, content, and footer sections.',
      },
    },
  },
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default frame with title, description, and action buttons. */
export const Default: Story = {
  args: {},
  render: () => (
    <Frame className="w-full max-w-lg">
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Panel Title</FrameTitle>
          <FrameDescription>This is a description for the panel.</FrameDescription>
        </FrameHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Panel content goes here. This is the main body of the panel where you can place any content.
          </p>
        </div>
        <FrameFooter>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Submit</Button>
          </div>
        </FrameFooter>
      </FramePanel>
    </Frame>
  ),
};

/** Multiple stacked panels for list-based content. */
export const StackedPanels: Story = {
  args: {},
  render: () => (
    <Frame className="w-full max-w-lg" stackedPanels>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>First Panel</FrameTitle>
        </FrameHeader>
        <div className="py-2">
          <p className="text-sm">Content of the first panel.</p>
        </div>
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Second Panel</FrameTitle>
        </FrameHeader>
        <div className="py-2">
          <p className="text-sm">Content of the second panel.</p>
        </div>
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Third Panel</FrameTitle>
        </FrameHeader>
        <div className="py-2">
          <p className="text-sm">Content of the third panel.</p>
        </div>
      </FramePanel>
    </Frame>
  ),
};

/** Frame with list content and footer action. */
export const WithList: Story = {
  args: {},
  render: () => (
    <Frame className="w-full max-w-lg">
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Recent Activity</FrameTitle>
          <FrameDescription>Your latest transactions and updates.</FrameDescription>
        </FrameHeader>
        <div className="py-4 space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <p className="text-sm font-medium">Transaction #{i}</p>
                <p className="text-xs text-muted-foreground">May {10 + i}, 2024</p>
              </div>
              <span className="text-sm font-medium">${(i * 25).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <FrameFooter>
          <Button variant="ghost" size="sm" className="w-full">View All Activity</Button>
        </FrameFooter>
      </FramePanel>
    </Frame>
  ),
};

/** Frame with form fields for settings pages. */
export const WithForm: Story = {
  args: {},
  render: () => (
    <Frame className="w-full max-w-lg">
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Account Settings</FrameTitle>
          <FrameDescription>Update your account information.</FrameDescription>
        </FrameHeader>
        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Display Name</label>
            <Input defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input defaultValue="john@example.com" type="email" />
          </div>
        </div>
        <FrameFooter>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">Cancel</Button>
            <Button size="sm">Save Changes</Button>
          </div>
        </FrameFooter>
      </FramePanel>
    </Frame>
  ),
};

/** Card-style frames for dashboard grid layouts. */
export const CardStyle: Story = {
  args: {},
  render: () => (
    <div className="flex gap-4">
      <Frame className="flex-1">
        <FramePanel>
          <FrameHeader>
            <FrameTitle>Card One</FrameTitle>
          </FrameHeader>
          <div className="py-2">
            <p className="text-sm text-muted-foreground">Content for card one.</p>
          </div>
        </FramePanel>
      </Frame>
      <Frame className="flex-1">
        <FramePanel>
          <FrameHeader>
            <FrameTitle>Card Two</FrameTitle>
          </FrameHeader>
          <div className="py-2">
            <p className="text-sm text-muted-foreground">Content for card two.</p>
          </div>
        </FramePanel>
      </Frame>
    </div>
  ),
};