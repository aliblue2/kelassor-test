"use client";

import { category, deleteCategory } from "@/utils/database/blog/getCategories";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";

//CategoryList component
type CategoryListProps = { data: category[] };
const CategoryList = ({ data }: CategoryListProps) => {
  const [localData, setlocalData] = useState(data);
  return (
    <div className="flex overflow-x-auto shadow2 gap-5 items-center p-2 h-20 rounded-xl bg-secondary-75">
      {localData.map((item) => (
        <div
          key={item.tag}
          className="py-2 px-4 flex gap-2 items-center rounded-lg shrink-0 bg-background"
        >
          {item.name}
          <button
            onClick={async () => {
              const res = await deleteCategory(item.tag);
              if (res.success) {
                setlocalData((p) =>
                  p.filter((item2) => item2.tag !== item.tag),
                );
              }
            }}
            className="hover:text-error"
          >
            <Trash2Icon size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
export default CategoryList;
