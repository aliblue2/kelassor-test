"use client";

import {
  ChangeEvent,
  MutableRefObject,
  useImperativeHandle,
  useRef,
} from "react";

//Input component
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  next?: MutableRefObject<HTMLInputElement | null>;
  change: () => void;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ next, type, className, change, ...rest }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      change();
      if (e.target.value) next?.current?.focus();
    };
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current!, []);
    return (
      <input
        onChange={(e) => handleChange(e)}
        onClick={() => {
          if (innerRef.current) {
            innerRef.current.value = "";
          }
        }}
        maxLength={1}
        className="text-center p-2 w-full border rounded-[10px] border-light-3"
        {...rest}
        ref={innerRef}
      />
    );
  }
);
Input.displayName = "Input";
const MultiInput = ({
  onChange,
  submit,
}: {
  onChange: (input: string) => void;
  submit?: () => void;
}) => {
  const input1 = useRef<null | HTMLInputElement>(null);
  const input2 = useRef<null | HTMLInputElement>(null);
  const input3 = useRef<null | HTMLInputElement>(null);
  const input4 = useRef<null | HTMLInputElement>(null);
  const input5 = useRef<null | HTMLInputElement>(null);
  const input6 = useRef<null | HTMLInputElement>(null);
  const handleChange = () => {
    let val = "";
    val += input1.current?.value;
    val += input2.current?.value;
    val += input3.current?.value;
    val += input4.current?.value;
    val += input5.current?.value;
    val += input6.current?.value;
    onChange(val);
  };
  return (
    <div dir="ltr" className=" flex gap-2 text-black">
      <Input change={handleChange} ref={input1} next={input2} />
      <Input change={handleChange} ref={input2} next={input3} />
      <Input change={handleChange} ref={input3} next={input4} />
      <Input change={handleChange} ref={input4} next={input5} />
      <Input change={handleChange} ref={input5} next={input6} />
      <Input
        change={handleChange}
        ref={input6}
        onKeyDown={(e) => (e.key === "Enter" && submit ? submit() : undefined)}
      />
    </div>
  );
};

export default MultiInput;
