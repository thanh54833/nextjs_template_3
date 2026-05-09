import type { Meta, StoryObj } from '@storybook/react';
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from './chart';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const meta = {
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { month: 'January', sales: 186 },
  { month: 'February', sales: 305 },
  { month: 'March', sales: 237 },
  { month: 'April', sales: 73 },
  { month: 'May', sales: 209 },
  { month: 'June', sales: 214 },
];

const chartConfig = {
  sales: {
    label: 'Sales',
    color: '#2563eb',
  },
} as const;

export const Default: Story = {
  args: {
    config: chartConfig,
    children: (
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <Bar dataKey="sales" fill="var(--color-sales)" />
      </BarChart>
    ),
  },
};

export const WithLegend: Story = {
  args: {
    config: chartConfig,
    children: (
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <Bar dataKey="sales" fill="var(--color-sales)" />
      </BarChart>
    ),
  },
};
