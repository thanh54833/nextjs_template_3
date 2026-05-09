/**
 * Carousel component built on Embla Carousel with prev/next navigation controls.
 *
 * @see https://www.embla-carousel.com/ - Embla Carousel official documentation
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './carousel';

const meta = {
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A carousel component built on top of [Embla Carousel](https://www.embla-carousel.com/) with prev/next navigation controls.',
      },
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const SlideContent = ({ index }: { index: number }) => (
  <div className="flex h-[200px] w-[300px] items-center justify-center rounded-lg border bg-background text-lg font-medium shadow-sm">
    Slide {index}
  </div>
);

/** Default carousel with 4 slides and navigation controls. */
export const Default: Story = {
  render: () => (
    <Carousel className="w-full max-w-[320px]">
      <CarouselContent>
        {[1, 2, 3, 4].map((index) => (
          <CarouselItem key={index}>
            <SlideContent index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/** Carousel with more items showing scroll behavior. */
export const WithMultipleItems: Story = {
  render: () => (
    <Carousel className="w-full max-w-[320px]">
      <CarouselContent>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <CarouselItem key={index}>
            <SlideContent index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/** Vertical orientation carousel for swipe scrolling. */
export const VerticalOrientation: Story = {
  render: () => (
    <Carousel orientation="vertical" className="w-full max-w-[320px]">
      <CarouselContent>
        {[1, 2, 3, 4].map((index) => (
          <CarouselItem key={index}>
            <SlideContent index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/** Carousel without navigation controls for custom navigation. */
export const WithoutNavigation: Story = {
  render: () => (
    <Carousel className="w-full max-w-[320px]">
      <CarouselContent>
        {[1, 2, 3, 4].map((index) => (
          <CarouselItem key={index}>
            <SlideContent index={index} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
};

/** Single slide carousel example. */
export const SingleSlide: Story = {
  render: () => (
    <Carousel className="w-full max-w-[320px]">
      <CarouselContent>
        <CarouselItem>
          <SlideContent index={1} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

/** Carousel with custom styling using className overrides. */
export const CustomClassName: Story = {
  render: () => (
    <Carousel className="w-full max-w-[400px]">
      <CarouselContent className="gap-4">
        {[1, 2, 3].map((index) => (
          <CarouselItem key={index} className="basis-auto">
            <div className="flex h-[150px] w-[200px] items-center justify-center rounded-lg border bg-background text-lg font-medium shadow-sm">
              Custom Slide {index}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};