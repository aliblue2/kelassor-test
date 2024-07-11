"use client";

import CustomButton from "@/components/Ui/CustomButton";
import { authForgotPassword } from "@/requests/Auth/authForgotPassword";
import { getCookie } from "@/utils/cookie";
import { Loader2Icon } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../useAuth";
import { useRouter } from "next/navigation";
import PasswordShowButton from "@/components/Ui/PasswordShowButton";

//AuthModalSigninForgot2 component
type AuthModalSigninForgot2Props = {
  number: string;
  setState: (input: "forgotPassword1") => void;
};
const AuthModalSigninForgot2 = ({
  number,
}: AuthModalSigninForgot2Props) => {
  const [formState, setformState] = useState<"initial" | "loading">("initial");
  const [pass1, setpass1] = useState("");
  const [pass2, setpass2] = useState("");
  const pass1Ref = useRef<HTMLInputElement | null>(null);
  const pass2Ref = useRef<HTMLInputElement | null>(null);
  const { setModal } = useAuth();
  const router = useRouter();
  const submit = async () => {
    if (pass1.length < 8) {
      toast.error("طول رمز عبور باید حداقل ۸ کاراکتر باشد");
      return;
    }
    if (pass1 !== pass2) {
      toast.error("تکرار رمز عبور مطابقت ندارد");
      return;
    }
    setformState("loading")
    const session_id = getCookie("session_id");
    if (!session_id) return;
    const res = await authForgotPassword({
      phone: number,
      password: pass1,
      session_id: session_id,
    });
    if (res.statusCode === 100) {
    } else if (res.statusCode === 200) {
      setModal(false);
      router.push("/user-panel");
    }
    setformState("initial")
  };
  return (
    <div className="flex flex-col gap-2">
      <h3>تغییر رمز عبور</h3>
      <p className="mt-3 font-semibold text-sm">رمز عبور جدید</p>
      <div className="relative">
        <input
          ref={pass1Ref}
          name="code"
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
          name="code"
          onChange={(e) => setpass2(e.target.value)}
          type="password"
          className="p-2 w-full border rounded-[10px] border-light-3"
        />
        <PasswordShowButton inputRef={pass2Ref} />
      </div>
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

export default AuthModalSigninForgot2;
