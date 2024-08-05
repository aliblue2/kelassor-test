import Carousel from "@/components/Ui/Carousel";
import CustomHeading from "@/components/Ui/CustomHeading";
import BlogCard from "@/components/blog/BlogCard";
import { blogCategory } from "@/utils/database/blog";
import { getBlogsByCategory } from "@/utils/database/blog/getBlogs";

//page component
const page = async ({ params }: { params: { category: blogCategory} }) => {
  const res = await getBlogsByCategory(params.category)
  console.log(12323, res)
  return (
    <>
      <CustomHeading>
        <h2>جدید ترین</h2>
      </CustomHeading>

      <Carousel>
        <div className="flex gap-5">
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
        </div>
        <div className="flex gap-5">
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
        </div>
        <div className="flex gap-5">
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
        </div>
      </Carousel>

      <CustomHeading>
        <h2>پربازدید ترین</h2>
      </CustomHeading>
      <Carousel>
        <div className="flex gap-5">
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
        </div>
        <div className="flex gap-5">
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
        </div>
        <div className="flex gap-5">
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
          <BlogCard
            title=" 5 پروژه جاوا اسکریپت که باید به عنوان برنامه نویس Junior Frontend بسازید "
            link=""
            image=""
          />
        </div>
      </Carousel>
    </>
  );
};

export default page;
