/**
 * Kanban board component with drag-and-drop support using dnd-kit.
 *
 * @see https://dndkit.com/ - dnd-kit official documentation
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import {
  Kanban,
  KanbanBoard,
  KanbanColumn,
  KanbanColumnHandle,
  KanbanItem,
  KanbanItemHandle,
  KanbanOverlay,
} from './kanban';

const meta = {
  component: Kanban,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A flexible kanban board component built on [@dnd-kit](https://dndkit.com/) with drag-and-drop support for columns and items.',
      },
    },
  },
} as Meta<typeof Kanban>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Task {
  id: string;
  title: string;
  description?: string;
}

interface StoryBoardProps {
  columns: Record<string, Task[]>;
  orientation?: 'horizontal' | 'vertical';
  flatCursor?: boolean;
}

function StoryBoard({ columns, orientation = 'horizontal', flatCursor = false }: StoryBoardProps) {
  const [value, setValue] = React.useState(columns);

  return (
    <Kanban
      value={value}
      onValueChange={setValue}
      orientation={orientation}
      flatCursor={flatCursor}
      getItemValue={(item) => item.id}
    >
      <KanbanBoard>
        {Object.entries(value).map(([columnId, items]) => (
          <KanbanColumn key={columnId} value={columnId}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <KanbanColumnHandle>
                  <span className="text-sm font-medium text-muted-foreground">
                    {columnId.charAt(0).toUpperCase() + columnId.slice(1)}
                  </span>
                </KanbanColumnHandle>
                <span className="text-xs text-muted-foreground">{items.length}</span>
              </div>
              {items.map((item) => (
                <KanbanItem key={item.id} value={item.id}>
                  <KanbanItemHandle>
                    <div className="rounded-md border bg-background p-3 text-sm shadow-sm">
                      {item.title}
                    </div>
                  </KanbanItemHandle>
                </KanbanItem>
              ))}
            </div>
          </KanbanColumn>
        ))}
      </KanbanBoard>
      <KanbanOverlay>
        {({ value: activeId, variant }) => {
          if (variant === 'item') {
            const item = Object.values(value)
              .flat()
              .find((t) => t.id === activeId);
            if (!item) return null;
            return (
              <div className="rounded-md border bg-primary p-3 text-sm text-primary-foreground shadow-lg">
                {item.title}
              </div>
            );
          }
          const columnId = activeId as string;
          return (
            <div className="flex h-[100px] w-[200px] items-center justify-center rounded-lg border-2 border-dashed border-primary bg-primary/10 text-sm">
              Column: {columnId}
            </div>
          );
        }}
      </KanbanOverlay>
    </Kanban>
  );
}

const defaultColumns: Record<string, Task[]> = {
  todo: [
    { id: 'task-1', title: 'Research competitors' },
    { id: 'task-2', title: 'Design mockups' },
  ],
  'in-progress': [{ id: 'task-3', title: 'Implement kanban board' }],
  done: [
    { id: 'task-4', title: 'Set up project' },
    { id: 'task-5', title: 'Write documentation' },
  ],
};

/** Default kanban board with three columns and sample tasks. */
export const Default: Story = {
  render: () => <StoryBoard columns={defaultColumns} />,
};

/** Horizontal orientation for wider layouts. */
export const HorizontalOrientation: Story = {
  render: () => <StoryBoard columns={defaultColumns} orientation="horizontal" />,
};

/** Vertical orientation for narrower containers. */
export const VerticalOrientation: Story = {
  render: () => <StoryBoard columns={defaultColumns} orientation="vertical" />,
};

/** Flat cursor style for simplified drag interactions. */
export const FlatCursor: Story = {
  render: () => <StoryBoard columns={defaultColumns} flatCursor />,
};

/** Empty board with no items in any column. */
export const EmptyBoard: Story = {
  render: () => <StoryBoard columns={{ todo: [], 'in-progress': [], done: [] }} />,
};

/** Single column with one task for minimal layouts. */
export const SingleColumn: Story = {
  render: () => ({
    component: (
      <Kanban
        value={{ backlog: [{ id: 'task-1', title: 'Single task' }] }}
        onValueChange={() => {}}
        getItemValue={(item) => item.id}
      >
        <KanbanBoard>
          <KanbanColumn value="backlog">
            <KanbanItem value="task-1">
              <div className="rounded-md border bg-background p-3 text-sm shadow-sm">Single task</div>
            </KanbanItem>
          </KanbanColumn>
        </KanbanBoard>
      </Kanban>
    ),
  }),
};

/** Many items in a single column to show scrolling behavior. */
export const ManyItems: Story = {
  render: () => {
    const manyTasks: Record<string, Task[]> = {
      todo: Array.from({ length: 8 }, (_, i) => ({ id: `task-${i}`, title: `Task ${i + 1}` })),
      'in-progress': [],
      done: [],
    };
    return <StoryBoard columns={manyTasks} />;
  },
};

/** Tasks with descriptions for richer content display. */
export const WithDescriptions: Story = {
  render: () => {
    const columnsWithDescriptions: Record<string, Task[]> = {
      todo: [
        { id: 'task-1', title: 'Design review', description: 'Review the new UI mockups with the team' },
        { id: 'task-2', title: 'API integration', description: 'Connect to the backend API' },
      ],
      'in-progress': [
        {
          id: 'task-3',
          title: 'Feature development',
          description: 'Implement the kanban component',
        },
      ],
      done: [],
    };
    return (
      <Kanban
        value={columnsWithDescriptions}
        onValueChange={() => {}}
        getItemValue={(item) => item.id}
      >
        <KanbanBoard>
          {Object.entries(columnsWithDescriptions).map(([columnId, items]) => (
            <KanbanColumn key={columnId} value={columnId}>
              <div className="flex flex-col gap-2">
                <KanbanColumnHandle>
                  <span className="text-sm font-medium">{columnId}</span>
                </KanbanColumnHandle>
                {items.map((item) => (
                  <KanbanItem key={item.id} value={item.id}>
                    <KanbanItemHandle>
                      <div className="rounded-md border bg-background p-3 shadow-sm">
                        <p className="text-sm font-medium">{item.title}</p>
                        {item.description && (
                          <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                        )}
                      </div>
                    </KanbanItemHandle>
                  </KanbanItem>
                ))}
              </div>
            </KanbanColumn>
          ))}
        </KanbanBoard>
      </Kanban>
    );
  },
};