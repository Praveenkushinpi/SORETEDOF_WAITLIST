import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const origin = request.headers.get("origin") || "";
  const referer = request.headers.get("referer") || "";

  const allowedOrigins = [
    "https://sortedof.kushinpi.me",
  ];

  const isApiCall = pathname.startsWith("/api/waitlist");

  const isFromAllowedOrigin = (url: string) => {
    try {
      return allowedOrigins.includes(new URL(url).origin);
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
