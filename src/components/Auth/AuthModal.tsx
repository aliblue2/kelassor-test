"use client";
import logo from "/public/logo.png";

import { useAuth } from "./useAuth";
import Image from "next/image";
import CustomButton from "../Ui/CustomButton";
import { useState } from "react";
import { loginRequest } from "@/requests/login";

//AuthModal component
const AuthModal = () => {
  const { modal, setModal } = useAuth();
  const [input, setinput] = useState("");
  const submit = () => {
    loginRequest({ username: input, password: "" });
  };
  return (
    <>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="flex overflow-hidden fixed top-0 right-0 bottom-0 left-0 justify-center items-center p-10 w-screen h-screen z-[102] backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex relative flex-col gap-2 p-10 w-full md:w-1/2 bg-light-4 rounded-[20px] shadow-2"
          >
            <Image
              src={logo}
              height={100}
              width={200}
              alt="logo"
              className="object-contain self-center my-5 w-[100px]"
            />
            <h3>ورود | ثبت‌نام</h3>
            <p className="mt-3 text-sm">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
            <input
              onChange={(e) => setinput(e.target.value)}
              type="text"
              className="p-2 w-full border rounded-[10px] border-light-3"
              placeholder="09120000000"
            />
            <CustomButton onClick={submit} className="">
              ورود
            </CustomButton>
            <div className="flex gap-2 items-center text-xs md:text-sm">
              <input type="checkbox" className="accent-primary-base" />
              <p className="text-sm">
                تمامی شرایط و <a className="text-primary-base">قوانین کلاسور</a>{" "}
                را خوانده‌ام و می‌پذیرم
              </p>
            </div>
            <div className="w-[calc(100%+40px)] rounded-[30px] absolute self-center -bottom-5 -z-10 h-1/2 bg-primary-base"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
