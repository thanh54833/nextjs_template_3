import type { Meta, StoryObj } from '@storybook/react';

import { DirectionProvider, useDirection } from './direction';

const meta = {
  component: DirectionProvider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A direction provider component built on Radix UI Direction for RTL/LTR text direction support.',
      },
    },
  },
} satisfies Meta<typeof DirectionProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LTR: Story = {
  render: () => (
    <DirectionProvider direction="ltr">
      <div className="space-y-4">
        <p className="text-sm">This text is displayed left-to-right (LTR).</p>
        <p className="text-sm text-muted-foreground">
          Most languages like English, French, and German are LTR.
        </p>
      </div>
    </DirectionProvider>
  ),
};

export const RTL: Story = {
  render: () => (
    <DirectionProvider direction="rtl">
      <div className="space-y-4">
        <p className="text-sm" dir="rtl">
          هذا النص يتم عرضه من اليمين إلى اليسار (RTL).
        </p>
        <p className="text-sm text-muted-foreground">
          Languages like Arabic, Hebrew, and Persian are RTL.
        </p>
      </div>
    </DirectionProvider>
  ),
};

export const WithUseDirection: Story = {
  render: () => {
    function DirectionExample() {
      const dir = useDirection();
      return (
        <div className="space-y-4">
          <p className="text-sm">Current direction: <strong>{dir || 'ltr'}</strong></p>
          <div dir={dir || 'ltr'} className="space-y-2">
            <input
              type="text"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Text input"
            />
            <div className="flex gap-2">
              <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm">
                Button
              </button>
              <button className="rounded-md border border-input bg-background px-4 py-2 text-sm">
                Another Button
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <DirectionProvider direction="ltr">
        <DirectionExample />
      </DirectionProvider>
    );
  },
};
