import AdminBlogsPage from "@/components/admin/blogs/AdminBlogsPage";

const AdminBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_API_URL}/api/blogs`, {
    cache: "no-store",
  });
  const data = await res.json();
  const { blogs } = data;
  console.log(blogs);
  return <AdminBlogsPage blogs={blogs} />;
};

export default AdminBlogs;
