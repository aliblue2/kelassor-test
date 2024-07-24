import { postUserInfo } from "@/requests/user-panel/postUserInfo";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const res = await postUserInfo(data);

  return Response.json(res);
}
