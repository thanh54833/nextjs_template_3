import type { Meta, StoryObj } from '@storybook/react';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './pagination';

/**
 * A set of pagination controls for navigating through large sets of content or data.
 *
 * @see https://ui.shadcn.com/docs/components/pagination
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
const meta = {
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A set of pagination controls for navigating through large sets of content or data. Each pagination group is built using the pagination components.',
      },
    },
  },
} as Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  /** Default pagination with ellipsis showing intermediate pages */
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const ManyPages: Story = {
  /** Pagination showing many pages with ellipsis */
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>20</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const FirstPage: Story = {
  /** Pagination on the first page with next button enabled */
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#' isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const LastPage: Story = {
  /** Pagination on the last page with previous button enabled */
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
