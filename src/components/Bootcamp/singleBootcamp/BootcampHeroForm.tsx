"use client";

import { useAuth } from "@/components/Auth/useAuth";
import CustomButton from "@/components/Ui/CustomButton";
import { bootcampFormSubmit } from "@/requests/bootcampFormSubmit";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const inputClass = "p-1 rounded-[10px] grow w-full";

//BootcampHeroForm component
type BootcampHeroFormProps = {
  capacity: number;
  full_capacity: number;
  title: string;
  englishTitle: string;
  className?: string;
};
const BootcampHeroForm = ({
  className = "",
  title,
  englishTitle,
  capacity,
  full_capacity,
}: BootcampHeroFormProps) => {
  const [formState, setformState] = useState<"ready" | "loading">("ready");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [coupon, setcoupon] = useState("");
  const { user, setModal } = useAuth();
  const router = useRouter();
  const submit = async () => {
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
      title: title,
    });

    if (res.statusCode === 200) {
      if (user) {
        router.push("/user-panel");
      } else {
        setModal(true, phone);
      }
      toast.success("با موفقیت ثبت شد");
    } else if (res.statusCode === 400) {
      toast.error("قبلا ثبت‌نام کرده اید");
    } else {
      toast.error("مشکلی پیش آمد");
    }
    setformState("ready");
  };

  return (
    <div
      className={`flex bg-light-3 min-w-[350px] rounded-[30px] items-start mt-auto p-5 text-black flex-col gap-1 ${className}`}
    >
      <div className="text-lg font-medium">{title}</div>
      <div className="text-base font-medium">{englishTitle}</div>
      <div className="text-light-1 text-xs">
        ظرفیت باقی مانده: {capacity} از {full_capacity}
      </div>

      <div className="flex flex-col text-sm font-medium w-full items-start justify-center gap-2 mt-1">
        نام و نام‌خانوادگی
        <input
          className={inputClass}
          onChange={(e) => setname(e.target.value)}
        />
      </div>
      <div className="flex flex-col text-sm font-medium w-full items-start justify-center gap-2 mt-1">
        شماره موبایل
        <input
          className={inputClass}
          onChange={(e) => setphone(e.target.value)}
        />
      </div>
      <div className="flex flex-col text-sm font-medium w-full items-start justify-center gap-2 mt-1">
        کد تخفیف
        <input
          placeholder="اگر کد تخفیف دارید وارد کنید"
          className={inputClass}
          onChange={(e) => setcoupon(e.target.value)}
        />
      </div>
      <CustomButton
        className="flex items-center w-full mt-5 justify-center"
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

export default BootcampHeroForm;
