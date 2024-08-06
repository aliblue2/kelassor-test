import TicketChatPage from "@/components/admin/tickets/ticket-chat/TicketChatPage";
import { cookies } from "next/headers";

const TicketChat = async ({ params }) => {
  const { chatRefrence } = params;
  console.log("chatRefrence: ", chatRefrence);
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  console.log("hashed_id ", id.value);
  const res = await fetch(`${process.env.BASE_URL}/admin/chat.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      hashed_id: id.value,
      chatRefrence,
    }),
    cache: "no-store",
  });
  const data = await res.json();

  console.log("data from admin/chat.php: ", data);
  return (
    <TicketChatPage
      initMessages={data}
      chatRefrence={chatRefrence}
      hashed_id={id.value}
    />
  );
};

export default TicketChat;
