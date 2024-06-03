"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

//CustomHeading component
type CustomHeadingProps = {
  children: ReactNode;
  side?: "left" | "right";
  circle?: boolean;
};
const CustomHeading = ({
  children,
  side = "right",
  circle = false,
}: CustomHeadingProps) => {
  return (
    <div
      className={`flex relative flex-col w-fit ${
        side === "left" ? "items-end self-end" : null
      }`}
    >
      {circle && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="size-16 md:size-32 absolute bg-secondary-75 -top-8 md:-top-16 -right-4 md:-right-8 -z-10 rounded-full"
        />
      )}
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
