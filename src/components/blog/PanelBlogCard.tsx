"use client";

import { activateBlog } from "@/utils/database/blog/activateBlog";
import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";

//PanelBlogCard component
type PanelBlogCardProps = {
  title: string;
  description: string;
  link: string;
  id: number;
  active: number;
  image: string;
};
const PanelBlogCard = ({
  title,
  description,
  link,
  id,
  image,
  active,
}: PanelBlogCardProps) => {
  const [localActive, setlocalActive] = useState(active);
  const handleActivation: MouseEventHandler = async (e) => {
    e.stopPropagation();
    const res = await activateBlog(id, active === 0 ? 1 : 0);
    if (res.statusCode === 200) setlocalActive((p) => (p === 0 ? 1 : 0));
  };
  return (
    <div className="flex flex-col md:flex-row gap-2 grow">
      <div className="flex md:basis-0 grow w-full h-full md:max-w-[200px] items-center justify-center bg-white shadow2 rounded-xl overflow-hidden">
        <button className="  hover:underline" onClick={handleActivation}>
          برای عموم انتشار
          {localActive ? (
            <span className="text-success">یافته</span>
          ) : (
            <span className="text-error">نیافته</span>
          )}
          <br />
          برای تغییر کلیک کنید
        </button>
      </div>
      <Link
        href={"/blog/" + link}
        className="hover:scale-[101%] basis-0 grow duration-200 min-h-[200px] bg-white shadow2 w-full rounded-xl p-5 flex gap-5"
      >
        <div>
          <Image
            src={image}
            alt={title + " image"}
            height={300}
            width={300}
            className="rounded-xl size-[160px] aspect-square object-cover"
          />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default PanelBlogCard;
