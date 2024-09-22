"use client";

import { useState } from "react";
import CustomButton from "../Ui/CustomButton";
import { toast } from "react-toastify";
import { postComment } from "@/utils/database/blog/comment";

//BlogNewComment component
type BlogNewCommentProps = { blogId: number };
const BlogNewComment = ({ blogId }: BlogNewCommentProps) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [content, setcontent] = useState("");
  const handlePostComment = async () => {
    if (!name) {
      toast.error("نام نمی‌تواند خالی باشد");
      return;
    }
    if (!content) {
      toast.error("محتوای دیدگاه نمی‌تواند خالی باشد");
      return;
    }
    await postComment(name, email, content, blogId);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="text-gray-4">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند 
        <span className="text-error">*</span>
      </div>
      <textarea
        onChange={(e) => setcontent(e.target.value)}
        className="rounded-lg shadow2 resize-none p-2 h-40"
        id=""
      />
      <div className="text-gray-4 mt-2">
        نام
        <span className="text-error">*</span>
      </div>
      <input
        onChange={(e) => setname(e.target.value)}
        type="text"
        className="rounded-lg shadow2 resize-none h-8 p-2"
      />
      <div className="text-gray-4 mt-2">ایمیل(اختیاری)</div>
      <input
        onChange={(e) => setemail(e.target.value)}
        type="text"
        className="rounded-lg shadow2 resize-none h-8 p-2"
      />
      <CustomButton onClick={handlePostComment} className="self-start mt-2">
        ارسال دیدگاه
      </CustomButton>
    </div>
  );
};

export default BlogNewComment;
