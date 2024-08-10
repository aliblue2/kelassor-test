import { cookies } from "next/headers";
import { toJalaali } from "jalaali-js";
import { getPanelDashboard } from "@/requests/user-panel/getPanelDashboard";

//page component
const page = async () => {
  const res = await getPanelDashboard(cookies().get("session_id")?.value);
  const convertDate = (input: string) => {
    const date = new Date(input);
    const jalaali = toJalaali(date);
    return jalaali.jy + "/" + jalaali.jm + "/" + jalaali.jd;
  };
  return (
    <div className="flex flex-col gap-10 py-10 grow">
      <h3 className="self-start">مدیریت حساب / بدهی</h3>
      <div className="flex overflow-hidden flex-col text-xs text-center rounded-2xl md:text-base">
        <div className="grid grid-cols-4 gap-2 justify-items-center items-center p-2 text-white bg-primary-base">
          <div>نام بوتکمپ</div>
          <div>شناسه پرداخت</div>
          <div>تاریخ</div>
          <div>وضعیت پرداخت</div>
        </div>
        {/******************************************************************************
          data */}
        {res.map((item) => (
          <div
            key={item.key}
            className="grid grid-cols-4 gap-2 justify-items-center items-center p-2 even:bg-light-3 odd:bg-light-2"
          >
            <div>{item.course}</div>
            <div>{item.key}</div>
            <div>{convertDate(item.date)}</div>
            <div>{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
