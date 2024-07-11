"use client";
import { bootcampSimple } from "@/types/bootcamp";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import HeroItem from "./HeroItem";

//Hero component
type HeroProps = { className?: string; bootcamps: bootcampSimple[] };
const Hero = ({ className, bootcamps }: HeroProps) => {
  return (
    <div
      className={`flex md:h-[450px] flex-col items-center md:flex-row mb-10 mt-1 gap-5 ${className}`}
    >
      <HeroCarousel bootcamps={bootcamps} />
      <HeroItem />
    </div>
  );
};

export default Hero;
