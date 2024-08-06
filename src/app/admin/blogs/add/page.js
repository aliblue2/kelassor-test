import AddBlogPage from "@/components/admin/blogs/add-blog/AddBlogPage";
import { cookies } from "next/headers";

const AddBlog = async () => {
  //   const res = await fetch(`${process.env.NEXT_DEV_API}/api/blogs/categories`);
  //   const categories = await res.json();
  //   console.log(categories);
  const cookieStore = cookies();
  const id = cookieStore.get("id");
  return <AddBlogPage data={null} hashed_id={id.value} />;
};

export default AddBlog;
