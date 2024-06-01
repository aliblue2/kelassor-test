"use client";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton = ({ children, className, ...props }: CustomButtonProps) => {
  return (
    <button
      className={`px-4 py-2 text-white bg-primary-base rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
