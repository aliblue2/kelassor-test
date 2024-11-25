"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const filters = [
  { title: "result", subfilters: [] },
  {
    title: "finance",
    subfilters: [
      { title: "تسویه", path: "تسویه" },
      { title: "بدهکار", path: "بدهکار" },
    ],
  },
  {
    title: "callResult",
    subfilters: [
      { title: "انصراف", path: "انصراف" },
      { title: "نیاز به پیگیری", path: "نیاز به پیگیری" },
      { title: "ثبت نام", path: "ثبت نام" },
      { title: "بررسی نشده", path: "بررسی نشده" },
      { title: "پرداخت نکرده", path: "پرداخت نکرده" },
      { title: "بی پاسخ", path: "بی پاسخ" },
    ],
  },
  { title: "", subfilters: [] },
  { title: "advance", subfilters: [] },
  { title: "registerWay", subfilters: [] },
];

const FilterPropsContents: React.FC<{
  index: number;
}> = ({ index }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      {index !== 6 &&
        filters[index].subfilters.map((item) => {
          const updatedSearchParams = new URLSearchParams(
            searchParams.toString()
          );
          updatedSearchParams.set(filters[index].title, item.path);

          return (
            <Link
              key={item.title}
              href={`${pathname}?${updatedSearchParams.toString()}`}
              className={`${searchParams.get(`${filters[index].title}`)?.includes(item.path) ? "text-primary-base font-bold text-sm " : "text-xs"}`}
            >
              {item.title}
            </Link>
          );
        })}
    </div>
  );
};

export default FilterPropsContents;
