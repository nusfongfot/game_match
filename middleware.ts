import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const checkToken = request.cookies.get("tokenFirebase")?.value;
  if (!checkToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/game/:path*"],
};
