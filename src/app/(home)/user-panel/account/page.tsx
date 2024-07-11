import AccountForm from "@/components/user-panel/Account/AccountForm";
import { getUserInfo } from "@/requests/user-panel/getUserInfo";
import Clg from "@/utils/Clg";
import { cookies } from "next/headers";

//page component
const page = async () => {
  const session_id = cookies().get("session_id")?.value;
  if (session_id) {
    const res = await getUserInfo(session_id);
    return (
        <AccountForm data={res.profileInfo} />
    );
  }
};

export default page;
