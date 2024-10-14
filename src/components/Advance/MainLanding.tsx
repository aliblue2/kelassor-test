"use client";
import React from "react";
import MainHero from "./hero/MainHero";
import CustomHeading from "../Ui/CustomHeading";
import FeedBackForm from "./FeedBackForm";
import PrimaryMazeContainer from "./PrimaryMazeContainer";
import { WorkShop } from "@/types/Workshop";
import Feedback from "../Landing/Feedback/Feedback";
import WorkShopSlider from "./slider/WorkShopSlider";

interface WorkShopsProps {
  workshops: WorkShop[];
}

const MainLanding: React.FC<WorkShopsProps> = ({ workshops }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-20 py-5 ">
      <MainHero />
      <div className="max-w-[1100px] mx-auto w-full">
        <CustomHeading>
          <h2>در کلاسور advance چه میگذرد؟</h2>
        </CustomHeading>
        <span className="text-xl font-medium">
          مدیریت محصول یا همان Product Managment یکی از مشاغل جذاب این روزها
          است. بوت‌کمپ مدیریت محصول کلاسور با بهره‌گیری از تجربیات افراد با
          تجربه در این حوزه فضایی برای یادگیری، کسب تجربه و ورود به بازار کار را
          برای افراد علاقه‌مند به این حوزه ایجاد کند. بسیاری از افراد هستند که
          قصد شروع فعالیت در این زمینه را دارند اما همیشه سردرگم‌اند که از کجا
          شروع کنند، چه آموزش‌هایی ببینند و چگونه تجربه کسب کنند. اگر تمایل
          دارید تا سریع‌ترین و البته اصولی‌ترین مسیر را برای یادگیری مدیریت
          محصول طی کنید پیشنهاد ما به شما شرکت در این بوت‌کمپ 100 ساعته است.
        </span>
      </div>
      <PrimaryMazeContainer side="left" title="همه کارگاه‌های کلاسور">
        <WorkShopSlider workshops={workshops} />
      </PrimaryMazeContainer>
      <FeedBackForm />
      <PrimaryMazeContainer side="right" title="دیدگاه‌ها">
        <div className="pt-16">
          <Feedback heading={false} />
        </div>
      </PrimaryMazeContainer>
    </div>
  );
};

export default MainLanding;
