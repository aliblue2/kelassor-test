"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import { useEffect, useState } from "react";
import CustomButton from "@/components/Ui/CustomButton";
import { toast } from "react-toastify";
import jalaali from "jalaali-js";
import {
  postUserInfoFront,
  postUserInfoInput,
} from "@/requests/user-panel/postUserInfo";
import { getCookie } from "@/utils/cookie";
import { userInfo } from "@/requests/user-panel/getUserInfo";

//page component
type formFields = {
  name: string;
  lastname: string;
  nationalCode: string;
  birthdayDay: number;
  birthdayMonth: number;
  birthdayYear: number;
  email: string;
  city: string;
  district: string;
  aboutMe: string;
};
const AccountForm = ({ data }: { data?: userInfo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<formFields>();
  const [sex, setsex] = useState<null | string>(null);
  const [maritalStatus, setmaritalStatus] = useState<null | string>(null);
  const [bDay, setbDay] = useState<{
    jy: undefined | number;
    jm: undefined | number;
    jd: undefined | number;
  }>({ jy: undefined, jm: undefined, jd: undefined });

  const onSubmit: SubmitHandler<formFields> = async (initialData) => {
    const { email, birthdayDay, birthdayMonth, birthdayYear, ...rest } = initialData;
    if (!birthdayDay || !birthdayMonth || !birthdayYear) {
      toast.error("تاریخ تولد الزامی است");
      return;
    }
    const jalaaliBday = jalaali.toGregorian(
      +birthdayYear,
      +birthdayMonth,
      +birthdayDay
    );
    const Bday = new Date(jalaaliBday.gy, jalaaliBday.gm - 1, jalaaliBday.gd);
    if (!sex) {
      toast.error("جنسیت الزامی است");
      return;
    }
    if (!maritalStatus) {
      toast.error("وضعیت تاهل الزامی است");
      return;
    }
    if(!email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      toast.error("ایمیل معتبر نیست");
      return;
    }


    const session_id = getCookie("session_id");
    if (!session_id) return;

    const reqData: postUserInfoInput = {
      ...rest,
      email,
      birthDate: +Bday,
      gender: sex,
      maritalStatus: maritalStatus,
      hashedId: session_id,
    };

    try {
      const res = await postUserInfoFront(reqData);
      if (res.statusCode === 200) {
        toast.success("اطلاعات با موفقیت ثبت شد");
      } else {
        toast.error("همه موارد الزامی هستند");
      }
    } catch (e) {
      toast.error("همه موارد الزامی هستند");
    }
  };

  useEffect(() => {
    if (data) {
      if (data.gender === "آقا") setsex("آقا");
      else if (data.gender === "خانم") setsex("خانم");
      if (data.maritalStatus === "متاهل") setmaritalStatus("متاهل");
      else if (data.maritalStatus === "مجرد") setmaritalStatus("مجرد");
      if (data.birthdate) {
        const jalaaliBday = jalaali.toJalaali(new Date(+data.birthdate));
        setbDay({
          jd: jalaaliBday.jd,
          jm: jalaaliBday.jm,
          jy: jalaaliBday.jy,
        });
      }
      reset();
    }
  }, [data]);
  return (
    <form
      className="flex py-10 gap-10 max-w-[600px] mx-auto flex-col grow"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="grow basis-0">
          <label className="px-2" htmlFor="name">
            نام
          </label>
          <CustomInput defaultValue={data?.name} {...register("name")} />
        </div>

        <div className="grow basis-0">
          <label className="px-2" htmlFor="lastname">
            نام خانوادگی
          </label>
          <CustomInput
            defaultValue={data?.lastname}
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex gap-5 flex-col md:flex-row">
        <div className="grow basis-0">
          <label className="px-2" htmlFor="nationalCode">
            کد ملی
          </label>
          <CustomInput
            defaultValue={data?.nationalCode}
            {...register("nationalCode")}
          />
        </div>

        <div className="grow basis-0">
          <label className="px-2" htmlFor="email">
            ایمیل
          </label>
          <CustomInput defaultValue={data?.email} {...register("email")} />
        </div>
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="flex gap-5 basis-0 flex-col grow md:flex-row">
          <div className="grow basis-0 shrink-0">
            <label className="px-2">جنسیت</label>
            <CustomSelect
              value={sex}
              set={(input) => setsex(input)}
              options={["آقا", "خانم"]}
            />
          </div>
          <div className="grow basis-0 shrink-0">
            <label className="px-2">تاهل</label>
            <CustomSelect
              value={maritalStatus}
              set={(input) => setmaritalStatus(input)}
              options={["متاهل", "مجرد"]}
            />
          </div>
        </div>
        <div className="flex gap-5 basis-0 flex-col grow md:flex-row">
          <div className="grow basis-0 shrink-0">
            <label className="px-2">تاریخ تولد</label>
            <div className="flex gap-2">
              <CustomInput
                defaultValue={bDay.jd}
                type="number"
                placeholder="روز"
                {...register("birthdayDay")}
              />
              <CustomInput
                defaultValue={bDay.jm}
                type="number"
                placeholder="ماه"
                {...register("birthdayMonth")}
              />
              <CustomInput
                defaultValue={bDay.jy}
                type="text"
                placeholder="سال"
                {...register("birthdayYear")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-col grow md:flex-row">
        <div className="grow basis-0">
          <label className="px-2" htmlFor="city">
            شهر
          </label>
          <CustomInput defaultValue={data?.city} {...register("city")} />
        </div>
        <div className="grow basis-0">
          <label className="px-2" htmlFor="district">
            منطقه
          </label>
          <CustomInput
            min={0}
            type="number"
            defaultValue={data?.district}
            {...register("district")}
          />
        </div>
      </div>
      <div className="flex flex-col grow">
        <label className="px-2" htmlFor="">
          درباره من
        </label>
        <textarea
          defaultValue={data?.aboutMe}
          placeholder={
            data?.aboutMe
              ? data.aboutMe
              : "اگر مایلید میتوانید به صورت خلاصه ویژگی ها و مهارت های خود را بیان کنید."
          }
          rows={5}
          className="p-2 rounded-lg border outline-none bg-light-3 border-light-3 grow resize-none"
          {...register("aboutMe")}
        />
      </div>
      <CustomButton
        loading={isSubmitting}
        disabled={isSubmitting}
        type="submit"
      >
        ذخیره اطلاعات
      </CustomButton>
    </form>
  );
};

export default AccountForm;
