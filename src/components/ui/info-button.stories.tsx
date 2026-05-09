import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { InfobarProvider, useInfobar, type InfobarContent } from './infobar';
import { InfoButton } from './info-button';

const meta = {
  component: InfoButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A button component that opens the infobar with contextual information when clicked.',
      },
    },
  },
} satisfies Meta<typeof InfoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const content: InfobarContent = {
      title: 'Help Information',
      sections: [
        {
          title: 'Getting Started',
          description: 'This is a helpful tip to get you started with the dashboard.',
          links: [
            { title: 'View Tutorial', url: '#' },
          ],
        },
      ],
    };

    return (
      <InfobarProvider>
        <div className="flex items-center gap-4">
          <InfoButton content={content} />
          <span className="text-sm text-muted-foreground">Click for help</span>
        </div>
      </InfobarProvider>
    );
  },
};

export const WithText: Story = {
  render: () => {
    const content: InfobarContent = {
      title: 'Keyboard Shortcuts',
      sections: [
        {
          title: 'Navigation',
          description: 'Use these shortcuts to navigate faster.',
          links: [
            { title: 'View All Shortcuts', url: '#' },
          ],
        },
      ],
    };

    return (
      <InfobarProvider>
        <div className="flex items-center gap-4">
          <InfoButton content={content}>
            Help
          </InfoButton>
          <span className="text-sm text-muted-foreground">Press ⌘I to toggle</span>
        </div>
      </InfobarProvider>
    );
  },
};

export const GhostVariant: Story = {
  render: () => {
    const content: InfobarContent = {
      title: 'Quick Tips',
      sections: [
        {
          title: 'Tip of the Day',
          description: 'Use keyboard shortcuts to speed up your workflow.',
        },
      ],
    };

    return (
      <InfobarProvider>
        <InfoButton content={content} variant="ghost" />
      </InfobarProvider>
    );
  },
};

export const OutlineVariant: Story = {
  render: () => {
    const content: InfobarContent = {
      title: 'Product Updates',
      sections: [
        {
          title: 'New Features',
          description: 'Check out the latest features we have added.',
          links: [
            { title: 'Read More', url: '#' },
          ],
        },
      ],
    };

    return (
      <InfobarProvider>
        <InfoButton content={content} variant="outline">
          Updates
        </InfoButton>
      </InfobarProvider>
    );
  },
};

export const WithCustomContent: Story = {
  render: () => {
    const content: InfobarContent = {
      title: 'Table Actions',
      sections: [
        {
          title: 'Available Actions',
          description: 'Here are all the actions you can perform on this table.',
          links: [
            { title: 'Export Data', url: '#' },
            { title: 'Import Data', url: '#' },
            { title: 'Delete All', url: '#' },
          ],
        },
      ],
    };

    return (
      <InfobarProvider>
        <div className="flex flex-col gap-4">
          <InfoButton content={content} />
          <p className="text-xs text-muted-foreground">Click the info button to see available actions</p>
        </div>
      </InfobarProvider>
    );
  },
};
