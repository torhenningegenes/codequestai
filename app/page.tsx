import { createClient } from '@/utils/supabase/server';

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <h1 className='text-4xl'>Logged in {data?.user?.email ?? ''}</h1>
        <div className='flex flex-col gap-2'></div>
      </div>
    </main>
  );
}
