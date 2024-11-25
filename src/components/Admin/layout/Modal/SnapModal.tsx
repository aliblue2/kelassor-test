"use client";
import React from "react";
import { motion } from "framer-motion";

const SnapModal: React.FC<{ onClose: () => void; tid: string }> = ({
  onClose,
  tid,
}) => {
  console.log(tid);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="fixed top-0 left-0 w-full h-full min-h-screen bg-primary-base bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-5"
    >
      <motion.div
        initial={{ top: 200 }}
        animate={{ top: 0 }}
        exit={{ top: 200 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        }}
        className="max-w-[600px] relative p-5 shadow-md bg-white mx-auto w-full rounded-2xl"
      >
        <h6 className="md:text-xl text-center font-medium">
          آیا از لغو پرداخت برای این کاربر اطمینان دارید؟
        </h6>
        <div className="flex items-center justify-center gap-5 w-full mt-5">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              bounce: 0.5,
              duration: 0.5,
              type: "spring",
              stiffness: 500,
            }}
            className="bg-success text-white font-medium p-2 rounded-lg"
          >
            <a
              href={
                process.env.BASE_URL +
                "/profile/snapCancel.php?transactionId=" +
                tid
              }
            >
              لغو پرداخت اسنپ‌پی
            </a>
          </motion.button>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              bounce: 0.5,
              duration: 0.5,
              type: "spring",
              stiffness: 500,
            }}
            className="bg-error text-white font-medium p-2 rounded-lg"
          >
            انصراف
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SnapModal;
