import PanelBlogCard from "@/components/blog/PanelBlogCard";
import { getBlogs } from "@/utils/database/blog/getBlogs";

//page component
const page = async () => {
  const res = await getBlogs({justActive:false});
  return (
    <div className="flex flex-col gap-5">
    <h1>بلاگ‌ها</h1>
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
