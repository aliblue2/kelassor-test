"use client";
//BlogNav component
import Link from "next/link";
import { usePathname } from "next/navigation";
const BlogNav = () => {
  const path = usePathname().split("/")[2];
  return (
    <div className="flex gap-10 items-center px-10 bg-secondary-75 rounded-[10px]">
      <Link
        href="/blog"
        className={`font-bold py-5 duration-200 ${path === undefined ? "border-b-4 border-b-primary-base" : null}`}
      >
        همه
      </Link>
      <Link
        href="/blog/design"
        className={`font-bold py-5 duration-200 ${path === "design" ? "border-b-4 border-b-primary-base" : null}`}
      >
        دیزاین
      </Link>
      <Link
        href="/blog/programming"
        className={`font-bold py-5 duration-200 ${path === "programming" ? "border-b-4 border-b-primary-base" : null}`}
      >
        برنامه نویسی
      </Link>
      <Link
        href="/blog/marketing"
        className={`font-bold py-5 duration-200 ${path === "marketing" ? "border-b-4 border-b-primary-base" : null}`}
      >
        مارکتینگ
      </Link>
      <Link
        href="/blog/hr"
        className={`font-bold py-5 duration-200 ${path === "hr" ? "border-b-4 border-b-primary-base" : null}`}
      >
        منابع انسانی
      </Link>
      <input
        className="mr-auto h-8 rounded-lg p-1"
        placeholder="دنبال چه چیزی میگردید؟"
      />
    </div>
  );
};

export default BlogNav;
