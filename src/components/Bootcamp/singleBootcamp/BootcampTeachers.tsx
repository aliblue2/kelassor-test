">puse client";

import CustomHeading from "@/components/Ui/CustomHeading";
import { teacher } from "@/types/teacher";
import Image from "next/image";
import linkedinIcon from "/public/Bootcamp/linkedin.svg";
//BootcampTeachers component
type BootcampTeachersProps = {
  teachers: teacher[];
};
const BootcampTeachers = ({ teachers }: BootcampTeachersProps) => {
  return (
    <>
      <CustomHeading circle side="left">
        <h2>اساتید و منتورها</h2>
      </CustomHeading>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {teachers.map((item, i) => (
          <div
            key={i}
            className="w-36 flex-col flex items-center relative font-semibold gap-2"
          >
            <a href={item.linkedin ? item.linkedin : "#"} target="_blank">
              <Image
                className="absolute bg-background left-0 rounded-sm"
                src={linkedinIcon}
                alt="linkedin"
                width={30}
                height={30}
              />
            </a>
            <Image
              height={180}
              width={180}
              src={item.picture}
              alt="teacher"
              className="w-full aspect-square rounded-full border-4 border-primary-base object-cover"
            />
            <div>{item.name}</div>
            <div className="text-center text-xs">{item.course}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BootcampTeachers;
