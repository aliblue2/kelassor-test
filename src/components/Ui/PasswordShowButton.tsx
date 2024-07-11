"use client";

import { MutableRefObject, useState } from "react";
import { EyeIcon, EyeOffIcon } from "./Icons";

//PasswordShowButton component
const PasswordShowButton = ({
  inputRef,
}: {
  inputRef: MutableRefObject<HTMLInputElement | null>;
}) => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden((e) => !e);
    if (!inputRef.current) return;
    if (hidden) {
      inputRef.current.type = "text";
    } else {
      inputRef.current.type = "password";
    }
  };
  return (
    <button onClick={handleClick} className="absolute left-2 top-0 h-full">
      {hidden ? <EyeIcon /> : <EyeOffIcon />}
    </button>
  );
};

export default PasswordShowButton;
