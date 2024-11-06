import { NextRequest, NextResponse } from 'next/server';

// Middleware to handle CORS
export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Origin", "https://tapify.netlify.app"); // Ensure this matches your frontend URL
  res.headers.set("Access-Control-Allow-Methods", "GET,POST");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

export const config = {
  matcher: '/api/:path*', // Apply middleware only to API routes
};