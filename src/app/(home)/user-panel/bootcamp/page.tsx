import { getPanelBootcamps } from "@/requests/user-panel/getPanelBootcamps";
import { toJalaali } from "jalaali-js";
import { cookies } from "next/headers";

//page component
const page = async () => {
  const res = await getPanelBootcamps(cookies().get("session_id")?.value);
  const convertDate = (input: string) => {
    const date = new Date(input);
    const jalaali = toJalaali(date);
    return jalaali.jy + "/" + jalaali.jm + "/" + jalaali.jd;
  };
  console.log(4543241234,res)
  return (
    <div className="flex flex-col gap-10 py-10 grow">
      <h3 className="self-start">بوتکمپ‌های من</h3>
      <div className="flex overflow-hidden flex-col text-xs text-center rounded-2xl md:text-base">
        <div className="grid grid-cols-3 gap-2 justify-items-center items-center p-2 text-white bg-primary-base">
          <div>نام بوتکمپ</div>
          <div>تاریخ شروع</div>
          <div>مدت دوره</div>
        </div>
        {/******************************************************************************
          data */}
        {res.map((item) => (
          <div
            key={item.key}
            className="grid grid-cols-3 gap-2 justify-items-center items-center p-2 odd:bg-light-2 even:bg-light-3"
          >
            <div>{item.course}</div>
            <div>{convertDate(item.date)}</div>
            <div>{item.length}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
