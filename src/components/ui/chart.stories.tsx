import type { Meta, StoryObj } from '@storybook/react';
import { ChartContainer, ChartTooltipContent, ChartLegendContent } from './chart';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

/**
 * Chart container component for wrapping Recharts visualizations.
 *
 * @see https://ui.shadcn.com/docs/components/chart
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 *
 * Chart components include:
 * - `ChartContainer` - Wrapper for Recharts charts with config theming
 * - `ChartTooltipContent` - Custom tooltip for charts
 * - `ChartLegendContent` - Custom legend for charts
 *
 * The `config` prop accepts a configuration object that maps chart data keys to:
 * - `label` - Display name for the data series
 * - `color` - CSS color or CSS variable reference (e.g., 'var(--color-sales)')
 */
const meta = {
  component: ChartContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'ChartContainer wraps Recharts visualizations with theming support. Pass a `config` object that maps data keys to `label` and `color` properties. Use CSS variables like `var(--color-sales)` in your Recharts components to enable theming.',
      },
    },
  },
} as Meta<typeof ChartContainer>;

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

/** Chart configuration mapping data keys to label and color */
const chartConfig = {
  sales: {
    label: 'Sales',
    color: '#2563eb',
  },
} as const;

/** Default bar chart with monthly sales data */
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

/** Bar chart with configurable chart settings */
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
