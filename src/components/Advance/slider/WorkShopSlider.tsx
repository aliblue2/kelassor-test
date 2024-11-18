"use client";

import React, { useCallback } from "react";
import { WorkShop } from "@/types/Workshop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TeachersCard from "./TeachersCard";
import { useRouter } from "next/navigation";
import CountDown from "../CountDown";
import Clock from "@/../public/clock.svg";
import Image from "next/image";

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
    <div className="w-full h-full overflow-hidden md:max-w-[1100px] max-w-[350px] mx-auto p-3">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 2.9,
          },
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {workshops.map((workShopItem, i) => {
          return workShopItem.status === "active" ? (
            <SwiperSlide
              onClick={() => openWorkShopHandler(workShopItem.url)}
              key={workShopItem.id + i}
              className="w-full h-full bg-white shadow2 border p-5 rounded-[20px] cursor-pointer"
            >
              <div className="w-full flex flex-col items-center justify-start gap-3">
                <div className="flex w-full rounded-[10px] items-center justify-center gap-2 border-2 border-primary-40 p-4">
                  <span className="truncate text-lg md:text-xl font-medium">
                    {workShopItem.main_title}
                  </span>
                </div>
                <div className="flex w-full relative rounded-lg items-center justify-between bg-light-3 text-light-1 text-[12px] font-medium">
                  <CountDown targetTime={workShopItem.start} />
                  <Image
                    src={Clock}
                    alt="clock"
                    className="absolute left-1 -top-[8px] w-12"
                  />
                </div>
                <div className="w-full rounded-[10px] bg-light-3 text-light-1 py-12 px-5 relative">
                  <span className="absolute top-2 font-bold left-2 bg-white rounded text-red-500 text-[10px] px-6 py-1">
                    آنلاین
                  </span>
                  <TeachersCard teachers={workShopItem.teachers} />

                  <div className="flex items-center justify-center w-full absolute bottom-0 left-0">
                    <span className="p-2 px-4 rounded-t-lg text-primary-40 text-xs bg-white">
                      {workShopItem.length.split("-")[0]}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full gap-12 my-2">
                  <button className="p-2 px-4 rounded-[10px] text-white bg-primary-50 text-lg">
                    ثبت نام
                  </button>
                  <button className="text-lg text-primary-50">
                    {workShopItem.price.toLocaleString("fa-IR") + " تومان"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            "هنوز کارگاهی وجود ندارد"
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkShopSlider;
