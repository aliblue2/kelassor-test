"use client";

import { getUserInfo } from "@/requests/user-panel/getUserInfo";
import { getCookie } from "./cookie";
import { getPanelPayments } from "@/requests/user-panel/getPanelPayments";
import { getPanelBootcamps } from "@/requests/user-panel/getPanelBootcamps";

//Clg component
type ClgProps = {
  data: any;
};

const Clg = ({ data }: ClgProps) => {
  console.log("CLG", data);
  return (
    <div className="fixed top-20 right-20 size-40 bg-red  z-50">
    </div>
  );
};

export default Clg;
