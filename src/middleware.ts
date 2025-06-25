// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin") || "";
  const referer = request.headers.get("referer") || "";

  const allowedHosts = [
    "localhost:3000",
    "yourdomain.com", // ✅ Add your real domain here
    "www.yourdomain.com"
  ];

  const isApiCall = pathname.startsWith("/api/waitlist");

  const isFromAllowedOrigin = (url: string) => {
    try {
      const hostname = new URL(url).host;
      return allowedHosts.includes(hostname);
    } catch {
      return false;
    }
  };

  const allowed = isFromAllowedOrigin(origin) || isFromAllowedOrigin(referer);

  if (isApiCall && !allowed) {
    console.warn(`🔒 Blocked waitlist API call from: ${origin || referer}`);
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/waitlist"],
};
