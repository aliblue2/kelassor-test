"use client";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import HeroItem from "./HeroItem";

//Hero component
const Hero = () => {
  return (
    <div className="flex md:h-[450px] flex-col-reverse items-center md:flex-row mb-10 mt-1 gap-5">
      <HeroItem />
      <HeroCarousel />
    </div>
  );
};

export default Hero;
