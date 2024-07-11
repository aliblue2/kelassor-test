"use client";

import { bootcampSimple } from "@/types/bootcamp";
import { ReactNode, createContext, useState } from "react";

export type BootcampsContextType = {
  bootcamps: bootcampSimple[] ;
};
export const BootcampsContext = createContext<BootcampsContextType | null>(
  null
);
//BootcampsProvider component
const BootcampsProvider = ({
  children,
  bootcamps,
}: {
  children: ReactNode;
  bootcamps: bootcampSimple[] ;
}) => {
  return (
    <BootcampsContext.Provider value={{ bootcamps }}>
      {children}
    </BootcampsContext.Provider>
  );
};

export default BootcampsProvider;
