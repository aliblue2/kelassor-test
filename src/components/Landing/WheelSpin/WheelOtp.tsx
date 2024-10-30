"use client";
import { checkOtpCode } from "@/requests/landing/action";
import React from "react";
import { useFormState } from "react-dom";

const WheelOtp = () => {
  const [state, action] = useFormState<string | undefined, FormData>(
    checkOtpCode,
    ""
  );

  return (
    <>
      <form action={action} className="w-full">
        <div dir="ltr" className="flex items-center justify-center gap-5">
          <input
            type="text"
            autoComplete="no"
            step={1}
            className="w-10 h-10 text-center text-xl rounded-md border-2 border-primary-base outline-none"
            name="otpCode"
            placeholder="*"
            inputMode="numeric"
            maxLength={1}
          />
          <input
            type="text"
            autoComplete="no"
            step={1}
            className="w-10 h-10 text-center text-xl rounded-md border-2 border-primary-base outline-none"
            name="otpCode"
            placeholder="*"
            inputMode="numeric"
            maxLength={1}
          />
          <input
            type="text"
            autoComplete="no"
            step={1}
            className="w-10 h-10 text-center text-xl rounded-md border-2 border-primary-base outline-none"
            name="otpCode"
            placeholder="*"
            inputMode="numeric"
            maxLength={1}
          />
          <input
            type="text"
            autoComplete="no"
            step={1}
            className="w-10 h-10 text-center text-xl rounded-md border-2 border-primary-base outline-none"
            name="otpCode"
            placeholder="*"
            inputMode="numeric"
            maxLength={1}
          />
          <input
            type="text"
            autoComplete="no"
            step={1}
            className="w-10 h-10 text-center text-xl rounded-md border-2 border-primary-base outline-none"
            name="otpCode"
            placeholder="*"
            inputMode="numeric"
            maxLength={1}
          />
          <input
            type="text"
            autoComplete="no"
            step={1}
            className="w-10 h-10 text-center text-xl rounded-md border-2 border-primary-base outline-none"
            name="otpCode"
            placeholder="*"
            inputMode="numeric"
            maxLength={1}
          />
        </div>

        <input
          className="w-full bg-primary-base my-5 p-2 rounded-md text-white text-lg"
          type="submit"
          value={"تایید کد"}
        />
      </form>
      {state && (
        <span className="text-lg font-medium text-red-500 list-item">
          {state}
        </span>
      )}
    </>
  );
};

export default WheelOtp;
