/**
 * Heading component for page section titles with optional descriptions.
 *
 * @see https://ui.shadcn.com/docs/components/heading
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A page heading component that displays a title with an optional description and info content. Used for page headers and section titles.',
      },
    },
  },
} as Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default heading with title and description. */
export const Default: Story = {
  args: {
    title: 'Dashboard',
    description: 'Overview of your metrics and activity.',
  },
};

/** Heading with info content for contextual help. */
export const WithInfo: Story = {
  args: {
    title: 'Analytics',
    description: 'Detailed analytics for your workspace.',
    infoContent: {
      title: 'Analytics Info',
      sections: [
        {
          title: 'Overview',
          description: 'This page shows detailed analytics about your workspace performance.',
        },
      ],
    },
  },
};

/** Small heading variant. */
export const SmallTitle: Story = {
  args: {
    title: 'Settings',
    description: 'Manage your account and workspace settings.',
  },
};

/** Large heading variant. */
export const LargeTitle: Story = {
  args: {
    title: 'Product Management',
    description: 'Manage your products, inventory, and orders.',
  },
};
