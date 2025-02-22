import '@/app/ui/global.css';
import { Button } from '@/components/ui/button';

import { signOut } from '@/app/logout/actions';
import { createClient } from '@/utils/supabase/server';

export default async function page() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <h1 className='text-4xl'>Logged in {data?.user?.email ?? ''}</h1>

        <div className='flex flex-col gap-2'>here is some text</div>
        <Button>Button</Button>
        <form action={signOut}>
          <Button type='submit'>Sign Out</Button>
        </form>
      </div>
    </main>
  );
}
