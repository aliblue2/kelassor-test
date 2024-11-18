import Link from "next/link";
import React from "react";
import WorkShopSlider from "../../Advance/slider/WorkShopSlider";
import { WorkShop } from "@/types/Workshop";

const RecomAdvances: React.FC<{ workshops: WorkShop[] }> = ({ workshops }) => {
  return (
    <div className="flex flex-col w-full items-start justify-start gap-8 my-12">
      <div className="flex w-full items-center justify-between gap-5">
        <h6 className="md:text-2xl text-lg font-medium">
          دوره های کلاسور advanace
        </h6>
        <Link
          href={"/advance"}
          className="bg-primary-base hover:bg-primary-20 hover:scale-110 text-white font-medium md:text-lg rounded-xl px-4 py-2 transition-all ease-in-out duration-300"
        >
          مشاهده همه دوره ها
        </Link>
      </div>

      <div className="w-full h-full p-2 relative primary-maze bg-primary-base rounded-[30px]">
        <WorkShopSlider workshops={workshops} />
      </div>
      <h6 className="text-lg font-medium text-light-1">
      در صفحه اصلی وب‌سایت می‌تونید کلیه دور های  کلاسور advance رو ببینید.
      </h6>
    </div>
  );
};

export default RecomAdvances;
