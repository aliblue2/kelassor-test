"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

//NavButton component
type NavButtonProps = {
  to: string;
  children: ReactNode;
};
const NavButton = ({ to, children }: NavButtonProps) => {
  const pathName = usePathname();

  return (
    <motion.li className="relative flex items-center w-full h-full list-none justify-evenly">
      <Link
        className="flex flex-col items-center justify-center duration-200"
        href={to}
      >
        {children}
      </Link>
      {pathName === to && (
        <motion.span
          layoutId="activePath"
          className="absolute left-0 w-full h-1 bottom-1 rounded-xl bg-primary-base"
        />
      )}
    </motion.li>
  );
};

export default NavButton;
