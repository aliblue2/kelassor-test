"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroMainTitle = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "یاد بگیر و تجربه کن،  استخدام شو! ",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "آینده‌ات را با کلاسور بساز، موفقیت در دستان توست!",
        3000,
        " آموزش‌های پروژه محور برای موفقیت!",
        3000,
        " کلاسور پل ارتباطی به دنیای حرفه‌ای‌ها،!",
        3000,
      ]}
      wrapper="span"
      speed={50}
      className="inline-block text-3xl min-h-36 text-center md:text-4xl leading-normal md:leading-normal font-bold text-primary-base "
      repeat={Infinity}
    />
  );
};

export default HeroMainTitle;
