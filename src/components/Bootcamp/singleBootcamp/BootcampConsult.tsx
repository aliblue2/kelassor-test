"use client";

import ConsultForm from "@/components/Landing/ConsultUs/ConsultForm";
import CustomHeading from "@/components/Ui/CustomHeading";
import { HeadPhoneIcon, MessageIcon, PhoneIcon } from "@/components/Ui/Icons";
import { motion } from "framer-motion";
import Image from "next/image";

//BootcampConsult component
const BootcampConsult = () => {
  return (
    <div className="flex flex-col gap-10 mb-[100px]">
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
        <div className="p-5 md:p-10 flex items-center flex-col gap-5 mt-[20%] md:mt-0 font-bold text-white">
          <div className="flex gap-2 items-start text-2xl md:text-4xl">
            <HeadPhoneIcon />
            مشاوره اختصاصی
          </div>
          <div className="text-lg md:text-xl mt-10 sm:mt-0">
            همین الان این فرم رو پر کن تا کارشناسان ما در اسرع وقت باهات تماس
            بگیرند!
          </div>
        </div>
        {/******************************************************************************
            form */}
        <div className=" w-full flex justify-center absolute top-[65%] md:top-[50%] ">
          <div className="min-w-[350px]">
            <ConsultForm />
          </div>
        </div>
        {/******************************************************************************
            image */}
        <div className="left-0 h-1/2 md:h-[calc(100%-20px)] top-[20px] absolute grid ">
            <Image
              className="row-start-1 col-start-1 absolute md:static left-0 max-w-[125px] md:max-w-[500px] h-full "
              src={"/Bootcamp/phone.png"}
              alt={"consult image"}
              height={250}
              width={250}
            />
            <Image
              className="row-start-1 col-start-1 relative top-[50px] md:top-[100px] right-[-8px] md:right-[90px] size-[75px] md:size-[150px] "
              src={"/Bootcamp/image.png"}
              alt={"consult image"}
              height={150}
              width={150}
            />
        </div>
        {/******************************************************************************
            white cutout */}
        <div className="flex absolute top-0 right-0 gap-5 justify-center items-center w-1/3 h-1/5 md:bottom-0 md:top-auto md:w-1/4 md:h-1/4 md:rounded-bl-none bg-background rounded-bl-[30px] md:rounded-tl-[50px]">
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
