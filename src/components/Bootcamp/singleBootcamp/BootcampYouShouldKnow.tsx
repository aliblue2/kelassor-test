"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import { forwardRef } from "react";

const content = [
  {
    title: "این بوت‌کمپ مناسب شماست اگر :",
    points: [
      "می‌توانید هفته‌ای حداقل ۲۰ ساعت برای یادگیری وقت بگذارید.",
      "علاقه‌مندید علاوه بر دانش فنی، مهارت‌های نرم و کار تیمی خود را بهبود ببخشید. ",
      "علاقه‌مندید که رزومه کاری پُرباری برای خودتان بسازید تا بیشتر دیده شوید. ",
      "میخواهید در سریع ترین زمان ممکن استخدام شوید.",
      "میخواهید توسط کلاسور در شرکت های ممتاز استخدام شوید.",
    ],
  },
  {
    title: "این بوت‌کمپ مناسب شما نیست اگر :",
    points: [
      "می‌خواهید سرفصل‌های بوت‌کمپ را به‌صورت سطحی یاد بگیرید.",
      "هنوز فکر می‌کنید که شرکت‌ها برای استخدام به مدرک دانشگاهی شما توجه می‌کنند.",
      "به انجام پروژه در کنار یادگیری علاقه‌ای ندارید.",
      "علاقه‌ای به آشنایی با افراد مطرح این حوزه ندارید.",
    ],
  },
];
//BootcampYouShouldKnow component
const BootcampYouShouldKnow = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-10 scroll-mt-40">
      <CustomHeading circle>
        <h2>باید بدانیم</h2>
      </CustomHeading>
      <h3 className="text-center">این بوتکمپ مناسب چه کسانی است؟</h3>
      {content.map((item) => (
        <div
          key={item.title}
          className="flex flex-col gap-5 p-10 md:text-center bg-white rounded-[30px] shadow1"
        >
          <h3 className="font-semibold text-primary-base">{item.title}</h3>
          <ul className="font-semibold leading-8 list-disc flex flex-col md:items-center">
            {item.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
});
BootcampYouShouldKnow.displayName = "BootcampYouShouldKnow";

export default BootcampYouShouldKnow;
