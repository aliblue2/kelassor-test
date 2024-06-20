"use client";

import AuthProvider from "@/components/Auth/AuthContext";
import { ReactNode } from "react";

//Providers component
type ProvidersProps = {
  children: ReactNode;
};
const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default Providers;
