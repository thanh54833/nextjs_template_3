import type { ProductFilters, ProductsResponse, ProductByIdResponse } from '@/features/products/api/types';

export type ShippingObject = {
  label_url: string;
  district_ids: number[];
  feeship_type_id: number;
};

export type Product = {
  product_search_staging_id: number;
  p_id: number;
  ecom_product_id: number;
  ecom_product_name: string;
  ecom_product_name_unaccent: string;
  erp_product_id: string;
  erp_product_name: string;
  erp_category_name: string;
  erp_category_id: number;
  com_category_id: number;
  com_category_name: string;
  com_category_name_unaccent: string;
  erp_manufacturer_id: number;
  erp_manufacturer_name: string;
  com_manufacturer_id: number;
  com_manufacturer_name: string;
  com_manufacturer_name_unaccent: string;
  com_manufacturer_image_square_url: string;
  com_manufacturer_image_logo_url: string;
  full_link: string;
  product_attributes: ProductAttribute[] | null;
  sold_quantity: number;
  product_image_cover: string;
  product_image_trans: string;
  rating_star: number;
  price: number;
  discount_amount: number;
  discount_percent: number;
  sale_price_vat: number;
  is_combo: boolean;
  is_have_discount: boolean;
  is_have_gift: boolean;
  is_order_discount: boolean;
  order_discount_from: number;
  is_livestream: boolean;
  is_video_shopping: boolean;
  is_super_fast_delivery: boolean;
  is_free_ship: boolean;
  is_deleted: boolean;
  created_date: string;
  updated_date: string;
  sync_status_id: number;
  is_processing: boolean;
  stock_quantity: number;
  is_outstock: boolean;
  is_online: boolean;
  is_selling: boolean;
  popularity: number;
  is_reference: boolean;
  keywords: string[] | null;
  promotion_name: string;
  promotion_begin_date: string;
  promotion_end_date: string;
  id: string;
  description: string;
  // Text overlays on product image
  top_text: string;
  middle_text: string;
  bottom_text: string;
  center_text: string;
  // Combo
  combo_id: string;
  combo_name: string;
  combo_image_icon_url: string;
  combo_image_large_url: string;
  type_combo: number;
  // Promotion extended
  is_promotion_vip: boolean;
  promotion_id: number;
  // Gifts
  gift_list: null | unknown[];
  // Shipping
  shipping_object: ShippingObject[];
  // Audit
  created_user: number | null;
  updated_user: number | null;
  sync_status_date: string;
  checksum: string;
  created_unix_time: number;
  updated_unix_time: number;
  sync_note: string | null;
  tranform_noted: string;
  embedding_reason_of_failure: string;
  // Image embedding sync
  image_embedding_sync_status_id: number;
  image_embedding_sync_status_date: string;
  // Image frame / label
  image_frame: string;
  frame_expired: string;
  label_type: number;
  // Classification
  membership_type_id: number;
  quantity_per_pack: number;
  digital_type_id: number;
  event_uid: string | null;
  // Content
  link_video: string;
  text_online: string;
  description_content: string;
  // Quick sale
  date_start_quick_sale: string;
  date_end_quick_sale: string;
  // Extra status
  is_only_online: boolean;
  // Sync states
  sync_not_sale_status_id: number;
  sync_not_sale_status_date: string;
  semantic_sync_status_id: number;
  semantic_sync_status_date: string;
  sync_public_state: number;
  sync_internal_state: number;
  sync_semantic_state: number;
  sync_image_state: number;
  is_syncing_public: boolean;
  is_syncing_internal: boolean;
  is_syncing_semantic: boolean;
  is_syncing_image: boolean;
  // Rankings & scores
  sold_quantity_ranking: number;
  product_score: number;
  gp_ranking: number;
  popularity_ranking: number;
  promo_ranking: number;
  gm_ranking: number;
  // Typesense
  deleted_typesense_ids: number[];
  sync_stock_typesense_ids: number[];
};

export type ProductAttribute = {
  filter_group_name: string;
  id_filter_group_name: number;
  filter_group_attribute: {
    name_filter: string;
    id_filter_group: number;
  }[];
};

