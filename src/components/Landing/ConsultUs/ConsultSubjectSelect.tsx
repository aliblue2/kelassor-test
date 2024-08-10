"use client";

import { useBootcamps } from "@/contexts/useBootcamps";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

//ConsultSubjectSelect component
type ConsultSubjectSelectProps = {
  value: string | null;
  set: (input: string | null) => void;
};
const ConsultSubjectSelect = ({ set, value }: ConsultSubjectSelectProps) => {
  const [expanded, setexpanded] = useState(false);
  const ref = useOutsideClick(() => setexpanded(false));
  const { bootcamps } = useBootcamps();

  return (
    <div
      ref={ref}
      onClick={() => setexpanded((e) => !e)}
      className="flex relative justify-between cursor-pointer items-center py-2 px-4 rounded-lg grow bg-white "
    >
      {value ? value : "انتخاب"}
      <ChevronDownIcon />
      {expanded && (
        <div className="absolute z-50 p-1 top-[calc(100%+8px)] rounded-lg border border-light-2 left-0 divide-y divide-light-2 w-full bg-white">
          {bootcamps.filter(item=>item.status !== "notactive").map((item) => (
            <div
              key={item.header_title}
              className="py-2 px-4 "
              onClick={() => set(item.url)} //todo main
            >
              {item.header_title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConsultSubjectSelect;
