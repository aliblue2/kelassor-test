import { NextPage } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const userSession = cookies().get("user_session");

  if (!userSession) {
    return redirect("/admin/auth");
  }

  if (userSession) {
    return redirect("/admin/dashboard");
  }
};

export default Page;
