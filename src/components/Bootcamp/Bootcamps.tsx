"use client";

import { bootcampSimple } from "@/types/bootcamp";
import FeedbackCarousel from "../Landing/Feedback/FeedbackCarousel";
import HeroCarousel from "../Landing/Hero/HeroCarousel/HeroCarousel";
import CustomHeading from "../Ui/CustomHeading";
import MazeContainer from "../Ui/MazeContainer";
import BootCampCard from "./BootcampCard";
import InfiniteScroll from "../Landing/Companies/InfiniteScroll";
const images = [
  "/Bootcamp/slider1.png",
  "/Bootcamp/slider2.png",
  "/Bootcamp/slider3.png",
  "/Bootcamp/slider4.png",
  "/Bootcamp/slider5.png",
  "/Bootcamp/slider6.png",
];

//Bootcamp component
type BootcampsProps = { data: bootcampSimple[] };
const Bootcamps = ({ data }: BootcampsProps) => {
  return (
    <div className="flex flex-col gap-10">
      {/******************************************************************************
        Hero */}
      <div className="px-10 maze text-primary-base">
        <div className="container flex flex-col md:flex-row gap-10">
          <div className="flex relative flex-col justify-center py-10">
            <svg
              width="65"
              height="95"
              viewBox="0 0 65 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-0 top-10"
            >
              <path
                d="M64.5101 80.7381C65.1846 79.9163 65.0652 78.7034 64.2434 78.0289L50.8517 67.0372C50.0299 66.3627 48.8169 66.4821 48.1424 67.3039C47.4679 68.1257 47.5873 69.3387 48.4091 70.0132L60.3129 79.7835L50.5426 91.6873C49.8681 92.5091 49.9875 93.7221 50.8092 94.3966C51.631 95.0711 52.844 94.9517 53.5185 94.1299L64.5101 80.7381ZM12.3538 35.708L10.4297 35.7678L10.4315 35.8271L10.437 35.8862L12.3538 35.708ZM46.1523 3.67258L47.0161 1.95227L46.1523 3.67258ZM49.4196 38.4776L48.0008 37.1766L49.4196 38.4776ZM62.8336 77.6011C55.3898 78.3338 43.963 76.1082 34.0257 69.4987C24.1653 62.9404 15.8106 52.0973 14.2705 35.5298L10.437 35.8862C12.0961 53.7336 21.1715 65.573 31.8935 72.7044C42.5386 79.7846 54.8464 82.2559 63.2107 81.4326L62.8336 77.6011ZM14.2778 35.6482C13.9057 23.6792 19.0633 14.733 25.6472 9.48391C32.3379 4.14977 40.1752 2.82542 45.2885 5.39289L47.0161 1.95227C40.097 -1.52194 30.6435 0.576836 23.2472 6.47353C15.7442 12.4553 10.0186 22.5476 10.4297 35.7678L14.2778 35.6482ZM45.2885 5.39289C51.1988 8.36057 53.4363 14.4589 53.3354 21.0534C53.2338 27.7032 50.7382 34.1914 48.0008 37.1766L50.8384 39.7786C54.3719 35.9252 57.0729 28.4405 57.185 21.1122C57.2979 13.7286 54.7662 5.84377 47.0161 1.95227L45.2885 5.39289ZM48.0008 37.1766C45.9073 39.4597 42.6791 42.8002 35.7002 46.3425C28.6731 49.9092 17.783 53.7092 0.353145 56.7546L1.0158 60.5471C18.6941 57.4583 29.9767 53.5651 37.4428 49.7756C44.957 45.9615 48.5424 42.2825 50.8384 39.7786L48.0008 37.1766Z"
                fill="#197265"
              />
            </svg>
            <h1>بوتکمپ‌های کلاسور</h1>
            <h3>گامی به سوی آینده‌ی روشن</h3>
          </div>
          <div className="grow">
            <HeroCarousel bootcamps={data} />
          </div>
        </div>
      </div>
      

      <InfiniteScroll images={images} itemSize={80} duration={10} />
      {/******************************************************************************
        active bootcamps */}
      <div className="container flex flex-col items-center">
        <CustomHeading side="center">
          <h2>بوتکمپ‌های فعال</h2>
        </CustomHeading>
        <div className="flex flex-row flex-wrap gap-5 justify-center items-center p-10 w-full">
          {data.map((item) => (
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
