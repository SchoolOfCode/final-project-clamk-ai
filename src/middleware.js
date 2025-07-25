import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/ssr";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return NextResponse.redirect(new URL("/login", req.url));

  return res;
}

export const config = {
  matcher: ["/protected-route/:path*"],
};
