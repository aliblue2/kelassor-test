import AddBlogPage from "@/components/admin/blogs/add-blog/AddBlogPage";
import { cookies } from "next/headers";

const AdminBlog = async ({ params }) => {
  const cookieStore = cookies();
  const id = cookieStore.get("session_id");
  const { blogSlug } = params;
  const res = await fetch(
    `${process.env.NEXT_API_URL}/api/blogs/blog/${blogSlug}`,
    { cache: "no-store" }
  );
  const {
    data: { blog },
  } = await res.json();
  const usableBlog = {
    ...blog,
    keywords: blog.keywords.split(","),
    category: blog.category.split(","),
  };
  //   console.log("blog: ", usableBlog);
  return (
    <AddBlogPage data={usableBlog} blogSlug={blogSlug} hashed_id={id.value} />
  );
};

export default AdminBlog;
