"use client";
import Nav from "./Nav/Nav";
import CustomButton from "@/components/Ui/CustomButton";
import { bootcamp } from "@/types/bootcamp";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
//import Image from "next/image";

//NavBar component
type NavBarProps = { bootcamps: bootcamp[] };
const NavBar = ({ bootcamps }: NavBarProps) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative z-50 flex container md:grid border-b h-[60px] grid-cols-[1fr_4fr_1fr]"
    >
      {/* menu for phone ********************************************************************************/}
      <div className="flex justify-center items-center md:hidden text-primary-base">
        <MenuIcon size={36} />
      </div>
      {/* logo ********************************************************************************/}
      <div //todo get svg logo
        className="flex ms-auto md:ms-0 items-center grow p-2 h-full"
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
          todo
        </CustomButton>
      </div>
    </motion.div>
  );
};

export default NavBar;
