import Carousel from "@/components/Ui/Carousel";
import CustomHeading from "@/components/Ui/CustomHeading";
import BlogCard from "@/components/blog/BlogCard";
import { getBlogs } from "@/utils/database/blog/getBlogs";

//page component
const page = async () => {
  const rows = await getBlogs();
  const groupFn = (input: any[]) => {
    let res = [];
    let j = 0;
    while (j < input.length) {
      let temp = [];
      for (let i = 0; i < 3; i++, j++) {
        if (j >= input.length) break;
        temp.push(input[j]);
      }
      res.push(temp);
    }
    return res;
  };
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  groupFn(a);
  return (
    <>
      <CustomHeading>
        <h2>دیزاین</h2>
      </CustomHeading>

      <Carousel>
        {groupFn(rows.filter((item) => item.category === "design")).map(
          (item, i) => (
            <div key={i} className="flex gap-5">
              {item.map((item2) => (
                <BlogCard
                  key={item2.id}
                  title={item2.title}
                  link={item2.slug}
                  image=""
                />
              ))}
            </div>
          ),
        )}
      </Carousel>

      <CustomHeading>
        <h2>برنامه نویسی</h2>
      </CustomHeading>

      <Carousel>
        {groupFn(rows.filter((item) => item.category === "programming")).map(
          (item, i) => (
            <div key={i} className="flex gap-5">
              {item.map((item2) => (
                <BlogCard key={item2.id} title={item2.title} link={item2.slug} image="" />
              ))}
            </div>
          ),
        )}
      </Carousel>
      <CustomHeading>
        <h2>مارکتینگ</h2>
      </CustomHeading>

      <Carousel>
        {groupFn(rows.filter((item) => item.category === "marketing")).map(
          (item, i) => (
            <div key={i} className="flex gap-5">
              {item.map((item2) => (
                <BlogCard key={item2.id} title={item2.title} link={item2.slug} image="" />
              ))}
            </div>
          ),
        )}
      </Carousel>
      <CustomHeading>
        <h2>منابع انسانی</h2>
      </CustomHeading>

      <Carousel>
        {groupFn(rows.filter((item) => item.category === "hr")).map(
          (item, i) => (
            <div key={i} className="flex gap-5">
              {item.map((item2) => (
                <BlogCard key={item2.id} title={item2.title} link={item2.slug} image="" />
              ))}
            </div>
          ),
        )}
      </Carousel>
    </>
  );
};

export default page;
