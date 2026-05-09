/**
 * Avatar component for displaying user profile images with fallback.
 *
 * @see https://ui.shadcn.com/docs/components/avatar
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  title: 'UI/Avatar',
  component: Avatar,
  subcomponents: {
    AvatarImage,
    AvatarFallback,
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A user avatar component that displays an image with a fallback text fallback when the image fails to load. Includes AvatarImage and AvatarFallback subcomponents.',
      },
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default avatar showing an image with fallback initials. */
export const Default: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

/** Avatar without an image, showing only the fallback. */
export const WithoutImage: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

/** Avatar with a long name in the fallback. */
export const LongName: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarFallback>Alexander The Great</AvatarFallback>
    </Avatar>
  ),
};

/** Small sized avatar. */
export const Small: Story = {
  args: {},
  render: () => (
    <Avatar className='size-6'>
      <AvatarFallback className='text-[10px]'>SM</AvatarFallback>
    </Avatar>
  ),
};

/** Large sized avatar. */
export const Large: Story = {
  args: {},
  render: () => (
    <Avatar className='size-16'>
      <AvatarFallback className='text-lg'>LG</AvatarFallback>
    </Avatar>
  ),
};
