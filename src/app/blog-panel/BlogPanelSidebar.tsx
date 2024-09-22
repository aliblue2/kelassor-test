"use client";
import { useAuth } from "@/components/Auth/useAuth";
import {
  FilePlus2Icon,
  FilesIcon,
  HomeIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
//BlogPanelSidebar component
const BlogPanelSidebar = () => {
  const router = useRouter();
  const { logOut } = useAuth();
  const [hidden, sethidden] = useState(true);
  const path = usePathname();
  return (
    <>
      <button
        onClick={() => sethidden((p) => !p)}
        className="m-2 z-[51] rounded-full p-5 bg-primary-base text-white absolute top-0 left-0 md:hidden"
      >
        <MenuIcon />
      </button>
      <div
        className={`absolute md:static z-[50] ${hidden ? "right-[-250px]" : "right-0"} shrink-0 w-[250px] bg-primary-base flex flex-col p-5 gap-5 h-full`}
      >
        <Image
          src="/aboutUs/logo.png"
          height={100}
          width={300}
          alt="logo"
          className="object-contain scale-75"
        />
        <Link
          href={"/"}
          className="relative gap-2 items-center bg-background group hover:text-primary-base active:text-secondary-base duration-200 rounded-xl flex p-2 font-bold "
        >
          <HomeIcon />
          خانه
        </Link>
        <Link
          href={"/blog-panel"}
          className={`gap-2 relative items-center bg-background hover:text-primary-base active:text-secondary-base duration-500 transition-colors flex p-2 font-bold ${!path.split("/")[2] ? "rounded-r-xl" : "rounded-xl"}`}
        >
          {!path.split("/")[2] && (
            <>
              <div
                className={` absolute bottom-full right-[calc(100%-4px)] rounded-bl-2xl w-6 h-20 shadow-[0_40px_0_0_theme(colors.background)] ${!path.split("/")[2] ? "opacity-100" : "opacity-0"}`}
              />
              <div
                className={` absolute top-full right-[calc(100%-4px)] rounded-tl-2xl w-6 h-20 shadow-[0_-40px_0_0_theme(colors.background)] ${!path.split("/")[2] ? "opacity-100" : "opacity-0"}`}
              />
            </>
          )}
          <FilesIcon />
          بلاگ‌ها
        </Link>
        <Link
          href={"/blog-panel/new-blog"}
          className={`gap-2 relative items-center bg-background hover:text-primary-base active:text-secondary-base duration-500 flex p-2 transition-colors font-bold ${path.split("/")[2] === "new-blog" ? "rounded-r-xl" : "rounded-xl"}`}
        >
          <>
            <div
              className={` absolute bottom-full right-[calc(100%-4px)] rounded-bl-2xl w-6 h-20 shadow-[0_40px_0_0_theme(colors.background)] ${path.split("/")[2] === "new-blog" ? "opacity-100" : "opacity-0"}`}
            />
            <div
              className={` absolute top-full right-[calc(100%-4px)] rounded-tl-2xl w-6 h-20 shadow-[0_-40px_0_0_theme(colors.background)] ${path.split("/")[2] === "new-blog" ? "opacity-100" : "opacity-0"}`}
            />
          </>
          <FilePlus2Icon />
          بلاگ جدید
        </Link>
        <button
          onClick={() => {
            logOut();
            router.push("/");
          }}
          className="gap-2 items-center bg-background hover:text-primary-base active:text-secondary-base duration-200 rounded-xl flex p-2 font-bold "
        >
          <LogOutIcon />
          خروج
        </button>
      </div>
    </>
  );
};

export default BlogPanelSidebar;
