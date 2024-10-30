"use client";
import { checkOtpCode } from "@/requests/landing/action";
import React, { useRef } from "react";
import { useFormState } from "react-dom";

const WheelOtp = () => {
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
