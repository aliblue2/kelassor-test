"use client";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
  {
    image: "/Landing/Hero/img1.jpg",
    title: "جاوا‌اسکریپت / ری‌اکت",
    title2: "React / JavaScript",
  },
  {
    image: "/Landing/Hero/img2.jpg",
    title: "پایتون / جنگو",
    title2: "Python / Django",
  },
  { image: "/Landing/Hero/img3.webp", title: "سئو", title2: "SEO" },
]; //todo should be props and connected to backend

//HeroCarousel component
const HeroCarousel = () => {
  //index of shown element
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

  useEffect(() => {
    setInterval(nextIndex, 5000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex relative justify-center w-full h-[190px] md:h-[450px]"
    >
      {/* carousel content ********************************************************************************/}
      <div className="flex overflow-hidden size-full rounded-[20px] md:rounded-[50px]">
        {data.map((item) => (
          <div
            style={{
              translate: `${-100 * index}%`,
            }}
            className="relative duration-500 size-full shrink-0"
            key={item.title}
          >
            {/* image ********************************************************************************/}
            <Image
              className="object-cover absolute size-full brightness-50"
              width={800}
              height={500}
              src={item.image}
              alt="coding"
            />
            {/* text ********************************************************************************/}
            <div className="flex absolute flex-col gap-5 justify-center items-center text-xl font-extrabold text-white size-full">
              <h1>بوت‌کمپ</h1>
              <h2>{item.title}</h2>
              <h2>{item.title2}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* buttons ********************************************************************************/}
      <div className="flex absolute bottom-0 gap-4 px-2 pt-2 md:gap-6 md:px-5 md:pt-2 bg-background rounded-t-[15px] h-[30px] md:h-[60px] md:rounded-t-[30px]">
        {/* left and right fancy corners ********************************************************************************/}
        <div className="absolute bottom-0 rounded-br-full w-full h-1/2 right-full md:shadow-[50px_0_0_0_theme(colors.background)] shadow-[30px_0_0_0_theme(colors.background)]" />
        <div className="absolute bottom-0 rounded-bl-full w-full h-1/2 left-full md:shadow-[-50px_0_0_0_theme(colors.background)] shadow-[-30px_0_0_0_theme(colors.background)]" />

        {/* prev button ********************************************************************************/}
        <button
          className="flex justify-center items-center bg-white relative rounded-full size-6 shadow2 md:size-[60px] hover:[&>*]:scale-125"
          onClick={prevIndex}
        >
          <ChevronLeftIcon className="relative duration-200 size-3 right-[1px] text-gray-2 md:size-8" />
        </button>

        {/* indicator ********************************************************************************/}
        <div className="flex gap-2 justify-center items-center">
          {data.map((item, i) => (
            <span
              key={item.title}
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
