import TasksPage from "@/components/admin/tasks/TasksPage";
import { cookies } from "next/headers";

const page = async ({ searchParams }) => {
  //   //   // console.log(searchParams);
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  const { filter, status, page } = searchParams;
  const res = await fetch(
    `${process.env.BASE_URL}/admin/tasks.php?filter=${
      filter ? filter : ""
    }&page=${page ? page : 1}&status=${status ? status : ""}`,
    {
      method: "POST",
      body: JSON.stringify({
        Content_Type: process.env.Content_Type,
        API_KEY: process.env.API_KEY,
        hashed_id: id.value,
      }),
      cache: "no-store",
    }
  );
  const data = await res.json();
  // console.log(data);
  return (
    <TasksPage
      tasks={data.tasks}
      totalPage={data.totalPage}
      hashed_id={id.value}
      urlFilter={filter}
      urlStatus={status}
    />
  );
};

export default page;
