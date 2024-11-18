"use client";
import { GroupedAdvanceSessions } from "@/types/AdvanceSessions";
import { AnimatePresence } from "framer-motion";
import React, { useCallback, useState } from "react";
import Modal from "./Pay/Modal/Modal";

const ActiveAdvances: React.FC<{ sessions: GroupedAdvanceSessions[] }> = ({
  sessions,
}) => {
  const [payModalVis, setPayModalVis] = useState(false);
  const [activeAdvaceId, setActiveAdvanceId] = useState(-1);
  const openModalToggler = useCallback((advanceId: number) => {
    setPayModalVis((prevState) => {
      if (prevState) {
        document.body.style.overflow = "unset";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !prevState;
    });
    setActiveAdvanceId(advanceId);
  }, []);

  return (
    <>
      <AnimatePresence>
        {payModalVis && (
          <Modal advanceId={activeAdvaceId} modalTogglerFc={openModalToggler} />
        )}
      </AnimatePresence>

      <div className="flex flex-col items-start justify-start gap-8 my-12">
        <h6 className="md:text-2xl text-lg font-medium">کارگاه های فعال من</h6>
        <div className="w-full rounded-2xl overflow-hidden shadow2">
          <div className="flex w-full items-center justify-around bg-primary-base p-4 text-white">
            <span className="text-[10px] md:text-lg font-medium">جلسه</span>
            <span className="text-[10px] md:text-lg font-medium">تاریخ</span>
            <span className="text-[10px] md:text-lg font-medium">ساعت</span>
            <span className="text-[10px] md:text-lg font-medium">
              لینک ورود{" "}
            </span>
          </div>
          <div className="bg-light-3 w-full h-full min-h-32 flex flex-col divide-y-2 divide-primary-20 divide-dotted items-center justify-start gap-5 p-2">
            {sessions.length === 0 ? (
              <span className="text-xl w-full font-medium text-primary-base text-center">
                {" "}
                هیچ کارگاهی وجود ندارد
              </span>
            ) : (
              sessions.map((sessionsItem, i) => {
                return (
                  <div
                    className="flex items-center justify-start gap-2 flex-col w-full py-2"
                    key={sessionsItem.advanceId + i}
                  >
                    <h6 className="text-primary-base font-bold md:text-lg">
                      {sessionsItem.advanceTitle}
                    </h6>
                    {sessionsItem.sessions.map((item) => {
                      return (
                        <div
                          className="flex w-full p-2 items-center justify-around gap-5"
                          key={item.sessionTitle + item.date}
                        >
                          <span className="text-xs w-1/4 text-center md:text-base text-error font-medium">
                            {item.sessionTitle}
                          </span>
                          <span className="text-xs w-1/4 text-center md:text-base font-medium">
                            {item.date}
                          </span>
                          <span className="text-xs w-1/4 text-center md:text-base font-medium">
                            {item.time}
                          </span>
                          <span className="text-xs w-1/4 text-center md:text-base font-medium">
                            {sessionsItem.isPaid === 1
                              ? item.link
                              : "پس از تسویه نمایش داده میشود."}
                          </span>
                        </div>
                      );
                    })}
                    {sessionsItem.isPaid === 1 ? (
                      "تسویه"
                    ) : (
                      <button
                        className="text-white font-medium bg-primary-base hover:bg-primary-30 transition-colors ease-in-out duration-300 p-2 rounded-lg text-sm md:text-lg w-full md:w-fit"
                        onClick={() => openModalToggler(sessionsItem.advanceId)}
                      >
                        پرداخت{" "}
                      </button>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveAdvances;
