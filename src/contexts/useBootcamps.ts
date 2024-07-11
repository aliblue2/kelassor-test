import { useContext } from "react";
import { BootcampsContext, BootcampsContextType } from "./BootcampsContext";

export const useBootcamps = () =>
  useContext(BootcampsContext) as BootcampsContextType;
