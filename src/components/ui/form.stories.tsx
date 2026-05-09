import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from './button';
import { Input } from './input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';

const meta = {
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'React Hook Form integration with shadcn/ui components. Provides form state management, validation, and accessible form fields.',
      },
    },
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const formSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  bio: z.string().max(160, 'Bio must be less than 160 characters').optional(),
});

type FormValues = z.infer<typeof formSchema>;

function FormExample() {
  const form = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      bio: '',
    },
  });

  function onSubmit(data: FormValues) {
    console.info('Form submitted:', data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[400px]">
        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>Your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Input placeholder="Tell us about yourself..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-4">
          <Button type="submit">Submit</Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}

export const Default: Story = {
  render: () => <FormExample />,
};

export const WithValidation: Story = {
  render: () => <FormExample />,
};

export const WithPrefilledData: Story = {
  render: () => {
    const form = useForm<FormValues>({
      defaultValues: {
        username: 'johndoe',
        email: 'john@example.com',
        bio: 'Full-stack developer from San Francisco.',
      },
    });

    function onSubmit(data: FormValues) {
      console.info('Form submitted:', data);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-[400px]">
          <FormField
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
