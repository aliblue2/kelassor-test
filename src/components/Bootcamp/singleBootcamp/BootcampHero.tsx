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
  active: boolean;
};
const BootcampHero = ({
  image,
  title1,
  title2,
  capacity,
  full_capacity,
  active,
}: BootcampHeroProps) => {
  return (
    <div className=" md:bg-secondary-75 rounded-t-[50px] md:border-x border-x-secondary-50 overflow-hidden relative h-[550px]">
      <Image
        src={image}
        alt="banner"
        width={1200}
        height={600}
        className="object-cover absolute size-full rounded-[50px] bg-gray-1 brightness-50"
      />
      <div className="flex absolute text-center flex-col md:items-end p-5 items-center md:p-10 text-white size-full">
        <h1>{title1}</h1>
        <h3>{title2}</h3>
        {active && (
          <BootcampHeroForm
            capacity={capacity}
            full_capacity={full_capacity}
            title={title2}
          />
        )}
      </div>
    </div>
  );
};

export default BootcampHero;
