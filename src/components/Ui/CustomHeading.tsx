"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

//CustomHeading component
type CustomHeadingProps = {
  children: ReactNode;
};
const CustomHeading = ({ children }: CustomHeadingProps) => {
  return (
    <div className="w-fit">
      {children}
      <motion.div 
      initial={{width:0}}
      whileInView={{width:"50%"}}
      transition={{delay:0.200}}
      className="w-1/2 h-1 mt-2 bg-primary-20 rounded-full"/>
    </div>
  );
};

export default CustomHeading;
