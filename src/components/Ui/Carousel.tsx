"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { ReactNode, useState } from "react";

//Carousel component
type CarouselProps = {
  children: ReactNode;
};
const Carousel = ({ children }: CarouselProps) => {
  const [index, setIndex] = useState(0);
  const prevIndex = () => {
    setIndex((e) => {
      return e > 0 ? e - 1 : React.Children.count(children) - 1;
    });
  };
  const nextIndex = () => {
    setIndex((e) => {
      return e < React.Children.count(children) - 1 ? e + 1 : 0;
    });
  };
  return (
    <div className="flex flex-col ">
      <div className="flex gap-5 overflow-hidden grow">
        {React.Children.map(children, (child, i) => (
          <div
            style={{
              translate: `calc(${100 * index}% + ${20 * index}px)`,
            }}
            key={i}
            className="flex relative flex-col gap-2 duration-500 md:gap-5 size-full shrink-0"
          >
            {child}
          </div>
        ))}
      </div>
      {React.Children.count(children) > 1 && (
        <div className="flex gap-4 mt-2 px-2 pt-2 md:gap-6 md:px-5 md:pt-2 items-center justify-center">
          {/* prev button ********************************************************************************/}
          <button
            className="flex justify-center items-center bg-white relative rounded-full shadow2 size-[60px] hover:[&>*]:scale-125"
            onClick={prevIndex}
          >
            <ChevronRightIcon className="relative duration-200 right-[1px] text-gray-2 size-8" />
          </button>
          {/* next button ********************************************************************************/}
          <button
            className="flex justify-center items-center bg-white rounded-full relative shadow2 size-[60px] hover:[&>*]:scale-125"
            onClick={nextIndex}
          >
            <ChevronLeftIcon className="relative duration-200 left-[1px] text-gray-2 size-8" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Carousel;
