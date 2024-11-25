import { NextPage } from "next";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return <div className="fixed left-0 top-0 w-full h-full overflow-hidden z-20 bg-white">{children}</div>;
};

export default Layout;
