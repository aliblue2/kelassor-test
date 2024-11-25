"use client";

import CustomButton from "@/components/Ui/CustomButton";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../useAuth";
import { useRouter } from "next/navigation";
import { authVerifyOtp } from "@/requests/Auth/authVerifyOtp";
import { authRequestLoginOtp } from "@/requests/Auth/authRequestLoginOtp";
import Timer from "../Timer";
import MultiInput from "@/components/Ui/MultiInput";

//AuthModalSigninOtp component
type AuthModalSigninOtpProps = {
  setState: (input: "password") => void;
  number: string;
};
const AuthModalSigninOtp = ({ setState, number }: AuthModalSigninOtpProps) => {
  const [formState, setformState] = useState<"initial" | "loading">("initial");
  const [input, setinput] = useState("");
  const { login, setModal } = useAuth();
  const router = useRouter();

  const submit = async () => {
    if (!input) toast.error("رمز‌عبور نمی‌تواند خالی باشد");
    setformState("loading");
    const res = await authVerifyOtp({ number: number, otp: input });
    if (res.statusCode === 200) {
      login(res.id);
      setModal(false);
      router.push("/user-panel");
    } else if (res.statusCode === 100) {
      toast.error("کد وارد شده اشتباه است");
      setformState("initial");
    } else if (res.statusCode === 101) {
      toast.error("تاریخ کد وارد شده گذشته است");
      setformState("initial");
    } else {
      toast.error("مشکلی پیش آمد لطفا دوباره امتحان کنید");
      setformState("initial");
    }
  };
  useEffect(() => {
    authRequestLoginOtp({ number: number });
  }, [number]);

  return (
    <div className="flex flex-col gap-2">
      <h3>کد تایید را وارد کنید.</h3>
      <p className="mt-3 text-sm text-gray-4">
        کد تایید برای شماره موبایل {number} ارسال شد.
      </p>
      <MultiInput submit={submit} onChange={setinput} />
      <Timer callBack={() => authRequestLoginOtp({ number: number })} />
      <CustomButton
        onClick={submit}
        disabled={formState !== "initial"}
        className="flex justify-center items-center"
      >
        {formState !== "initial" ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          "ادامه"
        )}
      </CustomButton>
      <button
        onClick={() => setState("password")}
        className="font-semibold text-right text-primary-base"
      >
        ورود با رمز‌عبور
      </button>
    </div>
  );
};

export default AuthModalSigninOtp;
