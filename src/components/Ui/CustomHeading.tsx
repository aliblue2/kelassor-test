"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

//CustomHeading component
type CustomHeadingProps = {
  children: ReactNode;
  side?: "left" | "right" | "center";
  circle?: boolean;
};
const CustomHeading = ({
  children,
  side = "right",
  circle = false,
}: CustomHeadingProps) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(triggerRef, { once: true });
  return (
    <div
      className={`flex relative flex-col w-fit mb-[20px] z-20 ${
        circle ? "mt-8 md:mt-16" : null
      } ${
        side === "left"
          ? "items-end self-end"
          : side === "center"
            ? "items-center"
            : null
      }`}
    >
      {/******************************************************************************
        circle */}
      {circle && (
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.5 }}
          className={`size-8 hidden md:block md:size-16 absolute bg-secondary-75 -top-4 md:-top-8 right-0 -z-10 rounded-full`}
        />
      )}
      {/******************************************************************************
        content */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {children}
      </motion.div>
      {/******************************************************************************
        underline */}
      <motion.div
        ref={triggerRef}
        initial={{ width: 0 }}
        whileInView={{ width: "50%" }}
        transition={{ delay: 0.5 }}
        className="h-2 mt-2 rounded-full bg-primary-20"
      />
    </div>
  );
};

export default CustomHeading;