import realProductsData from '@/constants/product_info.json';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const realProducts = {
  records: realProductsData as Product[],

  async getProducts(filters: ProductFilters): Promise<ProductsResponse> {
    await delay(300);
    let products = [...this.records];

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      products = products.filter(
        (p) =>
          p.ecom_product_name.toLowerCase().includes(searchLower) ||
          p.ecom_product_name_unaccent.toLowerCase().includes(searchLower) ||
          p.erp_product_name.toLowerCase().includes(searchLower)
      );
    }

    if (filters.categories) {
      const categoryIds = String(filters.categories)
        .split(',')
        .map((id) => parseInt(id.trim()));
      products = products.filter((p) => categoryIds.includes(p.com_category_id));
    }

    if (filters.manufacturers) {
      const manufacturerIds = String(filters.manufacturers)
        .split(',')
        .map((id) => parseInt(id.trim()));
      products = products.filter((p) => manufacturerIds.includes(p.com_manufacturer_id));
    }

    if (filters.priceMin !== undefined) {
      products = products.filter((p) => p.sale_price_vat >= filters.priceMin!);
    }
    if (filters.priceMax !== undefined) {
      products = products.filter((p) => p.sale_price_vat <= filters.priceMax!);
    }

    if (filters.hasDiscount === true) {
      products = products.filter((p) => p.is_have_discount);
    }

    if (filters.ratingMin !== undefined) {
      products = products.filter((p) => p.rating_star >= filters.ratingMin!);
    }

    if (filters.stockStatus === 'in_stock') {
      products = products.filter((p) => !p.is_outstock && p.stock_quantity > 0);
    } else if (filters.stockStatus === 'out_stock') {
      products = products.filter((p) => p.is_outstock || p.stock_quantity === 0);
    }

    if (filters.isSelling === true) {
      products = products.filter((p) => p.is_selling);
    }

    if (filters.isFreeShip === true) {
      products = products.filter((p) => p.is_free_ship);
    }

    if (filters.isSuperFastDelivery === true) {
      products = products.filter((p) => p.is_super_fast_delivery);
    }

    if (filters.isCombo === true) {
      products = products.filter((p) => p.is_combo);
    }

    if (filters.isLivestream === true) {
      products = products.filter((p) => p.is_livestream);
    }

    if (filters.sortBy) {
      const sortOrder = filters.sortOrder === 'desc' ? -1 : 1;
      products.sort((a, b) => {
        let aVal: number | string = 0;
        let bVal: number | string = 0;

        switch (filters.sortBy) {
          case 'created_date':
            aVal = new Date(a.created_date).getTime();
            bVal = new Date(b.created_date).getTime();
            break;
          case 'sold_quantity':
            aVal = a.sold_quantity;
            bVal = b.sold_quantity;
            break;
          case 'price':
            aVal = a.sale_price_vat;
            bVal = b.sale_price_vat;
            break;
          case 'rating_star':
            aVal = a.rating_star;
            bVal = b.rating_star;
            break;
          case 'stock_quantity':
            aVal = a.stock_quantity;
            bVal = b.stock_quantity;
            break;
          default:
            aVal = a.sold_quantity;
            bVal = b.sold_quantity;
        }

        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return (bVal - aVal) * sortOrder;
        }
        return 0;
      });
    }

    const page = filters.page || 1;
    const limit = filters.limit || 12;
    const offset = (page - 1) * limit;
    const totalProducts = products.length;
    const paginatedProducts = products.slice(offset, offset + limit);

    return {
      success: true,
      time: new Date().toISOString(),
      message: 'Products retrieved successfully',
      total_products: totalProducts,
      offset,
      limit,
      products: paginatedProducts
    };
  },

  async getProductById(id: string | number): Promise<ProductByIdResponse> {
    await delay(300);
    const productId = typeof id === 'string' ? parseInt(id) : id;
    const product = this.records.find(
      (p) => p.product_search_staging_id === productId || p.id === String(id)
    );

    if (!product) {
      return {
        success: false,
        time: new Date().toISOString(),
        message: `Product with ID ${id} not found`,
        product: {} as Product
      };
    }

    return {
      success: true,
      time: new Date().toISOString(),
      message: 'Product found',
      product
    };
  }
};

export function getUniqueCategories(): { id: number; name: string }[] {
  const categoryMap = new Map<number, string>();
  (realProductsData as Product[]).forEach((p) => {
    if (!categoryMap.has(p.com_category_id)) {
      categoryMap.set(p.com_category_id, p.com_category_name);
    }
  });
  return Array.from(categoryMap.entries())
    .map(([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getUniqueManufacturers(): { id: number; name: string; count: number }[] {
  const manufacturerMap = new Map<number, { name: string; count: number }>();
  (realProductsData as Product[]).forEach((p) => {
    if (p.com_manufacturer_id > 0) {
      const existing = manufacturerMap.get(p.com_manufacturer_id);
      if (existing) {
        existing.count++;
      } else {
        manufacturerMap.set(p.com_manufacturer_id, {
          name: p.com_manufacturer_name,
          count: 1
        });
      }
    }
  });
  return Array.from(manufacturerMap.entries())
    .map(([id, data]) => ({ id, name: data.name, count: data.count }))
    .filter((m) => m.name)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getPriceRange(): { min: number; max: number } {
  let min = Infinity;
  let max = -Infinity;
  (realProductsData as Product[]).forEach((p) => {
    if (p.sale_price_vat < min) min = p.sale_price_vat;
    if (p.sale_price_vat > max) max = p.sale_price_vat;
  });
  return { min: min === Infinity ? 0 : min, max: max === -Infinity ? 0 : max };
}
