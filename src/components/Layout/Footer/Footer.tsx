"use client";

import {
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/Ui/Icons";
import Image from "next/image";
import Link from "next/link";

const sectionCalss = "flex flex-col gap-2 items-start";
const sectionTitleClass = "font-bold border-b-2 border-b-white text-lg";
//Footer component
const Footer = () => {
  return (
    <>
      <div className="my-10 text-2xl font-bold text-center">
        یاد بگیر، تجربه کسب کن،
        <br />
        تو بهترین شرکت‌ها استخدام شو.
      </div>
      <div className="mt-auto bg-gray-3">
        <div className="container flex flex-col text-white mb-5">
          <span className="py-4 font-bold text-center border-b-2 opacity-50 border-b-white text-[36px]">
            KELAASOR
          </span>
          <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4 py-10">
            <div className={sectionCalss}>
              <p className={sectionTitleClass}>کلاسور</p>
              <Link href="todo">درباره ما</Link>
              <Link href="todo">تماس با ما</Link>
              <Link href="todo">قوانین و مقررات</Link>
            </div>
            <div className={sectionCalss}>
              <p className="font-bold border-b-2 border-b-white text-lg">
                بوتکمپ‌ها
              </p>
              <Link href="todo">سوشال مدیا</Link>
              <Link href="todo">تحلیل داده</Link>
              <Link href="todo">سئو</Link>
              <Link href="todo">مدیریت محصول</Link>
              <Link href="todo">مدیریت محصول</Link>
            </div>
            <div className={sectionCalss}>
              <p className="font-bold border-b-2 border-b-white text-lg">
                مقالات
              </p>
            </div>
            <div className={sectionCalss}>
              <p className="font-bold border-b-2 border-b-white text-lg">
                منابع آموزشی
              </p>
              <Link href="todo">اشتراک گذاری جزوات</Link>
              <Link href="todo">
                <Image
                  src="/Footer/enamad.png"
                  alt="enamad"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <LinkedinIcon />
            <TelegramIcon />
            <TwitterIcon />
            <WhatsappIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <div className="py-2 text-gray-3 font-bold text-center">
        | تمامی حقوق کپی‌رایت محفوظ است. ۱۴۰۲ شرکت کلاسور |
      </div>
    </>
  );
};

export default Footer;
