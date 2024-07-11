"use client";

import CustomButton from "@/components/Ui/CustomButton";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authVerifyOtp } from "@/requests/Auth/authVerifyOtp";
import { authRequestLoginOtp } from "@/requests/Auth/authRequestLoginOtp";
import { useAuth } from "../../useAuth";
import MultiInput from "@/components/Ui/MultiInput";

//AuthModalSigninForgot1 component
type AuthModalSigninForgot1Props = {
  setState: (input: "forgotPassword2") => void;
  number: string;
};
const AuthModalSigninForgot1 = ({
  setState,
  number,
}: AuthModalSigninForgot1Props) => {
  const [formState, setformState] = useState<"initial" | "loading">("initial");
  const [input, setinput] = useState("");
  const [seconds, setSeconds] = useState(60);

  const { login } = useAuth();
  const submit = async () => {
    if (!input) toast.error("رمز‌عبور نمی‌تواند خالی باشد");
    setformState("loading");
    const res = await authVerifyOtp({ number: number, otp: input });
    if (res.statusCode === 200) {
      setState("forgotPassword2");
      login("session_id");
    } else if (res.statusCode === 100) {
      toast.error("کد وارد شده اشتباه است");
      setformState("initial");
    } else if (res.statusCode === 101) {
      toast.error("کد وارد شده قدیمی است");
      setformState("initial");
    }
  };
  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [seconds]);
  useEffect(() => {
    authRequestLoginOtp({ number: number });
  }, [number]);

  return (
    <div className="flex flex-col gap-2">
      <h3>کد تایید را وارد کنید.</h3>
      <p className="mt-3 text-gray-4 text-sm">
        کد تایید برای شماره موبایل {number} ارسال شد.
      </p>
      <MultiInput onChange={setinput} />
      {seconds === 0 ? (
        <button
          onClick={() => {
            setSeconds(60);
            authRequestLoginOtp({ number: number });
          }}
          className="mt-3 text-gray-4 text-center text-sm"
        >
          دریافت مجدد کد
        </button>
      ) : (
        <p className="mt-3 text-gray-4 text-center text-sm">
          0:{seconds} مانده تا دریافت مجدد کد
        </p>
      )}
      <CustomButton
        onClick={submit}
        disabled={formState !== "initial"}
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

export default AuthModalSigninForgot1;
