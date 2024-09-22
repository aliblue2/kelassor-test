"use client";

import { postCategory } from "@/utils/database/blog/getCategories";
import { CheckIcon, PlusIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";

//NewCategory component
const NewCategory = ({ refetch }: { refetch: () => void }) => {
  const [expanded, setexpanded] = useState(false);
  const [name, setname] = useState("");
  const [tag, settag] = useState("");
  const handleNewCategory = () => {
    if (!name) {
      toast.error("نام دسته‌بندی نمی‌تواند خالی باشد");
      return;
    }
    if (!tag) {
      toast.error("تگ دسته‌بندی نمی‌تواند خالی باشد");
      return;
    }
    postCategory({ name, tag });
    refetch();
    setexpanded(false);
  };
  return (
    <div className="p-2">
      {expanded ? (
        <div className="flex gap-2">
          <input
            className="border border-light-2 bg-transparent p-2 rounded-xl"
            type="text"
            placeholder="نام دسته‌بندی"
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            className="border border-light-2 bg-transparent p-2 rounded-xl"
            placeholder="تگ دسته‌بندی (انگلیسی)"
            onChange={(e) => settag(e.target.value)}
          />
          <button onClick={handleNewCategory}>
            <CheckIcon />
          </button>
          <button onClick={() => setexpanded(false)}>
            <XIcon />
          </button>
        </div>
      ) : (
        <div onClick={() => setexpanded(true)} className="flex gap-2 cursor-pointer"><PlusIcon/> ایجاد دسته‌بندی جدید</div>
      )}
    </div>
  );
};

export default NewCategory;
