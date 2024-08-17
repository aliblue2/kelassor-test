import { getPanelBootcamps } from "@/requests/user-panel/getPanelBootcamps";
import img from "/public/common/snappPay.svg";
import { cookies } from "next/headers";
import Image from "next/image";

//page component
const page = async () => {
  const res = await getPanelBootcamps(cookies().get("session_id")?.value);
  return (
    <div className="flex flex-col gap-10 py-10 grow">
      <h3 className="self-start">بوتکمپ‌های من</h3>
      <div className="flex overflow-hidden flex-col text-xs text-center rounded-2xl md:text-base">
        <div className="grid grid-cols-4 gap-2 justify-items-center items-center p-2 text-white bg-primary-base">
          <div>نام بوتکمپ</div>
          <div>تاریخ شروع</div>
          <div>مدت دوره</div>
        </div>
        {/******************************************************************************
          data */}
        {res.map((item) => (
          <div
            key={item.transactionId}
            className="grid grid-cols-4 gap-2 justify-items-center items-center p-2 odd:bg-light-2 even:bg-light-3"
          >
            <div>{item.bootcampTitle}</div>

            <div>{item.start}</div>

            <div>{item.length}</div>
            <a
              href={item.link}
              className="flex gap-2 items-center justify-between"
              target="_blank"
            >
              <div className="flex items-center justify-between gap-2">
                پرداخت با
                <Image
                  src={img}
                  height={30}
                  width={50}
                  alt="snapp pay"
                  className="brightness-[10%] "
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
