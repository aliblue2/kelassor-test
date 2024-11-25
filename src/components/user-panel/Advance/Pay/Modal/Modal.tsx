"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { LoaderCircle, X } from "lucide-react";
import FileUpload from "../FileUpload/FileUpload";
import { activeAdvanceItem } from "../../ActiveAdvances";
import {
  checkoutAdvance,
  checkoutRespones,
} from "@/requests/user-panel/advance/checkoutAdvance";
const Modal: React.FC<{
  hashedId: string | undefined;
  activeAdvanceItem: activeAdvanceItem;
  modalToggler: (advanceId: number, advanceTitle: string) => void;
}> = ({ modalToggler, activeAdvanceItem, hashedId }) => {
  const [filePath, setFilePAth] = useState<File | null>(null);
  const [loading , setLoading] = useState(false)
  const [checkoutState, setCheckoutState] = useState<checkoutRespones>({
    success: false,
    message: "",
  });

  const checkoutAdvanceHandler = async () => {
    setLoading(true)
    const state = await checkoutAdvance(
      hashedId,
      activeAdvanceItem.title,
      activeAdvanceItem.advanceId,
      filePath
    );
    setCheckoutState({
      success: state.success,
      message: state.message,
    });

    setLoading(false)

  };

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
      className="fixed z-30 top-0 left-0 p-5 w-full h-full min-h-screen bg-primary-base bg-opacity-35 backdrop-blur-lg flex items-center justify-center overflow-hidden"
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
        className="relative bg-white shadow-md rounded-2xl p-5 w-full max-w-[600px] overflow-hidden "
      >
        <X
          onClick={() => modalToggler(-1, "")}
          size={18}
          className="absolute top-2 left-2 text-primary-base"
        />
        {loading && <div className="absolute top-0 left-0 backdrop-blur-sm bg-white w-full h-full flex items-center justify-center">
            <LoaderCircle size={32} className="animate-spin text-primary-base" />
          </div>}

        {checkoutState.success && (
          <h6 className="text-2xl text-center font-medium text-primary-base">
            {checkoutState.message}
          </h6>
        )}
        {!checkoutState.success && (
          <>
            <p className="text-sm font-medium leading-7">
              برای پرداخت مبلغ کارگاه ، لطفا مبلغ متعلق به هر جلسه را به شماره
              کارت{" "}
              <span className="text-primary-base bg-primary-base/20 px-2 rounded-md mx-1">
                603799XXXXYYYYZZZZ
              </span>
              یا شماره شبا
              <span className="text-primary-base bg-primary-base/20 px-2 rounded-md mx-1">
                IRXX0170YYYYYYYYYYYYYYYYYY
              </span>
              متعلق به حامد عابدینی در نزد بانک ملی واریز نموده و عکس رسید
              پرداخت را در زیر آپلود نمایید .
            </p>
            <FileUpload
              checkoutAdvanceFc={checkoutAdvanceHandler}
              file={filePath}
              setFileFc={setFilePAth}
            />
            {!checkoutState.success && (
              <span className="text-error text-lg font-medium">
                {checkoutState.message}
              </span>
            )}
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Modal;
