"use client";
import { useAuth } from "../Auth/useAuth";
import CustomButton from "../Ui/CustomButton";
import CustomHeading from "../Ui/CustomHeading";
import { toJalaali } from "jalaali-js";
import Image from "next/image";
import Link from "next/link";
import { getPanelDashboardOutput } from "@/requests/user-panel/getPanelDashboard";

//UserPanel component
const UserPanel = ({ data }: { data: getPanelDashboardOutput[] }) => {
  const { user } = useAuth();

  const convertDate = (input: string) => {
    const date = new Date(input);
    const jalaali = toJalaali(date);
    return jalaali.jy + "/" + jalaali.jm + "/" + jalaali.jd;
  };
  return (
    <div className="flex-col flex gap-10 grow">
      {/******************************************************************************
        name */}
      {/*todo:
      <div className="bg-white shadow2 p-10 font-bold rounded-[30px]">
        <div className="text-primary-base text-2xl">
          {user
            ? user.name
              ? user.name
              : "" + " " + user.lastname
                ? user.lastname
                : ""
            : ""}
          {}
        </div>
      </div>
      */}
      {/******************************************************************************
        heading */}
      <div className="flex items-center justify-between">
        <CustomHeading>
          <h2>بوتکمپ‌های من</h2>
        </CustomHeading>
        <CustomButton>
          <Link href="/bootcamp">مشاهده بوتکمپ‌ها</Link>
        </CustomButton>
      </div>
      {/******************************************************************************
        my bootcamps */}
      <div className="flex flex-col gap-5 ">
        {data.map((item) => (
          <div
            key={item.key}
            className="bg-white h-52 shadow2 flex flex-col md:flex-row overflow-hidden rounded-[30px]"
          >
            <div className="bg-black relative w-full md:w-2/3 overflow-hidden rounded-[30px]">
              <Image
                src={item.logo_banner}
                height={512}
                width={1024}
                alt={item.course}
                className="size-full object-cover"
              />
              <div className="absolute top-0 left-0 p-5 size-full text-2xl font-bold text-white">
                {item.course}
              </div>
            </div>
            <div className="flex justify-between flex-col grow p-10 font-bold text-gray-4">
              <div className="flex justify-between">
                <div>تاریخ شروع:</div>
                <div>{convertDate(item.date)}</div>
              </div>
              <div className="flex justify-between">
                <div>مدت دوره:</div>
                <div>{item.length}</div>
              </div>
              <div className="flex justify-between">
                <div>وضعیت پرداخت:</div>
                <div>۲ اسفند</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPanel;
