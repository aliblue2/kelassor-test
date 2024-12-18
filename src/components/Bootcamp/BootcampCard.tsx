"use client";
import { bootcampSimple } from "@/types/bootcamp";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//BootCampCard component
type BootcampCardProps = { data: bootcampSimple };
const BootCampCard = ({ data }: BootcampCardProps) => {
  return (
    <Link
      href={"/bootcamp/" + data.url}
      className="hover:shadow2 hover:scale-105 flex flex-col [&>*]:w-full bg-white p-2 [&>*]:duration-200 duration-200 rounded-[20px] h-[350px] w-full md:w-auto aspect-[3/4] md:aspect-[4/3] "
    >
      <div className="h-3/5 bg-primary-base overflow-hidden rounded-[12px] ">
        <Image
          className="size-full object-cover"
          src={data.logo_banner}
          alt={data.header_title + "banner"}
          width={400}
          height={300}
        />
      </div>
      <p className="flex justify-center items-center text-xl md:text-2xl font-bold grow">
        {data.header_title}
      </p>
      <div className="flex gap-2 justify-center items-center text-sm font-thin border-t grow text-gray-4 border-t-light-3 hover:text-primary-base">
        <InfoIcon size={14} />
        اطلاعات بیشتر
      </div>
    </Link>
  );
};

export default BootCampCard;
