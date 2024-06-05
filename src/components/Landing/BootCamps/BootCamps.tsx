"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import BootCampCard from "./BootCampCard";

//BootCamps component
const BootCamps = () => {
  return (
    <div className="flex flex-col">
      <CustomHeading>
        <h2>رشته‌های کلاسور</h2>
      </CustomHeading>
      <div className="grid gap-2 md:gap-5 w-full mt-10 grid-cols-2 md:grid-cols-4">
        {/*todo todo: map data from backend */}
        <BootCampCard />
        <BootCampCard />
        <BootCampCard />
        <BootCampCard />
        <BootCampCard />
      </div>
    </div>
  );
};

export default BootCamps;
