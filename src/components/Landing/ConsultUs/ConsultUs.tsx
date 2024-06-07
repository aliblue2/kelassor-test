"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import { motion } from "framer-motion";
import Image from "next/image";

//ConsultUs component
type ConsultUsProps = { pathAnimate: () => void };
const ConsultUs = ({ pathAnimate }: ConsultUsProps) => {
  return (
    <div className="container flex flex-col">
      <CustomHeading circle>
        <h2>مشاوره با ما</h2>
      </CustomHeading>

      <div className="flex flex-col-reverse gap-5 mt-10 md:flex-row">
        {/******************************************************************************
          consult form */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 1 } }}
          viewport={{once:true}}
          className="relative bg-primary-base h-[400px] rounded-[30px] md:rounded-[50px] grow"
        >
          {/******************************************************************************
            white cutout */}
          <div
            className="
            w-1/2 h-1/5 md:w-1/3 md:h-1/4
            absolute top-0 right-0 md:bottom-0 md:top-auto
            bg-background
            rounded-bl-[30px] md:rounded-bl-none md:rounded-tl-[50px]
            "
          >
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
          </div>
        </motion.div>
        {/******************************************************************************
          kelaasor logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1, transition: { delay: 0.8 } }}
          viewport={{once:true}}
          onViewportEnter={pathAnimate}
          className="flex justify-center items-center p-16 bg-white aspect-square h-[240px] rounded-[30px] md:rounded-[50px] shadow2 md:h-[400px]"
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
  );
};

export default ConsultUs;
