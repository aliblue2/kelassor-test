"use client";
import React from "react";
import { motion } from "framer-motion";
import MenuNavigation from "./Menu";

const MenuDrawer: React.FC<{ menuToggler: () => void }> = ({ menuToggler }) => {
  return (
    <motion.div
      onClick={menuToggler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "keyframes", duration: 0.5, ease: "easeInOut" }}
      className="fixed left-0 top-0 w-full h-full bg-primary-base bg-opacity-40"
    >
      <motion.div
        initial={{ opacity: 0, right: -200 }}
        animate={{ opacity: 1, right: 0 }}
        exit={{ opacity: 0, right: -200 }}
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0.5,
        }}
        className="fixed w-[70%] h-fit m-3 top-0 right-0 bg-white shadow2 p-5 flex items-center flex-col justify-between rounded-[20px]"
      > 
        
        <MenuNavigation />
      </motion.div>
    </motion.div>
  );
};

export default MenuDrawer;
