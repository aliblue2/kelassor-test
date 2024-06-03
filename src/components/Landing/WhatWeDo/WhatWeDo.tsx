"use client";

import WhatWeDoItem from "./WhatWeDoItem";

//WhatWeDo component
const WhatWeDo = () => {
  return (
    <div  className="flex flex-col items-end">
      <h2>ما در کلاسور چه‌کار می‌کنیم؟</h2>
      <div className="grid grid-cols-2 md:flex flex-col md:flex-row gap-5 my-10 justify-between">
        <WhatWeDoItem
          text="تدریس توسط اساتید مطرح"
          image="/Landing/Companies/company1.webp"
        />
        <WhatWeDoItem
          text="تدریس توسط اساتید مطرح"
          image="/Landing/Companies/company1.webp"
        />
        <WhatWeDoItem
          text="تدریس توسط اساتید مطرح"
          image="/Landing/Companies/company1.webp"
        />
        <WhatWeDoItem
          text="تدریس توسط اساتید مطرح"
          image="/Landing/Companies/company1.webp"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
