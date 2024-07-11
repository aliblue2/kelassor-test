"use client";
import { Loader2Icon } from "lucide-react";
import React from "react";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  loading?: boolean;
}

const CustomButton = ({
  secondary = false,
  loading = false,
  children,
  className,
  disabled,
  ...props
}: CustomButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`
      flex items-center justify-center
      rounded-[10px] px-4 md:px-8 py-2 text-sm md:text-base duration-200
      ${
        secondary
          ? "bg-white border border-primary-base text-primary-base"
          : "bg-primary-base text-white"
      }
      ${disabled ? "!bg-gray-4" : "hover:scale-105 active:scale-100"} 
      ${className}`}
      {...props}
    >
      {loading ? <Loader2Icon className="animate-spin" /> : children}
    </button>
  );
};

export default CustomButton;
