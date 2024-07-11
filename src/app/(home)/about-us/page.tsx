"use client";

import WhatWeDoItem from "@/components/Landing/WhatWeDo/WhatWeDoItem";
import CustomHeading from "@/components/Ui/CustomHeading";

//page component
const page = () => {
  return (
    <div className="container flex flex-col pt-1 gap-10 py-10">
      <CustomHeading>
        <h1>درباره کلاسور</h1>
      </CustomHeading>

      <div className=" h-[800px] md:h-[600px] bg-blue-50 gap-5 md:gap-10 grid grid-cols-2 md:grid-cols-3 grid-rows-[1fr_2fr_2fr_1fr] md:grid-rows-[2fr_1fr_2fr_4fr] ">
        <div className="bg-red-400 md:col-start-3 md:row-start-1 md:row-end-3 ">
          1
        </div>
        <div className="bg-red-400 md:col-start-3 md:row-start-3 md:row-end-5 ">
          2
        </div>
        <div className="bg-red-400 md:col-start-2 md:row-start-1 md:row-end-4 col-start-1 col-end-3">
          3
        </div>
        <div className="bg-red-400 md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-5 col-start-1 col-end-3">
          4
        </div>
        <div className="bg-red-400 md:col-start-1 md:row-start-1">5</div>
        <div className="bg-red-400 md:col-start-1 md:row-start-2 md:row-end-4">
          6
        </div>
      </div>

      <p className="">
        آبان ماه سال 1400 کلاسور متولد شد. هدف کلاسور اینه که دغدغه‌ی افرادی که
        دنبال شغل هستند رو کمتر کنه. به همین دلیل ما کارمون طراحی مسیرشغلیه. تو
        مسیرهای شغلی کلاسور دیگه نگران این نیستی که من که دیجیتال بلد نیستم یا
        از کجا شروع کنم یا به کجاها رزومه بفرستم. تو کلاسور هدفت فقط باید
        یادگیری و پیشرفت باشه. تو مسیر های شغلی‌ای که ما طراحی کردیم هم آموزش
        می‌بینی، هم تجربه کسب می‌کنی و هم استخدام می‌شی. از طرفی کارفرما ها هم
        مشکلات زیادی برای جذب نیرو داشتند.
      </p>
      <CustomHeading>
        <h2>تولد کلاسور</h2>
      </CustomHeading>
      <p>
        آبان ماه سال 1400 کلاسور متولد شد. هدف کلاسور اینه که دغدغه‌ی افرادی که
        دنبال شغل هستند رو کمتر کنه. به همین دلیل ما کارمون طراحی مسیرشغلیه. تو
        مسیرهای شغلی کلاسور دیگه نگران این نیستی که من که دیجیتال بلد نیستم یا
        از کجا شروع کنم یا به کجاها رزومه بفرستم. تو کلاسور هدفت فقط باید
        یادگیری و پیشرفت باشه. تو مسیر های شغلی‌ای که ما طراحی کردیم هم آموزش
        می‌بینی، هم تجربه کسب می‌کنی و هم استخدام می‌شی. از طرفی کارفرما ها هم
        مشکلات زیادی برای جذب نیرو داشتند. ما تصمیم گرفتیم تا مسیر جذب و استخدام
        رو براشون راحت کنیم. از تکنولوژی کمک گرفتیم. برای کارفرما ها پنلی درست
        کردیم که ظرف 4 دقیقه نیرو‌های مد نظرشون رو انتخاب می‌کنن و براشون تایم
        مصاحبه ست می‌کنن. قصد داریم در آینده‌ای نه چندان دور مسیر‌های شخصی سازی
        شده افراد رو براشون آماده کنیم. یعنی مسیری که من برای آموزشم طی می‌کنم
        با مسیری که تو طی می‌کنی قطعا متفاوت خواهد بود و مسیر شغلی هر فرد متناسب
        با میزان دانسته‌ها، زمانی که می‌تونه برای یادگیری بذاره و میزانی که دوست
        داره عمیق بشه خواهد بود.
      </p>
      <CustomHeading>
        <h2>راهبرد و اهداف کلاسور</h2>
      </CustomHeading>
      <div
        className="grid grid-cols-2 md:flex flex-col md:flex-row gap-2 md:gap-5 mt-10 mb-10 justify-between"
      >
        <WhatWeDoItem
          text="آموزش استاندارد در قالب بوتکمپ و دوره های آموزشی"
          image="/Landing/WhatWeDo/1.png"
        />
        <WhatWeDoItem
          text="تدریس توسط اساتید مطرح"
          image="/Landing/WhatWeDo/2.png"
        />
        <WhatWeDoItem
          text="ارائه مدرک معتبر و قابل ارائه جهت استخدام"
          image="/Landing/WhatWeDo/3.png"
        />
        <WhatWeDoItem
          text="معرفی نیروی مستعد به سازمان ها جهت استخدام پس از آموزش استاندارد"
          image="/Landing/WhatWeDo/4.png"
        />
      </div>
    </div>
  );
};

export default page;
