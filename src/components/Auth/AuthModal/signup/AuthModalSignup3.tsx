"use client";

import CustomButton from "@/components/Ui/CustomButton";
import { useRouter } from "next/navigation";
import { useAuth } from "../../useAuth";

//AuthModalSignup3 component
const AuthModalSignup3 = () => {
  const { setModal } = useAuth();
  const router = useRouter();
  return (
    <div className="flex flex-col text-center gap-2">
      <h3>به کلاسور خوش آمدید.</h3>
      <p className="my-3 text-gray-4 text-sm font-bold">
        در حال حاضر شما عضوی از خانواده ی{" "}
        <span className="text-primary-base">کلاسور</span> هستید.
        <br /> از این پس اطلاعات تمامی بوت کمپ ها در اختیار شما قرار خواهد گرفت.
      </p>
      <CustomButton
        onClick={() => {
          router.push("/user-panel/account");
          setModal(false);
        }}
      >
        تکمیل مشخصات
      </CustomButton>
      <CustomButton
        onClick={() => {
          router.push("/user-panel");
          setModal(false);
        }}
        secondary
      >
        بازگشت به صفحه کلاسور
      </CustomButton>
    </div>
  );
};

export default AuthModalSignup3;
