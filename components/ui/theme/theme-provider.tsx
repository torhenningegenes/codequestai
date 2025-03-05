'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import * as React from 'react';
import { useEffect, useState } from 'react';

export function ThemeProvider({ children, ...props }: Readonly<React.ComponentProps<typeof NextThemesProvider>>) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>; // Avoid hydration issues
    }
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
