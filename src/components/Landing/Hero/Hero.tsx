"use client";
import HeroCarousel from "./HeroCarousel/HeroCarousel";
import HeroItem from "./HeroItem";

//Hero component
type HeroProps = { className?: string };
const Hero = ({ className }: HeroProps) => {
  return (
    <div className={`flex md:h-[450px] flex-col items-center md:flex-row mb-10 mt-1 gap-5 ${className}`}>
      <HeroCarousel />
      <HeroItem />
    </div>
  );
};

export default Hero;
