"use client";

import React, { useCallback } from "react";
import { WorkShop } from "@/types/Workshop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CustomButton from "../../Ui/CustomButton";
import TeachersCard from "./TeachersCard";
import { useRouter } from "next/navigation";
import CountDown from "../CountDown";
import { Clock5 } from "lucide-react";

interface WorkShopSliderProps {
  workshops: WorkShop[];
}

const WorkShopSlider: React.FC<WorkShopSliderProps> = ({ workshops }) => {
  const router = useRouter();
  const openWorkShopHandler = useCallback(
    (targetUrl: string) => {
      router.push(`/advance/${targetUrl}`);
    },
    [router]
  );
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 3.2,
          },
          1600: {
            slidesPerView: 4.2,
          },
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {workshops.map((workShopItem, i) => {
          return workShopItem.status === "active" ? (
            <SwiperSlide
              onClick={() => openWorkShopHandler(workShopItem.url)}
              key={workShopItem.url}
              className="w-full h-full cursor-pointer"
            >
              <div className="w-full flex flex-col items-center justify-start gap-2 h-full p-5 bg-white shadow-md rounded-[20px]">
                <h6 className="w-full text-center font-extrabold p-3 rounded-[10px] text-primary-20 border-2 border-primary-20">
                  {workShopItem.main_title}
                </h6>
                <div className="p-1 px-2 bg-light-3 rounded-[10px] text-light-1 text-sm font-bold w-full flex justify-between items-center">
                <CountDown targetTime="december 4 , 24" />
                <Clock5 size={36} />
                </div>
                <div className="w-full relative rounded-[10px] bg-light-3 text-light-1 p-5 pt-12">
                  <span className="bg-white absolute text-sm top-2 left-2 rounded text-red-500 font-medium px-2 py-1">
                    {workShopItem.level}
                  </span>
                  <TeachersCard teachers={workShopItem.teachers} />
                </div>
                <div className="flex items-center justify-center gap-5 w-full mt-5">
                  <CustomButton>ثبت نام</CustomButton>
                  <CustomButton secondary>{workShopItem.price}</CustomButton>
                </div>
              </div>
            </SwiperSlide>
          ) : null;
        })}
      </Swiper>
    </>
  );
};

export default WorkShopSlider;
