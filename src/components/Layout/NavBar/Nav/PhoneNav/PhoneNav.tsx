"use client";

import { bootcamp, bootcampSimple } from "@/types/bootcamp";
import { motion } from "framer-motion";
import Link from "next/link";
import PhoneNavGroup from "./PhoneNavGroup";
import Image from "next/image";
import { AboutusIcon, CallusIcon, RulesIcon } from "@/components/Ui/Icons";

//PhoneNav component
type PhoneNavProps = {
  bootcamps: bootcampSimple[];
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
        fixed top-0 pt-[60px] w-full left-0 z-[100]
        flex flex-col
        font-bold text-xl
        pb-10 rounded-b-[40px]
        "
      >
        {/*todo:
        <Link className="p-5 border-b border-b-secondary-50" href="/">
          خانه
        </Link>
      */}
        <PhoneNavGroup title="بوتکمپ‌ها">
          <Link href="/bootcamp">همه بوتکمپ‌ها</Link>
          {bootcamps.map((bc: bootcampSimple, index: number) =>
            bc.status !== "notactive" ? (
              <Link
                key={index}
                className="flex justify-between items-center"
                href={`/bootcamp/${bc.url}`}
              >
                {bc.header_title}{" "}
                <Image
                  src={bc.logo}
                  height={20}
                  width={20}
                  alt={bc.header_title}
                />
              </Link>
            ) : null,
          )}
        </PhoneNavGroup>
        <Link className="p-5 border-b border-b-secondary-50" href="/blog">
          بلاگ
        </Link>
        <PhoneNavGroup title="ارتباط با ما">
          <Link className="flex items-center justify-between" href="/about-us">
            درباره ما <RulesIcon />
          </Link>
          <Link
            className="flex items-center justify-between"
            href="/about-us/contact-us"
          >
            تماس با ما
            <CallusIcon />
          </Link>
          <Link
            className="flex items-center justify-between"
            href="/about-us/user-agreements"
          >
            قوانین و مقررات
            <AboutusIcon />
          </Link>
        </PhoneNavGroup>
      </motion.div>
    </>
  );
};

export default PhoneNav;
