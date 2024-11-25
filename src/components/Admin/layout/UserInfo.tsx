import React from "react";
import userImge from "@/../public/abedini.webp";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
const UserInfo = () => {
  return (
    <div className="h-7 md:w-full w-fit md:h-12 text-gray-4 bg-white flex items-center justify-between gap-2 px-2 rounded-lg shadow2">
      <Image
        src={userImge}
        alt="userImage"
        className="w-10 rounded-full md:block hidden"
      />
      <span className="text-sm md:text-lg">حامد عابدینی</span>
      <ChevronDown size={18} />
    </div>
  );
};

export default UserInfo;
