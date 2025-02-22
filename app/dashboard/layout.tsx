import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeProvider } from '@/components/ui/theme/theme-provider';
import { ReactNode } from 'react';

/*
 * The main layout file for the app
 * */
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <AppSidebar />
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
