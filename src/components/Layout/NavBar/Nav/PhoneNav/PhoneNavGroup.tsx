"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { ReactNode, useState } from "react";

//PhoneNavGroup component
type PhoneNavGroupProps = {
  children: ReactNode;
  title: string;
};
const PhoneNavGroup = ({ children, title }: PhoneNavGroupProps) => {
  const [expanded, setexpanded] = useState(false);
  return (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setexpanded((prev) => !prev);
        }}
        className="flex justify-between items-center p-5 border-b border-b-secondary-50"
      >
        {title}
        {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </div>
      <div className="flex flex-col pr-5 text-base font-medium text-gray-3 [&>*]:p-2">
        {expanded && children}
      </div>
    </>
  );
};

export default PhoneNavGroup;
