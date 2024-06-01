"use client"
import Image from "next/image";

//HeroItem component
const HeroItem = () => {
  return (
    <div className="flex relative justify-center items-end h-full bg-primary-base aspect-square rounded-[20px] md:rounded-[50px] md:text-xl">
      <Image
        src="/Landing/Hero/heroPic.png"
        alt="hero image"
        width={400}
        height={400}
        className="size-2/3"
      />
      <span className="absolute py-2 px-4 font-bold bg-white rounded-[10px] text-primary-base top-[84%] right-[5%] shadow3">
        سرنخو بگیر
      </span>
      <span className="absolute py-2 px-4 font-bold bg-white rounded-[10px] text-primary-base top-[48%] right-[-3%] shadow3">
        بوتکمپ؟
      </span>
      <span className="absolute py-2 px-4 font-bold bg-white rounded-[10px] text-primary-base top-[37px] left-[24px] shadow3">
        چه رشته‌هایی؟
      </span>
      <span className="absolute py-2 px-4 font-bold bg-white rounded-[10px] text-primary-base top-[62%] left-[-3%] shadow3">
        کلاسور؟
      </span>
    </div>
  );
};

export default HeroItem;
