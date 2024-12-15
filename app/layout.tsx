import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
/*
 * The main layout file for the app
 * */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased bg-black text-gray-50`}>{children}</body>
    </html>
  );
}
