import React from "react";
const LandingLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-white to-emerald-100 z-[200] p-5">
      <div className="max-w-[600px] mx-auto">{children}</div>
    </main>
  );
};

export default LandingLayout;
