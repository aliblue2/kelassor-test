"use client";

import Feedback from "../Landing/Feedback/Feedback";
import FeedbackCarousel from "../Landing/Feedback/FeedbackCarousel";
import HeroCarousel from "../Landing/Hero/HeroCarousel/HeroCarousel";
import CustomHeading from "../Ui/CustomHeading";
import MazeContainer from "../Ui/MazeContainer";
import BootCampCard from "./BootcampCard";

//Bootcamp component
const Bootcamp = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-primary-50 text-white px-10">
        <div className="flex container gap-10">
          <div className="flex flex-col justify-center">
            <h1>بوتکمپ‌های کلاسور</h1>
            <h3>گامی به سوی آینده‌ی روشن</h3>
          </div>
          <div className="grow">
          <HeroCarousel />
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center">
        <CustomHeading side="center">
          <h3>بوتکمپ‌های فعال</h3>
        </CustomHeading>
        <div className="flex flex-col justify-center items-center p-10 md:flex-row">
          <BootCampCard />
        </div>
      </div>

      <MazeContainer side="left">
        <div className="flex flex-col items-center">
          <CustomHeading side="center">
            <h3>بوتکمپ‌های قابل رزرو</h3>
          </CustomHeading>
          <div className="flex flex-col gap-10 justify-center items-center p-10 md:flex-row">
            <BootCampCard />
            <BootCampCard />
          </div>
        </div>
      </MazeContainer>

      <div className="container flex flex-col items-center">
        <CustomHeading side="center">
          <h3>بوتکمپ‌های برگذار شده</h3>
        </CustomHeading>
        <div className="flex flex-col flex-wrap gap-5 justify-center items-center p-10 md:flex-row">
          <BootCampCard />
          <BootCampCard />
          <BootCampCard />
        </div>
      </div>

      <MazeContainer side="right">
        <div className="container flex flex-col gap-5 items-center">
          <CustomHeading side="center">
            <h3>نظر همراهان و دانشجویان کلاسور</h3>
          </CustomHeading>
          <FeedbackCarousel />
        </div>
      </MazeContainer>
    </div>
  );
};

export default Bootcamp;
