"use client";

import { bootcamp } from "@/types/bootcamp";
import { motion } from "framer-motion";
import Link from "next/link";
import PhoneNavGroup from "./PhoneNavGroup";

//PhoneNav component
type PhoneNavProps = {
  bootcamps: bootcamp[];
  close: () => void;
};
const PhoneNav = ({ bootcamps, close }: PhoneNavProps) => {
  return (
    <>
      {/******************************************************************************
        blur background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
        className="overflow-hidden fixed top-[60px] backdrop-blur left-0 z-[99] w-screen h-dvh md:hidden"
      />
      {/******************************************************************************
        phone nav */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        onClick={close}
        className="
        bg-background md:hidden
        fixed top-[60px] w-full left-0 z-[100]
        flex flex-col
        font-bold text-xl
        pb-10 rounded-b-[40px]
        "
      >
        <Link className="p-5 border-b border-b-secondary-50" href="/">
          خانه
        </Link>
        <PhoneNavGroup title="بوتکمپ‌ها">
          <Link className="p-5" href="/blog">
            bb1
          </Link>
        </PhoneNavGroup>
        <Link className="p-5 border-b border-b-secondary-50" href="/blog">
          بلاگ
        </Link>
        <PhoneNavGroup title="ارتباط با ما">
          <Link href="">درباره ما</Link>
          <Link href="">تماس با ما</Link>
          <Link href="">قوانین و مقررات</Link>
        </PhoneNavGroup>
      
      </motion.div>
    </>
  );
};

export default PhoneNav;
