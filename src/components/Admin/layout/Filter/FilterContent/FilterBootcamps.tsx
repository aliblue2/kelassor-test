"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const FilterBootcamps: React.FC<{
  bootcamps: { bootcampTitle: string }[];
}> = ({ bootcamps }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      {bootcamps.map((bootcamp, i) => {
        const updatedSearchParams = new URLSearchParams(
          searchParams.toString()
        );
        updatedSearchParams.set("bootcampName", bootcamp.bootcampTitle);

        return (
          <Link
            href={`${pathname}?${updatedSearchParams.toString()}`}
            key={bootcamp.bootcampTitle + i}
            className={
              searchParams.get("bootcampName")?.includes(bootcamp.bootcampTitle)
                ? "text-primary-base font-bold text-sm "
                : "text-xs"
            }
          >
            {bootcamp.bootcampTitle}
          </Link>
        );
      })}
    </div>
  );
};

export default FilterBootcamps;
