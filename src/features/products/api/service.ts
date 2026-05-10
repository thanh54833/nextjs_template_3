import { realProducts } from '@/constants/mock-api-products';
import type {
  ProductFilters,
  ProductsResponse,
  ProductByIdResponse,
  ProductMutationPayload
} from './types';

export async function getProducts(filters: ProductFilters): Promise<ProductsResponse> {
  return realProducts.getProducts(filters);
}

export async function getProductById(id: string | number): Promise<ProductByIdResponse> {
  return realProducts.getProductById(id);
}

export async function createProduct(data: ProductMutationPayload) {
  return { success: true, message: 'Product created (mock)' };
}

export async function updateProduct(id: number, data: ProductMutationPayload) {
  return { success: true, message: 'Product updated (mock)' };
}

export async function deleteProduct(id: number) {
  return { success: true, message: 'Product deleted (mock)' };
}
