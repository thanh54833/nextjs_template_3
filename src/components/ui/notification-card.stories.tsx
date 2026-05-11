import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import {
  NotificationCard,
  type NotificationCardProps,
} from './notification-card';

/**
 * Notification card component with support for actions, status indicators, and timestamps.
 *
 * @see https://github.com/Kiranism/next-shadcn-dashboard-starter - Original source
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
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
} as Meta<typeof NotificationCard>;

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

/** Security alert with client-side confirmation before the destructive action fires */
export const WithDangerActionConfirm: Story = {
  render: () => {
    const [confirmed, setConfirmed] = React.useState(false);
    const [pending, setPending] = React.useState<string | null>(null);

    const handleAction = (_notificationId: string, actionId: string) => {
      if (actionId === 'secure' && !confirmed) {
        setPending(actionId);
        return;
      }
      console.log('Action fired:', actionId);
      setConfirmed(true);
      setPending(null);
    };

    return (
      <div className="space-y-3 max-w-sm">
        <NotificationCard
          id="security-1"
          title="Account Security Alert"
          body="We detected a sign-in from a new device in London, UK. If this wasn't you, please secure your account immediately."
          status="unread"
          createdAt={new Date(Date.now() - 1000 * 60 * 2).toISOString()}
          actions={[
            { id: 'secure', label: 'Secure Account', type: 'api_call', style: 'danger' },
            { id: 'ignore', label: 'It Was Me', type: 'modal', style: 'default' },
          ]}
          onAction={handleAction}
        />
        {pending && !confirmed && (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm">
            <p className="font-medium text-destructive mb-2">Confirm: Secure your account?</p>
            <p className="text-muted-foreground text-xs mb-3">This will log out all other sessions and send a security email.</p>
            <div className="flex gap-2">
              <button
                className="rounded-md bg-destructive px-3 py-1.5 text-xs font-medium text-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                onClick={() => { setConfirmed(true); setPending(null); }}
              >
                Yes, secure it
              </button>
              <button
                className="rounded-md border px-3 py-1.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                onClick={() => setPending(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
        {confirmed && (
          <p className="text-xs text-muted-foreground px-1">Account secured. All other sessions logged out.</p>
        )}
      </div>
    );
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