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
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import type { ReturnRequest, ReturnStatus } from '../api/types';
import { ApproveReturnSheet } from './approve-return-sheet';

interface ReturnDetailsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnData: ReturnRequest | null;
  currentIndex: number;
  totalCount: number;
  onNavigate?: (direction: 'prev' | 'next') => void;
}

const statusConfig: Record<ReturnStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  pending_approval: { label: 'Pending Approval', variant: 'secondary' },
  approved: { label: 'Approved', variant: 'default' },
  rejected: { label: 'Rejected', variant: 'destructive' },
  resolved: { label: 'Resolved', variant: 'default' },
  expired: { label: 'Expired', variant: 'outline' }
};

function StatusBadge({ status }: { status: ReturnStatus }) {
  const config = statusConfig[status];
  return (
    <Badge variant={config.variant} className='gap-1'>
      <Icons.clock className='h-3 w-3' />
      {config.label}
    </Badge>
  );
}

function OrderStatusBadge({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
        active
          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400'
          : 'bg-muted text-muted-foreground'
      )}
    >
      {active ? <Icons.check className='h-3 w-3' /> : <Icons.close className='h-3 w-3' />}
      {label}
    </span>
  );
}

export function ReturnDetailsSheet({
  open,
  onOpenChange,
  returnData,
  currentIndex,
  totalCount,
  onNavigate
}: ReturnDetailsSheetProps) {
  const [showComments, setShowComments] = useState(true);
  const [comment, setComment] = useState('');
  const [approveOpen, setApproveOpen] = useState(false);

  if (!returnData) return null;

  const canApprove = returnData.status === 'pending_approval';

  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent className='flex flex-col gap-0 p-0 sm:max-w-2xl'>
          <div className='flex items-center justify-between border-b px-6 py-4'>
            <div className='flex items-center gap-3'>
              <SheetTitle className='text-lg'>Return Details</SheetTitle>
              <span className='text-muted-foreground text-sm'>
                Return {currentIndex + 1} out of {totalCount}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8'
                disabled={currentIndex === 0}
                onClick={() => onNavigate?.('prev')}
              >
                <Icons.chevronLeft className='h-4 w-4' />
              </Button>
              <Button
                variant='ghost'
                size='icon'
                className='h-8 w-8'
                disabled={currentIndex === totalCount - 1}
                onClick={() => onNavigate?.('next')}
              >
                <Icons.chevronRight className='h-4 w-4' />
              </Button>
              <SheetClose asChild>
                <Button variant='ghost' size='icon' className='h-8 w-8'>
                  <Icons.close className='h-4 w-4' />
                </Button>
              </SheetClose>
            </div>
          </div>

          <div className='flex flex-1 overflow-hidden'>
            <div className='flex-1 overflow-y-auto px-6 py-6'>
              <div className='mb-6'>
                <div className='flex items-center gap-2'>
                  <h3 className='font-mono text-xl font-bold tracking-tight'>
                    {returnData.rmaNumber}
                  </h3>
                  <StatusBadge status={returnData.status} />
                </div>
                <p className='text-muted-foreground mt-1 text-sm'>
                  Request date {returnData.requestDate} · From{' '}
                  <span className='text-foreground font-medium'>{returnData.customerName}</span>
                </p>
              </div>

              <div className='mb-6'>
                <h4 className='mb-3 text-sm font-semibold'>Product</h4>
                <div className='flex items-start gap-3 rounded-lg border bg-card p-3'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-muted'>
                    <Icons.package className='h-5 w-5 text-muted-foreground' />
                  </div>
                  <div className='min-w-0'>
                    <p className='truncate text-sm font-medium'>{returnData.productName}</p>
                    <p className='text-muted-foreground text-xs'>
                      SKU: {returnData.productSku}
                    </p>
                    <p className='text-muted-foreground text-xs'>
                      {returnData.productVariant} · Quantity {returnData.productQuantity}
                    </p>
                  </div>
                </div>
              </div>

              <div className='mb-6'>
                <h4 className='mb-3 text-sm font-semibold'>Return Reason</h4>
                <div className='rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-900 dark:bg-amber-950'>
                  <p className='text-amber-900 text-sm dark:text-amber-200'>
                    {returnData.returnReason}
                  </p>
                </div>
              </div>

              {returnData.returnProofImages.length > 0 && (
                <div className='mb-6'>
                  <h4 className='mb-3 text-sm font-semibold'>Return Proof</h4>
                  <div className='flex gap-3'>
                    {returnData.returnProofImages.map((img, i) => (
                      <div
                        key={i}
                        className='flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-muted'
                      >
                        <Icons.image className='h-6 w-6 text-muted-foreground' />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className='mb-3 flex items-center justify-between'>
                  <h4 className='text-sm font-semibold'>Timeline</h4>
                  <button
                    onClick={() => setShowComments(!showComments)}
                    className='flex items-center gap-1.5 text-xs font-medium text-primary hover:underline'
                  >
                    <div
                      className={cn(
                        'h-4 w-7 rounded-full transition-colors',
                        showComments ? 'bg-primary' : 'bg-muted'
                      )}
                    >
                      <div
                        className={cn(
                          'h-3 w-3 rounded-full bg-white shadow-sm transition-transform',
                          showComments ? 'translate-x-3.5' : 'translate-x-0.5'
                        )}
                      />
                    </div>
                    Show comments
                  </button>
                </div>

                {showComments && (
                  <div className='space-y-3'>
                    <div className='flex items-center gap-2 rounded-lg border bg-muted/50 px-3 py-2'>
                      <Icons.messageSquare className='h-4 w-4 text-muted-foreground' />
                      <input
                        type='text'
                        placeholder='Leave a comment'
                        className='flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                      <div className='flex items-center gap-1'>
                        <Button variant='ghost' size='icon' className='h-7 w-7'>
                          <Icons.paperclip className='h-3.5 w-3.5 text-muted-foreground' />
                        </Button>
                        <Button variant='ghost' size='icon' className='h-7 w-7'>
                          <Icons.hash className='h-3.5 w-3.5 text-muted-foreground' />
                        </Button>
                        <Button variant='ghost' size='icon' className='h-7 w-7'>
                          <Icons.smile className='h-3.5 w-3.5 text-muted-foreground' />
                        </Button>
                      </div>
                    </div>
                    <p className='text-muted-foreground text-xs'>
                      Only you and other staff can see the comment
                    </p>

                    {returnData.timeline.map((event) => (
                      <div key={event.id} className='flex gap-3'>
                        <Avatar className='h-7 w-7'>
                          <AvatarImage src={event.authorAvatar} />
                          <AvatarFallback className='text-xs'>
                            {event.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className='flex-1'>
                          <div className='flex items-baseline gap-2'>
                            <span className='text-sm font-medium'>{event.author}</span>
                            <span className='text-muted-foreground text-xs'>
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className='text-muted-foreground text-sm'>{event.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className='w-72 shrink-0 overflow-y-auto border-l bg-muted/30 px-5 py-6'>
              <div className='mb-6'>
                <h4 className='mb-3 text-sm font-semibold'>Order Details</h4>
                <dl className='space-y-2.5 text-sm'>
                  <div className='flex justify-between'>
                    <dt className='text-muted-foreground'>Order ID</dt>
                    <dd className='font-mono font-medium'>{returnData.orderId}</dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='text-muted-foreground'>Status Order</dt>
                    <dd className='flex gap-1.5'>
                      <OrderStatusBadge label='Paid' active={returnData.orderStatus.paid} />
                      <OrderStatusBadge label='Fulfilled' active={returnData.orderStatus.fulfilled} />
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='text-muted-foreground'>Order Date</dt>
                    <dd>{returnData.orderDate}</dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='text-muted-foreground'>Total Amount</dt>
                    <dd className='font-semibold'>
                      ${returnData.orderTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </dd>
                  </div>
                  <div className='flex justify-between'>
                    <dt className='text-muted-foreground'>Order Channel</dt>
                    <dd>{returnData.orderChannel}</dd>
                  </div>
                </dl>
                <Button variant='link' className='mt-2 h-auto p-0 text-sm'>
                  View Order
                  <Icons.externalLink className='ml-1 h-3 w-3' />
                </Button>
              </div>

              <Separator className='my-4' />

              <div className='mb-6'>
                <h4 className='mb-3 text-sm font-semibold'>Customer Details</h4>
                <div className='mb-3 flex items-center gap-3'>
                  <Avatar className='h-10 w-10'>
                    <AvatarImage src={returnData.customerAvatar} />
                    <AvatarFallback>{returnData.customerName.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className='text-sm font-medium'>{returnData.customerName}</p>
                    <p className='text-muted-foreground text-xs'>
                      Total: {returnData.customerTotalOrders} order
                      {returnData.customerTotalOrders > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='outline' className='gap-1 font-normal'>
                    <Icons.mail className='h-3 w-3' />
                    {returnData.customerEmail}
                  </Badge>
                  <Badge variant='outline' className='gap-1 font-normal'>
                    <Icons.phone className='h-3 w-3' />
                    {returnData.customerPhone}
                  </Badge>
                </div>
              </div>

              <Separator className='my-4' />

              <div>
                <h4 className='mb-3 text-sm font-semibold'>Notes</h4>
                <Textarea
                  placeholder='Leave a note'
                  className='min-h-[80px] resize-none text-sm'
                  defaultValue={returnData.notes}
                />
                <div className='mt-2 flex items-center gap-1'>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.paperclip className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.hash className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                  <Button variant='ghost' size='icon' className='h-7 w-7'>
                    <Icons.smile className='h-3.5 w-3.5 text-muted-foreground' />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <SheetFooter className='flex-row items-center justify-between border-t px-6 py-4'>
            <a href='#' className='text-muted-foreground text-xs hover:text-foreground hover:underline'>
              Learn more about Return Order
            </a>
            <div className='flex items-center gap-2'>
              <Button variant='outline' size='sm'>
                Reject
              </Button>
              <Button
                size='sm'
                disabled={!canApprove}
                onClick={() => setApproveOpen(true)}
              >
                Approve
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <ApproveReturnSheet
        open={approveOpen}
        onOpenChange={setApproveOpen}
        returnData={returnData}
      />
    </>
  );
}
