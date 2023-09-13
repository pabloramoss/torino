import './globals.css';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import GoogleAnalytics from '@/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WhatsApp Italia',
  description: 'Grupos de WhatsApp de Torino para gente de latam',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-CQE7XHTXX7" />
      <body className={inter.className}>
        {children}
        {/* <CookieBanner /> */}
      </body>
    </html>
  );
}
