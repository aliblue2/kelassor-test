"use client";

import Link from "next/link";
import CustomButton from "../Ui/CustomButton";

//BlogCard component
type BlogCardProps = { title: string; image: string; link: string };
const BlogCard = ({ title, image, link }: BlogCardProps) => {
  //todo image
  return (
    <div className="flex flex-col text-white font-bold justify-between items-center p-5 h-[400px] grow bg-light-1 rounded-[30px]">
      <div>{title}</div>
      <CustomButton>
        <Link href={"/blog/post/" + link}>مشاهده مقاله</Link>
      </CustomButton>
    </div>
  );
};

export default BlogCard;
