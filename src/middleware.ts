// src/middleware.ts

import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export const config = {
  matcher: ['/dashboard', '/profile'], // Protect these routes
};

export default withMiddlewareAuthRequired();