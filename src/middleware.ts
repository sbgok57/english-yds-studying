import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";

// Publicly accessible paths without login
const PUBLIC_PATHS = [
  "/giris",
  "/kayit",
  "/email-dogrulama",
  "/sifremi-unuttum",
  "/sifre-yenile",
  "/gizlilik",
  "/kullanim-kosullari",
];

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // 1. Bypass static files, internal Next.js paths, public API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/api/health") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    /\.(.*)$/.test(pathname) // static files like .png, .jpg, .svg, .json, .css, .js
  ) {
    return NextResponse.next();
  }

  // 2. Check session token in cookie
  const sessionCookie = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = sessionCookie ? await verifySessionToken(sessionCookie) : null;
  const isAuthenticated = !!session;

  const isPublicPath = PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"));

  // 3. If authenticated user tries to access /giris or /kayit -> redirect to /
  if (isAuthenticated && (pathname === "/giris" || pathname === "/kayit")) {
    const returnTo = req.nextUrl.searchParams.get("returnTo");
    if (returnTo && returnTo.startsWith("/") && !returnTo.startsWith("//")) {
      return NextResponse.redirect(new URL(returnTo, req.url));
    }
    return NextResponse.redirect(new URL("/", req.url));
  }

  // 4. If unauthenticated user tries to access a protected route -> redirect to /giris
  if (!isAuthenticated && !isPublicPath) {
    const loginUrl = new URL("/giris", req.url);
    // Safe returnTo parameter (never external URL)
    const fullPath = pathname + (search || "");
    loginUrl.searchParams.set("returnTo", fullPath);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
