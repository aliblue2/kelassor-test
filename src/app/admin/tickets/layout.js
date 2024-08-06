import { cookies } from "next/headers";

const layout = async ({ children }) => {
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  if (!id) redirect("/login");
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
  if (loggedIn.roll === "21") redirect("/admin/blog");
  return <>{children}</>;
};

export default layout;
