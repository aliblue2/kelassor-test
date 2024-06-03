"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import WhatWeDoItem from "./WhatWeDoItem";

//WhatWeDo component
const WhatWeDo = () => {
  return (
    <div className="flex flex-col ">
      <CustomHeading>
        <h2>ما در کلاسور چه‌کار می‌کنیم؟</h2>
      </CustomHeading>
      <div className="grid grid-cols-2 md:flex flex-col md:flex-row gap-2 md:gap-5 mt-10 md:mb-10 justify-between">
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

export default WhatWeDo;
