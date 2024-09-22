"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import Image from "next/image";

//BootcampPaymentMethod component
const BootcampPaymentMethod = ({ price }: { price: string }) => {
  return (
    <div className="flex flex-col gap-10">
      <CustomHeading circle side="left">
        <h2>نحوه‌ی پرداخت</h2>
      </CustomHeading>
      <div className="flex flex-col md:flex-row gap-5 text-xl">
        <div className="flex flex-1 hover:shadow2 gap-2 border border-[#EBECF2] p-5 rounded-[20px] shadow2">
          <div className=" font-bold bg-white p-2 flex flex-col items-center justify-center text-xl text-white size-24 rounded-[20px]">
            <Image src="/logo.png" alt="لوگوی کلاسور" height={96} width={96} />
          </div>
          <div className="flex flex-col items-start gap-1 justify-center">
            <div className="font-bold ">پرداخت نقدی</div>
            <div>کارشناسان ما هماهنگ خواهند کرد</div>
          </div>
        </div>
        <div className="flex-1 flex-col gap-2 flex">
          <div className="flex flex-1 hover:shadow2 gap-2 border border-[#EBECF2] p-5 rounded-[20px] shadow2">
            <Image
              src="/snapp-pay/Snapp!-Pay-Logotype-Mobile.svg"
              alt="لوگوی اسنپ پی"
              height={96}
              width={96}
            />
            <div className="flex flex-col items-start gap-1 justify-center">
              <div className="font-bold ">
                هر قسط با اسنپ‌پی:{" "}
                {(
                  +price.split(";")[0].replaceAll(",", "") / 4
                ).toLocaleString()}{" "}
                تومان
              </div>
              <div>۴ قسط ماهانه. بدون سود، چک و ضامن.</div>
            </div>
          </div> 
        </div>
      </div>
      <div className="mr-4 text-center text-xl">
            فقط تا قبل از شروع دوره امکان انصراف دارین!
          </div>
    </div>
  );
};

export default BootcampPaymentMethod;
