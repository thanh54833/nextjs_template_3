/**
 * Notification card component with support for actions, status indicators, and timestamps.
 *
 * @see https://github.com/Kiranism/next-shadcn-dashboard-starter - Original source
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import {
  NotificationCard,
  type NotificationAction,
  type NotificationCardProps,
} from './notification-card';

const meta = {
  component: NotificationCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A notification card component with support for actions, status indicators, and timestamps.',
      },
    },
  },
} satisfies Meta<typeof NotificationCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const fiveMinutesAgo = new Date(Date.now() - 1000 * 60 * 5).toISOString();
const baseNotification: NotificationCardProps = {
  id: 'notification-1',
  title: 'New message from Sarah',
  body: 'Hey! I wanted to follow up on our conversation about the project timeline.',
  status: 'unread',
  createdAt: fiveMinutesAgo,
};

/** Default notification card with unread status. */
export const Default: Story = {
  args: baseNotification,
};

/** Unread notification state with visual indicator. */
export const Unread: Story = {
  args: {
    ...baseNotification,
    status: 'unread',
  },
};

/** Read notification with muted styling. */
export const Read: Story = {
  args: {
    ...baseNotification,
    status: 'read',
  },
};

/** Archived notification for dismissed items. */
export const Archived: Story = {
  args: {
    ...baseNotification,
    status: 'archived',
  },
};

/** Notification with action buttons for interaction. */
export const WithActions: Story = {
  args: {
    ...baseNotification,
    actions: [
      { id: 'reply', label: 'Reply', type: 'redirect' },
      { id: 'dismiss', label: 'Dismiss', type: 'modal', style: 'default' },
    ],
  },
};

/** Notification with primary action button for promotions. */
export const WithPrimaryAction: Story = {
  args: {
    ...baseNotification,
    title: 'Upgrade Required',
    body: 'Your plan has expired. Upgrade now to continue accessing premium features.',
    actions: [
      { id: 'upgrade', label: 'Upgrade Plan', type: 'redirect', style: 'primary' },
    ],
  },
};

/** Notification with danger action for security alerts. */
export const WithDangerAction: Story = {
  args: {
    ...baseNotification,
    title: 'Account Security Alert',
    body: "We detected a sign-in from a new device. If this wasn't you, please secure your account.",
    actions: [
      { id: 'secure', label: 'Secure Account', type: 'api_call', style: 'danger' },
      { id: 'ignore', label: 'It Was Me', type: 'modal', style: 'default' },
    ],
  },
};

/** Notification with executed action showing completed state. */
export const WithExecutedAction: Story = {
  args: {
    ...baseNotification,
    title: 'Task Completed',
    body: 'Your export task has been completed successfully.',
    actions: [
      { id: 'download', label: 'Download', type: 'redirect', executed: true },
    ],
  },
};

/** Notification with loading action during async operations. */
export const WithLoadingAction: Story = {
  args: {
    ...baseNotification,
    actions: [
      { id: 'process', label: 'Process', type: 'workflow' },
    ],
    loadingActionId: 'process',
  },
};

/** Notification with multiple action options. */
export const WithMultipleActions: Story = {
  args: {
    ...baseNotification,
    title: 'Deployment Ready',
    body: 'Your application has been deployed to production and is ready for testing.',
    actions: [
      { id: 'view', label: 'View App', type: 'redirect' },
      { id: 'rollback', label: 'Rollback', type: 'api_call', style: 'danger' },
      { id: 'logs', label: 'View Logs', type: 'modal' },
    ],
  },
};

/** Older notification demonstrating timestamp formatting. */
export const OldNotification: Story = {
  args: {
    id: 'old-notification',
    title: 'Weekly Report',
    body: 'Your weekly analytics report is ready to view.',
    status: 'read',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString(),
  },
};

/** Interactive example with multiple notifications and state management. */
export const Interactive: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState([
      {
        id: '1',
        title: 'New message from Sarah',
        body: 'Hey! I wanted to follow up on our conversation about the project timeline.',
        status: 'unread' as const,
        createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
      },
      {
        id: '2',
        title: 'Deployment Complete',
        body: 'Your application has been successfully deployed to production.',
        status: 'read' as const,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      },
    ]);

    const handleMarkAsRead = (id: string) => {
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, status: 'read' as const } : n))
      );
    };

    return (
      <div className="flex flex-col gap-4 w-full max-w-md">
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            {...notification}
            onMarkAsRead={handleMarkAsRead}
            onAction={(notificationId, actionId, actionType) => {
              console.log('Action:', { notificationId, actionId, actionType });
            }}
          />
        ))}
      </div>
    );
  },
};