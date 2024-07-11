"use client";
//Input component
import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, forwardRef, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}
const CustomInput = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, className, ...rest }, ref) => {
    const [visiblePassword, setvisiblePassword] = useState(false);
    return (
      <div className={"relative flex grow " + className}>
        <input
          {...rest}
          name={name}
          ref={ref}
          type={
            type === "password" ? (visiblePassword ? "text" : "password") : type
          }
          className="p-2 w-0 rounded-lg border outline-none bg-light-3 border-light-3 grow"
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute top-2 end-2"
            onClick={() => setvisiblePassword((prev) => !prev)}
          >
            {visiblePassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";
export default CustomInput;
