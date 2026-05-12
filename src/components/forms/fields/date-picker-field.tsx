'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { useStore } from '@tanstack/react-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { FieldDescription, FieldLabel } from '@/components/ui/field';
import {
  useFieldContext,
  FormFieldSet,
  FormField,
  FormFieldError,
  createFormField
} from '@/components/ui/form-context';
import { Icons } from '@/components/icons';

interface DatePickerFieldProps {
  label: string;
  description?: string;
  required?: boolean;
  placeholder?: string;
}

export function DatePickerField({
  label,
  description,
  required,
  placeholder = 'Pick a date'
}: DatePickerFieldProps) {
  const field = useFieldContext();
  const value = useStore(field.store, (s) => s.value) as string | undefined;
  const [open, setOpen] = React.useState(false);

  const selectedDate = value ? new Date(value) : undefined;

  return (
    <FormFieldSet>
      <FormField>
        <FieldLabel htmlFor={field.name}>
          {label}
          {required && ' *'}
        </FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              className={cn(
                'w-full justify-start text-left font-normal',
                !value && 'text-muted-foreground'
              )}
            >
              <Icons.calendar className='mr-2 h-4 w-4' />
              {value ? format(selectedDate!, 'PPP') : placeholder}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto p-0' align='start'>
            <Calendar
              mode='single'
              selected={selectedDate}
              onSelect={(date) => {
                field.handleChange(date ? date.toISOString().split('T')[0] : '');
                setOpen(false);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        {description && <FieldDescription>{description}</FieldDescription>}
      </FormField>
      <FormFieldError />
    </FormFieldSet>
  );
}

export const FormDatePickerField = createFormField(DatePickerField);
