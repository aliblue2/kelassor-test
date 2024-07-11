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
import { useAuth } from "@/components/Auth/useAuth";
import { useRouter } from "next/navigation";
//SideBarCommon component
const SideBarCommon = () => {
  const { logOut } = useAuth();
  const router = useRouter();
  return (
    <>
      <SideBarButton href="/user-panel">
        <PdashboardIcon />
        داشبورد شخصی
      </SideBarButton>
      <SideBarButton href="/user-panel/account">
        <PaccountIcon />
        اطلاعات کاربری
      </SideBarButton>
      <SideBarButton href="/user-panel/bootcamp">
        <PbootcampsIcon />
        بوتکمپ‌ها
      </SideBarButton>
      {/*todo:
      <SideBarButton href="/user-panel/ai">
        <PaiIcon />
        مسیر با هوش مصنوعی
      </SideBarButton>
      */}
      <SideBarButton href="/user-panel/payment">
        <PpaymentIcon />
        پرداخت‌ها
      </SideBarButton>
      <SideBarButton href="/user-panel/support">
        <PsupportIcon />
        پشتیبانی
      </SideBarButton>
      <button
        className={`ml-4 rounded-l-[20px] py-4 flex pr-10 gap-2 text-lg `}
        onClick={() => {
          logOut();
          router.push("/");
        }}
      >
        <PlogoutIcon />
        خروج از حساب کاربری
      </button>
    </>
  );
};

export default SideBarCommon;
