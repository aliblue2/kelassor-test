import React from "react";
import { GroupedAdvanceSessions } from "@/types/AdvanceSessions";

const PassedAdvances: React.FC<{ sessions: GroupedAdvanceSessions[] }> = ({
  sessions,
}) => {
  const currentUnixTime = new Date().getTime();
  sessions = sessions.filter((item) => +item.unix_time < currentUnixTime);

  return (
    <div className="w-full flex flex-col items-start justify-start gap-8 my-12">
      <h6 className="text-lg md:text-2xl font-medium">
        کارگاه های گذرانده شده
      </h6>
      <div className="rounded-2xl w-full shadow2 overflow-hidden">
        <div className="flex items-center justify-around gap-2 w-full p-4 text-white bg-primary-base">
          <span className="text-[10px] w-1/12 md:text-lg font-medium">
            نام‌کارگاه
          </span>
          <span className="text-[10px] md:text-lg font-medium">تاریخ</span>
          <span className="text-[10px] md:text-lg font-medium">ساعت</span>
          <span className="text-[10px] md:text-lg font-medium">
            وضعیت پرداخت
          </span>
        </div>
        <div className="p-5 bg-light-3 min-h-32 h-full w-full">
          {sessions.length === 0 ? (
            <span className="text-xl w-full block font-medium text-primary-base text-center">
              هیچ کارگاهی وجود ندارد
            </span>
          ) : (
            sessions.map((sessionItem, i) => {
              return (
                <div
                  className="flex items-center justify-around gap-5  p-5"
                  key={sessionItem.advanceId + i}
                >
                  <h6 className="text-primary-base text-center line-clamp-2 truncate w-1/4 font-bold md:text-lg">
                    {sessionItem.advanceTitle}
                  </h6>
                  <span className="text-xs w-1/4 text-center md:text-base font-medium">
                    {sessionItem.sessions[0].date}
                  </span>
                  <span className="text-xs w-1/4 text-center md:text-base font-medium">
                    {sessionItem.sessions[0].time}
                  </span>
                  <span className="text-xs w-1/4 text-center md:text-base font-medium">
                    {sessionItem.isPaid === 1 ? "تسویه" : "بدهکار"}
                  </span>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default PassedAdvances;
