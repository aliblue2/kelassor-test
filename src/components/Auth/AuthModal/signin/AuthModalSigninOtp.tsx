"use client";

import CustomButton from "@/components/Ui/CustomButton";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../useAuth";
import { usePathname, useRouter } from "next/navigation";
import { authVerifyOtp } from "@/requests/Auth/authVerifyOtp";
import { authRequestLoginOtp } from "@/requests/Auth/authRequestLoginOtp";
import Timer from "../Timer";
import MultiInput from "@/components/Ui/MultiInput";
import { BuyWorkshopAdvance } from "@/requests/work-shop/BuyWorkshop";

//AuthModalSigninOtp component
type AuthModalSigninOtpProps = {
  setState: (input: "password") => void;
  number: string;
  type : string
};
const AuthModalSigninOtp = ({ setState, number , type }: AuthModalSigninOtpProps) => {
  const [formState, setformState] = useState<"initial" | "loading">("initial");
  const [input, setinput] = useState("");
  const { login, setModal } = useAuth();
  const router = useRouter();
  const paramTitle = usePathname().split("/")[2]


  const submit = async () => {
    if (!input) toast.error("رمز‌عبور نمی‌تواند خالی باشد");
    setformState("loading");
    const res = await authVerifyOtp({ number: number, otp: input });
    if (res.statusCode === 200) {
      login(res.id);
      setModal(false);
      if (type === "advance") {
        router.push("/user-panel/advance");
      } else {
        router.push("/user-panel");
      }
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
    if(type === "advance") {
      const buyAdvanceFc = async() => {
        await BuyWorkshopAdvance(paramTitle , number )
      }
      buyAdvanceFc()
    }
  
  }, [number , type ,paramTitle ]);

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
