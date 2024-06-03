"use client";
import { useEffect, useRef } from "react";
import Companies from "./Companies/Companies";
import Hero from "./Hero/Hero";
import AnimatedPath, { AnimatedPathHandles } from "./AnimatedPath/AnimatedPath";
import MazeContainer from "../Ui/MazeContainer";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

//Landing component
const Landing = () => {
  const path1 = useRef<AnimatedPathHandles>(null);
  useEffect(() => {
    setTimeout(() => path1.current?.animate(), 200);
  }, []);

  return (
    <div className="flex relative flex-col gap-16 md:gap-32">
      <div className="w-full bg-black z-20 top-12 absolute">
        <div className="relative container">
          <AnimatedPath
            className="text-secondary-base absolute z-20 bg-opacity-20 left-[43px] hidden md:block"
            ref={path1}
            id="path1"
            width={400}
            height={573}
            duration={20}
            viewBox="0 0 371 573"
            path="M368 331C368 216.5 324 230 322.294 151.086C321.59 118.5 342.294 108 342.294 64.0859C342.294 43 322.294 14.0859 288.295 14.0859C254.295 14.0859 250.981 19.8266 215 20.9999C169 22.5 140 2.54776 81.5 3.49997C33.5 4.28127 2.50074 39 2.5 81C2.49909 132.5 38.2952 118.086 42.2952 221.086C44.6996 283 19.8835 273.012 21.2952 354.086C23 452 181.295 470.5 181.295 521.086C181.295 527.5 176.706 541.5 160.501 541.5C155.706 541.5 145.295 537.5 145.295 521.086C145.295 507 157.206 485.5 204 485.5C256.205 485.5 297.295 551 297.295 572.086"
          />
        </div>
      </div>
      <Hero className="container " />
      <div className="flex relative z-30 ">
        <Companies />
      </div>
      <MazeContainer side="left">
        <WhatWeDo />
      </MazeContainer>
    </div>
  );
};

export default Landing;
