"use client";

import {
  getCategories,
  postCategory,
} from "@/utils/database/blog/getCategories";
import { useQuery } from "@tanstack/react-query";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";
import NewCategory from "./NewCategory";

//CategorySelect component
type CategorySelectProps = {
  value: string | null;
  setvalue: React.Dispatch<React.SetStateAction<string | null>>;
};
const CategorySelect = ({ value, setvalue }: CategorySelectProps) => {
  const [expanded, setexpanded] = useState(false);
  const { data, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategories(),
  });
  return (
    <div className="p-2 rounded-lg relative border outline-none bg-light-3 border-light-3 grow">
      {/*todo:
       */}
      <div onClick={() => setexpanded((p) => !p)} className="flex gap-2">
        {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        <div>
          {value
            ? data?.find((item) => item.tag === value)?.name
            : "انتخاب دسته بندی"}
        </div>
      </div>
      {expanded && (
        <div className="absolute divide-y z-50 bg-light-3 right-0 left-0 rounded-lg top-[calc(100%+.5rem)] divide-light-2">
          {data &&
            data.map((item) => (
              <div
                className="p-2"
                key={item.tag}
                onClick={() => {
                  setvalue(item.tag);
                  setexpanded(false);
                }}
              >
                {item.name}
              </div>
            ))}
          <NewCategory refetch={refetch} />
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
