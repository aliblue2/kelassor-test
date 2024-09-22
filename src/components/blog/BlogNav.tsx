"use client";
//BlogNav component
import { category, getCategories } from "@/utils/database/blog/getCategories";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import BlogSearchBar from "./BlogSearchBar";
type BlogNavProps=
  {data: category[]}
const BlogNav = ({data}:BlogNavProps) => {
  const searchParams = useSearchParams().get("category");
  const router = useRouter();
  return (
    <div className="flex md:flex-row flex-col w-full gap-5 items-center py-5 md:py-0 px-5 md:px-10 bg-secondary-75 rounded-[10px]">
      <div className="overflow-y-hidden order-2 md:order-none overflow-x-auto flex gap-5 grow max-w-full">
        <Link
          href="/blog"
          className={`font-bold py-5 duration-200 ${searchParams === null ? "border-b-4 border-b-primary-base" : null}`}
        >
          همه
        </Link>
        {data &&
          data.map((item) => (
            <button
              key={item.tag}
              onClick={() => router.push("/blog?category=" + item.tag)}
              className={`font-bold py-5 relative duration-200 shrink-0 ${searchParams === item.tag ? "border-b-4 border-b-primary-base" : null}`}
            >
              {item.name}
            </button>
          ))}
      </div>
      <BlogSearchBar />
    </div>
  );
};

export default BlogNav;
