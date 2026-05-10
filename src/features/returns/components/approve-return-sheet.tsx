'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Icons } from '@/components/icons';
import type { ReturnRequest } from '../api/types';

interface ApproveReturnSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnData: ReturnRequest;
}

const emailTemplates = [
  { id: 'default', label: 'Default Approval Template' },
  { id: 'exchange', label: 'Exchange Offer Template' },
  { id: 'refund', label: 'Refund Confirmation Template' }
];

export function ApproveReturnSheet({ open, onOpenChange, returnData }: ApproveReturnSheetProps) {
  const [subject, setSubject] = useState(
    `Quick Update on Your Order #${returnData.orderId} - ${returnData.orderChannel}`
  );
  const [body, setBody] = useState('');
  const [template, setTemplate] = useState('default');
  const [savingTemplate, setSavingTemplate] = useState(false);

  const subjectMaxLength = 120;
  const subjectCount = subject.length;

  const handleSaveTemplate = () => {
    setSavingTemplate(true);
    setTimeout(() => setSavingTemplate(false), 1000);
  };

  const handleConfirm = () => {
    console.log('Approving return with email:', { to: returnData.customerEmail, subject, body, template });
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className='flex flex-col gap-0 p-0 sm:max-w-xl'>
        <div className='flex items-start gap-3 border-b px-6 py-4'>
          <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900'>
            <Icons.mail className='h-4 w-4 text-amber-700 dark:text-amber-300' />
          </div>
          <div className='flex-1'>
            <SheetTitle className='text-base'>Approve Return request</SheetTitle>
            <SheetDescription className='mt-0.5'>
              Approve return request to confirm and process the item return.
            </SheetDescription>
          </div>
          <SheetClose asChild>
            <Button variant='ghost' size='icon' className='h-8 w-8 shrink-0'>
              <Icons.close className='h-4 w-4' />
            </Button>
          </SheetClose>
        </div>

        <div className='flex-1 overflow-y-auto px-6 py-5'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2 rounded-lg border px-3 py-2'>
              <span className='text-muted-foreground text-sm'>To</span>
              <span className='flex-1 text-sm font-medium'>{returnData.customerEmail}</span>
              <div className='flex items-center gap-1'>
                <button className='text-muted-foreground text-xs hover:text-foreground'>Cc</button>
                <span className='text-muted-foreground'>·</span>
                <button className='text-muted-foreground text-xs hover:text-foreground'>Bcc</button>
              </div>
            </div>

            <div className='flex items-center gap-2 rounded-lg border px-3 py-2'>
              <span className='text-muted-foreground text-sm'>Subject</span>
              <input
                type='text'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                maxLength={subjectMaxLength}
                className='flex-1 bg-transparent text-sm outline-none'
              />
              <span className='text-muted-foreground text-xs tabular-nums'>
                {subjectCount}/{subjectMaxLength}
              </span>
            </div>

            <div className='flex items-center gap-2'>
              <Select value={template} onValueChange={setTemplate}>
                <SelectTrigger className='flex-1'>
                  <SelectValue placeholder='Select template' />
                </SelectTrigger>
                <SelectContent>
                  {emailTemplates.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant='outline'
                size='sm'
                onClick={handleSaveTemplate}
                disabled={savingTemplate}
              >
                {savingTemplate ? (
                  <>
                    <Icons.spinner className='mr-1 h-3.5 w-3.5 animate-spin' />
                    Saving...
                  </>
                ) : (
                  'Save Template'
                )}
              </Button>
            </div>

            <div className='rounded-lg border'>
              <Textarea
                placeholder='Your message...'
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className='min-h-[200px] resize-none border-0 shadow-none focus-visible:ring-0'
              />
              <div className='flex items-center justify-between border-t px-3 py-2'>
                <div className='flex items-center gap-0.5'>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.bold className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.italic className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.link className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.smile className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.image className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.paperclip className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.edit className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                </div>
                <div className='flex items-center gap-2'>
                  <Button variant='ghost' size='sm' className='gap-1 text-xs'>
                    <Icons.sparkles className='h-3.5 w-3.5' />
                    Ask AI
                  </Button>
                  <Button variant='ghost' size='sm' className='text-xs'>
                    Preview Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SheetFooter className='flex-row items-center justify-between border-t px-6 py-4'>
          <a href='#' className='text-muted-foreground text-xs hover:text-foreground hover:underline'>
            Learn more about Notification
          </a>
          <div className='flex items-center gap-2'>
            <Button variant='outline' size='sm' onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button size='sm' onClick={handleConfirm}>
              Confirm
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
