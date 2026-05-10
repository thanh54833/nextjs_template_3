import { queryOptions, mutationOptions } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/query-client';
import {
  getReturns,
  getReturnDetail,
  approveReturn,
  rejectReturn
} from './service';
import type { ReturnFilters, ApproveReturnPayload, RejectReturnPayload } from './types';

export const returnKeys = {
  all: ['returns'] as const,
  list: (filters: ReturnFilters) => [...returnKeys.all, 'list', filters] as const,
  detail: (id: string) => [...returnKeys.all, 'detail', id] as const
};

export function returnsQueryOptions(filters: ReturnFilters) {
  return queryOptions({
    queryKey: returnKeys.list(filters),
    queryFn: () => getReturns(filters)
  });
}

export function returnDetailQueryOptions(id: string) {
  return queryOptions({
    queryKey: returnKeys.detail(id),
    queryFn: () => getReturnDetail(id)
  });
}

export const approveReturnMutation = mutationOptions({
  mutationFn: (payload: ApproveReturnPayload) => approveReturn(payload),
  onSuccess: () => {
    getQueryClient().invalidateQueries({ queryKey: returnKeys.all });
  }
});

export const rejectReturnMutation = mutationOptions({
  mutationFn: (payload: RejectReturnPayload) => rejectReturn(payload),
  onSuccess: () => {
    getQueryClient().invalidateQueries({ queryKey: returnKeys.all });
  }
});
