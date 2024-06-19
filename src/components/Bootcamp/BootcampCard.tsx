"use client";
import { bootcampSimple } from "@/types/bootcamp";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
//BootCampCard component
type BootcampCardProps = { data: bootcampSimple };
const BootCampCard = ({ data }: BootcampCardProps) => {
  return (
    <motion.button className="shadow2 flex flex-col [&>*]:w-full bg-white p-2 hover:shadow3 [&>*]:duration-200 hover:p-1 duration-200 rounded-[20px] h-[350px] w-full md:w-auto aspect-[3/4] md:aspect-[4/3] group">
      <div className="h-3/5 bg-primary-base rounded-[12px] group-hover:rounded-[16px]">
        todo
      </div>
      <p className="flex justify-center items-center text-xl md:text-2xl font-bold group-hover:scale-105 grow">
        {data.header_title}
      </p>
      <div className="flex gap-2 justify-center items-center text-sm font-thin border-t grow text-gray-4 border-t-light-3 group-hover:text-primary-base">
        <InfoIcon size={14} />
        اطلاعات بیشتر
      </div>
    </motion.button>
  );
};

export default BootCampCard;
