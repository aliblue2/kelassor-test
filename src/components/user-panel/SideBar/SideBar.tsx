"use client";

import { useAuth } from "@/components/Auth/useAuth";
import SideBarCommon from "./SideBarCommon";


//SideBar component
const SideBar = () => {
  const { user } = useAuth();
  return (
    <div className="hidden sticky top-[calc(80px)] shrink-0 flex-col gap-1 h-full bg-white md:flex rounded-l-[30px] shadow2">
      <div className="flex gap-1 justify-center my-10 text-base px-5 xl:text-lg font-bold">
        {user && user.name ? user.name +" جان": ""} به{" "}
        <div className="text-primary-base">کلاسور</div>خوش اومدی
      </div>
      <SideBarCommon/>
    </div>
  );
};

export default SideBar;
