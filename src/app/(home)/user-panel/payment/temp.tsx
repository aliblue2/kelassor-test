"use client";
import { getPanelBootcamps } from "@/requests/user-panel/getPanelBootcamps";
import { getPanelPayments } from "@/requests/user-panel/getPanelPayments";
import { getCookie } from "@/utils/cookie";
//temp component
const Tempdata = () => {
  const getBoot = async () => {
    const res = await getPanelBootcamps(getCookie("session_id"));
    console.log(res);
  };
  const getPay = async () => {
    const res = await getPanelPayments(getCookie("session_id"));
    console.log(res);
  };
  return (
    <>
      <button onClick={getPay}>pay</button>
      <button onClick={getBoot}>boot</button>
    </>
  );
};

export default Tempdata;
