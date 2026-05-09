'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';

export function UserNav() {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full' aria-label='Open user menu'>
          <Icons.user className='size-4' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' sideOffset={10}>
        <DropdownMenuItem onClick={() => router.push('/dashboard/profile')}>
          <Icons.account className='mr-2 h-4 w-4' />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push('/dashboard/notifications')}>
          <Icons.notification className='mr-2 h-4 w-4' />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}