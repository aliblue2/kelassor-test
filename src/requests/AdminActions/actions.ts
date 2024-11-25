"use server";

import { revalidatePath } from "next/cache";
import { authSigninPassword } from "../Auth/authSigninPassword";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { userCall } from "@/types/bootcampUser";

export const adminLoginPassword = async (
  prevState: string[] | undefined,
  formData: FormData
) => {
  const cookieStore = cookies();
  const errors: string[] = [];
  const phone = formData.get("phone")!.toString();
  const password = formData.get("password")!.toString();

  if (!phone && !password) {
    errors.push("شماره موبایل الزامی است.", "رمز عبور الزامی است.");
  }

  if (phone && phone.trim().length !== 11) {
    errors.push("شماره موبایل نمیتواند کمتر یا بیشتر از ۱۱ رقم باشد .");
  }
  if (!password || (password && password.trim().length < 8)) {
    errors.push("رمز عبور نمیتواند کمتر از ۸ رقم باشد.");
  }

  const res = await authSigninPassword({
    phone,
    password,
  });

  if (res.statusCode === 200) {
    cookieStore.set("user_session", res.hashed_id);
    redirect("/admin/dashboard");
  } else {
    errors.push(res.message);
  }
  if (errors.length > 0) return errors;
};

export const changeEligibleState = async (
  hashed_id: string,
  bootcampTitle: string,
  kelaasor_eligible: number,
  phoneNumber: string
) => {
  const response = await fetch(
    `${process.env.BASE_URL}/admin/snapEligible.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashed_id: hashed_id,
        bootcampTitle: bootcampTitle,
        kelaasor_eligible: kelaasor_eligible,
        phone: phoneNumber,
      }),
    }
  );

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant update eligible.! server error");
  }

  if (!response.ok) {
    throw new Error("cant update eligible.! server error");
  }

  const result = await response.json();
  if (result.statusCode === 200) {
    revalidatePath(`/admin/bootcamps/${bootcampTitle.toLocaleLowerCase()}`);
    return true;
  } else {
    return false;
  }
};

export const submitCalls = async (
  userId: number,
  callResult: string,
  calls: userCall[],
  hashedId: string,
  pathName: string
) => {
  const res = await fetch(
    `${process.env.BASE_URL}/admin/updateBootcampCalls.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        callResult,
        calls,
        hashed_id: hashedId,
        userId,
      }),
    }
  );

  const resCode = await res.json();
  if (resCode === 200) {
    revalidatePath(pathName);
    return true;
  } else {
    return false;
  }
};
