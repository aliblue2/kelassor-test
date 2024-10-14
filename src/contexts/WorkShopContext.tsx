"use client";
import { WorkShopMain } from "@/types/Workshop";
import React from "react";
import { createContext } from "react";

export type WorkShopContextType = {
  workshops: WorkShopMain[];
};
export const WorkShopContext = createContext<WorkShopContextType | null>(null);
const WorkShopsContextProvider: React.FC<{
  children: React.ReactNode;
  workshops: WorkShopMain[];
}> = ({ children, workshops }) => {
  return (
    <WorkShopContext.Provider value={{ workshops }}>
      {children}
    </WorkShopContext.Provider>
  );
};

export default WorkShopsContextProvider;
