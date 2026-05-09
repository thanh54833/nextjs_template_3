/**
 * Kbd component for displaying keyboard shortcuts and keys.
 *
 * @see https://ui.shadcn.com/docs/components/kbd
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  title: 'UI/Kbd',
  component: Kbd,
  subcomponents: {
    KbdGroup,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A component for displaying keyboard keys and shortcuts. Supports individual keys and grouped shortcuts via KbdGroup subcomponent.',
      },
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default keyboard key display. */
export const Default: Story = {
  args: {
    children: '⌘',
  },
};

/** Single letter key. */
export const K: Story = {
  args: {
    children: 'K',
  },
};

/** Escape key. */
export const Escape: Story = {
  args: {
    children: 'Esc',
  },
};

/** Command key symbol. */
export const Command: Story = {
  args: {
    children: '⌘',
  },
};

/** Shift key symbol. */
export const Shift: Story = {
  args: {
    children: '⇧',
  },
};

/** Control key symbol. */
export const Control: Story = {
  args: {
    children: '⌃',
  },
};

/** Option/Alt key symbol. */
export const Option: Story = {
  args: {
    children: '⌥',
  },
};

/** Group of keyboard keys displayed together. */
export const Group: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
};

/** Multi-key keyboard shortcut. */
export const Shortcut: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>⌘</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>P</Kbd>
    </KbdGroup>
  ),
};

/** Keyboard key with custom styling. */
export const WithClassName: Story = {
  args: {
    children: 'Ctrl',
    className: 'bg-red-500 text-white',
  },
};
