"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import Image from "next/image";
import image from "/public/Bootcamp/signUpPlan.png";
const plans = [
  {
    title: "آموزش با ضمانت استخدام",
    description:
      "این پلن مناسب شماست اگر هدفتان استخدام با حقوق مناسب در شرکت های ممتاز است، در این پلن کلاسور شما را معرفی کرده و استخدام شما تضمینی میباشد.",
    price: "۲۳ میلیون و پانصد هزار تومان",
  },
  {
    title: "آموزش با پیشنهاد شغلی",
    description:
      "این پلن مناسب شماست اگر مشتاقید بعد از بوت‌کمپ در یک موقعیت شغلی جدید مشغول به کار شوید، در این پلن کلاسور شما را به چندین شرکت برای استخدام معرفی میکند.",
    price: "۱۹ میلیون و ۹۰۰ هزار تومان",
  },
];
//BootcampSignupPlan component
const BootcampSignupPlan = ({ prices }: { prices: string[] }) => {
  return (
    <div className="flex flex-col gap-10 mb-[150px]">
      <CustomHeading circle>
        <h2>پلن ثبت‌نام</h2>
      </CustomHeading>
      <div className="flex flex-col gap-5 md:flex-row md:h-[200px]">
        <div className="flex overflow-hidden flex-col justify-end items-center bg-primary-base rounded-[30px] shrink-0">
          <Image
            src={image}
            width={360}
            height={360}
            alt="sign up plan"
            className="size-full"
          />
        </div>

        <div className="flex flex-col md:flex-row relative grow gap-5 justify-center px-10 h-full bg-primary-base rounded-[30px]">
          {plans.map((item, index) => (
            <div
              key={item.title}
              className="flex h-[150%] grow relative top-10 shadow2 flex-col gap-5 p-5 text-center bg-white rounded-[30px]"
            >
              <div className="text-xl font-bold">{item.title}</div>
              <div>{item.description}</div>
              <div className="p-2 mt-auto text-white rounded-xl bg-primary-base">
                {prices[index]} تومان
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BootcampSignupPlan;
