import type {
  ReturnRequest,
  ReturnFilters,
  ReturnsResponse,
  ReturnDetailResponse,
  ApproveReturnPayload,
  RejectReturnPayload
} from './types';

const mockReturns: ReturnRequest[] = [
  {
    id: '1',
    rmaNumber: 'RMA-202412',
    orderId: 'Order-12567',
    customerId: 'cust-001',
    customerName: 'Bagus Fikri',
    customerEmail: 'bagus.fikri@email.com',
    customerPhone: '+1(22)-789-907',
    customerAvatar: '',
    customerTotalOrders: 2,
    productName: 'Macbook Pro 14 inch 512GB M1 Pro',
    productSku: 'Mac-1000',
    productVariant: 'Grey',
    productQuantity: 1,
    productImage: '',
    returnReason: 'Damaged product upon arrival.',
    returnProofImages: ['/placeholder-return-1.jpg', '/placeholder-return-2.jpg'],
    status: 'pending_approval',
    requestDate: '2024-02-04',
    orderDate: '2024-02-04',
    orderTotal: 7508.02,
    orderChannel: 'Fikri Store',
    orderStatus: { paid: true, fulfilled: true },
    timeline: [
      {
        id: 't1',
        date: '2024-02-04T10:30:00Z',
        author: 'Bagus Fikri',
        message: 'Submitted return request',
        type: 'system'
      }
    ],
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
    requestDate: '2024-02-05',
    orderDate: '2024-01-28',
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
    returnProofImages: ['/placeholder-return-3.jpg'],
    status: 'rejected',
    requestDate: '2024-02-03',
    orderDate: '2024-01-20',
    orderTotal: 498.00,
    orderChannel: 'Fikri Store',
    orderStatus: { paid: true, fulfilled: true },
    timeline: [],
    notes: ''
  }
];

export async function getReturns(filters: ReturnFilters = {}): Promise<ReturnsResponse> {
  const { page = 1, limit = 10, search, status } = filters;

  let filtered = [...mockReturns];

  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (r) =>
        r.rmaNumber.toLowerCase().includes(searchLower) ||
        r.customerName.toLowerCase().includes(searchLower) ||
        r.productName.toLowerCase().includes(searchLower)
    );
  }

  if (status) {
    filtered = filtered.filter((r) => r.status === status);
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  return {
    success: true,
    data,
    total,
    page,
    limit
  };
}

export async function getReturnDetail(id: string): Promise<ReturnDetailResponse> {
  const returnRequest = mockReturns.find((r) => r.id === id);

  if (!returnRequest) {
    throw new Error(`Return request with id ${id} not found`);
  }

  return {
    success: true,
    data: returnRequest
  };
}

export async function approveReturn(payload: ApproveReturnPayload): Promise<{ success: boolean }> {
  console.log('Approving return:', payload);
  return { success: true };
}

export async function rejectReturn(payload: RejectReturnPayload): Promise<{ success: boolean }> {
  console.log('Rejecting return:', payload);
  return { success: true };
}
