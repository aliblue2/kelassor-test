"use client";

import AuthProvider from "@/components/Auth/AuthContext";
import BootcampsProvider from "@/contexts/BootcampsContext";
import Session from "@/contexts/Session";
import { bootcampSimple } from "@/types/bootcamp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

//Providers component
type ProvidersProps = {
  children: ReactNode;
  bootcamps: bootcampSimple[];
};
const queryClient = new QueryClient();
const Providers = ({ children, bootcamps }: ProvidersProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BootcampsProvider bootcamps={bootcamps}>
          <AuthProvider>
            <Session>{children}</Session>
          </AuthProvider>
        </BootcampsProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
