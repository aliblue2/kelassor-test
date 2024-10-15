import React from "react";
import CustomHeading from "../Ui/CustomHeading";

const FeedBackForm: React.FC = () => {
  return (
    <div className="my-5 w-full max-w-[1100px] mx-auto p-3">
      <CustomHeading>
        <h3>با نظر دادن، کمک کن بقیه آگاهانه خرید کنن</h3>
      </CustomHeading>
      <form className="flex flex-col items-start justify-start w-full gap-5">
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <label htmlFor="content">
            نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
            شده‌اند *
          </label>
          <textarea
            name="content"
            required
            id="content"
            placeholder="نظر خود را درباره این کارگاه بنویسید"
            className="w-full p-2 transition-colors duration-300 border-2 border-transparent rounded-lg shadow-md outline-none focus:border-primary-base"
            rows={5}
          />
        </div>

        <div className="flex flex-col items-start justify-start w-full gap-2">
          <label htmlFor="name">نام و نام خانوادگی * </label>
          <input
            type="text"
            name="name"
            required
            id="name"
            placeholder="اشکان محدویان"
            className="w-full p-2 transition-colors duration-300 border-2 border-transparent rounded-lg shadow-md outline-none focus:border-primary-base"
          />
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <label htmlFor="email">ایمیل *</label>
          <input
            type="text"
            name="email"
            required
            id="email"
            placeholder="email@example.com"
            className="w-full p-2 transition-colors duration-300 border-2 border-transparent rounded-lg shadow-md outline-none focus:border-primary-base"
          />
        </div>
        <div className="flex items-center justify-start gap-2">
          <input type="checkbox" />
          <span className="text-base font-medium">
             ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
            می‌نویسم.
          </span>
        </div>
        <input
          value={"ارسال دیدگاه"}
          type="submit"
          className="px-4 py-2 rounded-[10px] bg-primary-base hover:bg-primary-40 transition-colors duration-300 text-white font-medium text-lg"
        />
      </form>
    </div>
  );
};

export default FeedBackForm;
