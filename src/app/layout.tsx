import './styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from './components/Footer';
import Header from './components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcos Silva',
  description: 'Marcos Silva dev site',
  applicationName: 'Test application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <>
        <body className={inter.className}>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <Header />
          <div className="relative">{children}</div>
          <Footer />
        </body>
      </>
    </html>
  );
}
