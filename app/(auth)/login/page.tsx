'use client';

import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login, signup } from './actions';

export default function LoginPage() {
    const [errorMessage, setErrorMessage] = useState<string | undefined | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const result = await login(formData);

        if (result && !result.success) {
            setErrorMessage(result.message);
        } else if (result != undefined && result.success) {
            router.push(result.redirectUrl!);
        }
    };

    return (
        <div className='flex min-h-screen items-center justify-center bg-[hsl(224,71.4%,4.1%)]'>
            <Card className='w-full max-w-md p-8  shadow-lg shadow-white/10 rounded-lg'>
                <form method='post' className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <Box className='flex flex-col gap-2'>
                        <label htmlFor='email' className='text-white'>
                            Email:
                        </label>
                        <input id='email' name='email' type='email' required className='p-2 text-gray-800 rounded' />
                    </Box>
                    <Box className='flex flex-col gap-2'>
                        <label htmlFor='password' className='text-white'>
                            Password:
                        </label>
                        <input
                            id='password'
                            name='password'
                            type='password'
                            required
                            className='p-2 text-gray-800 rounded'
                        />
                    </Box>
                    {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
                    <Box className='flex justify-start gap-4'>
                        <Button type='submit' formAction={login}>
                            Log in
                        </Button>

                        <Button type='submit' formAction={signup}>
                            Sign up
                        </Button>
                    </Box>
                </form>
            </Card>
        </div>
    );
}
