"use client";

import CustomButton from "@/components/Ui/CustomButton";
import { authRequestRegisterOtp } from "@/requests/Auth/authRequestRegisterOtp";
import { authVerifyOtp } from "@/requests/Auth/authVerifyOtp";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Timer from "../Timer";
import { setCookie } from "@/utils/cookie";
import MultiInput from "@/components/Ui/MultiInput";

//AuthModalSignup component
type AuthModalSignupProps = { number: string; proceed: () => void };
const AuthModalSignup1 = ({ number, proceed }: AuthModalSignupProps) => {
  const [codeInput, setcodeInput] = useState("");
  const [formState, setformState] = useState<"initial" | "loading">("initial");

  useEffect(() => {
    authRequestRegisterOtp({ number: number  });
  }, [number]);

  const submit = async () => {
    if (!codeInput) {
      toast.error("کد تایید نمی‌تواند خالی باشد");
      return;
    }
    setformState("loading");
    const res = await authVerifyOtp({ number: number, otp: codeInput });
    setformState("initial");
    if (res.statusCode === 100) {
      toast.error("کد وارد شده اشتباه است");
    } else if (res.statusCode === 200) {
      setCookie("session_id", res.id);
      proceed();
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <h3>کد تایید را وارد کنید.</h3>
      <p className="mt-3 text-gray-4 text-sm">
        حساب کاربری با شماره موبایل {number} وجود ندارد.
        <br />
        جهت ثبت‌نام کد تایید برای شما ارسال گردید.
      </p>
      <MultiInput onChange={setcodeInput} />
      <Timer callBack={() => authRequestRegisterOtp({ number: number })} />
      <CustomButton
        disabled={formState !== "initial"}
        onClick={submit}
        className="flex items-center justify-center"
      >
        {formState !== "initial" ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          "ادامه"
        )}
      </CustomButton>
    </div>
  );
};

export default AuthModalSignup1;
