"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import image1 from "/public/Bootcamp/support1.svg";
import image2 from "/public/Bootcamp/support2.svg";
import image3 from "/public/Bootcamp/support3.svg";
import image4 from "/public/Bootcamp/support4.svg";
import Image from "next/image";

const content = [
  { text: "رسیدگی به نظرات و پیشنهادات", image: image1 },
  { text: "برگزاری جلسات فوق برنامه", image: image2 },
  { text: "نظارت بر فرایند برگزاری کلاس‌ها", image: image3 },
  { text: "حل تمرین و رفع اشکال آنلاین", image: image4 },
];
//BootcampSupport component
const BootcampSupport = () => {
  return (
    <div className="flex flex-col gap-10">
      <CustomHeading circle>
        <h2>پشتیبانی بوتکمپ</h2>
      </CustomHeading>
      <div className="flex flex-wrap gap-5 justify-around">
        {content.map((item) => (
          <div
            key={item.text}
            className=" text-base md:text-xl  flex flex-col items-center gap-5 font-semibold"
          >
            <Image
              src={item.image}
              className="size-[100px] md:size-[200px]"
              alt={item.text}
              height={200}
              width={200}
            />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BootcampSupport;
