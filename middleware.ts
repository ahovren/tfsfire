import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD
  const isPasswordProtected = process.env.ENABLE_PASSWORD_PROTECTION === 'true'

  // If password protection is disabled, allow all requests
  if (!isPasswordProtected || !password) {
    return NextResponse.next()
  }

  // Check if user has the correct password cookie
  const passwordCookie = request.cookies.get('site_password')?.value
  const isLoggedIn = passwordCookie === password

  // Allow access to login page, API routes, and static assets
  const publicPaths = ['/login', '/_next', '/api', '/favicon', '/icon', '/logo']
  const isPublicPath = publicPaths.some(path => request.nextUrl.pathname.startsWith(path))
  
  if (isPublicPath) {
    return NextResponse.next()
  }

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, icon.svg (icon files)
     * - static assets (images, fonts, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|icon\\.svg|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)$).*)',
  ],
}
