"use client";
import { getUserDiscount } from "@/requests/landing/action";
import React from "react";
import { useFormState } from "react-dom";

const WheelForm = () => {
  const [state, action] = useFormState<string[] | undefined, FormData>(
    getUserDiscount,
    []
  );

  return (
    <>
      <form
        action={action}
        className="flex w-full flex-col items-start justify-start gap-8"
      >
        <div className="flex flex-col w-full items-start justify-start gap-3 text-primary-base">
          <label htmlFor="name" className="text-lg font-medium">
            نام‌ونام خانوادگی :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full border border-primary-base outline-none p-2 rounded-md"
            placeholder="مثل اشکان مهدویان"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-start gap-3 text-primary-base">
          <label htmlFor="phone" className="text-lg font-medium">
            شماره تماس :
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            className="w-full border border-primary-base outline-none p-2 rounded-md"
            placeholder="۰۹۰۳xxxxxx"
          />
        </div>
        <input
          type="submit"
          value={"٪ گرفتن کد تخفیف ٪"}
          className="w-full bg-primary-base hover:bg-primary-30 transition-colors duration-300 p-2 rounded-md text-white font-medium text-lg"
        />
      </form>
      <ul>
        {state &&
          state.map((item, i) => {
            return (
              <li key={item} className="list-item text-red-500 font-medium">
                {item}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default WheelForm;
