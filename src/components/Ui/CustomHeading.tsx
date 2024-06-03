"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

//CustomHeading component
type CustomHeadingProps = {
  children: ReactNode;
  side?: "left" | "right";
};
const CustomHeading = ({ children, side = "right" }: CustomHeadingProps) => {
  return (
    <div
      className={`flex flex-col w-fit ${side === "left" ? "items-end self-end" : null}`}
    >
      {children}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "50%" }}
        transition={{ delay: 0.2 }}
        className="h-1 mt-2 bg-primary-20 rounded-full"
      />
    </div>
  );
};

export default CustomHeading;
