"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

//NewTicketSubject component
type NewTicketSubjectProps = {
  subject: string | null;
  set: (input: "technical" | "financial" | null) => void;
};
const NewTicketSubject = ({ set, subject }: NewTicketSubjectProps) => {
  const [expanded, setexpanded] = useState(false);
  const ref = useOutsideClick(()=>setexpanded(false))
  return (
    <div
    ref={ref}
      onClick={() => setexpanded((e) => !e)}
      className="flex relative justify-between cursor-pointer items-center py-2 px-4 rounded-lg grow bg-light-3 text-light-1"
    >
      {subject === "technical" ? "فنی" : subject === "financial" ? "مالی" : "انتخاب"}
      <ChevronDownIcon />
      {expanded && (
        <div className="absolute p-1 top-[calc(100%+8px)] rounded-lg border border-light-2 left-0 divide-y divide-light-2 w-full bg-light-3">
          <div className="py-2 px-4 " onClick={() => set("financial")}>
            مالی
          </div>
          <div className="py-2 px-4 " onClick={() => set("technical")}>
            فنی
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTicketSubject;
