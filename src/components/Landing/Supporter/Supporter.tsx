"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CustomHeading from "@/components/Ui/CustomHeading";
type SupporterProps = {
  images: {sponser_link: string}[];
  itemSize?: number;
  duration?: number;
};

const Supporter = ({
  images,
  itemSize = 90,
}: SupporterProps) => {
  const [isDesktop, setisDesktop] = useState(2);
  useEffect(() => {
    if (window && window.innerWidth < 768) setisDesktop(1);
  }, []);
  return (
    <CustomHeading circle side="left">
          <h2>اساتید و منتورها</h2>
    </CustomHeading>
    <div className="flex border-y border-y-light-2 size-full">
        <div
            className="flex justify-center gap-14 overflow-hidden size-full py-1 md:py-2"
        >
            {images.map((item, index) => (
            <div
                key={item.sponser_link + index}              
            >
                <Image
                height={60}
                width={itemSize * isDesktop}
                src={item.sponser_link}
                alt={`company ${index}`}
                className="object-contain h-32"
                />
            </div>
            ))}
        </div>
    </div>
  );
};

export default Supporter;
