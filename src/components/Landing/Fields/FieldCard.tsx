"use client";
import { bootcampSimple } from "@/types/bootcamp";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//FieldCard component
type FieldCardProps = { data: bootcampSimple };
const FieldCard = ({ data }: FieldCardProps) => {
  const variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.button
      variants={variants}
      className="bg-white text-black md:relative md:z-30 hover:p-1 rounded-[30px] hover:shadow2"
    >
      <Link
        className="relative z-20 flex flex-col [&>*]:w-full p-2 [&>*]:duration-200 duration-200 aspect-square group"
        href={"/bootcamp/" + data.url}
      >
        <div className="h-3/5 bg-primary-base overflow-hidden relative rounded-[24px] group-hover:scale-105">
          <Image
            className="brightness-75 top-0 left-0 object-cover size-full absolute"
            src={data.logo_banner}
            height={300}
            width={400}
            alt={data.header_title}
          />
          <h3 className="absolute z-10 text-white flex items-center justify-center size-full font-bold">
            {data.url}
          </h3>
        </div>
        <div className="flex justify-center items-center text-lg font-bold group-hover:scale-105 grow">
          {data.header_title}
        </div>
        <div className="flex gap-2 justify-center items-center text-sm font-thin border-t grow text-gray-4 border-t-light-3 group-hover:text-primary-base">
          <InfoIcon size={14} />
          اطلاعات بیشتر
        </div>
      </Link>
    </motion.button>
  );
};

export default FieldCard;
