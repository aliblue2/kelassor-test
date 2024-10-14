import { useContext } from "react";
import { WorkShopContextType, WorkShopContext } from "./WorkShopContext";

export const useWorkShops = () =>
  useContext(WorkShopContext) as WorkShopContextType;
