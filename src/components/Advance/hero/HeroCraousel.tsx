"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HeroCraousel = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: 0.3,
      }}
      className="w-full h-full border-4 maze border-primary-base bg-maze-pattern !bg-secondary-20 p-5 col-span-2 md:col-span-1 rounded-[50px]"
    >
      <h6 className="w-full px-4 py-2 text-2xl text-center font-bold bg-white border-4 border-primary-base rounded-3xl text-primary-base">
        کلاسور advance
      </h6>
    </motion.div>
  );
};

export default HeroCraousel;
