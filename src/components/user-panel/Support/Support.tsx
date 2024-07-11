"use client";

import { useState } from "react";
import NewTicket from "./NewTicket";
import MyTickets  from "./MyTickets";
import { ticket } from "./MyTicketsItem";

//Support component
type SupportProps = { tickets: ticket[]; chatId: number };
const Support = ({ tickets, chatId }: SupportProps) => {
  const [state, setstate] = useState<"newTicket" | "myTickets">("newTicket");
  return (
    <div className="flex flex-col gap-10 py-10 grow">
      {/******************************************************************************
        change betwean newTicket and myTickets */}
      <div className="flex gap-10 font-bold">
        <button
          onClick={() => setstate("newTicket")}
          className="flex gap-2 items-center"
        >
          <div className="flex justify-center items-center rounded-full size-5 bg-secondary-75">
            {state === "newTicket" ? (
              <div className="rounded-full size-2 bg-primary-base" />
            ) : null}
          </div>
          ارسال تیکت
        </button>

        <button
          onClick={() => setstate("myTickets")}
          className="flex gap-2 items-center"
        >
          <div className="flex justify-center items-center rounded-full size-5 bg-secondary-75">
            {state === "myTickets" ? (
              <div className="rounded-full size-2 bg-primary-base" />
            ) : null}
          </div>
          تیکت‌های قبلی
        </button>
      </div>
      {/******************************************************************************
       */}
      {state === "newTicket" ? <NewTicket chatID={chatId}/> : <MyTickets />}
    </div>
  );
};

export default Support;
