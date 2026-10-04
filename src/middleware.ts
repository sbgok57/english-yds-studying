import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, SESSION_COOKIE_NAME } from "@/lib/server-auth";
import { inspectRequestForMalware, applySecurityHeaders } from "@/lib/security/antivirus-shield";

// Strictly protected routes that require an active session
const STRICTLY_PROTECTED_PATHS = [
  "/hesap",
  "/admin",
];

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // 1. Bypass static files, internal Next.js paths, manifest, icons, service worker
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/health") ||
    pathname === "/manifest.json" ||
    pathname === "/sw.js" ||
    pathname.startsWith("/icons/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    /\.(png|jpe?g|svg|webp|ico|json|js|css|woff2?|ttf|map)$/i.test(pathname)
  ) {
    const res = NextResponse.next();
    return applySecurityHeaders(res);
  }

  // SAFETY: P0 Real-Time Antivirus & Cyber Intrusion Prevention Scan
  const malwareCheck = inspectRequestForMalware(req);
  if (!malwareCheck.allowed) {
    const blockedResponse = new NextResponse(
      JSON.stringify({
        error: "403 Forbidden - Güvenlik Kalkanı Tarafından Engellendi",
        reason: malwareCheck.reason,
        threat: malwareCheck.threatCategory,
      }),
      {
        status: 403,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      }
    );
    return applySecurityHeaders(blockedResponse);
  }

  // 2. Check session token in cookie
  const sessionCookie = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const session = sessionCookie ? await verifySessionToken(sessionCookie) : null;
  const isAuthenticated = !!session;

  // 3. If authenticated user tries to access /giris or /kayit -> redirect to returnTo or /
  if (isAuthenticated && (pathname === "/giris" || pathname === "/kayit")) {
    const returnTo = req.nextUrl.searchParams.get("returnTo");
    if (returnTo && returnTo.startsWith("/") && !returnTo.startsWith("//") && returnTo !== "/giris" && returnTo !== "/kayit") {
      return applySecurityHeaders(NextResponse.redirect(new URL(returnTo, req.url)));
    }
    return applySecurityHeaders(NextResponse.redirect(new URL("/", req.url)));
  }

  // 4. If unauthenticated user tries to access a strictly protected route -> redirect to /giris
  const requiresAuth = STRICTLY_PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  if (!isAuthenticated && requiresAuth) {
    const loginUrl = new URL("/giris", req.url);
    // Safe returnTo parameter (never external URL)
    const fullPath = pathname + (search || "");
    loginUrl.searchParams.set("returnTo", fullPath);
    return applySecurityHeaders(NextResponse.redirect(loginUrl));
  }

  return applySecurityHeaders(NextResponse.next());
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
