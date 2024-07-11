"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

//SideBarButton component
type SideBarButtonProps = {
  children: React.ReactNode;
  href: string;
};
const SideBarButton = ({ children, href }: SideBarButtonProps) => {
  const path = usePathname();
  const active = path === href;
  return (
    <Link
      href={href}
      className={`ml-4 rounded-l-[20px] items-center px-5 py-4 flex pr-10 gap-2 xl:text-lg ${
        active ? "bg-primary-base text-white" : "hover:bg-secondary-75"
      }`}
    >
      {children}
    </Link>
  );
};

export default SideBarButton;
