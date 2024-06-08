"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const className =
  "absolute py-2 md:py-4 px-4 md:px-8 font-bold bg-primary-base rounded-[20px] text-white shadow3";
//WhyUs component
const WhyUs = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(triggerRef, {
    once: true,
    margin: "0px 0px 100px 0px",
  });
  const variations = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
  };
  return (
    <div className="flex flex-col container overflow-x-hidden !pt-16">
      <CustomHeading circle={true} side="left">
        <h2>چرا کارجویان مارو انتخاب میکنن؟</h2>
      </CustomHeading>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        // viewport={{ margin: "-100px 0px 0px 0px", once:true }}
        transition={{ delay: 0.5 }}
        className="flex relative flex-row-reverse mt-36 w-full md:mt-32 maze h-[200px] rounded-[50px] md:h-[580px]"
      >
        {/* no color on left side ********************************************************************************/}
        <div className="hidden w-1/2 h-full md:block bg-background" />
        {/* the circle ********************************************************************************/}
        <div className="absolute z-0 size-[250px] md:size-[625px] top-[-100px] md:top-auto md:bottom-0 md:left-28 left-[50%] translate-x-[-50%] md:translate-x-0 rounded-full text-sm bg-background md:text-lg"></div>
        <div className="absolute z-30 size-[250px] md:size-[625px] top-[-100px] md:top-auto md:bottom-0 md:left-28 left-[50%] translate-x-[-50%] md:translate-x-0 text-sm md:text-lg">
          <motion.div
            variants={variations}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            viewport={{ margin: "-100px 0px 0px 0px" }}
            transition={{ delay: 0 + 0.5 }}
            className={`${className} top-[70%] right-[-25%] md:right-[-5%]`}
          >
            پروژه محور
          </motion.div>
          <motion.div
            variants={variations}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.2 + 0.5 }}
            className={`${className} top-[30%] right-[-25%] md:right-[-5%] `}
          >
            مدرسین مطرح
          </motion.div>
          <motion.div
            variants={variations}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.4 + 0.5 }}
            className={`${className} top-[-3%] right-[20%] md:right-[35%] `}
          >
            منتورینگ حضوری
          </motion.div>
          <motion.div
            variants={variations}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.6 + 0.5 }}
            className={`${className} top-[20%] left-[-20%] md:left-[-10%] `}
          >
            معرفی برای استخدام
          </motion.div>
          <motion.div
            variants={variations}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.8 + 0.5 }}
            className={`${className} top-[60%] left-[-25%] md:left-[-15%] `}
          >
            ارائه مدرک معتبر
          </motion.div>
        </div>
        <Image
          src={"/Landing/WhyUs/image.png"}
          alt="why us image"
          width={512}
          height={512}
          className="md:size-[450px] size-[200px] absolute z-30 left-[50%] translate-x-[-50%] md:translate-x-0 md:left-40 bottom-0"
        />
      </motion.div>
      <div ref={triggerRef}></div>
    </div>
  );
};

export default WhyUs;
