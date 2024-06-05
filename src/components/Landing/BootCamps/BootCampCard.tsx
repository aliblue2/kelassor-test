"use client";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
//BootCampCard component
const title = "پایتون / جنگو";
const BootCampCard = () => {
  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      variants={variants}
      className="flex flex-col bg-white p-2 rounded-[20px] aspect-square"
    >
      <div className="bg-primary-base h-3/5 rounded-[12px]">todo</div>
      <div className="text-lg font-bold flex grow items-center justify-center">
        {title}
      </div>
      <button className="text-sm gap-2 grow font-thin text-gray-4 flex items-center justify-center border-t-light-3 border-t">
        <InfoIcon size={14} />
        اطلاعات بیشتر
      </button>
    </motion.div>
  );
};

export default BootCampCard;
