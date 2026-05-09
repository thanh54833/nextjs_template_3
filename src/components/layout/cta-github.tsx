import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';

export default function CtaGithub() {
  return (
    <Button variant='ghost' asChild size='sm' className='group hidden sm:flex'>
      <a
        href='https://github.com/Kiranism/next-shadcn-dashboard-starter'
        rel='noopener noreferrer'
        target='_blank'
        className='dark:text-foreground transition-colors duration-300 hover:text-foreground'
      >
        <Icons.github className='transition-transform duration-300 group-hover:scale-110' />
      </a>
    </Button>
  );
}
