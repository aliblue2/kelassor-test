"use client";
import React from "react";
import { motion } from "framer-motion";
import { CircleX, Plus } from "lucide-react";

const Modal: React.FC<{
  children: React.ReactNode;
  modalToggle: () => void;
}> = ({ children, modalToggle }) => {
  return (
    <motion.dialog
      open
      className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-primary-base bg-opacity-35 backdrop-blur-sm p-5"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "keyframes",
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        initial={{ top: 200 }}
        exit={{ top: 200 }}
        animate={{ top: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        }}
        className=" bg-white shadow-md w-full  max-w-[1100px] rounded-[20px] p-5 relative py-12"
      >
        <div className="flex rounded-t-[20px] items-center justify-between w-full absolute top-0 left-0 bg-primary-base p-2 text-white ">
          <div className="md:flex pr-5 items-center justify-start gap-5 hidden">
            <span>تعداد تماس ها</span>
            <span>تاریخ تماس </span>
            <span>نوع تماس</span>
            <span>وضعیت تماس</span>
          </div>
          <CircleX onClick={modalToggle} size={24} />
        </div>
        <div className="max-h-96 overflow-scroll py-5">{children}</div>
      </motion.div>
    </motion.dialog>
  );
};

export default Modal;
