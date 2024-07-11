import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const ck = req.cookies.get("session_id");
  return Response.json({ ck: ck });
  // const res = await fetch(`${process.env.BASE_URL}/user/tickets.php`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     API_KEY: process.env.API_KEY,
  //     Content_Type: process.env.Content_Type,
  //     id: req.cookies.get("session_id"),
  //     chatID: chatId,
  //   }),
  //   cache: "no-store",
  // });
}
