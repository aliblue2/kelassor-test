import UserPanel from "@/components/user-panel/UserPanel";
import { getPanelBootcamps } from "@/requests/user-panel/getPanelBootcamps";
import { cookies } from "next/headers";

//page component
const page = async () => {
  const res = await getPanelBootcamps(cookies().get("session_id")?.value);
  return <UserPanel data={res}/>;
};

export default page;
