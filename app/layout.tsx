import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kryvexis Solutions | Tech Support in Boksburg',
  description:
    'Kryvexis Solutions offers tech support, CV services, LinkedIn setup, laptop troubleshooting, Wi-Fi help and business tech support in Boksburg.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
