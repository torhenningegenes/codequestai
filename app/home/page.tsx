import { Button } from '@/components/ui/button';
import '@/global.css';

import { signOut } from '@/app/(auth)/logout/actions';
import { LoggendInAs } from '@/components/loggendInAs';

export default async function page() {
  return (
    <div className='flex min-h-screen flex-col p-6'>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <LoggendInAs />

        <form action={signOut}>
          <Button type='submit'>Sign Out</Button>
        </form>
      </div>
    </div>
  );
}
