import Clg from "@/utils/Clg";
import { error } from "console";
import { cookies } from "next/headers";
import Tempdata from "./temp";

//page component
const page = async () => {
  return (
    <div className="flex flex-col gap-10 py-10 grow">
    <Tempdata/>

      <h3 className="self-start">مدیریت حساب / بدهی</h3>
      <div className="flex overflow-hidden flex-col text-xs text-center rounded-2xl md:text-base">
        <div className="grid grid-cols-4 gap-2 justify-items-center items-center p-2 text-white bg-primary-base">
          <div>موضوع</div>
          <div>شناسه</div>
          <div>تاریخ</div>
          <div>وضعیت</div>
        </div>
        {/******************************************************************************
          data */}
      </div>
    </div>
  );
};

export default page;
