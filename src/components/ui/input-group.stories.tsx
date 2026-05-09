import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from './input-group';
import { Input } from './input';
import { Textarea } from './textarea';

/**
 * Input group component for combining inputs with addons, buttons, and text.
 *
 * @see https://github.com/Kiranism/next-shadcn-dashboard-starter - Original source
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
const meta = {
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Input group component for combining inputs with addons, buttons, and text in flexible layouts.',
      },
    },
  },
} as Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Basic input group with a single input field. */
export const Default: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupInput placeholder="Enter username" />
    </InputGroup>
  ),
};

/** Input with prefix addon for URL schemas. */
export const WithInlineStartAddon: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="inline-start">https://</InputGroupAddon>
      <InputGroupInput placeholder="example.com" />
    </InputGroup>
  ),
};

/** Input with suffix addon for email domains. */
export const WithInlineEndAddon: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupInput placeholder="johndoe" />
      <InputGroupAddon align="inline-end">@gmail.com</InputGroupAddon>
    </InputGroup>
  ),
};

/** Input with button addon for search functionality. */
export const WithButtonAddon: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="inline-start">
        <InputGroupButton variant="ghost">Search</InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

/** Full search field with icon and clear button. */
export const SearchField: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Search documents..." />
      <InputGroupAddon align="inline-end">
        <InputGroupButton size="icon-xs" variant="ghost">
          ×
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

/** Input with keyboard shortcut indicator. */
export const WithKbdShortcut: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="inline-start">
        <InputGroupText>
          <kbd className="text-xs">⌘</kbd>
        </InputGroupText>
      </InputGroupAddon>
      <InputGroupInput placeholder="Type a command..." />
    </InputGroup>
  ),
};

/** Block-style start addon positioned above the input. */
export const BlockStartAddon: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="block-start">Label</InputGroupAddon>
      <InputGroupInput placeholder="Input below label" />
    </InputGroup>
  ),
};

/** Block-style end addon positioned below the input. */
export const BlockEndAddon: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupInput placeholder="Input above helper text" />
      <InputGroupAddon align="block-end">Helper text here</InputGroupAddon>
    </InputGroup>
  ),
};

/** Password field with visibility toggle buttons. */
export const IconButtonAddons: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="inline-start">
        <InputGroupButton variant="ghost" size="icon-sm">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </InputGroupButton>
      </InputGroupAddon>
      <InputGroupInput placeholder="Password" type="password" />
      <InputGroupAddon align="inline-end">
        <InputGroupButton variant="ghost" size="icon-sm">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  ),
};

/** Textarea with block addon for message composition. */
export const WithTextarea: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="block-start">Message</InputGroupAddon>
      <InputGroupTextarea placeholder="Write your message..." rows={4} />
    </InputGroup>
  ),
};

/** Input with prefix and suffix for currency entry. */
export const WithPrefixAndSuffix: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupAddon align="inline-start">$</InputGroupAddon>
      <InputGroupInput placeholder="0.00" type="number" />
      <InputGroupAddon align="inline-end">.00</InputGroupAddon>
    </InputGroup>
  ),
};

/** Multiple buttons without input for toolbar patterns. */
export const MultipleButtons: Story = {
  render: () => (
    <InputGroup className="w-[400px]">
      <InputGroupButton size="sm" variant="outline">
        Copy
      </InputGroupButton>
      <InputGroupButton size="sm" variant="outline">
        Cut
      </InputGroupButton>
      <InputGroupButton size="sm" variant="outline">
        Paste
      </InputGroupButton>
    </InputGroup>
  ),
};