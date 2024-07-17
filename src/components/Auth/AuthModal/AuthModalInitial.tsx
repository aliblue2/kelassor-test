"use client";

import CustomButton from "@/components/Ui/CustomButton";
import { authCheckNumber } from "@/requests/Auth/authCheckNumber";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

//AuthModalInitial component
type AuthModalInitialProps = {
  setGlobalState: (input: "signin" | "signup") => void;
  setNumber: (input: string) => void;
  initialNumber?: string;
};
const AuthModalInitial = ({
  setGlobalState,
  setNumber,
  initialNumber,
}: AuthModalInitialProps) => {
  const [localNumber, setLocalNumber] = useState("");
  const [formState, setformState] = useState<"initial" | "loading">("initial");
  const submit = async () => {
    if (!localNumber) {
      toast.error("شماره موبایل نمی‌تواند خالی باشد");
      return;
    }

    const regex = /^09\d{9}$/;
    if (!regex.test(localNumber)) {
      toast.error("شماره موبایل معتبر نمی‌باشد");
      return;
    }
    setformState("loading");
    const res = await authCheckNumber({ number: localNumber });
    setNumber(localNumber);
    if (res.statusCode === 100) {
      setGlobalState("signup");
    } else {
      setGlobalState("signin");
    }
  };

  useEffect(() => {
    const noInputRequest = async () => {
      if (initialNumber) {
        const res = await authCheckNumber({ number: initialNumber });
        if (res.statusCode === 100) {
          setGlobalState("signup");
        } else {
          setGlobalState("signin");
        }
      }
    };
    noInputRequest();
  }, [initialNumber, setGlobalState]);

  if (!initialNumber)
    return (
      <div className="flex flex-col gap-2">
        <h3>ورود | ثبت‌نام</h3>
        <p className="mt-3 text-gray-4 text-sm">
          لطفا شماره موبایل خود را وارد کنید
        </p>
        <input
          onKeyDown={(e) => (e.key === "Enter" ? submit() : undefined)}
          name="phone"
          onChange={(e) => setLocalNumber(e.target.value)}
          type="text"
          className="p-2 w-full border rounded-[10px] border-light-3"
          placeholder="09120000000"
        />
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

export default AuthModalInitial;
