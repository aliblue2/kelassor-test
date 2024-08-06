import AdminBootcampUsersPage from "@/components/admin/admin-users/bootcamps/AdminBootcampUsersPage";
import { cookies } from "next/headers";

const AdminBootcampUsers = async ({ searchParams }) => {
  const { search, bcName, result, page } = searchParams;

  const cookieStore = cookies();
  const id = cookieStore.get("id");
  const res = await fetch(`${process.env.BASE_URL}/admin/bootcamp_users.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: id.value,
      page: page || 1,
      itemsPerPage: 12,
      search: search || "",
      bcName: bcName || "",
      result: result || "",
    }),
    cache: "no-store",
  });
  const data = await res.json();
  // console.log("res bootcamp_users: ", data);
  return (
    <AdminBootcampUsersPage
      users={data.users}
      totalUsers={data.total}
      bootcamps={data.Bootcamps}
      hashed_id={id.value}
    />
  );
};

export default AdminBootcampUsers;
