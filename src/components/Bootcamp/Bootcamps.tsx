"use client";

import { bootcampSimple } from "@/types/bootcamp";
import FeedbackCarousel from "../Landing/Feedback/FeedbackCarousel";
import HeroCarousel from "../Landing/Hero/HeroCarousel/HeroCarousel";
import CustomHeading from "../Ui/CustomHeading";
import MazeContainer from "../Ui/MazeContainer";
import BootCampCard from "./BootcampCard";

//Bootcamp component
type BootcampsProps = { data: bootcampSimple[] };
const Bootcamps = ({ data }: BootcampsProps) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-10">
      {/******************************************************************************
        Hero */}
      <div className="px-10 maze text-primary-base">
        <div className="container flex gap-10">
          <div className="flex flex-col justify-center">
            <h1>بوتکمپ‌های کلاسور</h1>
            <h3>گامی به سوی آینده‌ی روشن</h3>
          </div>
          <div className="grow">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/******************************************************************************
        active bootcamps */}
      <div className="container flex flex-col items-center">
        <CustomHeading side="center">
          <h2>بوتکمپ‌های فعال</h2>
        </CustomHeading>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center p-10 w-full">
          {data
            .filter((item) => item.status === "notactive")
            .map((item) => (
              <BootCampCard data={item} key={item.header_title} />
            ))}
        </div>
      </div>

      <MazeContainer side="left">
        <div className="flex flex-col items-center">
          <CustomHeading side="center">
            <h2>بوتکمپ‌های قابل رزرو</h2>
          </CustomHeading>
          <div className="flex flex-col flex-wrap gap-5 justify-center items-center p-10 w-full md:flex-row">
            {data
              .filter((item) => item.status === "active")
              .map((item) => (
                <BootCampCard data={item} key={item.header_title} />
              ))}
          </div>
        </div>
      </MazeContainer>

      {/******************************************************************************
        expired bootcamps */}
      <div className="container flex flex-col items-center">
        <CustomHeading side="center">
          <h2>بوتکمپ‌های برگذار شده</h2>
        </CustomHeading>
        <div className="flex flex-col flex-wrap gap-5 justify-center items-center p-10 w-full md:flex-row">
          {data
            .filter((item) => item.status === "expired")
            .map((item) => (
              <BootCampCard data={item} key={item.header_title} />
            ))}
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

export default Bootcamps;
