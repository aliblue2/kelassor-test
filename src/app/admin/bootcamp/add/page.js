import AddBootcampPage from "@/components/admin/bootcamp/add-bootcamp/AddBootcampPage";
import { cookies } from "next/headers";

const AddBootcamp = () => {
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  return <AddBootcampPage data={null} hashed_id={id.value} />;
};

export default AddBootcamp;
