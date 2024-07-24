"use client";

import { getTicket } from "@/requests/ticket/getTicket";
import { getCookie } from "@/utils/cookie";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import TicketMessage from "./TicketMessage";
import CustomInput from "../Account/CustomInput";
import CustomButton from "@/components/Ui/CustomButton";
import { newTicket } from "@/requests/ticket/newTicket";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import LoadingComponent from "@/components/Ui/LoadingComponent";

//MyTicketsItemDetail component
type MyTicketsItemDetailProps = {
  chatID: number;
  type: "technical" | "financial" | null;
};
const MyTicketsItemDetail = ({ chatID, type }: MyTicketsItemDetailProps) => {
  const [message, setmessage] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { data, isLoading } = useQuery({
    queryKey: ["tickets", chatID],
    queryFn: () =>
      getTicket({ session_id: getCookie("session_id"), chatID: chatID }),
    refetchInterval: 1000 * 60 * 1,
  });

  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: [],

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets", chatID] });
    },
    mutationFn: () =>
      newTicket({
        chatID: chatID,
        text: message,
        type: type,
      }),
  });
  const submit = () => {
    if (!type) {
      toast.error("موضوع تیکت را انتخاب نکرده‌اید");
      return;
    }
    if (!message) {
      toast.error("متن پیام نمی‌تواند خالی باشد");
      return;
    }
    mutate();
    if (inputRef.current) inputRef.current.value = "";
  };
  return (
    <div className="flex flex-col p-5 m-5 bg-white rounded-2xl">
      <div className="flex flex-col overflow-scroll h-48">
        {isLoading ? (
          <div className="size-20 flex ">
            <LoadingComponent />
          </div>
        ) : (
          data &&
          data.map((item) => (
            <TicketMessage
              left={item.side !== "client"}
              key={item.id}
              message={item.text}
            />
          ))
        )}
      </div>
      <div className="flex gap-2">
        <CustomInput
          ref={inputRef}
          name="message input"
          placeholder="پیام جدید ..."
          onChange={(e) => setmessage(e.target.value)}
        />
        <CustomButton disabled={isPending} loading={isPending} onClick={submit}>
          ارسال
        </CustomButton>
      </div>
    </div>
  );
};

export default MyTicketsItemDetail;
