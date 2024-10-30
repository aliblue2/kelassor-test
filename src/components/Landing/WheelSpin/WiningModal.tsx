"use client";
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

const WiningModal: React.FC<{ discount: string; onClose: () => void }> = ({
  onClose,
  discount,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "keyframes",
        ease: "easeInOut",
      }}
      className="w-full fixed bg-opacity-40 backdrop-blur-lg top-0 left-0 h-full bg-primary-base min-h-screen z-[201] flex items-center justify-center p-5"
    >
      <motion.div
        className="max-w-[600px] relative p-5 w-full rounded-xl bg-white shadow-md"
        initial={{ opacity: 0, top: 200 }}
        exit={{ opacity: 0, top: 200 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{
          type: "spring",
          bounce: 0.4,
        }}
      >
        <X
          size={18}
          className="absolute top-2 left-2 text-primary-base bg-primary-base bg-opacity-20 rounded-full"
          onClick={onClose}
        />
        <div className="flex flex-col items-center justify-start gap-5 my-5">
          <h5 className="md:text-xl font-medium">🎉 تبریک! شما برنده شدید! 🎉</h5>
          <h6 className="text-center text-lg md:text-2xl font-bold bg-primary-base p-2 rounded-md bg-opacity-15 px-4 text-primary-20">
            تخفیف شما : {parseInt(discount).toLocaleString("fa-IR")}
          </h6>
          <span className="text-sm md:text-base font-medium text-center">
            از این کد می‌توانید برای خرید بعدی خود استفاده کنید. موفق باشید! ✨
          </span>
        </div>

        <Link
          className="p-2 bg-primary-base hover:bg-primary-40 transition-colors duration-300 w-full rounded-md text-white text-lg mt-5 block text-center"
          href={"/bootcamp"}
        >
          دیدن بوتکمپ ها
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default WiningModal;
