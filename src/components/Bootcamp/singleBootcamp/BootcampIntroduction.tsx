"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import SimpleCarousel from "@/components/Ui/SimpleCarousel";
import Image from "next/image";
import { forwardRef } from "react";

//BootcampIntroduction component
type BootcampIntroductionProps = {
  content: string;
  title: string;
  pictures: string[];
};
const BootcampIntroduction = forwardRef<
  HTMLDivElement,
  BootcampIntroductionProps
>(({ content, pictures, title }, ref) => {
  return (
    <div ref={ref} className="flex overflow-hidden flex-col scroll-mt-40">
      <CustomHeading circle>
        <h2>معرفی بوتکمپ {title}</h2>
      </CustomHeading>
      <div className="grid gap-10 items-center md:grid-cols-2 grid-row-2 md:grid-row-1">
        <p className="font-medium leading-8">{content}</p>
        <div className="relative p-10">
          <SimpleCarousel count={pictures.length}>
            {pictures.map((item) => (
              <Image
                key={item}
                src={item}
                alt="picture"
                height={300}
                width={400}
                className="object-cover size-full"
              />
            ))}
          </SimpleCarousel>
          <div className="absolute py-2 px-4 font-bold text-white rounded-2xl bg-primary-base top-[5%] right-[5%]">
            منتورنیگ حضوری
          </div>
          <div className="absolute py-2 px-4 font-bold text-white rounded-2xl bg-primary-base top-[15%] left-[0%]">
            پروژه محور
          </div>
          <div className="absolute py-2 px-4 font-bold text-white rounded-2xl bg-primary-base bottom-[30%] left-[10%]">
            مدرسین مطرح
          </div>
          <div className="absolute py-2 px-4 font-bold text-white rounded-2xl bg-primary-base bottom-[40%] right-[0%]">
            فضای تعاملی
          </div>

          <svg
            className="absolute top-[-10%] -z-10 left-[-10%]"
            height="80%"
            width="80%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="40%"
              cx="50%"
              cy="50%"
              fill="none"
              stroke="#197265"
              strokeWidth="4"
              strokeDasharray="14 14"
            />
          </svg>
        </div>
      </div>
    </div>
  );
});
BootcampIntroduction.displayName = "BootcampIntroduction";
export default BootcampIntroduction;
