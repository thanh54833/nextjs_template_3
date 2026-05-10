import type { Product as RealProduct } from '@/constants/mock-api-products';

export type { Product } from '@/constants/mock-api-products';

export type ProductFilters = {
  page?: number;
  limit?: number;
  search?: string;
  categories?: string;
  manufacturers?: string;
  priceMin?: number;
  priceMax?: number;
  hasDiscount?: boolean;
  ratingMin?: number;
  stockStatus?: 'all' | 'in_stock' | 'out_stock';
  isSelling?: boolean;
  isFreeShip?: boolean;
  isSuperFastDelivery?: boolean;
  isCombo?: boolean;
  isLivestream?: boolean;
  sortBy?: 'created_date' | 'sold_quantity' | 'price' | 'rating_star' | 'stock_quantity' | 'product_score';
  sortOrder?: 'asc' | 'desc';
};

export type ProductsResponse = {
  success: boolean;
  time: string;
  message: string;
  total_products: number;
  offset: number;
  limit: number;
  products: RealProduct[];
};

export type ProductByIdResponse = {
  success: boolean;
  time: string;
  message: string;
  product: RealProduct;
};

export type ProductMutationPayload = {
  name: string;
  category: string;
  price: number;
  description: string;
};
