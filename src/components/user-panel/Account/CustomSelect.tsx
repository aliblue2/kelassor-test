"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

//CustomSelect component
type CustomSelectProps = {
  value: string | null;
  set: (input: string | null) => void;
  options: string[];
  placeholder?:string
};
const CustomSelect = ({ set, value, options ,placeholder="انتخاب"}: CustomSelectProps) => {
  const [expanded, setexpanded] = useState(false);
  const ref = useOutsideClick(() => setexpanded(false));
  return (
    <div
      ref={ref}
      onClick={() => setexpanded((e) => !e)}
      className="flex relative justify-between items-center py-2 px-4 rounded-lg cursor-pointer shrink-0 grow bg-light-3"
    >
      {value ? value : <span className="text-light-1">{placeholder}</span>}
      <ChevronDownIcon className="text-light-1" />
      {expanded && (
        <div className="absolute z-30 p-1 top-[calc(100%+8px)] rounded-lg border border-light-2 left-0 divide-y divide-light-2 w-full bg-light-3">
          {options.map((item) => (
            <div key={item} className="py-2 px-4" onClick={() => set(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
