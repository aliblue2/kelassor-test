"use client";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  return (
    <button
      className={` px-4 md:px-8 py-2 text-sm md:text-base text-white hover:scale-105 duration-200 bg-primary-base rounded-[10px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
