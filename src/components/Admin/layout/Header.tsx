"use client";
import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UserInfo from "./UserInfo";
import { Menu, Search } from "lucide-react";
import MenuDrawer from "./menu/MenuDrawer";

const Header = () => {
  const [menuDrawerVis, setMenuDrawerVis] = useState(false);
  const menuDrawerToggler = useCallback(() => {
    setMenuDrawerVis((prevState) => {
      if (prevState) {
        document.body.style.overflow = "unset";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !prevState;
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ top: -200 }}
        animate={{ top: 0 }}
        className="relative overflow-hidden w-full pb-2 flex items-center justify-between"
      >
        <div className="flex items-center justify-start gap-2 md:w-3/12">
          <Menu
            onClick={menuDrawerToggler}
            size={28}
            className="text-primary-base md:hidden cursor-pointer"
          />
          <UserInfo />
          <Search size={18} className="md:hidden" />
        </div>

        <div className="h-12 w-7/12 bg-white shadow2 rounded-lg md:flex hidden items-center justify-start gap-2 pl-1">
          <input
            type="text"
            name="search"
            placeholder="دنبال چه چیزی میگردید؟"
            className="w-full p-2 outline-none"
          />
          <button type="submit">
            <Search size={24} className="text-light-1" />
          </button>
        </div>

        <div className="flex items-center justify-center text-white p-2 bg-primary-base h-7 md:h-12 rounded-lg">
          <span className="text-xs md:text-lg">
            {new Date().toLocaleDateString("fa-IR", {
              weekday: "short",
              month: "short",
              year: "2-digit",
              day: "2-digit",
            })}
          </span>
        </div>
      </motion.div>
      <AnimatePresence>
        {menuDrawerVis && <MenuDrawer menuToggler={menuDrawerToggler} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
