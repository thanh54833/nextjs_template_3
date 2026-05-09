/**
 * AspectRatio component for maintaining proportional dimensions.
 *
 * @see https://ui.shadcn.com/docs/components/aspect-ratio
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A component that forces its content to maintain a specific aspect ratio. Useful for responsive images, video embeds, and iframe content.',
      },
    },
  },
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired aspect ratio (width/height)',
    },
  },
} as Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default 16:9 widescreen aspect ratio. */
export const Default: Story = {
  render: () => (
    <div className='w-[300px]'>
      <AspectRatio ratio={16 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/** Square 1:1 aspect ratio. */
export const Square: Story = {
  render: () => (
    <div className='w-[200px]'>
      <AspectRatio ratio={1 / 1} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>1:1</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/** Portrait 3:4 aspect ratio. */
export const Portrait: Story = {
  render: () => (
    <div className='w-[200px]'>
      <AspectRatio ratio={3 / 4} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>3:4</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

/** Cinematic 21:9 ultra-widescreen aspect ratio. */
export const Cinematic: Story = {
  render: () => (
    <div className='w-[400px]'>
      <AspectRatio ratio={21 / 9} className='bg-muted'>
        <div className='flex h-full w-full items-center justify-center'>
          <span className='text-muted-foreground'>21:9 Cinematic</span>
        </div>
      </AspectRatio>
    </div>
  ),
};
