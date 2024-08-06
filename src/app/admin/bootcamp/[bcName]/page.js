import AddBootcampPage from "@/components/admin/bootcamp/add-bootcamp/AddBootcampPage";
import { bootcampCleaner } from "@/helper/contentDestructure";
import { cookies } from "next/headers";

const AdminBC = async ({ params }) => {
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  const { bcName } = params;
  const res = await fetch(`${process.env.BASE_URL}/bootcamp/bootcampInfo.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      main_title: bcName,
      hashed_id: id.value,
    }),
    cache: "no-store",
  });
  const data = await res.json();
  const bootcamp = bootcampCleaner(data);
  // console.log(bootcamp);
  return <AddBootcampPage data={bootcamp} hashed_id={id} />;
};

export default AdminBC;
