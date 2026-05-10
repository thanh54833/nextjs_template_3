export type ReturnStatus = 'pending_approval' | 'approved' | 'rejected' | 'resolved' | 'expired';

export interface ReturnRequest {
  id: string;
  rmaNumber: string;
  orderId: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAvatar?: string;
  customerTotalOrders: number;
  productName: string;
  productSku: string;
  productVariant: string;
  productQuantity: number;
  productImage?: string;
  returnReason: string;
  returnProofImages: string[];
  status: ReturnStatus;
  requestDate: string;
  orderDate: string;
  orderTotal: number;
  orderChannel: string;
  orderStatus: {
    paid: boolean;
    fulfilled: boolean;
  };
  timeline: TimelineEvent[];
  notes: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  author: string;
  authorAvatar?: string;
  message: string;
  type: 'comment' | 'status_change' | 'system';
}

export interface ReturnFilters {
  page?: number;
  limit?: number;
  search?: string;
  status?: ReturnStatus;
  dateFrom?: string;
  dateTo?: string;
}

export interface ReturnsResponse {
  success: boolean;
  data: ReturnRequest[];
  total: number;
  page: number;
  limit: number;
}

export interface ReturnDetailResponse {
  success: boolean;
  data: ReturnRequest;
}

export interface ApproveReturnPayload {
  returnId: string;
  emailTo: string;
  emailSubject: string;
  emailBody: string;
  templateId?: string;
}

export interface RejectReturnPayload {
  returnId: string;
  reason: string;
}
