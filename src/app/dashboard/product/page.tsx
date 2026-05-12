import PageContainer from '@/components/layout/page-container';
import ProductListingPage from '@/features/products/components/product-listing';
import { searchParamsCache } from '@/lib/searchparams';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { SearchParams } from 'nuqs/server';

export const metadata = {
  title: 'Dashboard: Products'
};

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
  const searchParams = await props.searchParams;
  searchParamsCache.parse(searchParams);

  return (
    <PageContainer
      pageTitle='Products'
      pageMetrics='1,247 total · 1,180 in stock · 67 low stock'
      pageHeaderAction={
        <div className='flex items-center gap-1.5'>
          <Button variant='outline' size='sm' className='h-8 gap-1.5 text-xs'>
            <Icons.refresh className='h-3.5 w-3.5' />
            Sync
          </Button>
          <Button variant='outline' size='sm' className='h-8 gap-1.5 text-xs'>
            <Icons.download className='h-3.5 w-3.5' />
            Export
          </Button>
        </div>
      }
    >
      <ProductListingPage />
    </PageContainer>
  );
}
