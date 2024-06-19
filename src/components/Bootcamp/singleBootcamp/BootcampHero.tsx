"use client";

import Image from "next/image";
import BootcampHeroForm from "./BootcampHeroForm";

//BootcampHero component
type BootcampHeroProps = {
  image: string;
  title1: string;
  title2: string;
  capacity: number;
  full_capacity: number;
};
const BootcampHero = ({
  image,
  title1,
  title2,
  capacity,
  full_capacity,
}: BootcampHeroProps) => {
  return (
    <div>
      <div className="overflow-hidden relative h-[550px]">
        <Image
          src={image}
          alt="banner"
          width={1200}
          height={600}
          className="object-cover absolute size-full rounded-[50px] bg-gray-1 brightness-50"
        />
        <div className="flex absolute flex-col md:items-end p-5 items-center md:p-10 text-white size-full">
          <h1>{title1}</h1>
          <h3>{title2}</h3>
          <BootcampHeroForm
            capacity={capacity}
            full_capacity={full_capacity}
            title={title2}
          />
        </div>
      </div>
      <div className="hidden md:grid items-center text-center relative grid-cols-6 h-32 pt-[50px] -z-10 rounded-b-[50px] bg-secondary-75 bottom-[50px]">
        <div >معرفی بوتکمپ</div>
        <div>اساتید</div>
        <div>ویژگی‌های دوره</div>
        <div>سرفصل‌ها</div>
        <div>فرآیند ثبت‌نام</div>
        <div>باید بدانیم</div>
      </div>
    </div>
  );
};

export default BootcampHero;
