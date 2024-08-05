import { getBlog } from "@/utils/database/blog/getBlogs";

//page component
const page = async ({ params }: { params: { slug: string } }) => {
  const res = await getBlog(params.slug);
  return <div dangerouslySetInnerHTML={{ __html: res[0].content }}></div>;

};

export default page;
