"use client";
import CustomButton from "@/components/Ui/CustomButton";
import { authSigninPassword } from "@/requests/Auth/authSigninPassword";
import { Loader2Icon } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../useAuth";
import { useRouter } from "next/navigation";
import PasswordShowButton from "@/components/Ui/PasswordShowButton";

//AuthModalSigninPassword component
type AuthModalSigninPasswordProps = {
  number: string;
  setState: (input: "otp" | "forgotPassword1") => void;
};
const AuthModalSigninPassword = ({
  number,
  setState,
}: AuthModalSigninPasswordProps) => {
  const [formState, setformState] = useState<"initial" | "loading">("initial");
  const [input, setInput] = useState("");
  const inputRef = useRef<null | HTMLInputElement>(null);
  const { login, setModal } = useAuth();
  const router = useRouter();

  const submit = async () => {
    if (!input) toast.error("رمز‌عبور نمی‌تواند خالی باشد");
    setformState("loading");
    const res = await authSigninPassword({ phone: number, password: input });
    if (res.statusCode === 200) {
      login(res.hashed_id);
      setModal(false);
      router.push("/user-panel");
    } else if (res.statusCode === 100) {
      toast.error("رمز عبور اشتباه است");
    } else {
      toast.error("مشکلی پیش آمد لطفا پس از مدتی دوباره امتحان کنید");
    }
    setformState("initial");
  };
  return (
    <div className="flex flex-col gap-2">
      <h3>رمز‌عبور خود را وارد کنید.</h3>
      <div className="relative">
        <input
          ref={inputRef}
          onKeyDown={(e) => (e.key === "Enter" ? submit() : undefined)}
          name="code"
          onChange={(e) => setInput(e.target.value)}
          type="password"
          className="p-2 w-full border rounded-[10px] border-light-3"
        />
        <PasswordShowButton inputRef={inputRef} />
      </div>
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
        onClick={() => setState("otp")}
        className="font-semibold text-right text-primary-base"
      >
        ورود با رمز یکبار‌مصرف
      </button>
      <button
        onClick={() => setState("forgotPassword1")}
        className="font-semibold text-right text-primary-base"
      >
        فراموشی رمز‌عبور
      </button>
    </div>
  );
};

export default AuthModalSigninPassword;
