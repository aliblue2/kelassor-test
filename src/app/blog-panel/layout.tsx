"use client";

import BlogPanelSidebar from "./BlogPanelSidebar";

//layout component
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-dvh">
      <BlogPanelSidebar />
      <div className="flex flex-col p-5 md:p-10 grow overflow-auto gap-10">
        {children}
      </div>
    </div>
  );
};

export default layout;
