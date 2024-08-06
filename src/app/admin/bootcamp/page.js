import AdminBootcampPage from "@/components/admin/bootcamp/AdminBootcampPage";
import { cookies } from "next/headers";

const AdminBootcamp = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  const res = await fetch(`${process.env.BASE_URL}/header/bootcamp.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      hashed_id: id.value,
    }),
    cache: "no-store",
  });
  const bootcamps = await res.json();
  // console.log(bootcamps);
  const filterredBootcamps = bootcamps.filter((bc) => !!bc.url);
  return <AdminBootcampPage bootcamps={filterredBootcamps} />;
};

export default AdminBootcamp;
