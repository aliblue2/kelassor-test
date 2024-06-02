"use client";
import Companies from "./Companies/Companies";
import Hero from "./Hero/Hero";

//Landing component
const Landing = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="flex mt-32">
        <Companies />
      </div>
    </div>
  );
};

export default Landing;
