"use client";

import ConsultForm from "@/components/Landing/ConsultUs/ConsultForm";
import CustomHeading from "@/components/Ui/CustomHeading";
import { HeadPhoneIcon, MessageIcon, PhoneIcon } from "@/components/Ui/Icons";
import { motion } from "framer-motion";

//BootcampConsult component
const BootcampConsult = () => {
  return (
    <div className="mb-[100px] flex flex-col gap-10">
      <CustomHeading>
        <h2>اطلاعات بیشتر می‌خوای؟</h2>
      </CustomHeading>

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
    </div>
  );
};

export default BootcampConsult;
