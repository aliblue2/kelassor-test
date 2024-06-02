"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

//InfiniteScroll component
//data below can be props
//todo remove background
const images = [
  "/Landing/Companies/company1.webp",
  "/Landing/Companies/company2.webp",
  "/Landing/Companies/company3.webp",
  "/Landing/Companies/company4.webp",
  "/Landing/Companies/company5.webp",
  "/Landing/Companies/company6.webp",
  "/Landing/Companies/company7.webp",
  "/Landing/Companies/company8.webp",
];
const itemSize = 80;
const duration = 10;
const InfiniteScroll = () => {
  const [isDesktop, setisDesktop] = useState(1); //1: no, 2: yes
  useEffect(() => {
    if (window && window.innerWidth > 768) setisDesktop(2);
  }, []);
  return (
    <div className="flex overflow-hidden relative justify-center items-center w-full flex-col bg-background">
      <div
        style={{
          height: (itemSize + 8) * isDesktop,
          maxWidth: itemSize * isDesktop * (images.length + 1),
        }}
        className="flex border-y border-y-light-2 overflow-hidden relative w-full h-full py-1 md:py-2"
      >
        {images.map((item, index) => (
          <motion.div
            key={item + index}
            className="object-contain rounded-full overflow-hidden bg-black absolute left-[-100%]"
            style={{
              height: itemSize * isDesktop,
              width: itemSize * isDesktop,
            }}
            animate={{
              left: [
                -itemSize * isDesktop,
                itemSize * isDesktop * (images.length + 1),
              ],
            }}
            transition={{
              duration: duration,
              delay: (index * duration) / images.length,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              height={itemSize * isDesktop}
              width={itemSize * isDesktop}
              src={item}
              alt={`company ${index}`}
            />
          </motion.div>
        ))}
        <div className="absolute bg-gradient-to-r from-background via-transparent to-background size-full via-[percentage:20%_80%]"></div>
      </div>
      <span className="mt-4 font-bold text-center text-sm md:text-base text-light-1">
        افتخار همکاری با سازمان‌های فوق
      </span>
    </div>
  );
};

export default InfiniteScroll;
