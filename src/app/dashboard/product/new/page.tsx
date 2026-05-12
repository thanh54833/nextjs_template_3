import ProductForm from '@/features/products/components/product-form';

export const metadata = {
  title: 'Dashboard: Add Product'
};

export default function Page() {
  return (
    <div className='flex-1 space-y-4 px-2 pt-1 pb-2 md:px-3 md:pt-2'>
      <ProductForm initialData={null} pageTitle='Create New Product' variant='compact' />
    </div>
  );
}