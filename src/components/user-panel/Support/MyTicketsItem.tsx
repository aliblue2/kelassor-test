">puse client";

import CustomButton from "@/components/Ui/CustomButton";
import { useState } from "react";
import MyTicketsItemDetail from "./MyTicketsItemDetail";

//MyTicketsItem component
export type ticket = {
  chat_id: number;
  date: string;
  status: "answered" | "notanswered";
  type: "tech" | "finance";
};
type MyTicketsItemProps = { data: ticket };
const MyTicketsItem = ({ data }: MyTicketsItemProps) => {
  const [expanded, setexpanded] = useState(false);
  return (
    <div key={data.chat_id} className="odd:bg-light-3 even:bg-light-4">
      <div className="grid grid-cols-5 gap-2 justify-items-center items-center p-2 ">
        <div>{data.type === "tech" ? "فنی" : "مالی"}</div>
        <div>{data.chat_id}</div>
        <div>{data.date}</div>
        {data.status === "answered" ? (
          <div className="p-2 rounded-lg bg-success-light text-success">
            پاسخ داده شده
          </div>
        ) : (
          <div className="p-2 rounded-lg bg-error-light text-error">
            پاسخ داده نشده
          </div>
        )}
        <CustomButton onClick={() => setexpanded((e) => !e)}>
          {expanded ? "بستن" : "مشاهده"}
        </CustomButton>
      </div>
      {expanded && (
        <MyTicketsItemDetail
          type={data.type === "tech" ? "technical" : "financial"}
          chatID={data.chat_id}
        />
      )}
    </div>
  );
};

export default MyTicketsItem;
