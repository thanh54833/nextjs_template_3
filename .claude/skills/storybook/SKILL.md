---
name: storybook
user-invocable: true
argument-hint: "[stories|config|controls|play|docs] [target]"
description: "Use when writing, configuring, or improving Storybook for a component library or design system. Covers story writing (CSF3 format, component states, decorators), Storybook configuration (main.ts, preview.ts, addons, framework setup for React/Next.js/Vite), interactive controls and args (argTypes, control types, conditional controls), play functions and interaction testing (userEvent, waitFor, Testing Library queries), and component documentation (autodocs, MDX pages, JSDoc comments, design tokens). Use for any task involving .stories.tsx files, .storybook/ directory, story organization, component showcasing, or visual testing setup."
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Grep
  - Glob
---

Write, configure, and document Storybook for component libraries. Production-quality stories, correct CSF3 format, interactive controls, interaction tests, and auto-generated docs.

## Shared Concepts

Apply to every Storybook task regardless of sub-command.

### CSF3 is the only format

Never use CSF2 template binding. Always use object syntax:

```typescript
// ❌ CSF2 — never write this
const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = { label: 'Button' };

// ✅ CSF3 — always
export const Primary: Story = {
  args: { label: 'Button' },
};
```

### Type everything

```typescript
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
```

### Meta defaults propagate

Set shared args and argTypes at the meta level, not repeated per story:

```typescript
const meta = {
  component: Button,
  args: { size: 'medium', theme: 'light' },  // shared by all stories
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} satisfies Meta<typeof Button>;
```

## Commands

| Command | Description | Reference |
|---|---|---|
| `stories [target]` | Write CSF3 stories for a component — states, variants, patterns | [reference/stories.md](reference/stories.md) |
| `config [target]` | Set up or fix `.storybook/main.ts` and `preview.ts` | [reference/config.md](reference/config.md) |
| `controls [target]` | Configure argTypes, interactive controls, conditional controls | [reference/controls.md](reference/controls.md) |
| `play [target]` | Add interaction tests with play functions and Testing Library | [reference/play.md](reference/play.md) |
| `docs [target]` | Write autodocs, MDX pages, JSDoc, design token docs | [reference/docs.md](reference/docs.md) |

### Routing rules

1. **No argument**: show the command table above, ask what they'd like to do.
2. **First word matches a command**: load its reference file and follow its instructions. Everything after the command name is the target.
3. **First word doesn't match**: infer the best-fit command from context (a `.stories.tsx` file → `stories`, a `.storybook/` path → `config`, a `play:` block → `play`, documentation request → `docs`), load that reference, proceed.

## Tiptap Component Storybook

When writing stories for Tiptap editor components:

### Required Vite Config

Add to `.storybook/main.ts` `viteFinal`:
```typescript
optimizeDeps: {
  include: [
    '@tiptap/react',
    '@tiptap/pm',
    '@tiptap/starter-kit',
    '@tiptap/extension-link',
    '@tiptap/extension-image',
    '@tiptap/extension-text-align',
    '@tiptap/extension-underline',
    '@tiptap/extension-placeholder',
  ],
},
```

### Tiptap Editor Stories Pattern

```tsx
// tiptap-editor.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { TiptapEditor } from './tiptap-editor';

const meta = {
  component: TiptapEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    placeholder: { control: 'text' },
    editable: { control: 'boolean' },
    content: { control: 'text' },
  },
} satisfies Meta<typeof TiptapEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Start writing...',
    editable: true,
    content: '',
  },
};
```

### Common Tiptap Errors

| Error | Fix |
|-------|-----|
| `Failed to fetch dynamically imported module` | Add tiptap packages to `optimizeDeps.include` in viteFinal |
| `Cannot find module '@tiptap/pm'` | Ensure `optimizeDeps.include` includes `@tiptap/pm` |
| `Module level directives cause errors` | Pre-bundle tiptap packages via `optimizeDeps.include` |
| Dynamic import failure in Storybook | Vite needs to pre-bundle ESM-only packages |
