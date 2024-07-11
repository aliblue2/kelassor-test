import { ticket } from "@/components/user-panel/Support/MyTicketsItem";

export const getTickets: (id: string | null) => Promise<ticket[]> = async (
  id
) => {
  if (!id) return undefined;
  return fetch(`${process.env.BASE_URL}/user/oldTicket.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
