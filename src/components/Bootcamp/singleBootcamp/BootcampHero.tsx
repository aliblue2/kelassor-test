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
    <div className="flex flex-col gap-5">
      <div className=" z-[51] overflow-hidden relative h-[200px] md:h-[550px]">
        <Image
          src={image}
          alt="banner"
          width={1200}
          height={600}
          className="object-cover absolute size-full rounded-[30px] md:rounded-[50px]  bg-gray-1 brightness-50"
        />
        <div className="flex absolute text-center flex-col md:items-end p-5 items-center md:p-10 text-white size-full">
          <h1>{title1}</h1>
          <h3>{title2}</h3>
          {active && (
            <BootcampHeroForm
            className="hidden md:flex"
              capacity={capacity}
              full_capacity={full_capacity}
              title={title2}
              englishTitle={title1}
            />
          )}
        </div>
      </div>
          {active && (
            <BootcampHeroForm
            className="md:hidden"
              capacity={capacity}
              full_capacity={full_capacity}
              title={title2}
              englishTitle={title1}
            />
          )}
    </div>
  );
};

export default BootcampHero;
