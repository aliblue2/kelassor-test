"use client";
import { ChevronDown } from "lucide-react";
import React from "react";
import FilterBootcamps from "./FilterContent/FilterBootcamps";
import FilterPropsContents from "./FilterContent/FilterPropsContents";
import { usePathname, useSearchParams } from "next/navigation";

const FilterContent: React.FC<{
  index: number;
  bootcamps: { bootcampTitle: string }[];
}> = ({ index, bootcamps }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  console.log(pathName);

  const fullUrl = `${window.location.origin}${window.location.pathname}?${searchParams.toString()}`;
  console.log(fullUrl);

  return (
    <div className="col-span-1 flex flex-col items-center justify-start gap-3">
      <div className="flex w-full text-sm items-center justify-between bg-white shadow-md rounded-lg p-2">
        انتخاب
        <ChevronDown size={18} />
      </div>
      <div className="flex w-full text-sm items-center justify-between bg-white shadow-md rounded-lg p-2">
        {index === 3 && !pathName.includes("/admin/bootcamps") ? (
          <FilterBootcamps bootcamps={bootcamps} />
        ) : (
          index === 3 && (
            <span className="text-primary-base text-lg font-medium">
              در صفحه بوتکمپ ها امکان فیلتر دیگر بوتکمپ‌ها نیست
            </span>
          )
        )}
        {index !== 3 && <FilterPropsContents index={index} />}
      </div>
    </div>
  );
};

export default FilterContent;
