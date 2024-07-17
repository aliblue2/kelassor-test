"use client";

import { getCookie } from "@/utils/cookie";
import MyTicketsItem, { ticket } from "./MyTicketsItem";
import { useQuery } from "@tanstack/react-query";
import { getTickets } from "@/requests/ticket/getTickets";

//MyTickets component
const MyTickets = () => {
  const { data } = useQuery({
    queryKey: ["tickets"],
    queryFn: () => getTickets(getCookie("session_id")),
  });
  return data?.length ? (
    <div className="flex overflow-hidden flex-col text-xs text-center rounded-2xl md:text-base">
      <div className="grid grid-cols-5 gap-2 justify-items-center items-center p-2 text-white bg-primary-base">
        <div>موضوع</div>
        <div>شناسه</div>
        <div>تاریخ</div>
        <div>وضعیت</div>
      </div>
      {/******************************************************************************
          data */}
      {data &&
        data.map((item) => <MyTicketsItem key={item.chat_id} data={item} />)}
    </div>
  ) : (
    <div className="flex overflow-hidden flex-col text-xs text-center rounded-2xl md:text-base">
    <div className="bg-light-3 p-2">تیکت ندارید</div>
    </div>
  );
};

export default MyTickets;
