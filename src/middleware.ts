import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { updateSession } from './utils/supabase/middleware';

// Rate Limiting Store (In-Memory, per-instance)
// Note: In Serverless/Edge, this might reset frequently.
const rateLimitStore = new Map<string, { count: number; lastReset: number }>();

const SENSITIVE_FILES = [
  '.env', '.git', '.gitignore', '.npmrc', 'package.json', 'package-lock.json',
  'tsconfig.json', 'next.config.ts', 'docker-compose.yml', 'Dockerfile',
  'README.md', 'DOCUMENTATION.md'
];

export async function middleware(request: NextRequest) {
  // 0. Manual Apex to WWW Redirect for HSTS Preload Compliance
  const host = request.headers.get('host');
  if (host === 'sanzonyvoz.com.br') {
    const url = request.nextUrl.clone();
    url.hostname = 'www.sanzonyvoz.com.br';
    const response = NextResponse.redirect(url, 308);
    // Explicitly set the full HSTS header for the redirect response
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    return response;
  }

  // 1. Block forbidden HTTP methods
  if (['TRACE', 'TRACK'].includes(request.method)) {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  // 2. Block sensitive files access (return 404 to avoid confirmation of existence)
  const pathname = request.nextUrl.pathname;
  if (SENSITIVE_FILES.some(file => pathname.includes(file)) || pathname.includes('/.well-known/')) {
     if (!pathname.includes('apple-app-site-association')) {
        return new NextResponse(null, { status: 404 });
     }
  }

  // 3. CSRF Protection: Basic Origin Check
  if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method)) {
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    
    if (origin && !origin.includes(host || '')) {
      return new NextResponse('Invalid Origin', { status: 403 });
    }
  }

  // 4. Rate Limiting Logic for /login
  if (request.nextUrl.pathname.startsWith('/login') && request.method === 'POST') {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'anonymous';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const limit = 5;

    const rateData = rateLimitStore.get(ip) || { count: 0, lastReset: now };

    if (now - rateData.lastReset > windowMs) {
      rateData.count = 0;
      rateData.lastReset = now;
    }

    rateData.count++;
    rateLimitStore.set(ip, rateData);

    if (rateData.count > limit) {
      return new NextResponse('Too Many Requests', { 
        status: 429,
        headers: { 'Retry-After': '60' }
      });
    }
  }

  // 5. Supabase Session Management (SSR)
  const supabaseResponse = await updateSession(request);

  // 6. Security Headers (CSP + Nonce)
  const nonceArray = new Uint8Array(16);
  crypto.getRandomValues(nonceArray);
  const nonce = btoa(Array.from(nonceArray).map(b => String.fromCharCode(b)).join(''));
  
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''};
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self';
    connect-src 'self' https://*.supabase.co wss://*.supabase.co;
    media-src 'self' https://*.supabase.co;
    frame-ancestors 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  // Inject nonce into request headers for layout to read
  supabaseResponse.headers.set('x-nonce', nonce);
  supabaseResponse.headers.set('Content-Security-Policy', cspHeader);
  
  // Reinforced HSTS for Preload eligibility
  supabaseResponse.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
