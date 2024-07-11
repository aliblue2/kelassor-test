type getTicketInput = { session_id: string | null; chatID: number };
type message = { side: "client"; text: string; id: number; type: "finance" };
type getTicketOutput = message[] | undefined;
export const getTicket: (
  input: getTicketInput
) => Promise<getTicketOutput> = async (input) => {
  if (!input.session_id) return undefined;
  return fetch(`${process.env.BASE_URL}/user/tickets.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: input.session_id,
      chatID: input.chatID,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
