"use client";
import { useEffect, useRef } from "react";
import Companies from "./Companies/Companies";
import Hero from "./Hero/Hero";
import AnimatedPath, { AnimatedPathHandles } from "./AnimatedPath/AnimatedPath";
import MazeContainer from "../Ui/MazeContainer";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WhyUs from "./WhyUs/WhyUs";
import BootCamps from "./BootCamps/BootCamps";
import Feedback from "./Feedback/Feedback";
import Articles from "./Articles/Articles";
import ConsultUs from "./ConsultUs/ConsultUs";
import { motion, useInView } from "framer-motion";

//Landing component
const Landing = () => {
  const path1 = useRef<AnimatedPathHandles>(null);
  const path2 = useRef<AnimatedPathHandles>(null);
  const path3 = useRef<AnimatedPathHandles>(null);
  const path4 = useRef<AnimatedPathHandles>(null);
  const path5 = useRef<AnimatedPathHandles>(null);
  const path6 = useRef<AnimatedPathHandles>(null);
  const path7 = useRef<AnimatedPathHandles>(null);
  const path8 = useRef<AnimatedPathHandles>(null);
  const path9 = useRef<AnimatedPathHandles>(null);

  return (
    <div className="flex relative flex-col gap-16 md:gap-32">
      {/******************************************************************************
        path animation */}
      <div className="w-full absolute">
        <div className="relative container size-full">
          <motion.div
            viewport={{ once: false }}
            onViewportEnter={() => {
              path1.current?.animate();
              setTimeout(() => path2.current?.animate(), 1350);
            }}
            className="text-white absolute z-20 top-[58px] left-[50px] hidden lg:block"
          >
            <AnimatedPath
              ref={path1}
              id="path1"
              width={371}
              height={394}
              duration={20}
              viewBox="0 0 371 394"
              path="M366.501 326.5C366.501 326.5 368.5 309.5 368.5 295.5C368.5 247.5 323.501 206.5 323.501 156C323.501 113.453 342.001 117 342.001 65C342.001 39.5 319.501 12.5 288 12.5C266.001 12.5 246.001 17.4999 216.001 17.5C148.001 17.5001 124.501 2 65.5 2C23.5008 2 1.99923 37.5 2 71.5C2.00116 122.5 41.5 130 41.5 223.5C41.5 271 26.5008 290 26.5008 334.5C26.5008 360.5 36.5 385 39.5 393"
            />
          </motion.div>
          <AnimatedPath
            className="text-secondary-30 absolute z-20 top-[452px] left-[91px] hidden lg:block"
            ref={path2}
            id="path2"
            width={284}
            height={189}
            duration={20}
            viewBox="0 0 284 180"
            path="M2 1.00006C57 95.5 141.5 72.5 141.5 117.5C141.5 132 136 143.73 122.5 143C115 142.595 108 136 108 121C108 92.7158 141.873 88.0001 166.5 88.0001C229 88.0001 270 137 285 179"
          />
          <motion.div
            viewport={{ once: false, margin: "0px 0px -200px 0px" }}
            onViewportEnter={() => {
              path3.current?.animate();
            }}
            className="text-secondary-30 absolute z-40 top-[800px] left-[227px] hidden lg:block"
          >
            <AnimatedPath
              ref={path3}
              id="path3"
              width={682}
              height={1074}
              duration={20}
              viewBox="0 0 682 1074"
              path="M255 0.5C255 78 214 55.5 214 189.5V304H120.5V585.5H2V727.5H156.5V788.5H255V757H458V856C458 926 491 1071.5 682 1071.5"
            />
          </motion.div>
          <motion.div
            viewport={{ once: false, margin: "0px 0px -200px 0px" }}
            onViewportEnter={() => {
              path4.current?.animate();
              setTimeout(() => {
                path5.current?.animate();
              }, 1800);
            }}
            className="text-secondary-30 absolute z-20 top-[1800px] left-[618px] hidden lg:block"
          >
            <AnimatedPath
              ref={path4}
              id="path4"
              width={442}
              height={723}
              duration={20}
              viewBox="0 0 442 723"
              path="M291.001 71.5001C339 71.5001 348 49.0001 348 35.5C348 22 335 2.50016 307 2.00001C279 1.49986 265.5 20.9951 265.5 47C265.5 73.0048 297.5 141.5 361.5 141.5C398 141.5 437.167 160.5 438.5 192.5C439.7 221.3 439 288.5 438.5 318.5H378V265.5H265.5V628.5H207.5V720.5H0"
            />
          </motion.div>
          <div className="text-primary-base absolute z-10 top-[1951px] left-[127px] hidden lg:block">
            <AnimatedPath
              ref={path5}
              id="path5"
              width={630}
              height={616}
              duration={20}
              viewBox="0 0 630 616"
              path="M489.5 570C565.5 514.5 626.999 440.5 626.999 298.5C626.999 131.5 496.5 2.50012 307.499 2.50012C138.5 2.50012 3 139 3 298.5C3 546 206 613 322.5 613"
            />
          </div>
          <motion.div
            viewport={{ once: false, margin: "0px 0px -200px 0px" }}
            onViewportEnter={() => {
              path6.current?.animate();
            }}
            className="text-secondary-30 absolute z-10 top-[2573px] left-[76px] hidden lg:block"
          >
            <AnimatedPath
              ref={path6}
              id="path6"
              width={328}
              height={954}
              duration={20}
              viewBox="0 0 328 954"
              path="M325 0C325 154.919 3 0 3 154.919C3 172.909 3 170.411 3 175.408H109.702V246.871H192.036V192.399H262.54V452.263H214.512V581.195H297.792H313.644V749.607V954"
            />
          </motion.div>
          <motion.div
            viewport={{ once: false, margin: "0px 0px -200px 0px" }}
            onViewportEnter={() => {
              path7.current?.animate();
            }}
            className="text-secondary-30 absolute z-10 top-[3528px] left-[339px] hidden lg:block"
          >
            <AnimatedPath
              ref={path7}
              id="path7"
              width={509}
              height={887}
              duration={20}
              viewBox="0 0 509 887"
              path="M50.5019 0C50.5019 40.5 99.18 51.5172 184.99 27C279.49 0 268.57 83.8823 343.99 105C381.49 115.5 451.345 119.481 474.49 73.5C480.56 61.4415 482.49 44.5 461.49 37.5C449.632 33.5472 418.99 40.5 418.99 73.5C418.99 137.5 518.202 203.5 505.002 333.5C488.502 496 3.45194 329.5 3.48828 694C3.5 811.5 74.5017 777 74.5017 886.5"
            />
          </motion.div>
          <motion.div
            viewport={{ once: false, margin: "0px 0px -200px 0px" }}
            onViewportEnter={() => {
              path8.current?.animate();
            }}
            className="text-secondary-30 absolute z-10 top-[4415px] left-[323px] hidden lg:block"
          >
            <AnimatedPath
              ref={path8}
              id="path8"
              width={325}
              height={520}
              duration={20}
              viewBox="0 0 325 520"
              path="M90 0V52H2.5V96H322V137.5H150V519"
            />
          </motion.div>
          <motion.div
            className="text-secondary-30 absolute z-10 top-[4935px] left-[214px] hidden lg:block"
          >
            <AnimatedPath
              ref={path9}
              id="path9"
              width={262}
              height={264}
              duration={20}
              viewBox="0 0 262 264"
              path="M259 0.5C259 213 3 54 3 264"
            />
          </motion.div>
        </div>
      </div>

      {/******************************************************************************
        hero section */}
      <Hero className="container " />

      {/******************************************************************************
        companies section */}
      <Companies className="z-30 relative bg-background" />

      {/******************************************************************************
        what we do section */}
      <MazeContainer side="right">
        <WhatWeDo />
      </MazeContainer>

      {/******************************************************************************
        why us section */}
      <WhyUs />

      {/******************************************************************************
        BootCamps section */}
      <MazeContainer side="right">
        <BootCamps />
      </MazeContainer>

      {/******************************************************************************
        user feedbac section */}
      <Feedback />

      {/******************************************************************************
        articles section */}
      <MazeContainer side="left">
        <Articles />
      </MazeContainer>

      {/******************************************************************************
        consult us */}
      <ConsultUs pathAnimate={() => path9.current?.animate()} />

    </div>
  );
};

export default Landing;
