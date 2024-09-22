"use client";

import { useState } from "react";
import CustomButton from "../Ui/CustomButton";

//BlogComment component
type BlogCommentProps = { data: comment };
const BlogComment = ({ data }: BlogCommentProps) => {
  const [expanded, setexpanded] = useState(false);
  return (
    <div className="flex flex-col gap-2 p-10 m-2 bg-white rounded-[20px] shadow2">
      <div className="font-bold text-gray-4">{data.author}:</div>
      <div className="font-medium text-gray-4">{data.content}</div>
      {expanded && (
        <div className="p-5 rounded-xl shadow1">
          {data.replies.map((item) => (
            <div key={item.id} className="flex flex-col gap-2 ">
              <div className="font-bold text-primary-base">{item.author}:</div>
              <div className="font-medium text-gray-4">{item.content}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-3">
        {data.replies.length > 0 && (
          <CustomButton
            onClick={() => {
              setexpanded((p) => !p);
            }}
          >
            {expanded ? " پنهان کردن پاسخ " : " نمایش پاسخ "}
          </CustomButton>
        )}
      </div>
    </div>
  );
};

export default BlogComment;
