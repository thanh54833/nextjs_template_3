import PageContainer from '@/components/layout/page-container';
import ProductForm from '@/features/products/components/product-form';

export const metadata = {
  title: 'Dashboard: Add Product'
};

export default function Page() {
  return (
    <PageContainer>
      <div className='flex-1 space-y-4'>
        <ProductForm initialData={null} pageTitle='Create New Product' />
      </div>
    </PageContainer>
  );
}