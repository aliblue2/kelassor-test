import BlogNav from "@/components/blog/BlogNav";
import { getCategories } from "@/utils/database/blog/getCategories";

//layout component
const layout = async ({ children }: { children: React.ReactNode }) => {
  const categories = await getCategories();
  return (
    <div className="container flex gap-10 flex-col py-10">
      <BlogNav data={categories} />
      {children}
    </div>
  );
};

export default layout;
