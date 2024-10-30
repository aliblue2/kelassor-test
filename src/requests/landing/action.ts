"use server";

import { cookies } from "next/headers";
import { getDiscounts } from "./getDiscount";
import { authRequestRegisterOtp } from "../Auth/authRequestRegisterOtp";
import { authVerifyOtp } from "../Auth/authVerifyOtp";
import { redirect } from "next/navigation";
import { authCheckNumber } from "../Auth/authCheckNumber";
import { authRequestLoginOtp } from "../Auth/authRequestLoginOtp";

export const getUserDiscount = async (
  prevState: string[] | undefined,
  formdata: FormData
) => {
  const errors: string[] = [];
  const name: FormDataEntryValue | null | string = formdata
    .get("name")!
    .toString();
  const phone: FormDataEntryValue | null | string = formdata
    .get("phone")!
    .toString();

  if (!name && !phone) {
    errors.push("شماره تلفن الزامی است . ", "نام الزامی است .");
  }

  if (name && name.trim().length === 0) {
    errors.push("نام نمیتواند خالی باشد.");
  }

  if (phone.length !== 11) {
    errors.push("از شماره موبایل معتبر استفاده کنید.");
  }

  if (phone && name) {
    const response = await authCheckNumber({ number: phone });

    const res = await getDiscounts(name, phone);
    if (res.statusCode === 100) {
      errors.push("شماره موبایل تکراری است.");
    } else {
      const discountCode = res.discountCode;
      cookies().set("discountCode", discountCode);
      cookies().set("phone", phone);
      if (response.statusCode === 100) {
        authRequestRegisterOtp({ number: phone });
      } else {
        authRequestLoginOtp({ number: phone });
      }
    }
  }

  if (errors.length > 0) {
    return errors;
  }
};

export const checkOtpCode = async (
  prevState: string | undefined,
  formData: FormData
) => {
  const phoneNum = cookies().get("phone")!.value;
  const otpCode = Array.from({ length: 6 })
    .map((_, index) => formData.get(`otpCode-${index}`))
    .join("");
  console.log(otpCode);

  const res = await authVerifyOtp({ number: phoneNum, otp: otpCode });
  console.log(res);

  if (res.statusCode !== 200) {
    return "کد تایید اشتباه.";
  } else {
    cookies().set("complete-otp", phoneNum);
  }
  return "";
};
