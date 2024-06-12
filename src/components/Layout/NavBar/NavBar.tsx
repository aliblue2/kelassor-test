"use client";
import Nav from "./Nav/Nav";
import CustomButton from "@/components/Ui/CustomButton";
import { bootcamp } from "@/types/bootcamp";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PhoneNav from "./Nav/PhoneNav/PhoneNav";
//import Image from "next/image";

//NavBar component
type NavBarProps = { bootcamps: bootcamp[] };
const NavBar = ({ bootcamps }: NavBarProps) => {
  const [phoneNav, setphoneNav] = useState(false);
  return (
    <>
      <div className="z-[101] sticky top-0 h-[60px] bg-background border-b ">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="container flex  md:grid grid-cols-[1fr_4fr_1fr] h-full "
        >
          {/* menu button for phone ********************************************************************************/}
          <div
            onClick={() => setphoneNav((e) => !e)}
            className="flex justify-center items-center md:hidden text-primary-base"
          >
            {phoneNav ? <XIcon size={35} /> : <MenuIcon size={36} />}
          </div>
          {/* logo ********************************************************************************/}
          <div //todo get svg logo
            className="flex items-center p-2 h-full ms-auto grow md:ms-0"
          >
            <Image src="/logo.png" alt="logo" width={100} height={60} />
          </div>
          {/* navigation for desktop ********************************************************************************/}
          <div className="hidden md:block">
            <Nav bootcamps={bootcamps} />
          </div>
          {/* account ********************************************************************************/}
          <div className="flex justify-end items-center">
            <CustomButton //todo
            >
              ورود | ثبت‌نام
            </CustomButton>
          </div>
        </motion.div>
      </div>

      {/******************************************************************************
        navigation for phone */}
      <AnimatePresence>
        {phoneNav && (
          <PhoneNav close={() => setphoneNav(false)} bootcamps={bootcamps} />
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
