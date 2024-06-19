"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import Image from "next/image";
import image from "/public/Bootcamp/certificate.png";

//BootcampCertificate component
const BootcampCertificate = () => {
  return (
    <div className="flex flex-col gap-10">
      <CustomHeading circle side="left">
        <h2>نمومه مدرک کلاسور</h2>
      </CustomHeading>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
        <Image
          src={image}
          alt="certificate"
          width={1000}
          height={500}
          className="object-contain grow h-[400px]"
        />
        <p className="font-semibold grow">
          مدرکی که کلاسور به شما ارائه میدهد نشان دهنده تخصص و مهارتی است که در
          کلاسور کسب کردید و با ارائه آن میتوانید در آزمون‌های استخدامی شرکت‌ها
          موفق شده و در پروژه‌های حرفه‌ای مشغول به کار شوید. پس از دریافت مدرک
          میتوانید آن را در صفحه ی لینکدین خود منتشر کنید. 
        </p>
      </div>
    </div>
  );
};

export default BootcampCertificate;
