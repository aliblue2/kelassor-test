"use client";

import CustomButton from "@/components/Ui/CustomButton";
const inputClass = "p-1 rounded-[10px]";

//ConsultForm component
const ConsultForm = () => {
  return (
    <div className="bg-light-3 p-5 gap-2 rounded-2xl flex flex-col">
      <p>رشته‌ی مورد نظر</p>
      <input type="text" className={inputClass} />
      <p>نام و نام خانوادگی</p>
      <input type="text" className={inputClass} />
      <p>شماره موبایل</p>
      <input type="text" className={inputClass} />
      <CustomButton>ثبت</CustomButton>
    </div>
  );
};

export default ConsultForm;
