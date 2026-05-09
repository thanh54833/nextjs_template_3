import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import type { DateRange } from 'react-day-picker';

import { Calendar } from './calendar';

const meta = {
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  },
};

export const WithSelectedDate: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date(2024, 5, 15));
    return <Calendar mode='single' selected={date} onSelect={setDate} />;
  },
};

export const WithRange: Story = {
  render: () => {
    const [range, setRange] = useState<DateRange | undefined>({
      from: new Date(2024, 5, 1),
      to: new Date(2024, 5, 10),
    });
    return <Calendar mode='range' selected={range} onSelect={setRange as (date: DateRange | undefined) => void} />;
  },
};

export const Disabled: Story = {
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
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return <Calendar mode='single' selected={date} onSelect={setDate} showOutsideDays={false} />;
  },
};
