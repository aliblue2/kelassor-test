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
  const panel = async () => {
    const res = await fetch(`${process.env.BASE_URL}/user/userDashboard.php`, {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        id: getCookie("session_id"),
      }),
      cache: "no-store",
    }).then(res=>res.json());
    console.log(res)
  };
  return (
    <>
      <button onClick={getPay}>pay</button>
      <button onClick={getBoot}>boot</button>
      <button onClick={panel}>panel</button>
    </>
  );
};

export default Tempdata;
