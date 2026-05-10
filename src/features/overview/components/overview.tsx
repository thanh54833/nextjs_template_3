import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaGraph } from './area-graph';
import { BarGraph } from './bar-graph';
import { PieGraph } from './pie-graph';
import { RecentSales } from './recent-sales';
import { Icons } from '@/components/icons';
import { Badge } from '@/components/ui/badge';

export default function OverViewPage() {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-col space-y-2'>
        <div className='flex items-center justify-between space-y-1'>
          <h2 className='text-xl font-bold tracking-tight'>Hi, Welcome back 👋</h2>
          <div className='hidden items-center space-x-2 md:flex'>
            <Button>Download</Button>
          </div>
        </div>
        <Tabs defaultValue='overview' className='space-y-2'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='analytics' disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value='overview' className='space-y-2'>
            <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-3 px-3 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4'>
              <Card className='@container/card'>
                <CardHeader className='flex flex-row items-start justify-between pb-2'>
                  <CardDescription>Total Revenue</CardDescription>
                  <div className='text-primary'>
                    <Icons.creditCard />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className='text-3xl font-bold tabular-nums'>$1,250</CardTitle>
                </CardContent>
                <CardFooter className='flex-col items-start gap-1 text-sm'>
                  <div className='flex items-center gap-1 font-medium text-green-600 dark:text-green-500'>
                    <Icons.trendingUp className='size-4' />
                    +12.5%
                  </div>
                  <div className='text-muted-foreground'>vs last month</div>
                </CardFooter>
              </Card>
              <Card className='@container/card'>
                <CardHeader className='flex flex-row items-start justify-between pb-2'>
                  <CardDescription>New Customers</CardDescription>
                  <div className='text-chart-2'>
                    <Icons.user />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className='text-3xl font-bold tabular-nums'>1,234</CardTitle>
                </CardContent>
                <CardFooter className='flex-col items-start gap-1 text-sm'>
                  <div className='flex items-center gap-1 font-medium text-destructive'>
                    <Icons.trendingDown className='size-4' />
                    -20%
                  </div>
                  <div className='text-muted-foreground'>vs last month</div>
                </CardFooter>
              </Card>
              <Card className='@container/card'>
                <CardHeader className='flex flex-row items-start justify-between pb-2'>
                  <CardDescription>Active Accounts</CardDescription>
                  <div className='text-chart-4'>
                    <Icons.teams />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className='text-3xl font-bold tabular-nums'>45,678</CardTitle>
                </CardContent>
                <CardFooter className='flex-col items-start gap-1 text-sm'>
                  <div className='flex items-center gap-1 font-medium text-green-600 dark:text-green-500'>
                    <Icons.trendingUp className='size-4' />
                    +12.5%
                  </div>
                  <div className='text-muted-foreground'>vs last month</div>
                </CardFooter>
              </Card>
              <Card className='@container/card'>
                <CardHeader className='flex flex-row items-start justify-between pb-2'>
                  <CardDescription>Growth Rate</CardDescription>
                  <div className='text-chart-3'>
                    <Icons.trendingUp />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className='text-3xl font-bold tabular-nums'>4.5%</CardTitle>
                </CardContent>
                <CardFooter className='flex-col items-start gap-1 text-sm'>
<div className='flex items-center gap-1 font-medium text-green-600 dark:text-green-500'>
                    <Icons.trendingUp className='size-4' />
                    +12.5%
                  </div>
                  <div className='text-muted-foreground'>vs last month</div>
                </CardFooter>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-7'>
              <div className='col-span-4'>
                <BarGraph />
              </div>
              <Card className='col-span-4 md:col-span-3'>
                <RecentSales />
              </Card>
              <div className='col-span-4'>
                <AreaGraph />
              </div>
              <div className='col-span-4 md:col-span-3'>
                <PieGraph />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
