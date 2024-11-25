import { ChevronDown } from "lucide-react";
import React from "react";

const filterType: string[] = [
  "وضعیت کاربر",
  "وضعیت مالی",
  "وضعیت تماس",
  "رشته بوتکمپ",
  "کارگاه ادونس ",
  "نحوه‌ی ثبت نام",
  "تاریخ",
];

const FilterType: React.FC<{
  index: number;
  setFilterType: (index: number) => void;
}> = ({ setFilterType, index }) => {
  return (
    <div className="flex col-span-1 flex-col items-center justify-start gap-3">
      <div className="flex w-full text-sm items-center justify-between bg-white shadow-md rounded-lg p-2">
        {filterType[index]}
        <ChevronDown size={18} />
      </div>
      <div className="bg-white w-full shadow-md rounded-lg p-2 flex items-start justify-start gap-3 flex-col">
        {filterType.map((filterItem, i) => {
          return (
            <span
              key={i + filterItem}
              onClick={() => setFilterType(i)}
              className={`${i === index && "text-primary-base font-bold text-sm"} text-xs cursor-pointer`}
            >
              {filterItem}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FilterType;
