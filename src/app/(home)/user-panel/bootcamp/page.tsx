import { getPanelBootcamps } from "@/requests/user-panel/getPanelBootcamps";
import { toJalaali } from "jalaali-js";
import { cookies } from "next/headers";

//page component
const page = async () => {
  const res = await getPanelBootcamps(cookies().get("session_id")?.value);
  console.log(23434, res);
  const convertDate = (input: string) => {
    const date = new Date(input);
    const jalaali = toJalaali(date);
    return jalaali.jy + "/" + jalaali.jm + "/" + jalaali.jd;
  };
  return (
    <div className="flex flex-col gap-10 py-10 grow">
      <h3 className="self-start">بوتکمپ‌های من</h3>
      <div className="flex overflow-hidden flex-col text-xs text-center rounded-2xl md:text-base">
        <div className="grid grid-cols-4 gap-2 justify-items-center items-center p-2 text-white bg-primary-base">
          <div>نام بوتکمپ</div>
          <div>تاریخ شروع</div>
          <div>مدت دوره</div>
          <div>پرداخت با اسنپ‌پی</div>
        </div>
        {/******************************************************************************
          data */}
        {res.map((item) => (
          <div
            key={item.key}
            className="grid grid-cols-4 gap-2 justify-items-center items-center p-2 odd:bg-light-2 even:bg-light-3"
          >
            <div>{item.bootcampTitle}</div>
            
            <div>{item.start}</div>
              
            <div>{item.length}</div>
            <a href={item.link} target="_blank">کلیک کنید</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;