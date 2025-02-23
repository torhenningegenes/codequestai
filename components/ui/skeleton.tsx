import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'types-react';

function Skeleton({ className, ...props }: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn('animate-pulse rounded-md bg-neutral-100 dark:bg-neutral-800', className)} {...props} />;
}

export { Skeleton };
