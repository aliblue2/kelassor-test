"use client";
import { useAuth } from "../Auth/useAuth";
import CustomButton from "../Ui/CustomButton";
import CustomHeading from "../Ui/CustomHeading";

//UserPanel component
const UserPanel = () => {
  const { user } = useAuth();
  return (
    <div className="flex-col flex gap-10 grow">
      {/******************************************************************************
        name */}
      <div className="bg-white shadow2 p-10 font-bold rounded-[30px]">
        <div className="text-primary-base text-2xl">
          {user?.name + " " + user?.lastname}
        </div>
      </div>
      {/******************************************************************************
        heading */}
      <div className="flex items-center justify-between">
        <CustomHeading>
          <h2>بوتکمپ‌های من</h2>
        </CustomHeading>
        <CustomButton>مشاهده بوتکمپ‌ها</CustomButton>
      </div>
      {/******************************************************************************
        my bootcamps */}
      <div className="flex flex-col gap-5 ">
        <div className="bg-white h-52 shadow2 flex overflow-hidden rounded-[30px]">
          <div className="bg-black w-2/3 rounded-[30px]"></div>
          <div className="flex justify-between flex-col grow p-10 font-bold text-gray-4">
            <div className="flex justify-between">
              <div>تاریخ شروع:</div>
              <div>۲ اسفند</div>
            </div>
            <div className="flex justify-between">
              <div>تاریخ پایان:</div>
              <div>۲ اسفند</div>
            </div>
            <div className="flex justify-between">
              <div>وضعیت پرداخت:</div>
              <div>۲ اسفند</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
