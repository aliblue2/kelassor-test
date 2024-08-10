import UserPanel from "@/components/user-panel/UserPanel";
import { getPanelDashboard } from "@/requests/user-panel/getPanelDashboard";
import { cookies } from "next/headers";

//page component
const page = async () => {
  const res = await getPanelDashboard(cookies().get("session_id")?.value);
  return <UserPanel data={res}/>;
};

export default page;
