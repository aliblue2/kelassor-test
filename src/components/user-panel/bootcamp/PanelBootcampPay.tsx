"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { getPanelBootcampsOutput } from "@/requests/user-panel/getPanelBootcamps";
import { XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

//PanelBootcampPay component
type PanelBootcampPayProps = { data: getPanelBootcampsOutput };
const PanelBootcampPay = ({ data }: PanelBootcampPayProps) => {
  const [visible, setvisible] = useState(false);
  const toggleVisible = () => {
    setvisible((prev) => !prev);
  };
  const outref = useOutsideClick(toggleVisible);
  return (
    <div>
      <button className="text-primary-base" onClick={toggleVisible}>
        پرداخت
      </button>

      {visible && (
        <div className="h-dvh w-screen backdrop-blur-xl p-5 z-[150] fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div
            ref={outref}
            className=" flex gap-5 flex-col h-1/2 w-full sm:w-2/3 lg:w-1/2 p-5 rounded-[30px] bg-background border-light-4 border shadow2"
          >
            <div className="grid mb-5 grid-cols-3 ">
              <button onClick={toggleVisible}>
                <XIcon />
              </button>
              <h2>پرداخت</h2>
            </div>

            <div className="grow flex gap-5 flex-col text-lg">
              <div className=" flex items-center gap-2">
                <div> نام بوتکمپ </div>
                <div className="grow border-b-2 border-secondary-75 border-dashed h-1"></div>
                <div> {data.bootcampTitle}</div>
              </div>
              <div className=" flex items-center gap-2">
                <div> تاریخ شروع </div>
                <div className="grow border-b-2 border-secondary-75 border-dashed h-1"></div>
                <div>{data.start}</div>
              </div>
              <div className=" flex items-center gap-2">
                <div>مدت دوره</div>
                <div className="grow border-b-2 border-secondary-75 border-dashed h-1"></div>
                <div>{data.length}</div>
              </div>
              <div className=" flex items-center gap-2">
                <div> قیمت</div>
                <div className="grow border-b-2 border-secondary-75 border-dashed h-1"></div>
                <div>{data.price.split(";")[0]} تومان</div>
              </div>
            </div>

            <div className="grow flex items-center justify-center">
            {//todo fix
              data.eligible && <a
                href={ data.link}
                target="_blank"
                className={` "cursor-pointer hover:shadow2" flex gap-2 border border-[#EBECF2] p-5 rounded-[20px] `}
              >
                <Image
                  src="/snapp-pay/Snapp!-Pay-Logotype-Mobile.svg"
                  alt="لوگوی اسنپ پی"
                  height={64}
                  width={64}
                />
                <div className="flex flex-col items-start text-base md:text-lg gap-1 justify-center">
                  <div>{data.title_message}</div>
                  <div className="text-start self-start">{data.description}</div>
                </div>
              </a>
            }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelBootcampPay;
