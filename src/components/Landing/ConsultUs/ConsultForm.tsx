"use client";

import CustomButton from "@/components/Ui/CustomButton";
import ConsultSubjectSelect from "./ConsultSubjectSelect";
import { useState } from "react";
import { toast } from "react-toastify";
import { bootcampFormSubmit } from "@/requests/bootcampFormSubmit";
import { Loader2Icon } from "lucide-react";
const inputClass =
  "flex relative justify-between cursor-pointer items-center py-2 px-4 rounded-lg grow bg-white";

//ConsultForm component
const ConsultForm = () => {
  const [subject, setsubject] = useState<string | null>(null);
  const [formState, setformState] = useState<"ready" | "loading">("ready");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [coupon, setcoupon] = useState("");
  const submit = async () => {
    if (!subject) {
      toast.error("رشته نمی‌تواند خالی باشد");
      return;
    }
    if (!name) {
      toast.error("نام و نام‌خانوادگی نمی‌تواند خالی باشد");
      return;
    }
    if (!phone) {
      toast.error("شماره موبایل نمی‌تواند خالی باشد");
      return;
    }
    const regex = /^09\d{9}$/;
    if (!regex.test(phone)) {
      toast.error("شماره موبایل معتبر نمی‌باشد");
      return;
    }
    setformState("loading");
    const res = await bootcampFormSubmit({
      name,
      phone,
      discount: coupon,
      title: subject,
    });
    setformState("ready");
    if (res.statusCode === 200) {
      toast.success("با موفقیت ثبت شد");
    } else {
      toast.error("مشکلی پیش آمد");
    }
  };

  return (
    <div className="bg-light-3 p-5 gap-2 rounded-2xl flex flex-col">
      <p>رشته‌ی مورد نظر</p>
      <ConsultSubjectSelect
        value={subject}
        set={(input) => setsubject(input)}
      />
      <p>نام و نام خانوادگی</p>
      <input
        onChange={(e) => setname(e.target.value)}
        type="text"
        className={inputClass}
      />
      <p>شماره موبایل</p>
      <input
        onChange={(e) => setphone(e.target.value)}
        type="text"
        className={inputClass}
      />
      <CustomButton
        className="flex items-center justify-center"
        disabled={formState !== "ready"}
        onClick={submit}
      >
        {formState !== "ready" ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          "ثبت‌نام"
        )}
      </CustomButton>
    </div>
  );
};

export default ConsultForm;
