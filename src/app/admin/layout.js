import AdminLayout from "@/components/admin/layout/AdminLayout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "پنل ادمین",
  desciption: "پنل ادمین کلاسور",
};

const layout = async ({ children }) => {
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  if (!id) redirect("/");

  const res = await fetch(`${process.env.BASE_URL}/loginSignup/loggedIn.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: id.value,
    }),
    cache: "no-store",
  });
  const loggedIn = await res.json();
  // console.log(loggedIn);
  if (loggedIn.statusCode !== 200) redirect("/");
<<<<<<< HEAD
  if (loggedIn.roll !== "2") redirect("/user-panel"); 
=======
  if (loggedIn.roll !== "2") redirect("/user-panel");
>>>>>>> 39bce948386ecd17c75e90288e6774c9f13a7544
  return <AdminLayout>{children}</AdminLayout>;
};

export default layout;
