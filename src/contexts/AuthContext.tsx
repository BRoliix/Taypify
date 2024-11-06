// contexts/AuthContext.tsx
import { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  signup: (data: { 
    name: string; 
    email: string; 
    password: string 
  }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const signup = async (data: { 
    name: string; 
    email: string; 
    password: string 
  }) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to create account');
    }

    return result;
  };

  return (
    <AuthContext.Provider value={{ signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}