'use client';

import { useState } from 'react';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { ReturnDetailsSheet } from '@/features/returns/components';
import type { ReturnRequest } from '@/features/returns/api/types';
import { Icons } from '@/components/icons';

const mockReturns: ReturnRequest[] = [
  {
    id: '1',
    rmaNumber: 'RMA-202412',
    orderId: 'Order-12567',
    customerId: 'cust-001',
    customerName: 'Bagus Fikri',
    customerEmail: 'bagus.fikri@email.com',
    customerPhone: '+1(22)-789-907',
    customerTotalOrders: 2,
    productName: 'Macbook Pro 14 inch 512GB M1 Pro',
    productSku: 'Mac-1000',
    productVariant: 'Grey',
    productQuantity: 1,
    returnReason: 'Damaged product upon arrival.',
    returnProofImages: [],
    status: 'pending_approval',
    requestDate: 'Feb 04, 2024',
    orderDate: 'Feb 04, 2024',
    orderTotal: 7508.02,
    orderChannel: 'Fikri Store',
    orderStatus: { paid: true, fulfilled: true },
    timeline: [],
    notes: ''
  },
  {
    id: '2',
    rmaNumber: 'RMA-202423',
    orderId: 'Order-12568',
    customerId: 'cust-002',
    customerName: 'Jane Smith',
    customerEmail: 'jane.smith@email.com',
    customerPhone: '+1(55)-123-456',
    customerTotalOrders: 5,
    productName: 'iPhone 15 Pro 256GB',
    productSku: 'IPH-15P-256',
    productVariant: 'Natural Titanium',
    productQuantity: 1,
    returnReason: 'Wrong color received',
    returnProofImages: [],
    status: 'approved',
    requestDate: 'Feb 05, 2024',
    orderDate: 'Jan 28, 2024',
    orderTotal: 1199.00,
    orderChannel: 'Online Store',
    orderStatus: { paid: true, fulfilled: true },
    timeline: [],
    notes: ''
  },
  {
    id: '3',
    rmaNumber: 'RMA-202403',
    orderId: 'Order-12569',
    customerId: 'cust-003',
    customerName: 'John Doe',
    customerEmail: 'john.doe@email.com',
    customerPhone: '+1(33)-456-789',
    customerTotalOrders: 1,
    productName: 'AirPods Pro 2nd Gen',
    productSku: 'APP-2GEN',
    productVariant: 'White',
    productQuantity: 2,
    returnReason: 'Defective unit',
    returnProofImages: [],
    status: 'rejected',
    requestDate: 'Feb 03, 2024',
    orderDate: 'Jan 20, 2024',
    orderTotal: 498.00,
    orderChannel: 'Fikri Store',
    orderStatus: { paid: true, fulfilled: true },
    timeline: [],
    notes: ''
  },
  {
    id: '4',
    rmaNumber: 'RMA-202434',
    orderId: 'Order-12570',
    customerId: 'cust-004',
    customerName: 'Sarah Wilson',
    customerEmail: 'sarah.w@email.com',
    customerPhone: '+1(44)-567-890',
    customerTotalOrders: 3,
    productName: 'iPad Air M2 256GB',
    productSku: 'IPAD-AIR-M2',
    productVariant: 'Space Grey',
    productQuantity: 1,
    returnReason: 'Screen cracked during shipping',
    returnProofImages: [],
    status: 'resolved',
    requestDate: 'Feb 01, 2024',
    orderDate: 'Jan 15, 2024',
    orderTotal: 799.00,
    orderChannel: 'Fikri Store',
    orderStatus: { paid: true, fulfilled: true },
    timeline: [],
    notes: ''
  },
  {
    id: '5',
    rmaNumber: 'RMA-202498',
    orderId: 'Order-12571',
    customerId: 'cust-005',
    customerName: 'Mike Johnson',
    customerEmail: 'mike.j@email.com',
    customerPhone: '+1(66)-234-567',
    customerTotalOrders: 1,
    productName: 'Apple Watch Series 9',
    productSku: 'AW-S9-45',
    productVariant: 'Midnight',
    productQuantity: 1,
    returnReason: 'Not as described',
    returnProofImages: [],
    status: 'pending_approval',
    requestDate: 'Feb 06, 2024',
    orderDate: 'Jan 30, 2024',
    orderTotal: 429.00,
    orderChannel: 'Online Store',
    orderStatus: { paid: true, fulfilled: true },
    timeline: [],
    notes: ''
  }
];

const statusConfig: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  pending_approval: { label: 'Pending Approval', variant: 'secondary' },
  approved: { label: 'Approved', variant: 'default' },
  rejected: { label: 'Rejected', variant: 'destructive' },
  resolved: { label: 'Resolved', variant: 'default' },
  expired: { label: 'Expired', variant: 'outline' }
};

export default function ReturnsPage() {
  const [selectedReturn, setSelectedReturn] = useState<ReturnRequest | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleViewDetails = (returnData: ReturnRequest, index: number) => {
    setSelectedReturn(returnData);
    setCurrentIndex(index);
    setSheetOpen(true);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex >= 0 && newIndex < mockReturns.length) {
      setCurrentIndex(newIndex);
      setSelectedReturn(mockReturns[newIndex]);
    }
  };

  return (
    <PageContainer pageTitle='Return & Refund' pageDescription='Manage return requests'>
      <div className='rounded-lg border bg-card'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Request Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockReturns.map((returnItem, index) => {
              const status = statusConfig[returnItem.status];
              return (
                <TableRow key={returnItem.id}>
                  <TableCell className='font-mono font-medium'>{returnItem.rmaNumber}</TableCell>
                  <TableCell>
                    <div>
                      <p className='font-medium'>{returnItem.customerName}</p>
                      <p className='text-muted-foreground text-xs'>{returnItem.customerEmail}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className='font-medium'>{returnItem.productName}</p>
                      <p className='text-muted-foreground text-xs'>SKU: {returnItem.productSku}</p>
                    </div>
                  </TableCell>
                  <TableCell className='text-muted-foreground'>{returnItem.requestDate}</TableCell>
                  <TableCell className='font-medium'>
                    ${returnItem.orderTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell>
                    <Badge variant={status.variant}>{status.label}</Badge>
                  </TableCell>
                  <TableCell className='text-right'>
                    <Button
                      variant='ghost'
                      size='sm'
                      onClick={() => handleViewDetails(returnItem, index)}
                    >
                      <Icons.externalLink className='mr-1 h-3.5 w-3.5' />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      <ReturnDetailsSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        returnData={selectedReturn}
        currentIndex={currentIndex}
        totalCount={mockReturns.length}
        onNavigate={handleNavigate}
      />
    </PageContainer>
  );
}
