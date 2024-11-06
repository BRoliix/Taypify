// app/api/auth/[...auth0]/route.ts

import { handleAuth } from '@auth0/nextjs-auth0';

// This will automatically create routes for login, logout, callback, and me.
export const GET = handleAuth();