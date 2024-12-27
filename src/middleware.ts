import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLocales } from './api/locales';

export async function middleware(request: NextRequest) {
  const availableLocales = await getLocales();
  const defaultLocale = availableLocales.find(({ isDefault }: { isDefault: string }) => isDefault);

  const url = request.nextUrl.clone();
  const pathSegments = url.pathname.split('/').filter(Boolean);
  const isHomePage = pathSegments.length === 0;

  if (isHomePage) {
    url.pathname = `/${defaultLocale.code}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (static files)
     * - favicon.ico (favicon file)
     * - static (static & public assets)
     * - node_modules (node modules)
     */
    '/((?!api|_next|favicon.ico|static|public|node_modules).*)'
  ]
}; 