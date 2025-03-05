'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

export async function signOut() {
    console.debug('Sign out function called');
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error('error', error);
        redirect('/error');
    }

    revalidatePath('/', 'layout');
    redirect('/');
}

//   try {
//     const { error } = await supabase.auth.signInWithPassword(data);
//
//     if (error) {
//       console.error('Login error:', error.message);
//       return { success: false, message: error.message };
//     }
//     console.log('made it to revalidatePath');
//     revalidatePath('/', 'layout');
//     return { success: true, redirectUrl: '/' };
//   } catch (error) {
//     console.error('Unexpected login error:', error);
//     return {
//       success: false,
//       message: 'Unexpected error occurred during login.',
//     };
//   }
// }
