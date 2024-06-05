"use client";

import { motion } from "framer-motion";
import Image from "next/image";

//WhatWeDoItem component
type WhatWeDoItemProps = {
  text: string;
  image: string;
};
const WhatWeDoItem = ({ text, image }: WhatWeDoItemProps) => {
  const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      variants={variants}
      className="flex flex-col p-2 w-full bg-white aspect-[3/4] rounded-[20px]"
    >
      <div className="w-full p-5 md:p-10 h-2/3 bg-light-4 rounded-[12px] overflow-hidden">
        <Image
          src={image}
          height={512}
          width={512}
          alt={text}
          className="size-full object-contain"
        />
      </div>
      <span className="flex text-sm md:text-base text-center justify-center items-center font-bold grow text-gray-3">
        {text}
      </span>
    </motion.div>
  );
};

export default WhatWeDoItem;
