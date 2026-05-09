/**
 * A calendar component for selecting dates and date ranges.
 *
 * @see https://ui.shadcn.com/docs/components/calendar
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar } from './calendar';

const meta = {
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A calendar component for selecting dates and date ranges. Supports single date selection, multiple dates, and date ranges. Built on top of react-day-picker.',
      },
    },
  },
  argTypes: {
    mode: { control: 'select', options: ['single', 'multiple', 'range'], description: 'Selection mode' },
    showOutsideDays: { control: 'boolean', description: 'Whether to show days from adjacent months' },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  /** Default calendar with today's date selected */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  },
};

export const WithSelectedDate: Story = {
  args: {},
  /** Calendar with a specific date pre-selected */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2024, 5, 15));
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  },
};

export const WithRange: Story = {
  args: {},
  /** Calendar in range selection mode */
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(2024, 5, 1),
      to: new Date(2024, 5, 10),
    });
    return <Calendar mode='range' selected={range} onSelect={setRange as (date: DateRange | undefined) => void} />;
  },
};

export const Disabled: Story = {
  args: {},
  /** Calendar with weekends disabled */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    );
  },
};

export const HiddenOutsideDays: Story = {
  args: {},
  /** Calendar with outside days hidden */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} showOutsideDays={false} />;
  },
};
