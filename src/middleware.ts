import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSession } from "./requests/Auth/checkSession";

// Protected routes
const protectedUserRoutes = ["/user-panel"];
const protectedAdminRoutes = ["/admin/:path*"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Handler /admin-panel

  if (pathname.startsWith("/admin") && pathname !== "/admin/auth") {
    const userSession = req.cookies.get("user_session")?.value;

    if (!userSession) {
      return NextResponse.redirect(new URL("/admin/auth", req.url));
    } else if (pathname === "/admin") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
  }
  if (protectedUserRoutes.includes(pathname)) {
    // Handle /user-panel routes
    const session_id = req.cookies.get("session_id")?.value;
    const logged = session_id
      ? await checkSession(session_id).then((res) => res.statusCode === 200)
      : false;

    // If not logged in, redirect to home page
    if (!logged) {
      return NextResponse.redirect(new URL("/", req.nextUrl.origin));
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

// Configuration to match admin and user-panel routes
export const config = {
  matcher: ["/admin/:path*" ,"/user-panel"],
};
