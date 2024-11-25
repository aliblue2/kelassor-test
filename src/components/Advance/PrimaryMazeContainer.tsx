"use client";

import React from "react";
import { motion } from "framer-motion";
const PrimaryMazeContainer: React.FC<{
  title: string;
  side: "left" | "right";
  children: React.ReactNode;
  isPrimary?: boolean;
}> = ({ children, isPrimary = true, side, title }) => {
  return (
    <div
      className={`${side === "right" ? "justify-start" : "justify-end"} w-full relative flex items-center primary-maze`}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: side === "right" ? 20 : -20,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          type: "keyframes",
          ease: "circInOut",
          duration: 0.3,
        }}
        className={`${side === "right" ? "rounded-l-[50px]" : "rounded-r-[50px]"} ${isPrimary ? "bg-primary-20" : "bg-secondary-20"}  min-h-[450px] h-full primary-maze overflow-hidden p-2 md:p-5 w-[97%] relative `}
      >
        <div>
          <h6 className="md:text-3xl w-fit mx-auto p-5 text-2xl font-bold text-white border-b-4 border-white">
            {title}
          </h6>
          <div className=" w-full h-full py-8 px-3 md:w-10/12 mx-auto">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrimaryMazeContainer;
