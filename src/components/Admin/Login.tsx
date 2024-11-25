"use client";

import { adminLoginPassword } from "@/requests/AdminActions/actions";
import { ArrowUpLeftFromSquare, Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

const Login = () => {
  const [state, action] = useFormState<string[] | undefined, FormData>(
    adminLoginPassword,
    []
  );

  console.log(state);

  return (
    <form
      action={action}
      className="flex flex-col items-start justify-start w-full gap-2 px-5 py-12"
    >
      <label className="text-lg font-medium text-primary-base" htmlFor="phone">
        شماره تماس:
      </label>
      <input
        className="w-full p-2 transition-colors duration-300 border-2 rounded-md outline-none focus:border-primary-base"
        type="number"
        placeholder="0903****67**"
        dir="ltr"
        name="phone"
        id="phone"
      />
      <label
        className="text-lg font-medium text-primary-base"
        htmlFor="password"
      >
        رمز‌عبور:
      </label>
      <input
        className="w-full p-2 transition-colors duration-300 border-2 rounded-md outline-none focus:border-primary-base"
        type="password"
        name="password"
        placeholder="**********"
        id="password"
      />
      <input
        type="submit"
        value={"ورود به حساب کاربری"}
        className="w-full p-2 mt-2 text-lg font-medium text-white transition-colors duration-300 rounded-md cursor-pointer bg-primary-base hover:bg-primary-40"
      />

      {state?.map((errorItem, i) => {
        return (
          <li
            className="font-medium text-red-500 list-item"
            key={errorItem + i}
          >
            {errorItem}
          </li>
        );
      })}

      <Link
        href={"/"}
        className="flex items-center justify-center gap-5 px-4 py-2 text-sm text-center transition-colors duration-300 rounded-md bg-light-4 text-primary-base hover:bg-light-3 "
      >
        بازگشت به صفحه اصلی
        <ArrowUpLeftFromSquare size={15} />
      </Link>
    </form>
  );
};

export default Login;
