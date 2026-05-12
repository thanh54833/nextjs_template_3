import ProductFormLarge from '@/features/products/components/product-form-large';

export const metadata = {
  title: 'Dashboard: Add Product'
};

export default function Page() {
  return <ProductFormLarge initialData={null} pageTitle='Add Product' />;
}