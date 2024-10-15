import Clock from "@/../public/clockYellow.svg";
import React from "react";
import snappPayLogo from "../../../public/snapppay.png";
import Image from "next/image";
import { workShopTeacher } from "@/types/Workshop";
import CountDown from "./CountDown";
const Hero: React.FC<{
  teachers: workShopTeacher[];
  mainTitle: string;
  secondTitle: string;
  price: number;
  period: string;
  targetTime: string;
  level: string;
}> = ({
  teachers,
  mainTitle,
  secondTitle,
  price,
  level,
  period,
  targetTime,
}) => {
  return (
    <div className="flex flex-col items-center justify-start gap-5 w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-2 shadow2 w-full bg-white p-5 rounded-[24px] md:rounded-[40px] flex flex-col items-center justify-start gap-5">
          {teachers.map((teacher) => {
            return (
              <div
                key={teacher.id + teacher.linkedin}
                className="w-full flex items-center justify-between"
              >
                <Image
                  width={90}
                  height={90}
                  src={teacher.picture}
                  alt={teacher.name}
                  className="max-w-16 max-h-16 md:max-w-20 md:max-h-20 rounded-full border-2 md:border-4 border-primary-base object-cover aspect-square"
                />
                <div className="flex flex-col items-end justify-start gap-2">
                  <h6 className="text-base md:text-lg font-bold text-primary-base">
                    {teacher.name}
                  </h6>
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-end text-sm md:text-base w-[155px] md:w-[180px] font-bold leading-normal  md:font-medium">
                      {teacher.position} at {teacher.company}
                    </span>
                    <Image
                      src={teacher.logo}
                      alt={teacher.company}
                      width={80}
                      height={80}
                      className="h-10 w-14 rounded object-fill"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-1 md:col-span-3 shadow2 w-full bg-primary-50 p-5 md:pb-16 pb-10 order-first md:order-last relative rounded-[15px] md:rounded-[30px] flex flex-col items-center justify-between gap-5 ">
          <h6 className="bg-white w-full px-3 py-5 text-primary-base font-bold rounded-[20px] text-center truncate text-lg md:text-2xl">
            {mainTitle}
          </h6>
          <div className="flex items-center justify-center gap-1 text-white">
            <span className="md:text-3xl text-xl font-normal">
              کلاسور advance
            </span>
            <h6 className="md:text-4xl text-xl font-extrabold">
              - {secondTitle}
            </h6>
          </div>
          <div className="text-yellow-600 font-medium md:text-2xl text-xs flex items-center justify-center gap-2">
            <CountDown targetTime={targetTime} />
            <Image src={Clock} alt="clock" className="md:w-10 w-6 animate-spin" />
          </div>
          <div className="flex overflow-hidden absolute bottom-0 justify-center w-full h-[40px] md:h-[50px] shadow-none">
            {/* control's background ********************************************************************************/}
            <div className="flex relative h-full w-[136px] bg-background rounded-t-[15px] md:w-[260px] md:rounded-t-[30px] items-center justify-center">
              <h6 className="md:text-xl text-[10px] z-20 p-2 border-b-2 border-primary-50 font-medium">
                {period.split("-")[0]}
              </h6>
              <div className=" absolute bottom-0 right-full rounded-br-full w-full h-1/2 md:shadow-[50px_0_0_0_theme(colors.background)] shadow-[30px_0_0_0_theme(colors.background)]" />
              <div className="absolute bottom-0 rounded-bl-full w-full h-1/2 left-full md:shadow-[-50px_0_0_0_theme(colors.background)] shadow-[-30px_0_0_0_theme(colors.background)]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="col-span-1 md:col-span-2 shadow2 w-full bg-white p-5 rounded-[24px] md:rounded-[40px] flex flex-col items-start justify-start gap-5">
          <span className="md:text-xl font-medium text-sm">کارگاه آنلاین</span>
          <div className="flex items-center justify-start gap-1 md:text-xl text-sm font-medium">
            <span>سطح</span> :{" "}
            <span className="text-primary-base">{level}</span>
          </div>
          <div className="flex items-start justify-start gap-1 md:text-xl text-sm font-medium">
            <span>زمان</span> :{" "}
            <span className="text-primary-base">{period}</span>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 border-2 border-primary-base shadow2 w-full bg-white p-5 rounded-[15px] md:rounded-[30px] flex flex-col items-center justify-start gap-5 order-first md:order-last">
          <button className="px-6 py-2 rounded-[10px] text-primary-base border-2 border-primary-base text-center hover:bg-primary-base hover:text-white transition-colors duration-300">
            افزودن به تقویم
          </button>
          <div className="h-[2px] rounded-lg bg-secondary-50 w-10/12 my-2"></div>
          <div className="flex w-11/12 items-center justify-between gap-5 text-primary-base">
            <h6 className="md:text-2xl font-bold"> بها بلیط کارگاه</h6>
            <h6 className="md:text-2xl font-bold">
              {price.toLocaleString("fa-IR") + " تومان"}
            </h6>
          </div>
          <div className="flex items-center  w-full overflow-hidden justify-between gap-2">
            <div className="flex w-full bg-secondary-75 p-2 rounded-md overflow-hidden items-center justify-start gap-2">
              <Image
                src={snappPayLogo}
                alt="snapppay"
                className="md:max-w-16 max-w-12 rounded"
              />
              <span className="text-primary-base text-xs md:text-base">
                این وبینار را در ۴ قسط {(price / 4).toLocaleString("fa-IR")}{" "}
                تومانی بخرید
              </span>
            </div>
            <button className="p-2 px-4 rounded-md text-white font-medium bg-primary-base">
              خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
