import SideBar from "@/components/user-panel/SideBar/SideBar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

//layout component
type layoutProps = {
  children: ReactNode;
};
const layout = ({ children }: layoutProps) => {
  const session_id = cookies().get("session_id");
  if (!session_id) redirect("/");
  return (
    <div className="py-5 flex">
      <SideBar />
      <div className="flex grow container">{children}</div>
    </div>
  );
};

export default layout;
