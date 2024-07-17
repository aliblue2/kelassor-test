import CustomButton from "@/components/Ui/CustomButton";
import NewTicketSubject from "./NewTicketSubject";
import { useState } from "react";
import { newTicket } from "@/requests/ticket/newTicket";
import { toast } from "react-toastify";
import MyTicketsItemDetail from "./MyTicketsItemDetail";
import TicketMessage from "./TicketMessage";

//NewTicket component
type NewTicketProps = { chatID: number };
const NewTicket = ({ chatID }: NewTicketProps) => {
  const [mode, setmode] = useState(true); //todo remove for production
  const [formState, setformState] = useState<"ready" | "loading">("ready");
  const [text, settext] = useState("");
  const [subject, setsubject] = useState<"technical" | "financial" | null>(
    null
  );
  const _setsubject = (input: "technical" | "financial" | null) => {
    setsubject(input);
  };
  const submit = async () => {
    if (!subject) {
      toast.error("موضوع تیکت را انتخاب نکرده‌اید");
      return;
    }
    if (!text) {
      toast.error("پیام نمی‌تواند خالی باشد");
      return;
    }
    setformState("loading");
    await newTicket({ text: text, type: subject, chatID: chatID });
    toast.success("تیکت با موفقیت ارسال شد");
    setformState("ready");
  };
  if (mode)
    return (
      <div className="flex flex-col gap-5">
        <button //todo remove production
        onClick={() => setmode((e) => !e)}>change mode</button>
        <div className="flex gap-2 items-center">
          <div className="font-semibold">موضوع تیکت</div>
          <NewTicketSubject subject={subject} set={_setsubject} />
        </div>

        <div className="flex flex-col rounded-lg overflow-hidden h-96">
          <div className="bg-light-3 flex flex-col justify-center ">
            <div className="mx-5 mt-5 flex flex-col">
              <TicketMessage message="سلام چطوری می‌تونم کمکت کنم؟" left />
            </div>
            <MyTicketsItemDetail chatID={chatID} type={subject} />
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex flex-col gap-5">
        <button //todo remove production
        onClick={() => setmode((e) => !e)}>change mode</button>
      <div className="flex gap-2 items-center">
        <div className="font-semibold">موضوع تیکت</div>
        <NewTicketSubject subject={subject} set={_setsubject} />
      </div>
      <div className="flex flex-col rounded-lg overflow-hidden h-96">
        <div className="bg-light-3 flex flex-col items-start justify-center p-5">
          <div className="bg-primary-base text-white p-3 rounded-[8px_20px_0_8px]">
            سلام چطوری می‌تونم کمکت کنم؟
          </div>
          <div className="h-[40px] w-[20px] rounded-tr-full shadow-[0px_-20px_0px_0px_theme(colors.primary.base)]" />
        </div>
        <div className="bg-white grow p-5 flex gap-2 flex-col">
          <textarea
            name="ticket-message"
            className="outline-none grow resize-none w-full"
            placeholder="لطفا پیام خود را بنویسید..."
            onChange={(e) => settext(e.target.value)}
          ></textarea>
          <div className="flex gap-2 justify-end">
            <CustomButton
              className="w-36"
              loading={formState !== "ready"}
              disabled={formState !== "ready"}
              onClick={submit}
            >
              ارسال پیام
            </CustomButton>
            <CustomButton>پیوست فایل</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTicket;
