import type { Meta, StoryObj } from '@storybook/react';

import { FilePreview, type UploadedFile } from './file-preview';

const meta = {
  component: FilePreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A file preview component that displays uploaded files with type-specific icons and remove functionality.',
      },
    },
  },
} satisfies Meta<typeof FilePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFiles: UploadedFile[] = [
  { id: '1', name: 'project-proposal.pdf', type: 'application/pdf', url: '/placeholder.pdf' },
  { id: '2', name: 'dashboard-mockup.fig', type: 'application/figma', url: '/placeholder' },
  { id: '3', name: 'data-analysis.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
  { id: '4', name: 'readme.md', type: 'text/markdown' },
];

export const Default: Story = {
  args: {
    files: sampleFiles,
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const WithImages: Story = {
  args: {
    files: [
      { id: 'img-1', name: 'hero-image.jpg', type: 'image/jpeg', url: 'https://picsum.photos/200' },
      { id: 'img-2', name: 'logo.png', type: 'image/png', url: 'https://picsum.photos/201' },
    ],
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const InvertedVariant: Story = {
  args: {
    files: sampleFiles,
    variant: 'inverted',
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const WithUploadingFiles: Story = {
  args: {
    files: [
      { id: '1', name: 'uploading-file.pdf', type: 'application/pdf', isUploading: true },
      { id: '2', name: 'completed-file.docx', type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', url: '/placeholder' },
      { id: '3', name: 'another-uploading.jpg', type: 'image/jpeg', isUploading: true, url: 'https://picsum.photos/200' },
    ],
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const WithVideoFile: Story = {
  args: {
    files: [
      { id: '1', name: 'product-demo.mp4', type: 'video/mp4', url: '/placeholder' },
    ],
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const WithAudioFile: Story = {
  args: {
    files: [
      { id: '1', name: 'podcast-ep-12.mp3', type: 'audio/mpeg', url: '/placeholder' },
    ],
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const WithArchiveFile: Story = {
  args: {
    files: [
      { id: '1', name: 'source-code.zip', type: 'application/zip', url: '/placeholder' },
    ],
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const WithoutRemoveButton: Story = {
  args: {
    files: sampleFiles,
  },
};

export const MixedFileTypes: Story = {
  args: {
    files: [
      { id: '1', name: 'document.pdf', type: 'application/pdf' },
      { id: '2', name: 'image-photo.jpg', type: 'image/jpeg', url: 'https://picsum.photos/202' },
      { id: '3', name: 'spreadsheet.xlsx', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
      { id: '4', name: 'code.ts', type: 'text/typescript' },
      { id: '5', name: 'video-promo.mp4', type: 'video/mp4' },
      { id: '6', name: 'archive.tar.gz', type: 'application/gzip' },
    ],
    onRemove: (id) => console.log('Remove file:', id),
  },
};

export const SingleImage: Story = {
  args: {
    files: [
      { id: '1', name: 'profile-photo.jpg', type: 'image/jpeg', url: 'https://picsum.photos/203' },
    ],
    onRemove: (id) => console.log('Remove file:', id),
  },
};
