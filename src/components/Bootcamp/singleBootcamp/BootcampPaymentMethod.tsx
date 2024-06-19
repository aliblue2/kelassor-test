">puse client";

import CustomHeading from "@/components/Ui/CustomHeading";
import Image from "next/image";
import image from "/public/Bootcamp/snapp-pay.jpg"

//BootcampPaymentMethod component
const BootcampPaymentMethod = () => {
  return (
    <div className="flex flex-col gap-10">
      <CustomHeading circle side="left">
        <h2>نحوه‌ی پرداخت</h2>
      </CustomHeading>
      <div className="flex flex-col gap-5 text-4xl font-bold md:flex-row text-gray-3">
        <div className="flex justify-between items-center py-10 px-20 shrink-0 bg-secondary-75 grow rounded-[30px]">
          پرداخت نقدی
          <div className="bg-error flex flex-col items-center justify-center text-xl text-white size-24 rounded-[20px]">
            <div>20%</div>
            <div>تخفیف</div>
          </div>
        </div>
        <div className="flex justify-between items-center py-10 px-20 shrink-0 bg-secondary-75 grow rounded-[30px]">
          <div>
            پرداخت اقساطی
            <div className="mt-2 text-sm font-normal">
              پرداخت اقساطی با اسنپ‌پی در ۴ قسط
            </div>
          </div>
          <Image src={image} alt="snapp pay" height={500} width={500} className="rounded-[20px] size-24"/>
        </div>
      </div>
    </div>
  );
};

export default BootcampPaymentMethod;
