"use client";

import { submitCalls } from "@/requests/AdminActions/actions";
import { userCall } from "@/types/bootcampUser";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

const Calls: React.FC<{
  callResult: string;
  calls: userCall[];
  userId: number;
  hashedId: string;
}> = ({ callResult, calls, userId, hashedId }) => {
  const [userCalls, setUserCalls] = useState<{
    callResult: string;
    calls: userCall[];
  }>({
    callResult: callResult,
    calls: calls,
  });
  const pathName = usePathname().toString();
  const noteRef = useRef<HTMLTextAreaElement>(null);
  const callResultRef = useRef<HTMLSelectElement>(null);
  const onItemChangehandler = (id?: string, callresult?: boolean) => {
    if (id) {
      const targetItem = userCalls.calls.find((call) => call.id === id);
      if (targetItem) {
        targetItem.note = noteRef!.current!.value;
      }
    }

    if (callresult) {
      const callResultValue = callResultRef.current!.value;
      setUserCalls((prevCall) => {
        return {
          ...prevCall,
          callResult: callResultValue,
        };
      });
    }
  };

  const addNewCallHandler = () => {
    setUserCalls((prevCalls) => {
      return {
        ...prevCalls,
        calls: [
          ...prevCalls.calls,
          {
            id: uuid(),
            date: new Date().getTime(),
            note: "",
          },
        ],
      };
    });
  };

  const removeCallHandler = useCallback(
    (id: string) => {
      const targetItem = userCalls.calls.find((callItem) => callItem.id === id);

      if (targetItem) {
        const finalCalls = userCalls.calls.filter(
          (call) => call.id !== targetItem.id
        );
        setUserCalls((prevCalls) => {
          return {
            ...prevCalls,
            calls: finalCalls,
          };
        });
        submitCalls(
          userId,
          userCalls.callResult,
          finalCalls,
          hashedId,
          pathName
        );
      }
    },
    [userCalls, hashedId, userId, pathName]
  );

  const submitCallsHandler = async () => {
    const res = await submitCalls(
      userId,
      userCalls.callResult,
      userCalls.calls,
      hashedId,
      pathName
    );

    if (res) {
      toast.success("با موفقیت اضافه ثبت شد.");
    } else {
      toast.error("ثبت تماس با خطا مواجه شد.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-start gap-5">
        {userCalls.calls.length > 0 ? (
          userCalls.calls.map((call, i) => {
            return (
              <div
                className="rounded-[20px] shadow-md p-5 w-full flex items-start justify-start gap-6 md:flex-row flex-col relative md:items-center border-2 py-10"
                key={call.id}
              >
                <span>تماس {i + 1}</span>
                <span>{new Date(call.date).toLocaleDateString("fa-IR")}</span>
                <span>{callResult}</span>
                <select
                  ref={callResultRef}
                  onChange={() => onItemChangehandler(undefined, true)}
                  name="callResult"
                  defaultValue={callResult}
                  className="p-2 rounded-md border bg-white outline-none focus:border-primary-base transition-colors duration-300"
                >
                  <option value={"انصراف"}>انصراف</option>
                  <option value={"نیاز به پیگیری"}>نیاز به پیگیری</option>
                  <option value={"ثبت نام"}>ثبت نام</option>
                  <option value={"بررسی نشده"}>بررسی نشده</option>
                  <option value={"پرداخت نکرده"}>پرداخت نکرده</option>
                  <option value={"بی پاسخ"}>بی پاسخ</option>
                </select>
                <div className="flex flex-col items-start justify-start md:w-6/12 w-full  gap-1">
                  <label
                    htmlFor="note"
                    className="text-lg text-gray-4 font-medium"
                  >
                    یادداشت :
                  </label>
                  <textarea
                    rows={3}
                    id="note"
                    onChange={() => onItemChangehandler(call.id, true)}
                    ref={noteRef}
                    name="note"
                    className="p-2 w-full rounded-md border outline-none focus:border-primary-base transition-colors duration-300"
                    defaultValue={call.note}
                  />
                </div>
                <span
                  className="text-red-500 bg-red-100 px-4 rounded-md text-sm absolute left-2 bottom-2"
                  onClick={() => removeCallHandler(call.id)}
                >
                  حذف
                </span>
              </div>
            );
          })
        ) : (
          <span className="text-lg font-medium text-primary-base">
            هنوز تماسی وجود ندارد
          </span>
        )}
      </div>
      {userCalls.calls.length > 0 && (
        <button
          onClick={submitCallsHandler}
          className="bg-primary-base hover:bg-primary-40 text-white p-2 rounded-md text-lg transition-colors duration-300 mt-5"
        >
          ثبت تغییرات
        </button>
      )}
      <div className="flex items-center justify-center w-full absolute -bottom-5 left-0">
        <button
          onClick={addNewCallHandler}
          className="bg-primary-base transition-colors duration-300 hover:bg-primary-30 text-white rounded-full p-2"
        >
          <Plus size={32} />
        </button>
      </div>
    </>
  );
};

export default Calls;
