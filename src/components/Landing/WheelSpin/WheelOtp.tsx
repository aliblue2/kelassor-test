"use client";
import Timer from "@/components/Auth/AuthModal/Timer";
import { authCheckNumber } from "@/requests/Auth/authCheckNumber";
import { authRequestLoginOtp } from "@/requests/Auth/authRequestLoginOtp";
import { authRequestRegisterOtp } from "@/requests/Auth/authRequestRegisterOtp";
import { checkOtpCode } from "@/requests/landing/action";
import React, { useRef } from "react";
import { useFormState } from "react-dom";

const WheelOtp: React.FC<{ phoneNum: string | undefined }> = ({ phoneNum }) => {
  const [state, action] = useFormState<string | undefined, FormData>(
    checkOtpCode,
    ""
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;

      if (value.length === 1 && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (value.length === 0 && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };

  const getOtpCode = async (phoneNumber: string | undefined) => {
    if (phoneNumber) {
      const response = await authCheckNumber({ number: phoneNumber });

      if (response.statusCode === 100) {
        authRequestRegisterOtp({ number: phoneNumber, type: "landing-event" });
      } else {
        authRequestLoginOtp({ number: phoneNumber });
      }
    }
  };

  return (
    <>
      <form action={action} className="w-full">
        <div dir="ltr" className="flex items-center justify-center gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              autoComplete="off"
              className="w-8 h-8 text-center text-xl rounded-md border-2 border-primary-base outline-none"
              name={`otpCode-${index}`}
              placeholder="*"
              inputMode="numeric"
              maxLength={1}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              onChange={handleChange(index)}
            />
          ))}
        </div>

        <Timer callBack={() => getOtpCode(phoneNum)} />
        <input
          className="w-full bg-primary-base mt-4 p-2 rounded-md text-white text-lg"
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
