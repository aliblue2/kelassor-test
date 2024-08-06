import AdminUsersPage from "@/components/admin/admin-users/AdminUsersPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const Users = async () => {
  // redirect("/admin/blogs");
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  const res = await fetch(`${process.env.BASE_URL}/admin/users.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      hashed_id: id.value,
    }),
    cache: "no-store",
  });
  const userData = await res.json();
  // console.log(userData);
  return (
    <AdminUsersPage
      userData={userData.users}
      totalUsers={userData.total}
      hashed_id={id.value}
    />
  );
};

export default Users;
