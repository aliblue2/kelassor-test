import { getCookie } from "@/utils/cookie";
import { type } from "os";

type newTicketInput = {
  type: "financial" | "technical" | null;
  text: string;
  chatID: number;
};
type newTicketOutput = { statusCode: number };
export const newTicket: (
  input: newTicketInput
) => Promise<newTicketOutput> = async (input) => {
  if (!type) throw new TypeError("bad input");
  return fetch(`${process.env.BASE_URL}/emp/supportAPI.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: getCookie("session_id"),
      type: input.type,
      text: input.text,
      chatID: input.chatID,
      date: +new Date(),
    }),
  }).then((res) => res.json());
};
