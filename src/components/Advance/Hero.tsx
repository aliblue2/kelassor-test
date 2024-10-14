import { Clock5 } from "lucide-react";
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
    <div className="flex flex-col items-center justify-start gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-full">
        <div className="w-full col-span-3 md:col-span-2 bg-white p-5 rounded-[40px] shadow-md border-2 border-primary-base md:border-transparent order-last md:order-first flex flex-col items-center justify-center gap-5">
          {teachers.map((teacher) => {
            return (
              <div
                key={teacher.linkedin}
                className="flex items-center justify-between gap-2 w-full my-3"
              >
                <Image
                  src={teacher.picture}
                  alt="avatart image"
                  width={130}
                  height={130}
                  className="rounded-full max-w-24 w-full h-24 object-cover  border-[5px] border-primary-base"
                />
                <div className="flex flex-col items-end justify-start gap-2">
                  <h6 className="text-lg font-bold text-primary-base">
                    {teacher.name}
                  </h6>
                  <div className="flex items-start justify-end gap-2">
                    <div className="flex flex-col text-end md:text-lg font-medium items-end justify-start gap-2">
                      <span className="line-clamp-2">{teacher.position}</span>
                      <span>{teacher.company}</span>
                    </div>
                    <Image
                      src={teacher.logo}
                      width={120}
                      height={120}
                      alt="tapsi logo"
                      className="max-w-[72px] rounded-lg h-10 object-cover "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full col-span-3 bg-primary-40 relative rounded-[30px] flex flex-col items-center justify-start md:gap-14 gap-10 p-5">
          <h6 className="bg-white py-5 px-4 rounded-xl w-full text-center text-lg md:text-2xl font-bold text-primary-base line-clamp-1 truncate">
            {mainTitle}
          </h6>
          <h6 className="text-white md:text-3xl font-bold text-xl">
            {secondTitle}
          </h6>
          <div className="text-yellow-600 md:text-lg font-medium flex items-center justify-start gap-2 md:mb-20 mb-10">
            <Clock5 size={36} />
            <span className="md:text-2xl font-bold">
             <CountDown targetTime={targetTime} />
            </span>
          </div>
          <div className="flex overflow-hidden absolute bottom-0 justify-center w-full h-[35px] md:h-[60px]">
            {/* control's background ********************************************************************************/}
            <div className="flex relative h-full w-[136px] bg-background rounded-t-[15px] md:w-[260px] md:rounded-t-[30px]">
              {/* fancy outer border radius ********************************************************************************/}
              <div className=" absolute bottom-0 right-full rounded-br-full w-full h-1/2 md:shadow-[50px_0_0_0_theme(colors.background)] shadow-[30px_0_0_0_theme(colors.background)]" />
              <div className="absolute bottom-0 rounded-bl-full w-full h-1/2 left-full md:shadow-[-50px_0_0_0_theme(colors.background)] shadow-[-30px_0_0_0_theme(colors.background)]" />
            </div>
            <h6 className="absolute bottom-0 border-primary-base border-b-2 pb-2 px-4 mx-auto text-primary-40 font-normal md:text-2xl text-xs ">
              {period}
            </h6>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-full ">
        <div className="md:order-first order-last bg-white w-full col-span-3 md:col-span-2 rounded-[40px] px-5 py-10 flex flex-col items-start justify-center gap-8 shadow-md">
          <h6 className="md:text-xl text-sm font-medium">کارگاه آنلاین</h6>
          <p className="text-primary-base text-sm  md:text-xl font-medium">
            <span className="text-black">سطح:</span>
            {level}
          </p>
          <p className="text-primary-base text-sm  md:text-xl font-medium">
            <span className="text-black">زمان:</span>
            {period}
          </p>
        </div>
        <div className="col-span-3 flex flex-col items-center justify-start gap-10 bg-white rounded-[30px] p-5 border-2 border-primary-base shadow-sm">
          <button className="border-2 text-primary-base hover:bg-primary-base hover:text-white font-medium transition-colors duration-300 border-primary-base p-2 rounded-[10px]">
            افزودن به تقویم
          </button>
          <div className="h-[2px] w-10/12 bg-secondary-50"></div>
          <div className="flex items-center justify-between w-full">
            <h6 className="text-primary-base md:text-2xl text-base font-bold">
              بها بلیط کارگاه
            </h6>
            <h6 className="text-primary-base md:text-2xl text-base font-bold">
              {+price.toLocaleString("fa-IR") + " تومان"}
            </h6>
          </div>
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center justify-start gap-2 bg-secondary-75 rounded-xl overflow-hidden p-2 w-9/12">
              <Image
                alt="snappPayLogo"
                src={snappPayLogo}
                width={120}
                height={120}
                className="max-w-20 rounded-md"
              />
              <span className="text-primary-base">
                این وبینار را در ۴ قسط {price / 4} تومانی بخرید
              </span>
            </div>
            <button className="bg-primary-base w-3/12 p-2 rounded-[10px] text-white">
              خرید بلیط
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
