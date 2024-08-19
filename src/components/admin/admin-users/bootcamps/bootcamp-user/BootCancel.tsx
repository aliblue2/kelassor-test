"use client";

import { XIcon } from "lucide-react";
import { useState } from "react";

//BootCancel component
const BootCancel = ({ tid }: { tid: string }) => {
  const [modal, setmodal] = useState(false);
  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setmodal(true);
        }}
      >
        لغو اسنپ‌پی
      </button>
      {modal && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="fixed text-black top-0 left-0 bottom-0 right-0 z-[151] backdrop-blur-xl flex items-center justify-center"
        >
          <div className="bg-background p-10 flex gap-5 flex-col rounded-[20px] shadow2 ">
            <div className="flex flex-col gap-5 justify-center">
              <h2>آیا از لغو کردن پرداخت اسنپ‌پی مطمئن هستید؟</h2>
              <div className="flex gap-2 h-16">
                <button
                  className="bg-success flex-1 flex items-center justify-center rounded-xl font-bold text-white"
                >
                  <a
                    href={
                      process.env.BASE_URL +
                      "/profile/snapCancel.php?transactionId=" +
                      tid
                    }
                  >
                    لغو پرداخت اسنپ‌پی
                  </a>
                </button>
                <button
                  onClick={() => setmodal(false)}
                  className="bg-error flex-1 flex items-center justify-center rounded-xl font-bold text-white"
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BootCancel;
