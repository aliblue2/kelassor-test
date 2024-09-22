"use client";

import {
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "@/components/Ui/Icons";
import { useBootcamps } from "@/contexts/useBootcamps";
import { getCategories } from "@/utils/database/blog/getCategories";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const sectionCalss = "flex flex-col gap-2 items-start";
const sectionTitleClass = "font-bold border-b-2 border-b-white text-lg";
//Footer component
const Footer = () => {
  const { bootcamps } = useBootcamps();
  const { data: blogs } = useQuery({
    queryFn: () => getCategories(),
    queryKey: ["category"],
  });
  return (
    <>
      <div className="mt-auto mb-10 text-2xl font-bold text-center">
        یاد بگیر، تجربه کسب کن،
        <br />
        تو بهترین شرکت‌ها استخدام شو.
      </div>
      <div className="bg-gray-3">
        <div className="container flex flex-col text-white mb-5">
          <span className="py-4 font-semibold text-center border-b-2 opacity-50 border-b-white text-2xl md:text-[36px]">
            K . E . L . A . A . S . O . R
          </span>
          <div className="grid grid-cols-2 gap-y-5 md:grid-cols-3 py-10">
            <div className={sectionCalss}>
              <p className={sectionTitleClass}>کلاسور</p>
              <Link href="/about-us">درباره ما</Link>
              <Link href="/about-us/contact-us">تماس با ما</Link>
              <Link href="/about-us/user-agreements">قوانین و مقررات</Link>
            </div>
            <div className={sectionCalss}>
              <p className="font-bold border-b-2 border-b-white text-lg">
                بوتکمپ‌ها
              </p>
              {bootcamps.map((item) => (
                <Link key={item.header_title} href={`/bootcamp/${item.url}`}>
                  {item.header_title}
                </Link>
              ))}
            </div>
            <div className={sectionCalss}>
              <p className="font-bold border-b-2 border-b-white text-lg">
                مقالات
              </p>
              <Link href={`/blog`}>همه</Link>
              {blogs &&
                blogs.map((item) => (
                  <Link key={item.tag} href={`/blog?category=${item.tag}`}>
                    {item.name}
                  </Link>
                ))}
            </div>
            <div className={sectionCalss}>
              {/*todo:
              <p className="font-bold border-b-2 border-b-white text-lg">
                منابع آموزشی
              </p>
              <Link href="todo">اشتراک گذاری جزوات</Link>
            */}
              <a
                target="_blank"
                href="https://trustseal.enamad.ir/?id=131639&Code=rHq7aZYPNXVNbViUuNQf"
              >
                <Image
                  src="/Footer/enamad.png"
                  alt="enamad"
                  width={100}
                  height={100}
                />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a target="_blank" href="https://www.linkedin.com/company/kelaasor">
              <LinkedinIcon />
            </a>
            <a target="_blank" href="https://t.me/kelaasoradmin">
              <TelegramIcon />
            </a>
            <a target="_blank" href="https://x.com/kelaasor">
              <TwitterIcon />
            </a>
            <a target="_blank" href="">
              <WhatsappIcon />
            </a>
            <a target="_blank" href="https://instagram.com/kelaasor">
              <InstagramIcon />
            </a>
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
