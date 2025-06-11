import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { auth } from './auth';

const protectedRoute = ['/admin'];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoute.some((route) => pathname.startsWith(route));

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  return NextResponse.next();
}
