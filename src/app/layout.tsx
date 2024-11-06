import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client'; 
import './globals.css';

// Load Inter font with Latin subset
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

// Define metadata for the application
export const metadata: Metadata = {
  title: 'Tapify',
  description: 'Premium NFC Solutions for Modern Networking',
};

// Root layout component wrapping the entire application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap everything inside the UserProvider */}
        <UserProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
