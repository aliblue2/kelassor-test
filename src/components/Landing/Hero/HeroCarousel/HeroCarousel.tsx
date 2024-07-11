"use client";
import CustomButton from "@/components/Ui/CustomButton";
import { bootcampSimple } from "@/types/bootcamp";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

//HeroCarousel component
type HeroCarouselProps = {
  bootcamps: bootcampSimple[];
};
const HeroCarousel = ({ bootcamps }: HeroCarouselProps) => {
  //index of shown element
  const [index, setIndex] = useState(0);

  const prevIndex = () => {
    setIndex((e) => {
      return e > 0 ? e - 1 : bootcamps.length - 1;
    });
  };
  const nextIndex = useCallback(() => {
    setIndex((e) => {
      return e < bootcamps.length - 1 ? e + 1 : 0;
    });
  }, [bootcamps]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextIndex();
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [nextIndex]);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex relative justify-center w-full h-[240px] md:h-[450px]"
      dir="ltr"
    >
      {/* carousel content ********************************************************************************/}
      <div className="flex overflow-hidden size-full rounded-[30px] md:rounded-[50px]">
        {bootcamps.map((item) => (
          <div
            style={{
              translate: `${-100 * index}%`,
            }}
            className="relative duration-500 size-full shrink-0"
            key={item.header_title}
          >
            {/* image ********************************************************************************/}
            <Image
              className="object-cover absolute size-full brightness-50"
              width={800}
              height={500}
              src={item.logo_banner}
              alt="coding"
            />
            {/* text ********************************************************************************/}
            <div className="flex absolute flex-col gap-2 justify-center items-center text-xl font-extrabold text-white md:gap-5 size-full">
              <h1>بوت‌کمپ</h1>
              <h2>{item.header_title}</h2>
              <CustomButton>
                <Link href={"/bootcamp/" + item.url}>اطلاعات بیشتر</Link>
              </CustomButton>
            </div>
          </div>
        ))}
      </div>

      {/* controls  ********************************************************************************/}
      {/* container to prevent wierd overflow ********************************************************************************/}
      <div className="flex overflow-hidden absolute bottom-0 justify-center w-full h-[30px] md:h-[60px]">
        {/* control's background ********************************************************************************/}
        <div className="flex relative h-full w-[136px] bg-background rounded-t-[15px] md:w-[260px] md:rounded-t-[30px]">
          {/* fancy outer border radius ********************************************************************************/}
          <div className=" absolute bottom-0 right-full rounded-br-full w-full h-1/2 md:shadow-[50px_0_0_0_theme(colors.background)] shadow-[30px_0_0_0_theme(colors.background)]" />
          <div className="absolute bottom-0 rounded-bl-full w-full h-1/2 left-full md:shadow-[-50px_0_0_0_theme(colors.background)] shadow-[-30px_0_0_0_theme(colors.background)]" />
        </div>
      </div>

      {/* control buttons ********************************************************************************/}
      <div className="flex absolute bottom-0 gap-2 px-2 pt-2 md:px-5 md:pt-2 h-[30px] md:h-[60px]">
        {/* prev button ********************************************************************************/}
        <button
          className="flex justify-center items-center bg-white relative rounded-full size-6 shadow2 md:size-[60px] hover:[&>*]:scale-125"
          onClick={prevIndex}
        >
          <ChevronLeftIcon className="relative duration-200 size-3 right-[1px] text-gray-2 md:size-8" />
        </button>

        {/* indicator ********************************************************************************/}
        <div className="flex relative gap-1 justify-center items-center md:top-1 top-[2px]">
          {bootcamps.map((item, i) => (
            <button
              key={item.header_title}
              onClick={() => setIndex(i)}
              className={`rounded-full size-2 md:size-3 shadow2 duration-500 ${
                index === i ? "bg-primary-base" : "bg-light-2"
              }`}
            />
          ))}
        </div>

        {/* next button ********************************************************************************/}
        <button
          className="flex justify-center items-center bg-white rounded-full relative size-6 shadow2 md:size-[60px] hover:[&>*]:scale-125"
          onClick={nextIndex}
        >
          <ChevronRightIcon className="relative duration-200 left-[1px] size-3 text-gray-2 md:size-8" />
        </button>
      </div>
    </motion.div>
  );
};

export default HeroCarousel;
