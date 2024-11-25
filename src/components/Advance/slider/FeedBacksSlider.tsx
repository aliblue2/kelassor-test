"use client";
import userIcon from "@/../public/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import { WorkShopFeedBack } from "@/types/Workshop";
import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import CustomHeading from "@/components/Ui/CustomHeading";

const fakeFeeds: WorkShopFeedBack[] = [
  {
    id: 1,
    content:
      "حالا که دوره تموم شده احساس میکنم در حوزه ی دیزاین حرفی برای گفتن دارم. در کلاسور خیلی چیزها یاد گرفتم از تعامل با همگروهی گرفته تا همکاری با دولوپر.از تیم اموزشی کلاسور کمال تشکر را دارم.",
    name: "محمد کریمی",
  },
  {
    id: 2,
    content:
      "حالا که دوره تموم شده احساس میکنم در حوزه ی دیزاین حرفی برای گفتن دارم. در کلاسور خیلی چیزها یاد گرفتم از تعامل با همگروهی گرفته تا همکاری با دولوپر.از تیم اموزشی کلاسور کمال تشکر را دارم.",
    name: "اشکان مهدویان",
  },
  {
    id: 3,
    content:
      "حالا که دوره تموم شده احساس میکنم در حوزه ی دیزاین حرفی برای گفتن دارم. در کلاسور خیلی چیزها یاد گرفتم از تعامل با همگروهی گرفته تا همکاری با دولوپر.از تیم اموزشی کلاسور کمال تشکر را دارم.",
    name: "محمد کریمی",
  },
];

const FeedBacksSlider: React.FC<{
  temp?: boolean;
  feeds?: WorkShopFeedBack[];
}> = ({ temp, feeds }) => {
  return (
    <div
      className={`${feeds && "max-w-[1200px] mx-auto"} w-full relative overflow-hidden`}
    >
      <CustomHeading >
        <h3>دیدگاه‌ها</h3>
      </CustomHeading>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        // loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {temp
          ? fakeFeeds.map((feedback) => {
              return (
                <SwiperSlide
                  className="w-full flex flex-col items-center justify-start gap-12 py-20 px-5 bg-white shadow2 max-w-[600px]  rounded-[50px]"
                  key={feedback.id}
                >
                  <div className="flex items-center justify-start gap-8 px-5">
                    <Image
                      src={userIcon}
                      className="w-20 h-20 bg-primary-40 bg-opacity-20 rounded-full border-4 pt-2 border-primary-40 md:w-32 md:h-32 text-primary-40"
                      alt="userIcon"
                    />
                    <h6 className="text-2xl text-light-1 md:text-4xl font-medium">
                      {feedback.name}
                    </h6>
                  </div>
                  <p className="text-sm md:text-lg font-medium mt-12">
                    {feedback.content}
                  </p>
                </SwiperSlide>
              );
            })
          : feeds && feeds?.length === 0
            ? "هنوز دیدگاهی برای این کارگاه اضافه نشده است"
            : feeds!.map((feedback) => {
                return (
                  <SwiperSlide
                    className="w-full flex flex-col items-center justify-start gap-12 py-20 px-5 bg-white shadow2 max-w-[600px]  rounded-[50px]"
                    key={feedback.id}
                  >
                    <div className="flex items-center justify-start gap-8 px-5">
                      <Image
                        src={userIcon}
                        className="w-20 h-20 bg-primary-40 bg-opacity-20 rounded-full border-4 pt-2 border-primary-40 md:w-32 md:h-32 text-primary-40"
                        alt="userIcon"
                      />
                      <h6 className="text-2xl text-light-1 md:text-4xl font-medium">
                        {feedback.name}
                      </h6>
                    </div>
                    <p className="text-sm md:text-lg font-medium mt-12">
                      {feedback.content}
                    </p>
                  </SwiperSlide>
                );
              })}
      </Swiper>
    </div>
  );
};

export default FeedBacksSlider;
