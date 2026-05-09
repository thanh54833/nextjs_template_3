import type { Meta, StoryObj } from '@storybook/react';
import { Kbd, KbdGroup } from './kbd';

const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  subcomponents: {
    KbdGroup,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '⌘',
  },
};

export const K: Story = {
  args: {
    children: 'K',
  },
};

export const Escape: Story = {
  args: {
    children: 'Esc',
  },
};

export const Command: Story = {
  args: {
    children: '⌘',
  },
};

export const Shift: Story = {
  args: {
    children: '⇧',
  },
};

export const Control: Story = {
  args: {
    children: '⌃',
  },
};

export const Option: Story = {
  args: {
    children: '⌥',
  },
};

export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

export const Shortcut: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
};

export const WithClassName: Story = {
  args: {
    children: 'Ctrl',
    className: 'bg-red-500 text-white',
  },
};