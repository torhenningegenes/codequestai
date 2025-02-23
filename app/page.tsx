// app/page.tsx
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect('/home');
  }

  return (
    <div>
      <h1>Please Log In</h1>
    </div>
  );
}
