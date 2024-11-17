"use client";
import React from "react";
import Hero from "./Hero";
import { contentDestructure, getBootcamp } from "@/requests/getBootcamp";
import BootcampSyllabus from "../Bootcamp/singleBootcamp/BootcampSyllabus/BootcampSyllabus";
import CustomHeading from "../Ui/CustomHeading";
import FeedBackForm from "./FeedBackForm";
import { WorkShop } from "@/types/Workshop";
import { syllabus } from "@/types/bootcamp";
import WorkShopSlider from "./slider/WorkShopSlider";
import FeedBacksSlider from "./slider/FeedBacksSlider";
const Landing: React.FC<{
  workshopInfo: WorkShop;
  recomWorkshops: WorkShop[];
  hashedId : string | undefined
}> = ({ workshopInfo, recomWorkshops , hashedId }) => {
  const syllabusContent: syllabus[] = contentDestructure(workshopInfo.contents);

  return (
    <div className="p-5 flex flex-col items-start justify-start gap-10 overflow-hidden">
      <Hero
        advanceUrl={workshopInfo.url}
        hashedId={hashedId}
        teachers={workshopInfo.teachers}
        mainTitle={workshopInfo.main_title}
        secondTitle={workshopInfo.second_title}
        price={workshopInfo.price}
        level={workshopInfo.level}
        period={workshopInfo.length}
        targetTime={workshopInfo.start}
      />
      <BootcampSyllabus isPrimary={true} data={syllabusContent} />
      <div className="flex flex-col items-start justify-start gap-2">
        <CustomHeading>
          <h3>توضیحات کارگاه کلاسور advance</h3>
        </CustomHeading>
        <p className="md:text-xl text-lg font-medium">{workshopInfo.intro}</p>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 overflow-hidden w-full">
        <CustomHeading>
          <h3>کارگاه های پیشنهادی کلاسور advance </h3>
        </CustomHeading>
        <WorkShopSlider workshops={recomWorkshops} />
      </div>
      <FeedBackForm />
      <FeedBacksSlider feeds={workshopInfo.feedbacks} />
    </div>
  );
};

export default Landing;
