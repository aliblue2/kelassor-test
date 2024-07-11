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
    <motion.button variants={variants} className="bg-white md:relative md:z-30 hover:p-1 rounded-[20px] hover:shadow2">
      <Link
        className="relative z-20 flex flex-col [&>*]:w-full p-2 [&>*]:duration-200 duration-200 aspect-square group"
        href={"/bootcamp/" + data.url}
      >
        <Image className="object-cover h-3/5 bg-primary-base rounded-[12px] group-hover:rounded-[16px]" src={data.logo_banner} height={300} width={400} alt={data.header_title}/>
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
