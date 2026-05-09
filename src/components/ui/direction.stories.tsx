import type { Meta, StoryObj } from '@storybook/react';

import { DirectionProvider, useDirection } from './direction';

/**
 * Direction provider for RTL/LTR text direction support built on Radix UI.
 *
 * @see https://www.radix-ui.com/primitives - Radix UI primitives documentation
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
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
} as Meta<typeof DirectionProvider>;

export default meta;
type Story = StoryObj;

/** Left-to-right direction for most languages (English, French, German). */
export const LTR: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="space-y-4">
        <p className="text-sm">This text is displayed left-to-right (LTR).</p>
        <p className="text-sm text-muted-foreground">
          Most languages like English, French, and German are LTR.
        </p>
      </div>
    </DirectionProvider>
  ),
};

/** Right-to-left direction for Arabic, Hebrew, Persian languages. */
export const RTL: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
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

/** Using useDirection hook to read and apply direction programmatically. */
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
<DirectionProvider dir="ltr">
        <DirectionExample />
      </DirectionProvider>
    );
  },
};