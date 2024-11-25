"use client";
import React from "react";
import MenuNavigation from "./menu/Menu";
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <motion.aside
      initial={{ top: 200, opacity: 0 }}
      animate={{ top: 20, opacity: 1 }}
      transition={{type : "spring" , duration : 1 , bounce : .5 }}
      className="w-3/12 md:block hidden h-full p-5 bg-white sticky top-5 right-0 rounded-[20px] shadow1"
    >
      <MenuNavigation />
    </motion.aside>
  );
};

export default SideBar;
