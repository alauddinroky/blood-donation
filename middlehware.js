import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const verified = token ? verifyToken(token) : null;
console.log(verified)
  if (!verified) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Protect only donor routes
export const config = {
  matcher: ['/dashboard/donors'],
};
