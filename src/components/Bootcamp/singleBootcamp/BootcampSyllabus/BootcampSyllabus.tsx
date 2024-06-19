"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import BootcampSyllabusCard from "./BootcampSyllabusCard";
import { syllabus } from "@/types/bootcamp";

//BootcampSyllabus component
type BootcampSyllabusProps = {
  data: syllabus[];
};
const BootcampSyllabus = ({ data }: BootcampSyllabusProps) => {
  return (
    <div className="flex flex-col gap-10">
      <CustomHeading circle side="left">
        <h2>سرفصل‌های تخصصی دوره</h2>
      </CustomHeading>
      <div className="flex justify-center flex-wrap gap-5">
        {data.map((item, i) => (
          <BootcampSyllabusCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default BootcampSyllabus;
