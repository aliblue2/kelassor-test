"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import { HeadPhoneIcon, MessageIcon, PhoneIcon } from "@/components/Ui/Icons";
import { motion } from "framer-motion";
import Image from "next/image";
import ConsultForm from "./ConsultForm";
import AnimatedPath, {
  AnimatedPathHandles,
} from "../AnimatedPath/AnimatedPath";
import { useRef } from "react";
import Footstep from "@/components/Ui/Footstep";

//ConsultUs component
type ConsultUsProps = { pathAnimate?: () => void };
const ConsultUs = ({ pathAnimate }: ConsultUsProps) => {
  const path = useRef<AnimatedPathHandles>(null);
  return (
    <div className="container flex flex-col mb-[100px] mt-[132px]">
      <div className="mb-2">
        <CustomHeading circle>
          <h2>مشاوره با ما</h2>
        </CustomHeading>
      </div>
      <div className="flex flex-col-reverse gap-5 lg:flex-row">
        {/******************************************************************************
          consult form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1.2 } }}
          viewport={{ once: true }}
          className="flex relative flex-col mb-40 bg-primary-base h-[400px] rounded-[30px] grow md:rounded-[50px]"
        >
          {/******************************************************************************
            content */}
          <div className="p-10 flex flex-col gap-5 mt-[20%] md:mt-0 font-bold text-white">
            <div className="flex gap-2 items-center text-2xl md:text-4xl">
              <HeadPhoneIcon />
              مشاوره اختصاصی
            </div>
            <div className="text-lg md:text-xl">
              فرم زیر رو پر کن تا مشاوران ما در اسرع وقت باهات تماس بگیرند.
            </div>
          </div>
          {/******************************************************************************
            form */}
          <div className=" w-4/5 md:w-96 absolute left-1/2 md:translate-x-0 -translate-x-1/2 md:left-[50px] top-[65%] md:top-[50%] ">
            <ConsultForm />
          </div>
          {/******************************************************************************
            white cutout */}
          <div className="flex absolute top-0 right-0 gap-5 justify-center items-center w-1/2 h-1/5 md:bottom-0 md:top-auto md:w-1/3 md:h-1/4 md:rounded-bl-none bg-background rounded-bl-[30px] md:rounded-tl-[50px]">
            <div
              className="
              w-1/2 h-1/2
              absolute top-0 right-full md:top-auto md:bottom-0
              rounded-tr-[30px] md:rounded-tr-none md:rounded-br-[50px]
              shadow-[30px_0_0_0_theme(colors.background)] md:shadow-[50px_0_0_0_theme(colors.background)]
              "
            />
            <div
              className="
              w-1/2 h-1/2
              absolute bottom-full right-0 top-full md:top-auto
              rounded-tr-[30px] md:rounded-br-[50px] md:rounded-tr-none
              shadow-[30px_0_0_0_theme(colors.background)] md:shadow-[50px_0_0_0_theme(colors.background)]
              "
            />
            <div className="flex relative z-40 justify-center items-center p-4 rounded-full bg-primary-base size-14 md:size-16">
              <PhoneIcon />
            </div>
            <div className="flex relative z-40 justify-center items-center p-4 rounded-full bg-primary-base size-14 md:size-16">
              <MessageIcon />
            </div>
          </div>
        </motion.div>
        {/******************************************************************************
          kelaasor logo */}
        <div className="flex relative flex-col">
          <div className="absolute bottom-[100%] w-screen lg:hidden -left-5 pl-5 z-[-10] overflow-hidden text-secondary-30">
            <AnimatedPath
              ref={path}
              duration={20}
              id="phone-path-24"
              viewBox="0 0 389 309"
              path="M387.912 53.9999C381.079 37.9999 346.435 13.9503 312.412 5.99993C248.2 -9.00546 165.344 11.6737 159.912 78.4999C154.914 140 180.209 159.573 199.913 163C222.914 167 241.414 156.5 247.414 133.5C254.355 106.89 238.769 91.3557 199.913 87.9999C89.9137 78.4999 -6.18252 141.532 0.99517 181.5C11.5008 240 70.4601 139.916 97 201C128.5 273.5 172.414 229.5 173.914 308.5"
            />
            <Footstep className="absolute top-[50px] lg:hidden right-5 rotate-[180deg]" />
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1, transition: { delay: 1 } }}
            viewport={{ once: true }}
            onViewportEnter={() => {
              if (pathAnimate) pathAnimate();
              if (path.current) path.current.animate();
            }}
            className="flex w-full md:w-auto justify-center items-center self-center p-16 bg-white lg:self-start max-w-[400px] aspect-square h-[240px] rounded-[30px] shadow2 md:rounded-[50px] md:h-[400px]"
          >
            <Image
              src="/logo2.png"
              alt="logo"
              height={400}
              width={400}
              className="object-contain size-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConsultUs;
