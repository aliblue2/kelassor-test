import { getBlog, getBlogs } from "@/utils/database/blog/getBlogs";
import jalaali from "jalaali-js";
import Image from "next/image";
import { Metadata } from "next";
import { getComments } from "@/utils/database/blog/comment";
import CustomHeading from "@/components/Ui/CustomHeading";
import Carousel from "@/components/Ui/Carousel";
import BlogComment from "@/components/blog/BlogComment";
import BlogNewComment from "@/components/blog/BlogNewComment";
import { groupFn } from "@/utils/groupFn";
import BlogCard from "@/components/blog/BlogCard";
import TripleCarousel from "@/components/blog/TripleCarousel";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = await getBlog(params.slug).then(
    (res) => res[0].meta_description,
  );

  return {
    description: meta, // Set description from fetched data
  };
}
//page component
const page = async ({ params }: { params: { slug: string } }) => {
  const res = await getBlog(params.slug);
  const comments = getComments(res[0].id);
  const related = getBlogs({ category: res[0].category });
  const date = jalaali.toJalaali(res[0].created_at);
  return (
    <div className="gap-20 flex flex-col">
      <div className="flex flex-col gap-5">
        <div className="grid md:flex gap-5 h-60">
          <div className="flex col-start-1 row-start-1 gap-5 justify-center basis-0 shrink-0 p-10 z-10 items-center grow flex-col md:bg-white shadow2 rounded-[40px] flex-1">
            <h1 className="text-white md:text-black">{res[0].title}</h1>
            <div className="text-white md:text-gray-3">
              {res[0].author} - {date.jy}/{date.jm}/{date.jd}{" "}
            </div>
          </div>
          <div className="col-start-1 row-start-1 brightness-50 md:brightness-100 bg-black flex-1 flex basis-0 overflow-hidden shadow2 rounded-[40px] shrink-0 grow ">
            <Image
              alt="banner image"
              className="object-cover size-full grow blur-sm md:blur-none "
              src={res[0].banner}
              height={400}
              width={600}
            />
          </div>
        </div>
        <div className="bg-white p-10 rounded-[40px] shadow2">
          <div dangerouslySetInnerHTML={{ __html: res[0].content }}></div>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <div>
          <CustomHeading>
            <h2>مطالب مشابه</h2>
          </CustomHeading>
          {related.then((data) => {
            return <TripleCarousel blogs={data} />;
          })}
        </div>
        <div>
          <CustomHeading>
            <h2>دیدگاهتان را بنویسید</h2>
          </CustomHeading>
          <BlogNewComment blogId={res[0].id} />
        </div>
        <div>
          <CustomHeading>
            <h2>دیدگاه‌ها</h2>
          </CustomHeading>

          {comments.then((coms) => {
            if (coms.length < 1) {
              return (
                <div className="text-center">
                  دیدگاهی ثبت نشده، شما اولین نفر باشدی.
                </div>
              );
            }
            return (
              <Carousel>
                {coms.map((item) => (
                  <BlogComment key={item.id} data={item} />
                ))}
              </Carousel>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
