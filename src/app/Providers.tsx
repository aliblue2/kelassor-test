"use client";

import AuthProvider from "@/components/Auth/AuthContext";
import Session from "@/components/Auth/Session";
import BootcampsProvider from "@/contexts/BootcampsContext";
import WorkShopsContextProvider from "@/contexts/WorkShopContext";
import { bootcampSimple } from "@/types/bootcamp";
import { WorkShopMain } from "@/types/Workshop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

//Providers component
type ProvidersProps = {
  children: ReactNode;
  bootcamps: bootcampSimple[];
  workShops: WorkShopMain[];
};
const queryClient = new QueryClient();
const Providers = ({ children, bootcamps, workShops }: ProvidersProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BootcampsProvider bootcamps={bootcamps}>
          <WorkShopsContextProvider workshops={workShops}>
            <AuthProvider>
              <Session>{children}</Session>
            </AuthProvider>
          </WorkShopsContextProvider>
        </BootcampsProvider>
      </QueryClientProvider>
    </>
  );
};

export default Providers;
