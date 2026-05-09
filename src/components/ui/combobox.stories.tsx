/**
 * Combobox component for searchable dropdown selection.
 *
 * @see https://ui.shadcn.com/docs/components/combobox
 * @see https://storybook.js.org/docs/writing-docs/autodocs
 */
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger
} from './combobox';

const meta = {
  component: Combobox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A combobox component for building searchable dropdowns. Supports typing to filter, keyboard navigation, and grouped items.'
      }
    }
  }
} as Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  { value: 'nextjs', label: 'Next.js' },
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
  { value: 'solid', label: 'Solid' }
];

/** Default combobox with searchable framework list */
export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    return (
      <Combobox open={open} onOpenChange={setOpen} value={value} onValueChange={setValue}>
        <ComboboxInput placeholder="Search framework..." />
        <ComboboxTrigger asChild>
          <Button variant="outline">Select</Button>
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
            {frameworks.map((framework) => (
              <ComboboxItem
                key={framework.value}
                value={framework.value}
                onSelect={() => {
                  setValue(framework.value);
                  setOpen(false);
                }}
              >
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  }
};

/** Combobox with items separated into frontend and backend groups */
export const WithGroups: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const frontend = [
      { value: 'nextjs', label: 'Next.js' },
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' }
    ];

    const backend = [
      { value: 'node', label: 'Node.js' },
      { value: 'python', label: 'Python' },
      { value: 'go', label: 'Go' }
    ];

    return (
      <Combobox open={open} onOpenChange={setOpen} value={value} onValueChange={setValue}>
        <ComboboxInput placeholder="Search technology..." />
        <ComboboxTrigger asChild>
          <Button variant="outline">Select</Button>
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxLabel>Frontend</ComboboxLabel>
            {frontend.map((item) => (
              <ComboboxItem
                key={item.value}
                value={item.value}
                onSelect={() => {
                  setValue(item.value);
                  setOpen(false);
                }}
              >
                {item.label}
              </ComboboxItem>
            ))}
            <ComboboxSeparator />
            <ComboboxLabel>Backend</ComboboxLabel>
            {backend.map((item) => (
              <ComboboxItem
                key={item.value}
                value={item.value}
                onSelect={() => {
                  setValue(item.value);
                  setOpen(false);
                }}
              >
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  }
};