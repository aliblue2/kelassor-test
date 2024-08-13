"use client";
import userGreen from "/public/Bootcamp/user-tick.svg";
import teacherGreen from "/public/Bootcamp/teacher.svg";
import documentGreen from "/public/Bootcamp/document-text.svg";
import peopleGreen from "/public/Bootcamp/people-green.svg";

import CustomHeading from "@/components/Ui/CustomHeading";
import Image from "next/image";
import { forwardRef } from "react";

const features = [
  {
    id: 1,
    title: "پروژه محور ",
    desc: "دوره پروژه محور است و با همدیگر پروژه های واقعی زیادی را انجام خواهیم داد.",
    logo: documentGreen,
  },
  {
    id: 2,
    title: "مدرسین مطرح",
    desc: "مدرسین کلاسور علاوه بر رویکرد علمی نسبت به موضوعات، در شرکت های مطرح هم تجربه های عمیق و خوبی دارند.",
    logo: userGreen,
  },
  {
    id: 3,
    title: "منتورینگ حضوری",
    desc: "همراهی منتور‌های حرفه ای در کنار دانشجویان",
    logo: peopleGreen,
  },
  {
    id: 4,
    title: "معرفی برای استخدام",
    desc: "در انتها کلاسور شمار رو تنها نمیذاره و به بهترین و معتبرترین شرکت ها برای شروع مسیر کاری معرفیتون میکنه.",
    logo: teacherGreen,
  },
];
//BootcampFeatures component
const BootcampFeatures = forwardRef<HTMLDivElement>((_,ref) => {
  return (
    <div ref={ref} className="flex flex-col p-5 md:p-10 scroll-mt-40 maze rounded-[30px]">
      <CustomHeading>
        <h2>ویژگی‌های بوتکمپ کلاسور</h2>
      </CustomHeading>
      <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-5 md:grid-cols-4 md:grid-rows-1 md:mb-20">
        {features.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-3 md:gap-5 items-center p-2 md:p-5 text-center bg-background rounded-[30px] relative ${item.id%2!==0? "md:top-20":null}`}
          >
            <div className="font-bold text-primary-base">{item.title}</div>
            <div className="text-xs font-bold text-light-1">{item.desc}</div>
            <Image
              src={item.logo}
              alt="logo"
              width={100}
              height={100}
              className="mt-auto scale-75 md:scale-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
})
BootcampFeatures.displayName = "BootcampFeatures"
export default BootcampFeatures;
