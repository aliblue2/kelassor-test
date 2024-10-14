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
import { getWorkShops } from "@/requests/work-shop/getWorkShops";
import { useWorkShops } from "@/contexts/useWorkshops";

//NavBar component
const NavBar = () => {
  const [phoneNav, setphoneNav] = useState(false);

  const { setModal } = useAuth();
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const { bootcamps } = useBootcamps();
  const { workshops } = useWorkShops();

  return (
    <>
      <div className="z-[101] sticky top-0 h-16 bg-background border-b ">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="container flex h-full grid-cols-6 gap-3 md:grid "
        >
          {/* menu button for phone ********************************************************************************/}
          <div
            onClick={() => setphoneNav((e) => !e)}
            className="flex items-center justify-center md:hidden text-primary-base"
          >
            {phoneNav ? <XIcon size={35} /> : <MenuIcon size={36} />}
          </div>
          {/* logo ********************************************************************************/}
          <Link //todo get svg logo
            href={"/"}
            className="flex items-center h-full col-span-1 p-2 ms-auto grow md:ms-0"
          >
            <Image src="/logo.png" alt="logo" width={100} height={60} />
          </Link>
          {/* navigation for desktop ********************************************************************************/}
          <div className="hidden col-span-4 md:block">
            <Nav workshops={workshops} bootcamps={bootcamps} />
          </div>
          {/* account ********************************************************************************/}
          <div className="flex items-center justify-end col-span-1">
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
            <PhoneNav
              close={() => setphoneNav(false)}
              bootcamps={bootcamps}
              workshops={workshops}
            />
          ))}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
