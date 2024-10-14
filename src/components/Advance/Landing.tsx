import React from "react";
import Hero from "./Hero";
import { contentDestructure, getBootcamp } from "@/requests/getBootcamp";
import BootcampSyllabus from "../Bootcamp/singleBootcamp/BootcampSyllabus/BootcampSyllabus";
import CustomHeading from "../Ui/CustomHeading";
import FeedbackCarousel from "../Landing/Feedback/FeedbackCarousel";
import FeedBackForm from "./FeedBackForm";
import { WorkShop } from "@/types/Workshop";
import { syllabus } from "@/types/bootcamp";
const Landing: React.FC<{ workshopInfo: WorkShop }> = async ({
  workshopInfo,
}) => {
  const data = await getBootcamp({ bootcamp: "React-js" });
  const syllabusContent: syllabus[] = contentDestructure(workshopInfo.contents);

  return (
    <div className="p-5 flex flex-col items-start justify-start gap-10">
      <Hero
        teachers={workshopInfo.teachers}
        mainTitle={workshopInfo.main_title}
        secondTitle={workshopInfo.second_title}
        price={workshopInfo.price}
        level={workshopInfo.level}
        period={workshopInfo.length}
        targetTime="december 12 , 24"
      />
      <BootcampSyllabus data={syllabusContent} />
      <div className="flex flex-col items-start justify-start gap-2">
        <CustomHeading>
          <h3>توضیحات کارگاه کلاسور advance</h3>
        </CustomHeading>
        <p className="md:text-xl text-lg font-medium">{workshopInfo.intro}</p>
      </div>
      <FeedBackForm />
      <FeedbackCarousel />
    </div>
  );
};

export default Landing;