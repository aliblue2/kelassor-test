"use client";
import { InfoIcon } from "lucide-react";
//BootCampCard component
const title = "پایتون / جنگو";
const BootCampCard = () => {
  return (
    <div className="flex flex-col bg-white p-2 rounded-[20px] aspect-square">
      <div className="bg-primary-base h-3/5 rounded-[12px]">todo</div>
      <div className="text-lg font-bold flex grow items-center justify-center">
        {title}
      </div>
      <button className="text-sm gap-2 grow font-thin text-gray-4 flex items-center justify-center border-t-light-3 border-t">
        <InfoIcon size={14}/>
        اطلاعات بیشتر
      </button>
    </div>
  );
};

export default BootCampCard;
