"use client";
const inputClass = "p-1 rounded-[10px] grow";

//BootcampHeroForm component
type BootcampHeroFormProps = {
  capacity: number;
  full_capacity: number;
  title: string;
};
const BootcampHeroForm = ({
  title,
  capacity,
  full_capacity,
}: BootcampHeroFormProps) => {
  return (
    <div className="flex bg-light-3 rounded-[30px] mt-auto p-5 text-black flex-col gap-2">
      <div className="text-xl">{title}</div>
      <div className="text-light-1">ظرفیت باقی مانده: {capacity} از {full_capacity}</div>

      <div className="flex items-center justify-center gap-2 mt-2">
        نام و نام‌خانوادگی
        <input className={inputClass} />
      </div>
      <div className="flex items-center justify-center gap-2">
        شماره موبایل
        <input className={inputClass} />
      </div>
      <div className="flex items-center justify-center gap-2">
        کد تخفیف
        <input
          placeholder="اگر کد تخفیف دارید وارد کنید"
          className={inputClass}
        />
      </div>
      <button className="p-1 rounded-[10px] bg-primary-base text-white">ثبت‌نام</button>
    </div>
  );
};

export default BootcampHeroForm;
