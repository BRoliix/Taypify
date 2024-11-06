'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client'; // Use Auth0's UserProvider for global auth state management

export default function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    // Wrap your entire app with UserProvider to manage authentication state globally.
    <UserProvider>{children}</UserProvider>
  );
}