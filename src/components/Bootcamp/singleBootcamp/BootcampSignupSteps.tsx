"use client";

import Image from "next/image";
import { forwardRef } from "react";
import img from "/public/Bootcamp/signup.png";
import BootcampSigupStepsItem from "./BootcampSigupStepsItem";

//BootcampSignupSteps component
const BootcampSignupSteps = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col">
      <div className="relative p-10 bg-secondary-75 scroll-mt-40 rounded-[30px] md:mt-[100px]">
        <h2 className="text-gray-3 pl-[100px] md:pl-0">فرآیند ثبت‌نام در بوتکمپ‌های کلاسور</h2>
        <Image
          src={img}
          height={200}
          width={200}
          alt="signup"
          className="absolute bottom-0 left-5 md:left-10 w-[150px] md:w-[200px]"
        />
      </div>
      <div className="flex flex-col py-10">
        <BootcampSigupStepsItem title="ثبت‌نام اولیه" className="text-primary-50" number={1}>
          تا تاریخ  10 بهمن  با وارد کردن نام و شماره تلفن, ثبت نام اولیه شما
          انجام می شود.و می توانید منتظر تماس کارشناسان ما باشید.
        </BootcampSigupStepsItem>
        <BootcampSigupStepsItem title="مشاوره" className="text-primary-20" number={2} left>
          کارشناسان ما با شما تماس گرفته و اطلاعات کاملی از نحوه ی برگزاری
          بوتکمپ به شما می دهند.
        </BootcampSigupStepsItem>
        <BootcampSigupStepsItem title="شروع بوتکمپ" className="text-secondary-20" number={3}>
          تمام مدت زمان  9 هفته (بیش از 100 ساعت)  تمام مهارت های مورد نیاز برای
          ورود به بازار کار را دریافت می‌کنید.
        </BootcampSigupStepsItem>
        <BootcampSigupStepsItem title="معرفی برای استخدام" className="text-secondary-base" number={4} left>
          در این مرحله شما توسط کلاسور به شرکت های ممتاز برای استخدام معرفی
          می‌شوید.
        </BootcampSigupStepsItem>
        <BootcampSigupStepsItem title="استخدام" className="text-secondary-50" number={5}>
          تبریک میگم! شما وارد بازار کار شدید.
        </BootcampSigupStepsItem>
      </div>
    </div>
  );
});

BootcampSignupSteps.displayName = "BootcampSignupSteps";
export default BootcampSignupSteps;
