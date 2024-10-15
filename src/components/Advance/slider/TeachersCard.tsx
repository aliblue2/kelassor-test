import { workShopTeacher } from "@/types/Workshop";
import Image from "next/image";
import React from "react";

const TeachersCard: React.FC<{ teachers: workShopTeacher[] }> = ({
  teachers,
}) => {
  if (teachers.length === 1) {
    return (
      <div className="flex w-full flex-col items-center justify-start gap-3">
        <div className="relative overflow-hidden w-36 h-36 rounded-full border-4 border-primary-40">
          <Image
            src={teachers[0].picture}
            alt={teachers[0].name}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <h6 className="text-primary-20 text-lg font-bold">
          مدرس : {teachers[0].name}
        </h6>
        <div className="flex items-center justify-center gap-2 w-full">
          <Image
            src={teachers[0].logo}
            alt={teachers[0].name}
            width={66}
            height={44}
            className="rounded md:w-12 md:h-6 w-10 h-5 object-fill aspect-video"
          />
          <span className="text-[12px] md:text-base">{teachers[0].position} at {teachers[0].company}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-start gap-5">
      {teachers.map((teacher) => {
        return (
          <div
            className="flex items-center justify-between gap-2 w-full"
            key={teacher.linkedin + teacher.id}
          >
            <Image
              src={teacher.picture}
              width={120}
              height={120}
              className="rounded-full max-w-16 w-full max-h-16 md:max-w-20 md:max-h-20 object-cover  border-2 md:border-4 border-primary-base"
              alt={teacher.name}
            />
            <div className="flex flex-col items-end justify-start gap-3 w-9/12">
              <h6 className="text-primary-base font-bold text-sm">
                {teacher.name}
              </h6>
              <div className="flex items-center justify-end gap-2">
                <span className="text-xs md:text-sm font-medium text-end">
                  {teacher.position} at {teacher.company}
                </span>
                <Image
                  src={teacher.logo}
                  width={120}
                  height={120}
                  className="rounded w-12 h-8 md:h-10 object-fill"
                  alt={teacher.company}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeachersCard;
