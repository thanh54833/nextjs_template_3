import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center p-8'>
      <div className='space-y-6 text-center'>
        <div className='flex items-center justify-center gap-2'>
          <Icons.logo className='size-12' />
          <h1 className='text-4xl font-bold'>Dashboard</h1>
        </div>
        <p className='text-muted-foreground text-lg'>Welcome to the admin dashboard</p>
        <div className='flex gap-4 justify-center'>
          <Button asChild>
            <Link href='/dashboard/overview'>Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}