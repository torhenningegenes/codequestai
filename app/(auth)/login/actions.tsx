'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

export async function login(formData: FormData) {
  const supabase = await createClient();

  console.log('login form date', formData);

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    // Validate the data with Zod
    const validatedData = loginSchema.parse(data);

    // Use the validated data to sign in
    const { error } = await supabase.auth.signInWithPassword(validatedData);

    if (error) {
      console.error('Login error:', error.message);
      return { success: false, message: error.message };
    }

    revalidatePath('/', 'layout');
    return { success: true, redirectUrl: '/' };
  } catch (error) {
    console.error('Unexpected login error:', error);
    return {
      success: false,
      message: 'Unexpected error occurred during login.',
    };
  }
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  const signUpSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };
  const validatedData = signUpSchema.parse(data);
  const { error } = await supabase.auth.signUp(validatedData);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
