"use client";
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import WheelForm from "./WheelForm";
import WheelOtp from "./WheelOtp";

const WheelAuthModal: React.FC<{
  children: React.ReactNode;
  onCloseModal: () => void;
}> = ({ onCloseModal, children }) => {
  return (
    <motion.div
      className="fixed top-0 flex items-center justify-center left-0 w-full h-full bg-primary-base z-[202] bg-opacity-30 backdrop-blur-sm p-5"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <motion.div
        initial={{ opacity: 0, top: 200 }}
        animate={{ opacity: 1, top: 0 }}
        exit={{ opacity: 0, top: 200 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        }}
        className="bg-white max-w-[600px] mx-auto w-full relative shadow-md p-5 rounded-xl"
      >
        <X
          size={20}
          className="absolute top-2 left-2 text-primary-base bg-primary-base bg-opacity-20 rounded-full"
          onClick={onCloseModal}
        />
        {children}
      </motion.div>
    </motion.div>
  );
};

export default WheelAuthModal;
