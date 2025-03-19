import '@/app/ui/global.css';
import { ThemeProvider } from '@/components/ui/theme/theme-provider';
import { ReactNode } from 'react';

export default function HomeLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <main>{children}</main>
        </ThemeProvider>
    );
}
