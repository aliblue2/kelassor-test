"use client";
import React, { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import dashboardImg from "@/../public/admin/dashboard.svg";
import dashboardColoredImg from "@/../public/admin/dashboardColor.svg";
import bagImg from "@/../public/admin/bag.svg";
import bagColorImg from "@/../public/admin/bagColor.svg";
import usersImg from "@/../public/admin/users.svg";
import usersColorImg from "@/../public/admin/usersColor.svg";
import bootcampsImg from "@/../public/admin/bootcamps.svg";
import bootcampsColorImg from "@/../public/admin/bootcampsColor.svg";
import financeImg from "@/../public/admin/finance.svg";
import financeColorImg from "@/../public/admin/financeColor.svg";
import supportImg from "@/../public/admin/support.svg";
import supportColorImg from "@/../public/admin/supportColor.svg";
import logout from "@/../public/admin/logout.svg";
import Link from "next/link";
import Image from "next/image";

type navLink = {
  url: string;
  title: string;
  imageSrc: string;
  coloredIMgSrc: string;
};

const navLinks: navLink[] = [
  {
    title: "داشبورد",
    imageSrc: dashboardImg,
    url: "/admin/dashboard",
    coloredIMgSrc: dashboardColoredImg,
  },
  {
    title: "میزکار",
    imageSrc: bagImg,
    url: "/admin/main",
    coloredIMgSrc: bagColorImg,
  },
  {
    title: "کاربران",
    imageSrc: usersImg,
    url: "/admin/users",
    coloredIMgSrc: usersColorImg,
  },
  {
    title: " بوتکمپ‌ها",
    imageSrc: bootcampsImg,
    url: "/admin/bootcamps",
    coloredIMgSrc: bootcampsColorImg,
  },
  {
    title: "کلاسور ادونس",
    imageSrc: bootcampsImg,
    url: "/admin/advance",
    coloredIMgSrc: bootcampsColorImg,
  },
  {
    title: "مالی",
    imageSrc: financeImg,
    url: "/admin/finance",
    coloredIMgSrc: financeColorImg,
  },
  {
    title: "پشتیبانی",
    imageSrc: supportImg,
    url: "/admin/support",
    coloredIMgSrc: supportColorImg,
  },
  {
    title: "خروج از حساب کاربری",
    imageSrc: logout,
    url: "/logout",
    coloredIMgSrc: "",
  },
];

const MenuNavigation = () => {
  const pathName = usePathname();
  const [dashboard, setDashboard] = useState(true);

  const dashboardToggler = useCallback(() => {
    setDashboard((prevState) => !prevState);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full gap-8">
      <div className="w-fit flex items-center justify-center gap-2 text-xs md:text-sm rounded-lg bg-light-3 text-light-1 p-[2px] ">
        <span
          onClick={dashboardToggler}
          className={`${dashboard ? "bg-primary-base text-white" : ""} px-2 py-1 rounded-lg cursor-pointer`}
        >
          پنل ادمین
        </span>
        <span
          onClick={dashboardToggler}
          className={`${!dashboard ? "bg-primary-base text-white" : ""} px-2 py-1 rounded-lg cursor-pointer`}
        >
          ‌CRM
        </span>
      </div>
      <div className="flex flex-col items-center justify-start w-full gap-2">
        {navLinks.map((navItem) => {
          return (
            <Link
              className={`w-full flex p-2 items-center justify-start gap-3 rounded-lg ${pathName.startsWith(navItem.url) ? "text-primary-base bg-primary-base bg-opacity-10 font-medium" : "text-gray-4"} hover:bg-primary-base hover:bg-opacity-10 transition-colors duration-300 hover:text-primary-base`}
              href={navItem.url}
              key={navItem.url}
            >
              <Image
                src={
                  pathName.startsWith(navItem.url)
                    ? navItem.coloredIMgSrc
                    : navItem.imageSrc
                }
                alt={navItem.title}
                className="max-w-6"
              />
              <h6 className="md:text-lg">{navItem.title}</h6>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuNavigation;
