"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    name: "مهراب حسین‌زهی",
    role: "دانشجو",
    comment:
      "به عنوان فاندر (مدیر) یک شرکت نوآور، همیشه به دنبال راه‌های جدید برای بهبود محصول (یونی بوک) هستیم. دوره مدیریت محصول کلاسور به من کمک کرد تا با رویکردی علمی و داده‌محور به محصول نگاه کنم و تصمیمات بهتری بگیرم.",
    image: "/Landing/Feedback/IMG_6704.JPG",
  },
  {
    name: "شیدا میرزایی",
    role: "دانشجو",
    comment:
      "شرکت تو دوره مدیریت محصول برای من تجربه‌ فوق‌العاده ای بود. محتوا جامع و با کیفیت بود و مدرسان حرفه‌ای و با تجربه، علاوه بر مطالب تئوری، با تمرینات عملی و پروژه‌های واقعی باعث شدند که یادگیری موثر باشه. این دوره را به همه علاقه‌مندان پیشنهاد میکنم چون دید خوبی از مدیریت محصول رو شکل میده.",
    image: "/Landing/Feedback/sheida.jpg",
  },
  {
    name: "نادیا بهنیا",
    role: "دانشجو",
    comment:
      "کلاسور شرایطی رو ایجاد میکنه که علاوه بر اهمیت یادگیری مطالب به مهارت افزایی کارجوها هم اهمیت میده که این واقعا قابل تشکر و قدردانی است.",
    image: "/Landing/Feedback/nadia.png",
  },
  {
    name: "هادی جلیلی",
    role: "دانشجو",
    comment:
      "مسیرشغلی کلاسور پکیج کاملی از یادگیری و کسب تجربه هستش؛ و مدت‌ها بود دنبال این‌چنین فرصتی بودم تا در زمینه موردعلاقه‌ام بتونم به صورت حرفه‌ای شاغل بشم.",
    image: "/Landing/Feedback/jalili.jpg",
  },
  {
    name: "امیرحسین جعفری",
    role: "دانشجو",
    comment:
      "بواسطه کلاسور تونستم در زمینه فروش و بازاریابی آموزش تخصصی ببینم و خیلی سریع وارد بازار کار بشم. از کلاسور بابت این فرصت فراهم‌شده نهایت تشکر و دارم.",
    image: "/Landing/Feedback/jafari.jpg",
  },
];
//FeedbackCarousel component
const FeedbackCarousel = () => {
  const [index, setIndex] = useState(0);
  const prevIndex = () => {
    setIndex((e) => {
      return e > 0 ? e - 1 : data.length - 1;
    });
  };
  const nextIndex = () => {
    setIndex((e) => {
      return e < data.length - 1 ? e + 1 : 0;
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col w-full"
    >
      <div className="flex overflow-hidden shadow2 bg-white h-[400px] rounded-[30px] md:rounded-[50px]">
        {data.map((item) => (
          <div
            style={{
              translate: `${100 * index}%`,
            }}
            className="flex relative flex-col gap-2 p-5 md:p-10 duration-500 md:gap-5 size-full shrink-0"
            key={item.name}
          >
            {/******************************************************************************
              image and name */}
            <div className="flex gap-5 md:gap-10 ">
              <Image
                src={item.image}
                alt="user photo"
                width={160}
                height={160}
                className="size-[80px] rounded-[30px] shrink-0 md:rounded-[50px] md:size-[160px]"
              />
              <div className="flex flex-col gap-2 justify-center">
                <h3 className="font-semibold">{item.name}</h3>
                <p className=" font-medium">{item.role}</p>
              </div>
            </div>
            {/******************************************************************************
              comment content */}
            <p className="flex overflow-auto text-ellipsis grow">
              {item.comment}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-2 px-2 pt-2 md:gap-6 md:px-5 md:pt-2 items-center justify-center">
        {/* prev button ********************************************************************************/}
        <button
          className="flex justify-center items-center bg-white relative rounded-full shadow2 size-[60px] hover:[&>*]:scale-125"
          onClick={prevIndex}
        >
          <ChevronRightIcon className="relative duration-200 right-[1px] text-gray-2 size-8" />
        </button>
        {/* indicator ********************************************************************************/}
        <div className="flex relative gap-2 justify-center items-center md:top-1 top-[2px]">
          {data.map((item, i) => (
            <span
              key={item.name}
              className={`rounded-full size-2 md:size-3 shadow2 duration-500 ${
                index === i ? "bg-primary-base" : "bg-light-2"
              }`}
            />
          ))}
        </div>
        {/* next button ********************************************************************************/}
        <button
          className="flex justify-center items-center bg-white rounded-full relative shadow2 size-[60px] hover:[&>*]:scale-125"
          onClick={nextIndex}
        >
          <ChevronLeftIcon className="relative duration-200 left-[1px] text-gray-2 size-8" />
        </button>
      </div>
    </motion.div>
  );
};

export default FeedbackCarousel;
