//middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSession } from "./requests/Auth/checkSession";

const protectedRoutes = ["/user-panel"];

const middleware = async (req: NextRequest) => {
  const session_id = req.cookies.get("session_id")?.value;

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    const logged = session_id
      ? await checkSession(session_id).then((res) => res.statusCode === 200)
      : false;
    if (!logged) {
      const absoluteURL = new URL("/", req.nextUrl.origin);
      return NextResponse.redirect(absoluteURL.toString());
    }
  }
};
export default middleware;
