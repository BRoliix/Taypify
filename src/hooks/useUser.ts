import { useAuth0 } from '@auth0/auth0-react';

export default function useUser() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  // If loading, you might want to return a loading state or null
  if (isLoading) {
    return { isLoading, user: null, isAuthenticated: false, loginWithRedirect, logout };
  }

  return {
    isAuthenticated,
    user,
    isLoading,
    loginWithRedirect,
    logout,
  };
}
