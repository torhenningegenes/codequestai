import '@/app/ui/global.css';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/components/ui/theme/theme-provider';
import { ReactNode } from 'react';

export default function HomeLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </ThemeProvider>
    );
}
