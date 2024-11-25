"use client";
import Nav from "./Nav/Nav";
import CustomButton from "@/components/Ui/CustomButton";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import PhoneNav from "./Nav/PhoneNav/PhoneNav";
import { useAuth } from "@/components/Auth/useAuth";
import { usePathname, useRouter } from "next/navigation";
import PhoneSideBar from "@/components/user-panel/SideBar/PhoneSideBar";
import { useBootcamps } from "@/contexts/useBootcamps";
import Link from "next/link";

//NavBar component
const NavBar = () => {
  const [phoneNav, setphoneNav] = useState(false);
  const { setModal } = useAuth();
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const { bootcamps } = useBootcamps();

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
          <Link //todo get svg logo
            href={"/"}
            className="flex items-center p-2 h-full ms-auto grow md:ms-0"
          >
            <Image src="/logo.png" alt="logo" width={100} height={60} />
          </Link>
          {/* navigation for desktop ********************************************************************************/}
          <div className="hidden md:block">
            <Nav bootcamps={bootcamps} />
          </div>
          {/* account ********************************************************************************/}
          <div className="flex justify-end items-center">
            <CustomButton
              onClick={
                user ? () => router.push("/user-panel") : () => setModal(true)
              }
            >
              {!!user
                ? user.name
                  ? user.name
                  : "حساب کاربری"
                : " ورود | ثبت‌نام "}
            </CustomButton>
          </div>
        </motion.div>
      </div>

      {/******************************************************************************
        navigation for phone */}
      <AnimatePresence>
        {phoneNav &&
          (pathname.includes("user-panel") ? (
            <PhoneSideBar close={() => setphoneNav(false)} />
          ) : (
            <PhoneNav close={() => setphoneNav(false)} bootcamps={bootcamps} />
          ))}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
