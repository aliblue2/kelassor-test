"use client";

import { syllabus } from "@/types/bootcamp";

//BootcampSyllabusCard component
type BootcampSyllabusCardProps = {
  data: syllabus;
  isPrimary?: boolean;
};
const BootcampSyllabusCard = ({
  data,
  isPrimary = false,
}: BootcampSyllabusCardProps) => {
  return (
    <div className="bg-white w-[300px] shadow2 rounded-[30px] p-2 flex flex-col">
      <div
        className={`${isPrimary ? "bg-primary-30 text-white" : "bg-secondary-30"} text-center font-bold rounded-[22px] p-3 h-20 flex items-center justify-center`}
      >
        {data.course}
      </div>
      <div className="p-3 flex flex-col items-center text-center text-gray-3 font-medium">
        {data.subCourse.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default BootcampSyllabusCard;
