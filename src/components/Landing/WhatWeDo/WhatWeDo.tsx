"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import WhatWeDoItem from "./WhatWeDoItem";
import { delay, motion, useInView } from "framer-motion";
import { useRef } from "react";

//WhatWeDo component
const WhatWeDo = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(triggerRef, { once: true });
  const Pvariant = {
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1, // Stagger animation by 0.1 seconds between children
        when: "beforeChildren",
      },
    },
  };
  return (
    <div className="flex flex-col " ref={triggerRef}>
      <CustomHeading>
        <h2 >ما در کلاسور چه‌کار می‌کنیم؟</h2>
      </CustomHeading>
      <motion.div
        variants={Pvariant}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="grid grid-cols-2 md:flex flex-col md:flex-row gap-2 md:gap-5 mt-10 md:mb-10 justify-between"
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
      </motion.div>
    </div>
  );
};

export default WhatWeDo;
