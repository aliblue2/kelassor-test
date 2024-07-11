
type getTicketChatIdOutput = { chat_id: number };
export const getTicketChatId: (
  session_id: string
) => Promise<getTicketChatIdOutput> = async (session_id) =>
  fetch(`${process.env.BASE_URL}/user/newTicket.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: session_id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
