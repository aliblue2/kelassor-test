"use client";

import CustomButton from "@/components/Ui/CustomButton";
import PasswordShowButton from "@/components/Ui/PasswordShowButton";
import { authRegister } from "@/requests/Auth/authRegister";
import { getCookie } from "@/utils/cookie";
import { Loader2Icon } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../useAuth";

//AuthModalSignup2 component
const AuthModalSignup2 = ({ proceed }: { proceed: () => void }) => {
  const [formState, setformState] = useState<"initial" | "loading">("initial");
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const pass1Ref = useRef<HTMLInputElement | null>(null);
  const pass2Ref = useRef<HTMLInputElement | null>(null);
  const { login } = useAuth();
  const submit = async () => {
    if (!name) {
      toast.error("نام نمی‌تواند خالی باشد");
      return;
    }
    if (!lastname) {
      toast.error("نام خانوادگی نمی‌تواند خالی باشد");
      return;
    }
    if (!pass1) {
      toast.error("رمز عبور نمی‌تواند خالی باشد");
      return;
    }
    if (pass1.length < 8) {
      toast.error("طول رمز عبور باید حداقل ۸ کاراکتر باشد");
      return;
    }
    if (!pass2) {
      toast.error("تکرار رمز عبور نمی‌تواند خالی باشد");
      return;
    }
    if (pass2 !== pass1) {
      toast.error("تکرار رمز عبور مطابقت ندارد");
      return;
    }
    const session_id = getCookie("session_id");
    if (!session_id) {
      toast.error("مشکلی پیش آمد لطفا دوباره وارد شوید");
      return;
    }
    setformState("loading");
    const res = await authRegister({
      name: name,
      lastname: lastname,
      password: pass1,
      session_id: session_id,
    });

    if (res.statusCode === 200) {
      login(session_id);
      proceed();
    } else {
      setformState("initial");
      toast.error("مشکلی پیش آمد لطفا دوباره وارد شوید");
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <p className="mt-3 font-semibold text-sm px-2">نام</p>
          <input
            onChange={(e) => setname(e.target.value)}
            name="name"
            type="text"
            className="p-2 w-full border rounded-[10px] border-light-3"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="mt-3 font-semibold text-sm px-2">نام خانوادگی</p>
          <input
            onChange={(e) => setlastname(e.target.value)}
            name="lastname"
            type="text"
            className="p-2 w-full border rounded-[10px] border-light-3"
          />
        </div>
      </div>
      <p className="mt-3 font-semibold text-sm">رمز عبور جدید</p>
      <div className="relative">
        <input
          ref={pass1Ref}
          name="password"
          onChange={(e) => setpass1(e.target.value)}
          type="password"
          className="p-2 w-full border rounded-[10px] border-light-3"
        />
        <PasswordShowButton inputRef={pass1Ref} />
      </div>
      <p className="mt-3 font-semibold text-sm">تکرار رمز عبور جدید</p>
      <div className="relative">
        <input
          ref={pass2Ref}
          name="passwordVerification"
          onChange={(e) => setpass2(e.target.value)}
          type="password"
          className="p-2 w-full border rounded-[10px] border-light-3"
        />
        <PasswordShowButton inputRef={pass2Ref} />
      </div>
      <CustomButton
        disabled={formState !== "initial"}
        onClick={submit}
        className="flex items-center justify-center"
      >
        {formState !== "initial" ? (
          <Loader2Icon className="animate-spin " />
        ) : (
          "ثبت‌نام"
        )}
      </CustomButton>
    </div>
  );
};

export default AuthModalSignup2;
