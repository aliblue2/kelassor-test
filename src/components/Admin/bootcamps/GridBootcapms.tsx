import { bootcamp, bootcampSimple } from "@/types/bootcamp";
import Link from "next/link";
import React from "react";

const GridBootcapms: React.FC<{ bootcampsData: bootcampSimple[] }> = ({
  bootcampsData,
}) => {
  const randomColors = [
    "#FEFFE2",
    "#D4E4F0",
    "#DDD4F0",
    "#D4F0E6",
    "#D6F6FD",
    "#CFF6C1",
    "#F0DBD4",
    "#E5D8FF",
    "#FFD9D9",
  ];

  return (
    <div className="grid  w-full h-full grid-cols-2 gap-3 md:grid-cols-3">
      {bootcampsData.map((bootcamp) => {
        const randomColor =
          randomColors[Math.floor(Math.random() * randomColors.length)];
        return (
          <Link
            href={`/admin/bootcamps/${bootcamp.url}`}
            key={bootcamp.url}
            style={{ background: randomColor }}
            className={`w-full cursor-pointer h-full px-5 py-16 group rounded-[20px] flex flex-col items-center justify-center border border-primary-base overflow-hidden`}
          >
            <h6 className="md:text-2xl line-clamp-2 text-xl font-medium text-center text-primary-20">
              {bootcamp.header_title}
            </h6>
            <span className="text-lg font-medium text-primary-20">
              {bootcamp.status}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default GridBootcapms;
