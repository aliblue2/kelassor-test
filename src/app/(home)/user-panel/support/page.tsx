import Support from "@/components/user-panel/Support/Support";
import { getTicketChatId } from "@/requests/ticket/getTicketChatId";
import { getTickets } from "@/requests/ticket/getTickets";
import { cookies } from "next/headers";

//page component
const page = async () => {
  const session_id = cookies().get("session_id")?.value;
  if (session_id) {
    const tickets = await getTickets(session_id);
    const chatId = await getTicketChatId(session_id);
    return <Support tickets={tickets} chatId={chatId.chat_id}/>;
  }
};

export default page;
