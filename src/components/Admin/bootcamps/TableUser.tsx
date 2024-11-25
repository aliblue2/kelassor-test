import { bootcampUser } from "@/types/bootcampUser";
import React from "react";
import UserInfo from "./UserInfo";
import { cookies } from "next/headers";

const TableUser: React.FC<{ users: bootcampUser[] }> = ({ users }) => {
  const hashedId = cookies().get("user_session")!.value;
  return (
    <>
      <section className="w-full my-5 overflow-scroll ">
        <div>
          <div className="flex items-center justify-between w-full gap-2 p-1 rounded-md bg-light-3 text-gray-3">
            <span className="p-2 text-xs font-medium w-fit">شناسه</span>
            <span className="w-2/12 p-2 text-xs font-medium text-start">
              نام
            </span>
            <span className="w-1/12 p-2 text-xs font-medium">شماره‌تماس</span>
            <span className="w-1/12 p-2 text-xs font-medium">تاریخ</span>
            <span className="w-1/12 p-2 text-xs font-medium">تخفیف</span>
            <span className="w-1/12 p-2 text-xs font-medium">وضعیت‌تماس</span>
            <span className="p-2 text-xs font-medium w-fit">وضعیت‌کاربر</span>
            <span className="w-3/12 p-2 text-xs font-medium text-center">
              tid
            </span>
            <span className="w-1/12 p-2 text-xs font-medium">پرداخت</span>
            <span className="w-1/12 p-2 text-xs font-medium">اسنپ پی</span>
          </div>
        </div>
        <div className="w-full">
          {users.length > 0
            ? users.map((user) => {
                return (
                  <UserInfo hashedId={hashedId} user={user} key={user.id} />
                );
              })
            : "هیچ کاربری پیدا نشد.!"}
        </div>
      </section>
    </>
  );
};

export default TableUser;
