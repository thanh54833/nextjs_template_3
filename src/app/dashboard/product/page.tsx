import PageContainer from '@/components/layout/page-container';
import ProductListingPage from '@/features/products/components/product-listing';
import { searchParamsCache } from '@/lib/searchparams';
import { Icons } from '@/components/icons';
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
      pageTitle='Product list page'
      pageHeaderAction={
        <div className='flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground'>
          <Icons.calendar className='h-3.5 w-3.5 shrink-0' />
          <span>Last updated: Feb 28, 2024</span>
          <Icons.refresh className='h-3.5 w-3.5 shrink-0' />
        </div>
      }
    >
      <ProductListingPage />
    </PageContainer>
  );
}
