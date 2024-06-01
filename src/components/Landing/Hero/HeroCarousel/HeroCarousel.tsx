"use client";
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
    <div className="relative w-full h-[190px] md:h-[450px]">
      {/*todo <div className="relative min-w-[343px] h-[193px] md:min-w-[745px] md:h-[450px]"> */}
      {/* carousel with cutout ********************************************************************************/}
      {/*todo <div className="flex overflow-hidden heroCarouselSmall size-full md:heroCarouselBig"> */}
      <div className="flex overflow-hidden size-full rounded-[20px] md:rounded-[50px]">
        {data.map((item) => (
          <div
            style={{
              translate: `${-100 * index}%`,
            }}
            className="relative duration-500 size-full shrink-0"
            key={item.title}
          >
            <Image
              className="object-cover absolute size-full brightness-50"
              width={800}
              height={500}
              src={item.image}
              alt="coding"
            />
            <div className="flex absolute gap-5 flex-col justify-center items-center text-xl font-extrabold text-white size-full">
              <h1>بوت‌کمپ</h1>
              <h2>{item.title}</h2>
              <h2>{item.title2}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* buttons and text ********************************************************************************/}
      <div className="flex absolute top-0 right-0 bottom-0 left-0 flex-col justify-end items-center md:-bottom-2">
        <div className="flex bg-background rounded-t-[20px] md:rounded-t-[50px] md:px-5 md:pt-5 px-2 pt-2 gap-4 md:gap-6">
          <button
            className="flex justify-center items-center bg-white rounded-full size-6 shadow2 md:size-[60px] hover:[&>*]:scale-125"
            onClick={prevIndex}
          >
            <ChevronLeftIcon className="relative duration-200 size-3 right-[1px] text-gray-2 md:size-8" />
          </button>
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
          <button
            className="flex justify-center items-center bg-white rounded-full size-6 shadow2 md:size-[60px] hover:[&>*]:scale-125"
            onClick={nextIndex}
          >
            <ChevronRightIcon className="relative duration-200 left-[1px] size-3 text-gray-2 md:size-8" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
