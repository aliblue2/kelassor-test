"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedPath, {
  AnimatedPathHandles,
} from "../AnimatedPath/AnimatedPath";
import { useRef } from "react";
import Footstep from "@/components/Ui/Footstep";

//HeroItem component
const HeroItem = () => {
  const pathRef1 = useRef<AnimatedPathHandles>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex relative justify-center items-end h-full md:text-xl bg-primary-base aspect-square rounded-[30px] shrink-0 md:rounded-[50px]"
      onViewportEnter={() => {
        if (pathRef1.current) {
          pathRef1.current.animate();
        }
      }}
    >
      <div className="overflow-hidden w-2/3">
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

      <AnimatedPath
        ref={pathRef1}
        id="phone-path-1"
        duration={20}
        viewBox="0 0 371 394"
        path="M366.501 326.5C366.501 326.5 368.5 309.5 368.5 295.5C368.5 247.5 323.501 206.5 323.501 156C323.501 113.453 342.001 117 342.001 65C342.001 39.5 319.501 12.5 288 12.5C266.001 12.5 246.001 17.4999 216.001 17.5C148.001 17.5001 124.501 2 65.5 2C23.5008 2 1.99923 37.5 2 71.5C2.00116 122.5 41.5 130 41.5 223.5C41.5 271 26.5008 290 26.5008 334.5C26.5008 360.5 36.5 385 39.5 393"
        className="text-white absolute z-20 size-[90%] lg:hidden "
      />
      <Footstep className="absolute lg:hidden top-[400px] rotate-[120deg]"/>
    </motion.div>
  );
};

export default HeroItem;