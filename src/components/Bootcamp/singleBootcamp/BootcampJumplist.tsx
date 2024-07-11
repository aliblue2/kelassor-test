"use client";

import { MutableRefObject, useEffect, useState } from "react";

//BootcampJumplist component
type BootcampJumplistProps = {
  sections: MutableRefObject<(HTMLDivElement | null)[]>;
};

const BootcampJumplist = ({ sections }: BootcampJumplistProps) => {
  const [index, setindex] = useState<null | number>(0);
  const jump = (section: HTMLDivElement | null) => {
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  useEffect(() => {
    const refs = sections.current;

    function isInViewport(element: HTMLDivElement | null, index: number) {
      if (!element) return;
      var rect = element.getBoundingClientRect();
      var html = document.documentElement;
      if (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight / 2 || html.clientHeight / 2)
      ) {
        setindex(index);
      }
    }
    refs.map((item, index) =>
      window.addEventListener("scroll", () => isInViewport(item, index))
    );
    return () => {
      refs.map((item, index) =>
        window.removeEventListener("scroll", () => isInViewport(item, index))
      );
    };
  }, [sections]);

  return (
    <div className="hidden sticky z-50 grid-cols-6 items-center pt-5 px-10 pb-3 font-bold text-center border-b md:grid top-[60px] border-x border-secondary-50 mt-[-40px] rounded-b-[50px] bg-secondary-75 bottom-[50px]">
      <button
        className={`${
          index === 0 ? "border-b-primary-base" : "border-b-secondary-75"
        } border-b-4  pb-2 duration-200`}
        onClick={() => jump(sections.current[0])}
      >
        معرفی بوتکمپ
      </button>
      <button
        className={`${
          index === 1 ? "border-b-primary-base" : "border-b-secondary-75"
        } border-b-4  pb-2 duration-200`}
        onClick={() => jump(sections.current[1])}
      >
        اساتید
      </button>
      <button
        className={`${
          index === 2 ? "border-b-primary-base" : "border-b-secondary-75"
        } border-b-4  pb-2 duration-200`}
        onClick={() => jump(sections.current[2])}
      >
        ویژگی‌های دوره
      </button>
      <button
        className={`${
          index === 3 ? "border-b-primary-base" : "border-b-secondary-75"
        } border-b-4  pb-2 duration-200`}
        onClick={() => jump(sections.current[3])}
      >
        سرفصل‌ها
      </button>
      <button
        className={`${
          index === 4 ? "border-b-primary-base" : "border-b-secondary-75"
        } border-b-4  pb-2 duration-200`}
        onClick={() => jump(sections.current[4])}
      >
        فرآیند ثبت‌نام
      </button>
      <button
        className={`${
          index === 5 ? "border-b-primary-base" : "border-b-secondary-75"
        } border-b-4  pb-2 duration-200`}
        onClick={() => jump(sections.current[5])}
      >
        باید بدانیم
      </button>
    </div>
  );
};

export default BootcampJumplist;
