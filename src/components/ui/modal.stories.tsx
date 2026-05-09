/**
 * Modal dialog component built on Radix UI Dialog primitive.
 *
 * @see https://www.radix-ui.com/primitives - Radix UI primitives documentation
 * @see https://storybook.js.org/docs/writing-stories - Storybook documentation
 */
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Button } from './button';
import { Modal } from './modal';

const meta = {
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A simple modal dialog component built on Radix UI Dialog.',
      },
    },
  },
} as Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Default modal with title, description, and action buttons. */
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          title="Confirm Action"
          description="Are you sure you want to proceed with this action? This cannot be undone."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="flex gap-4 justify-end mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </>
    );
  },
};

/** Modal with form fields for data entry dialogs. */
export const WithForm: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Create Project</Button>
        <Modal
          title="Create New Project"
          description="Fill in the details below to create a new project."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Project Name</label>
              <input
                type="text"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
                placeholder="My Awesome Project"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Description</label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                placeholder="Describe your project..."
              />
            </div>
            <div className="flex gap-4 justify-end">
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>Create Project</Button>
            </div>
          </div>
        </Modal>
      </>
    );
  },
};

/** Destructive action modal with danger styling. */
export const AlertModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <>
        <Button variant="destructive" onClick={() => setIsOpen(true)}>
          Delete Item
        </Button>
        <Modal
          title="Delete Item"
          description="This will permanently delete the item and all associated data. This action cannot be undone."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="flex gap-4 justify-end mt-4">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsOpen(false)}>
              Delete
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

/** Success confirmation modal for completed actions. */
export const SuccessModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Success</Button>
        <Modal
          title="Changes Saved"
          description="Your changes have been saved successfully."
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="flex justify-center mt-4">
            <Button onClick={() => setIsOpen(false)}>Continue</Button>
          </div>
        </Modal>
      </>
    );
  },
};