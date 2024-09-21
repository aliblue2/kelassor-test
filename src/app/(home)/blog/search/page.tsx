import { searchBlogs } from "@/utils/database/blog/searchBlog";
import Image from "next/image";
import Link from "next/link";

//page component
const page = async ({ searchParams }: { searchParams: { query: string } }) => {
  const res = await searchBlogs(searchParams.query);

  return (
    <div className="flex flex-col gap-5">
      {res.length ? (
        <>
          <h2>نتایج جست‌و‌جو برای {searchParams.query}</h2>
          {res.map((item) => (
            <Link
              href={"/blog/" + item.slug}
              className="bg-white p-5 items-center rounded-[20px] hover:scale-[101%] cursor-pointer duration-200 shadow2 flex gap-5 h-[200px]"
              key={item.id}
            >
              <Image
                src={item.banner}
                alt={item.title + "image"}
                height={200}
                width={300}
                className="h-full object-cover rounded-xl shrink-0"
              />
              <div className="flex flex-col gap-5 h-full">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </>
      ):<h3>نتیجه‌ای برای {searchParams.query} یافت نشد</h3>}
    </div>
  );
};

export default page;
