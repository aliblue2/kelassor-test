"use client";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
//BootCampCard component
const title = "پایتون / جنگو";
const BootCampCard = () => {
  const variants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <motion.button
      variants={variants}
      className="relative z-20 flex flex-col [&>*]: [&>*]:w-full bg-white p-2 hover:shadow2 [&>*]:duration-200 hover:p-1 duration-200 rounded-[20px] aspect-square group"
    >
      <div className="bg-primary-base h-3/5 group-hover:rounded-[16px] rounded-[12px]">
      todo</div>
      <div className="text-lg font-bold group-hover:scale-105 flex grow items-center justify-center">
        {title}
      </div>
      <div className="text-sm gap-2 grow font-thin text-gray-4 flex items-center justify-center border-t-light-3 border-t group-hover:text-primary-base">
        <InfoIcon size={14} />
        اطلاعات بیشتر
      </div>
    </motion.button>
  );
};

export default BootCampCard;
