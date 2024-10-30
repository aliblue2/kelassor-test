import React from "react";
const LandingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="w-full h-full min-h-screen fixed top-0 left-0 overflow-scroll bg-gradient-to-br from-white to-emerald-100 z-[200]">
      <div className="max-w-[600px] mx-auto p-5">{children}</div>
    </main>
  );
};

export default LandingLayout;
