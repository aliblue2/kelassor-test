"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import { teacher } from "@/types/teacher";
import Image from "next/image";
import linkedinIcon from "/public/Bootcamp/linkedin.svg";
import { forwardRef } from "react";
//BootcampTeachers component
type BootcampTeachersProps = {
  teachers: teacher[];
};
const BootcampTeachers = forwardRef<HTMLDivElement, BootcampTeachersProps>(
  ({ teachers }, ref) => {
    return (
      <div ref={ref} className="flex flex-col scroll-mt-40">
        <CustomHeading circle side="left">
          <h2>اساتید و منتورها</h2>
        </CustomHeading>
        <div className="flex flex-wrap gap-10 justify-center items-center">
          {teachers.map((item, i) => (
            <div
              key={i}
              className="flex relative flex-col gap-2 items-center w-36 font-semibold"
            >
              <a href={item.linkedin ? item.linkedin : "#"} target="_blank">
                <Image
                  className="absolute left-0 rounded-sm bg-background"
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
                className="object-cover w-full rounded-full border-4 aspect-square border-primary-base"
              />
              <div>{item.name}</div>
              <div className="text-xs text-center">{item.course}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
BootcampTeachers.displayName = "BootcampTeachers";

export default BootcampTeachers;
