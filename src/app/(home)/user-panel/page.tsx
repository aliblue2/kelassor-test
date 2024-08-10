import UserPanel from "@/components/user-panel/UserPanel";
import { getPanelDashboard } from "@/requests/user-panel/getPanelDashboard";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//page component
const page = async () => {

  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  if (!id) redirect("/");

  const usr = await fetch(`${process.env.BASE_URL}/loginSignup/loggedIn.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: id.value,
    }),
    cache: "no-store",
  });
  const loggedIn = await usr.json();
  // console.log(loggedIn);
  if (loggedIn.statusCode !== 200) redirect("/");
  if (loggedIn.roll === "2") redirect("/admin");

  const res = await getPanelDashboard(cookies().get("session_id")?.value);
  return <UserPanel data={res}/>;
};

export default page;
