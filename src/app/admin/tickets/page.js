import AdminTicketsPage from "@/components/admin/tickets/AdminTicketsPage";
import { cookies } from "next/headers";

const Tickets = async ({ searchParams }) => {
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  const { status, page } = searchParams;

  const res = await fetch(
    `${process.env.BASE_URL}/admin/tickets.php?status=${
      status ? status : ""
    }&page=${page ? page : 0}`,
    {
      method: "POST",
      body: JSON.stringify({
        Content_Type: process.env.Content_Type,
        API_KEY: process.env.API_KEY,
        hashed_id: id.value,
      }),
      cache: "no-store",
    }
  );
  const data = await res.json();
  // console.log(data);

  return <AdminTicketsPage tickets={data.tickets} totalPage={data.totalPage} />;
};

export default Tickets;
