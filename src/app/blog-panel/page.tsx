import CategoryList from "@/components/blog-panel/CategoryList";
import PanelBlogCard from "@/components/blog/PanelBlogCard";
import { getBlogs } from "@/utils/database/blog/getBlogs";
import {
  getCategories,
} from "@/utils/database/blog/getCategories";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//page component
const page = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  if (!id) redirect("/");

  const usr = await fetch(`${process.env.BASE_URL}/loginSignup/loggedIn.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: id.value,
    }),
    cache: "no-store",
  });
  const loggedIn = await usr.json();
  if (loggedIn.statusCode !== 200) redirect("/");
  if (loggedIn.roll !== "4") redirect("/user-panel");
  /////////////////////////////////////////////////////////
  const res = await getBlogs({ justActive: false });
  const categories = await getCategories();
  console.log(2993, categories);
  return (
    <div className="flex flex-col gap-5">
      <h1>بلاگ‌ها</h1>
      <CategoryList data={categories}/>
      {res.map((item) => (
        <PanelBlogCard
          active={item.active}
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          link={item.slug}
          image={item.banner}
        />
      ))}
    </div>
  );
};

export default page;
