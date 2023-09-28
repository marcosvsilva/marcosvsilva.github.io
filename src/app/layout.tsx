import './styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Container from './components/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcos Silva',
  description: 'Marcos Silva dev site',
  applicationName: 'Test application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container className="mt-16 sm:mt-32">
          <div className="mt-16 sm:mt-20">{children}</div>
        </Container>
      </body>
    </html>
  );
}
