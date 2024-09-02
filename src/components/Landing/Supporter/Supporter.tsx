"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SupporterProps = {
  images: string[];
  itemSize?: number;
  duration?: number;
};

const Supporter = ({
  images,
  itemSize = 100,
}: SupporterProps) => {
  const [isDesktop, setisDesktop] = useState(2);
  useEffect(() => {
    if (window && window.innerWidth < 768) setisDesktop(1);
  }, []);
  return (
    <div className="flex border-y border-y-light-2 size-full">
        <div
            style={{
                height: (itemSize + 8) * isDesktop,
                maxWidth: itemSize * isDesktop * (images.length + 1),
            }}
            className="grid grid-cols-4 overflow-hidden size-full mx-auto mt-16 py-1 md:py-2"
        >
            {images.map((item, index) => (
            <div
                key={item + index}              
            >
                <Image
                height={60}
                width={itemSize * isDesktop}
                src={item}
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
