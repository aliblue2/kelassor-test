import CreateTaskPage from "@/components/admin/tasks/create-task/CreateTaskPage";
import { cookies } from "next/headers";

const page = () => {
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  return <CreateTaskPage hashed_id={id.value} />;
};

export default page;
