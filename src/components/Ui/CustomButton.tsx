"use client";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  return (
    <button
      className={`px-8 py-2 text-white bg-primary-base rounded-[10px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
