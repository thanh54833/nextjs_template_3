import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { format } from 'date-fns';
import { Icons } from '@/components/icons';

/**
 * A calendar component for selecting dates and date ranges.
 *
 * @see https://ui.shadcn.com/docs/components/calendar
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
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
} as Meta<typeof Calendar>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  /** Default calendar with today's date selected */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  },
};

export const WithSelectedDate: Story = {
  /** Calendar with a specific date pre-selected */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2024, 5, 15));
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  },
};

export const WithRange: Story = {
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
  /** Calendar with outside days hidden */
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} showOutsideDays={false} />;
  },
};

export const WithPopover: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between font-normal">
            <span className={date ? 'text-foreground' : 'text-muted-foreground'}>
              {date ? format(date, 'PPP') : 'Pick a date'}
            </span>
            <Icons.calendar className="size-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align='start' className='w-auto p-0'>
          <Calendar mode='single' selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    );
  },
};
