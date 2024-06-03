"use client";
import Link from "next/link";
import { ReactNode } from "react";

//NavButton component
type NavButtonProps = {
  to: string;
  children: ReactNode;
};
const NavButton = ({ to, children }: NavButtonProps) => {
  return (
    <Link
      className="flex justify-center items-center py-2 border-b-4 duration-200 border-b-background hover:border-b-secondary-base"
      href={to}
    >
      {children}
    </Link>
  );
};

export default NavButton;