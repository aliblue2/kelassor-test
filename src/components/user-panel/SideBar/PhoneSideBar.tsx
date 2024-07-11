"use client";

import {
  PaccountIcon,
  PbootcampsIcon,
  PdashboardIcon,
  PlogoutIcon,
  PpaymentIcon,
  PsupportIcon,
} from "@/components/Ui/Icons";
import SideBarButton from "./SideBarButton";
import { motion } from "framer-motion";
import SideBarCommon from "./SideBarCommon";

//phone SideBar component
type PhoneSideBarProps = { close: () => void };
const PhoneSideBar = ({ close }: PhoneSideBarProps) => {
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
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        onClick={close}
        className="w-full md:hidden z-[100] rounded-b-[40px] flex fixed pt-[60px] gap-1 flex-col bg-white py-10 shadow2"
      >
        <SideBarButton href="/">خانه</SideBarButton>

        <SideBarCommon />
      </motion.div>
    </>
  );
};

export default PhoneSideBar;
