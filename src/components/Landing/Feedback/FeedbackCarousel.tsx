"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const data = [
  {
    name: "م2iحمد کریمی",
    role: "دانشجو",
    comment:
      "Lorem ipsum dolor sit ametlorema Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis., officia excepteur ex fugiat reprehenderit enidolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    name: "مi3حمد کریمی",
    role: "دانشجو",
    comment:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enidolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
  },
  {
    name: "مiح4مد کریمی",
    role: "دانشجو",
    comment:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enidolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
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
                src="/Landing/Feedback/1.jpg"
                alt="user photo"
                width={160}
                height={160}
                className="size-[80px] rounded-[30px] shrink-0 md:rounded-[50px] md:size-[160px]"
              />
              <div className="flex flex-col gap-2 justify-center">
                <p className=" text-2xl md:text-3xl font-semibold">
                  {item.name}
                </p>
                <p className=" text-xl md:text-2xl font-medium">{item.role}</p>
              </div>
            </div>
            {/******************************************************************************
              comment content */}
            <p className="flex overflow-auto text-ellipsis md:text-xl md:font-medium grow">
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
