"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import BootcampSyllabusCard from "./BootcampSyllabusCard";
import { syllabus } from "@/types/bootcamp";
import { forwardRef, useState } from "react";
import CustomButton from "@/components/Ui/CustomButton";

//BootcampSyllabus component
type BootcampSyllabusProps = {
  data: syllabus[];
  isPrimary? : boolean
};
const BootcampSyllabus = forwardRef<HTMLDivElement, BootcampSyllabusProps>(
  ({ data , isPrimary }, ref) => {
    const [expanded, setexpanded] = useState(false);
    return (
      <div className="flex flex-col scroll-mt-40" ref={ref}>
        <CustomHeading circle side="left">
          <h2>سرفصل‌های تخصصی دوره</h2>
        </CustomHeading>
        <div
          className={`flex flex-wrap gap-5 py-10 relative duration-200 justify-center overflow-hidden ${
            expanded ? "h-auto" : "h-[400px]"
          }`}
        >
          {data.map((item, i) => (
            <BootcampSyllabusCard isPrimary={isPrimary} key={i} data={item} />
          ))}
          {!expanded &&<div className="bg-gradient-to-t from-primary-base opacity-50 h-[200px] rounded-[30px] w-full bottom-0 absolute"/>}
        </div>
        {!expanded &&
        <CustomButton
          onClick={() => setexpanded((e) => !e)}
          className="self-center mt-5"
        >
          مشاهده بیشتر
        </CustomButton>
        }
      </div>
    );
  }
);
BootcampSyllabus.displayName = "BootcampSyllabus";
export default BootcampSyllabus;
