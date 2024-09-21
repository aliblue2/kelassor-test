"use client";

import Link from "next/link";
import CustomButton from "../Ui/CustomButton";
import Image from "next/image";

//BlogCard component
type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};
const BlogCard = ({ title, description, image, link }: BlogCardProps) => {
  //todo image
  return (
    <Link
      href={"/blog/" + link}
      className="h-[400px] hover:shadow2 group grid rounded-[30px] bg-gray-4 grow overflow-hidden basis-0"
    >
      <div className="row-start-1 text-center col-start-1 z-10 flex flex-col text-white font-bold justify-between items-center p-5 size-full ">
        <h2>{title}</h2>
        <div className="max-h-[200px] overflow-hidden">{description}</div>
        <CustomButton className="z-10">
          <div>مشاهده مقاله</div>
        </CustomButton>
      </div>
      <div className="col-start-1 row-start-1 flex size-full bg-neutral-700">
        <Image
          height={512}
          width={512}
          alt={title + " image"}
          src={image}
          className="brightness-[50%] max-h-[400px] blur-sm z-0 grow duration-500 group-hover:scale-110 object-cover"
        />
      </div>
    </Link>
  );
};

export default BlogCard;
