import { teacher } from "@/types/teacher";
import { WorkShop, workShopTeacher } from "@/types/Workshop";
import Image from "next/image";
import React from "react";

const TeachersCard: React.FC<{ teachers: workShopTeacher[] }> = ({
  teachers,
}) => {

  if (teachers.length === 1) {
    return (
      <div className="flex w-full flex-col items-center justify-start gap-5">
        <Image
          src={teachers[0].picture}
          alt={teachers[0].name}
          width={120}
          height={120}
          className=" rounded-full h-48 w-48 border-4 border-primary-20 object-cover"
        />
        <h6 className="text-primary-20 text-lg font-bold">
          مدرس : {teachers[0].name}
        </h6>
        <div className="flex items-center justify-center gap-5 w-full text-sm font-bold text-black mb-3">
          <Image
            src={teachers[0].logo}
            alt={teachers[0].company}
            className="rounded"
            width={60}
            height={60}
          />
          <span>
            {teachers[0].position} در {teachers[0].company}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-start gap-5">
      {teachers.map((teacher) => {
        return (
          <div
            className="flex w-full items-center justify-between gap-5"
            key={teacher.id + teacher.linkedin}
          >
            <Image
              src={teacher.picture}
              alt={teacher.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-primary-base w-[75px] h-[75px] object-cover"
            />
            <div className="flex flex-col items-end justify-start gap-2">
              <h6 className="text-sm font-bold text-primary-base">
                {teacher.name}
              </h6>
              <div className="flex items-center justify-start gap-2">
                <div className="flex flex-col items-end justify-start gap-2">
                  <span className="text-sm font-medium text-black text-end">
                    {teacher.position}
                  </span>
                  <span className="text-xs font-bold">
                    {teacher.company}
                  </span>
                </div>
                <Image
                  src={teacher.logo}
                  alt={teacher.company}
                  width={60}
                  height={60}
                  className="rounded"
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
