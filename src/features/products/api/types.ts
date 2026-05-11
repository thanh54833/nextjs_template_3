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
  // Basic (kept for backward compat with product-form.tsx)
  name: string;
  category: string;
  price: number;
  description: string;
  // Extended editable fields
  full_link?: string;
  link_video?: string;
  description_content?: string;
  text_online?: string;
  top_text?: string;
  middle_text?: string;
  bottom_text?: string;
  center_text?: string;
  com_category_id?: number;
  com_manufacturer_id?: number;
  com_manufacturer_name?: string;
  sale_price_vat?: number;
  is_have_discount?: boolean;
  discount_amount?: number;
  discount_percent?: number;
  is_order_discount?: boolean;
  order_discount_from?: number;
  promotion_name?: string;
  promotion_begin_date?: string;
  promotion_end_date?: string;
  is_promotion_vip?: boolean;
  date_start_quick_sale?: string;
  date_end_quick_sale?: string;
  stock_quantity?: number;
  quantity_per_pack?: number;
  membership_type_id?: number;
  digital_type_id?: number;
  label_type?: number;
  is_online?: boolean;
  is_selling?: boolean;
  is_only_online?: boolean;
  is_processing?: boolean;
  is_deleted?: boolean;
  is_reference?: boolean;
  is_free_ship?: boolean;
  is_super_fast_delivery?: boolean;
  is_have_gift?: boolean;
  is_combo?: boolean;
  type_combo?: number;
  combo_name?: string;
  is_livestream?: boolean;
  is_video_shopping?: boolean;
  event_uid?: string | null;
  image_frame?: string;
  frame_expired?: string;
  keywords?: string[] | null;
  product_attributes?: import('@/constants/mock-api-products').ProductAttribute[] | null;
  shipping_object?: import('@/constants/mock-api-products').ShippingObject[];
  product_image_cover?: string;
  product_image_trans?: string;
};
