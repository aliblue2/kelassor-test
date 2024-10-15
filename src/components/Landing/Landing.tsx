"use client";
import { useRef } from "react";
import Companies from "./Companies/Companies";
import Hero from "./Hero/Hero";
import AnimatedPath, { AnimatedPathHandles } from "./AnimatedPath/AnimatedPath";
import MazeContainer from "../Ui/MazeContainer";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WhyUs from "./WhyUs/WhyUs";
import Feedback from "./Feedback/Feedback";
//import Articles from "./Articles/Articles";
import ConsultUs from "./ConsultUs/ConsultUs";
import Fields from "./Fields/Fields";
import DesktopThread from "./AnimatedPath/DesktopThread";
import { bootcampSimple } from "@/types/bootcamp";
import { motion } from "framer-motion";
import Footstep from "../Ui/Footstep";

//Landing component
type LandingProps = { bootcamps: bootcampSimple[] };
const Landing = ({ bootcamps }: LandingProps) => {
  const path = useRef<AnimatedPathHandles>(null);
  const path2 = useRef<AnimatedPathHandles>(null);
  const path3 = useRef<AnimatedPathHandles>(null);

    return (
      <div className="flex relative flex-col gap-32 md:gap-32 overflow-hidden">
        {/******************************************************************************
        thread animation */}
      <DesktopThread lastpath={path} />

      {/******************************************************************************
        hero section */}
      <Hero className="container" bootcamps={bootcamps} />
      <motion.div
        viewport={{ once: false, margin: "0px 0px -200px 0px" }}
        onViewportEnter={() => path2.current?.animate()}
        className="absolute lg:hidden w-full top-[14%] text-secondary-30"
      >
        <AnimatedPath
          ref={path2}
          id="phone-path-22"
          viewBox="0 0 433 298"
          path="M432 1C385 76 356.323 29.7929 277 60.5C197.677 91.2071 212.37 204.421 162.5 235.5C93.5 278.5 41 223.5 1 297"
        />
      </motion.div>
      <motion.div
        viewport={{ once: false, margin: "0px 0px -500px 0px" }}
        onViewportEnter={() => path3.current?.animate()}
        className="absolute lg:hidden w-full top-[33.5%] z-[-10] text-secondary-30"
      >
        <AnimatedPath
          ref={path3}
          id="phone-path-23"
          viewBox="0 0 406 587"
          path="M0.5 0.500062C16.5 55.1667 36 164.5 112 164.5C207.5 164.5 279.5 113.137 279.5 29.0001C279.5 10.5 268.5 0.500038 254 0.500061C236.093 0.500089 225 13.5 225 29.0001C225 74 350.5 35 380.5 86C405.5 128.5 346 168 357 223.5C372.439 301.397 445 367 376 463.5C307 560 205 592 130.5 562.5C90.5 546.661 15.9815 528.5 24.5 482.5C29.5 455.5 54.4008 448.728 73 454.5C102 463.5 108.5 485 97.5 507.5C79.89 543.521 34 566.833 0.5 586.5"
        />
        <Footstep className="absolute lg:hidden top-[100px] right-5 rotate-[100deg]" />
      </motion.div>

      {/******************************************************************************
        companies section */}
      <Companies className="relative z-30 bg-background" />

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
        <Fields
          bootcamps={bootcamps.filter((item) => item.status !== "notactive")}
        />
      </MazeContainer>

      {/******************************************************************************
        user feedbac section */}
      <Feedback />

      {/******************************************************************************
        articles section */}
      {/*todo:
      <MazeContainer side="left">
        <Articles />
      </MazeContainer>
      */}

      {/******************************************************************************
        consult us */}
      <ConsultUs pathAnimate={() => path.current?.animate()} />
    </div>
  );
};

export default Landing;