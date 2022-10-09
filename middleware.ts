import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token: string | undefined = request.cookies.get("token");

  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(`${request.nextUrl.origin}/login`);
}

export const config = {
  matcher: "/u/dashboard",
};
