"use client";
import { motion } from "framer-motion";
import Image from "next/image";

//HeroItem component
const HeroItem = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex relative justify-center items-end h-full md:text-xl bg-primary-base aspect-square rounded-[20px] shrink-0 md:rounded-[50px]"
    >
      <div className="w-2/3 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <Image
            src="/Landing/Hero/heroPic.png"
            alt="hero image"
            width={400}
            height={400}
          />
        </motion.div>
      </div>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0 + 0.2 }}
        className="absolute z-30 py-4 px-8 font-bold bg-white rounded-[20px] text-primary-base top-[84%] right-[5%] shadow3"
      >
        سرنخو بگیر
      </motion.span>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 + 0.2 }}
        className="absolute z-30 py-4 px-8 font-bold bg-white rounded-[20px] text-primary-base top-[48%] right-[-3%] shadow3"
      >
        بوتکمپ؟
      </motion.span>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 + 0.2 }}
        className="absolute z-30 py-4 px-8 font-bold bg-white rounded-[20px] text-primary-base top-[37px] left-[24px] shadow3"
      >
        چه رشته‌هایی؟
      </motion.span>

      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 + 0.2 }}
        className="absolute z-30 py-4 px-8 font-bold bg-white rounded-[20px] text-primary-base top-[62%] left-[-3%] shadow3"
      >
        کلاسور؟
      </motion.span>
    </motion.div>
  );
};

export default HeroItem;
