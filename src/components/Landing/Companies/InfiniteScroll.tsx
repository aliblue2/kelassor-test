"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

//InfiniteScroll component
type InfiniteScrollProps = {
  images: string[];
  itemSize?: number;
  duration?: number;
};
const InfiniteScroll = ({
  images,
  itemSize = 80,
  duration = 10,
}: InfiniteScrollProps) => {
  const [isDesktop, setisDesktop] = useState(2); //1: no, 2: yes
  useEffect(() => {
    if (window && window.innerWidth < 768) setisDesktop(1);
  }, []);
  return (
    <>
      <div className="flex border-y border-y-light-2 size-full">
        <div
          style={{
            height: (itemSize + 8) * isDesktop,
            maxWidth: itemSize * isDesktop * (images.length + 1),
          }}
          className="flex overflow-hidden relative size-full mx-auto py-1 md:py-2"
        >
          {images.map((item, index) => (
            <motion.div
              key={item + index}
              className="absolute left-[-100%]"
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
                className="object-contain rounded-xl size-full"
              />
            </motion.div>
          ))}
          <div className="absolute bg-gradient-to-r from-background via-transparent to-background size-full via-[percentage:20%_80%]"></div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
