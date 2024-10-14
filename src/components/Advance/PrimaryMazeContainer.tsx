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
      className={`${side === "right" ? "justify-start" : "justify-end"} w-full relative flex items-center`}
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
        className={`${side === "right" ? "rounded-l-[50px]" : "rounded-r-[50px]"} ${isPrimary ? "bg-primary-20" : "bg-secondary-20"} w-11/12 min-h-[450px] h-full primary-maze overflow-hidden p-5 relative `}
      >
        <div className="flex flex-col items-center justify-start w-full gap-5 p-5 mx-auto">
          <h6 className="px-0 py-2 text-3xl font-bold text-white border-b-4 border-white">
            {title}
          </h6>
          <div className="w-full h-full">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrimaryMazeContainer;
