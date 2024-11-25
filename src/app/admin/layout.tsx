import Header from "@/components/Admin/layout/Header";
import MenuNavigation from "@/components/Admin/layout/menu/Menu";
import SideBar from "@/components/Admin/layout/SideBar";
import { Metadata, NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "پنل ادمین کلاسور",
  description: "پنل ادمین",
};

const Layout: NextPage<Props> = async ({ children }) => {
  return (
    <div className="w-full h-full min-h-screen bg-light-4">
      <section className="w-full h-full max-w-[1400px] mx-auto p-5 overflow-hidden">
        <Header />
        <section className="flex items-start justify-between h-full min-h-screen gap-5 mt-5">
          <SideBar />
          <main className="w-full overflow-hidden md:w-9/12">{children}</main>
        </section>
      </section>
    </div>
  );
};

export default Layout;
