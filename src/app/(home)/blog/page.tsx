import Carousel from "@/components/Ui/Carousel";
import CustomHeading from "@/components/Ui/CustomHeading";
import BlogCard from "@/components/blog/BlogCard";
import TripleCarousel from "@/components/blog/TripleCarousel";
import { blog } from "@/utils/database/blog";
import { getBlogs, getBlogsByView } from "@/utils/database/blog/getBlogs";
import { groupFn } from "@/utils/groupFn";

//page component
const page = async ({
  searchParams,
}: {
  searchParams: { category?: string };
}) => {
  const blogs = await getBlogs({
    justActive: true,
    category: searchParams.category ? searchParams.category : undefined,
  });
  const blogsByView = await getBlogsByView({
    justActive: true,
    category: searchParams.category ? searchParams.category : undefined,
  });
  return (
    <>
      <div className="flex flex-col gap-2">
        <CustomHeading>
          <h2>مقالات جدید</h2>
        </CustomHeading>

        <TripleCarousel blogs={blogs}/>
      </div>
      <div className="flex flex-col gap-2">
        <CustomHeading>
          <h2>مقالات برتر</h2>
        </CustomHeading>

        <TripleCarousel blogs={blogsByView}/>
      </div>
    </>
  );
};

export default page;
