// app/layout.tsx
import Header from '@/components/Header';
import ClientProvider from '@/components/providers/ClientProvider';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tapify",
  description: "Premium NFC Solutions for Modern Networking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
