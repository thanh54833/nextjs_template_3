import type { Meta, StoryObj } from '@storybook/react';

import { Pagination } from './pagination';

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A comprehensive pagination component with page numbers, ellipsis, prev/next buttons, and optional per-page selector. Controlled component supporting multiple variants.',
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 3 },
      description: 'Number of sibling pages on each side of current page',
    },
    perPage: {
      control: { type: 'number', min: 1 },
      description: 'Number of items per page (used with showPerPageSelect)',
    },
    perPageOptions: {
      control: false,
      description: 'Options for per-page selector',
    },
    showPrevNext: {
      control: 'boolean',
      description: 'Show previous/next buttons',
    },
    showPerPageSelect: {
      control: 'boolean',
      description: 'Show per-page selector on left side',
    },
    perPageLabel: {
      control: 'text',
      description: 'Label text after per-page selector',
    },
    onPageChange: {
      action: 'page changed',
    },
    onPerPageChange: {
      action: 'per page changed',
    },
  },
} as Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 2,
    totalPages: 9,
    onPageChange: () => {},
  },
};

export const WithPerPageSelect: Story = {
  args: {
    currentPage: 2,
    totalPages: 9,
    perPage: 12,
    showPerPageSelect: true,
    onPageChange: () => {},
    onPerPageChange: () => {},
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    onPageChange: () => {},
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: () => {},
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 5,
    totalPages: 20,
    siblingCount: 1,
    onPageChange: () => {},
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    onPageChange: () => {},
  },
};

export const WithAllControls: Story = {
  args: {
    currentPage: 3,
    totalPages: 15,
    perPage: 24,
    showPerPageSelect: true,
    showPrevNext: true,
    onPageChange: () => {},
    onPerPageChange: () => {},
  },
};

export const PageOneOfMany: Story = {
  args: {
    currentPage: 1,
    totalPages: 25,
    perPage: 12,
    showPerPageSelect: true,
    onPageChange: () => {},
    onPerPageChange: () => {},
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 13,
    totalPages: 25,
    siblingCount: 2,
    perPage: 48,
    showPerPageSelect: true,
    showPrevNext: true,
    onPageChange: () => {},
    onPerPageChange: () => {},
  },
};

export const WithoutPrevNext: Story = {
  args: {
    currentPage: 3,
    totalPages: 7,
    showPrevNext: false,
    onPageChange: () => {},
  },
};

export const CustomPerPageLabel: Story = {
  args: {
    currentPage: 2,
    totalPages: 10,
    perPage: 50,
    showPerPageSelect: true,
    perPageLabel: 'items per page',
    onPageChange: () => {},
    onPerPageChange: () => {},
  },
};