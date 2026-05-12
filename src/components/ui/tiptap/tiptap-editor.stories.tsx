import type { Meta, StoryObj } from '@storybook/react';
import { TiptapEditor } from './tiptap-editor';

const meta = {
  component: TiptapEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text when editor is empty',
    },
    editable: {
      control: 'boolean',
      description: 'Whether the editor is editable',
    },
    content: {
      control: 'text',
      description: 'Initial content in HTML format',
    },
  },
} satisfies Meta<typeof TiptapEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Start writing your content here...',
    editable: true,
    content: '',
  },
};

export const WithContent: Story = {
  args: {
    placeholder: 'Start writing...',
    editable: true,
    content: `
      <h1>Welcome to the Editor</h1>
      <p>This is a <strong>rich text editor</strong> built with Tiptap.</p>
      <h2>Features</h2>
      <ul>
        <li>Bold, Italic, Underline formatting</li>
        <li>Headings (H1, H2, H3)</li>
        <li>Bullet and ordered lists</li>
        <li>Text alignment</li>
        <li>Blockquotes and code blocks</li>
        <li>Links and images</li>
      </ul>
      <blockquote>This is a blockquote example.</blockquote>
      <pre><code>const greeting = "Hello, World!";</code></pre>
    `,
  },
};

export const ReadOnly: Story = {
  args: {
    placeholder: 'This is read-only...',
    editable: false,
    content: `
      <h1>Read-Only Content</h1>
      <p>This editor is in read-only mode. Users can select and copy text but cannot edit.</p>
      <p><em>Try typing in this editor - it won't work!</em></p>
    `,
  },
};

export const WithLinkAndImage: Story = {
  args: {
    placeholder: 'Add links and images...',
    editable: true,
    content: `
      <p>Check out this <a href="https://example.com">link to Example</a>.</p>
      <p>Below is an image:</p>
      <img src="https://images.unsplash.com/photo-1517694712202-14dd3638cab1?w=400" alt="Code on screen" />
    `,
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    placeholder: 'Dark mode editor...',
    editable: true,
    content: `
      <h1>Dark Mode</h1>
      <p>This editor looks great in dark mode with proper contrast.</p>
    `,
  },
};

export const EmptyPlaceholder: Story = {
  args: {
    placeholder: 'Type something...',
    editable: true,
    content: '',
  },
};