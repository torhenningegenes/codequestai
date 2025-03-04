import '@/app/ui/global.css';
import { inter } from '@/fonts';
import { ReactNode } from 'react';

/*
 * The main layout file for the app
 * */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased bg-background`}>{children}</body>
        </html>
    );
}
