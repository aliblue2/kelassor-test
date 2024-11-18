"use client";
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import FileUpload from "../FileUpload/FileUpload";
const Modal: React.FC<{
  advanceId: number;
  modalTogglerFc: (advanceId: number) => void;
}> = ({ modalTogglerFc, advanceId }) => {
  console.log(advanceId);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
        duration: 0.5,
      }}
      className="fixed z-30 top-0 left-0 p-5 w-full h-full min-h-screen bg-primary-base bg-opacity-35 backdrop-blur-lg flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, top: -200 }}
        exit={{ opacity: 0, top: -200 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{
          type: "spring",
          bounce: 0.5,
          duration: 0.5,
        }}
        className="relative bg-white shadow-md rounded-2xl p-5 w-full max-w-[600px] "
      >
        <X
          size={18}
          className="absolute top-2 left-2 text-primary-base"
          onClick={() => modalTogglerFc(-1)}
        />
        <p className="text-sm font-medium leading-7">
          برای پرداخت مبلغ کارگاه ، لطفا مبلغ متعلق به هر جلسه را به شماره کارت{" "}
          <span className="text-primary-base bg-primary-base/20 px-2 rounded-md mx-1">
            603799XXXXYYYYZZZZ
          </span>
          یا شماره شبا
          <span className="text-primary-base bg-primary-base/20 px-2 rounded-md mx-1">IRXX0170YYYYYYYYYYYYYYYYYY
          </span>
          متعلق به حامد عابدینی در نزد بانک ملی واریز نموده و عکس رسید پرداخت را
          در زیر آپلود نمایید .
        </p>
        <FileUpload />
      </motion.div>
    </motion.div>
  );
};

export default Modal;
