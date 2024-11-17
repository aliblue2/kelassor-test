"use client";

import { useState } from "react";
import AuthModalSignup1 from "./AuthModalSignup1";
import AuthModalSignup2 from "./AuthModalSignup2";
import AuthModalSignup3 from "./AuthModalSignup3";

//AuthModalSignup component
const AuthModalSignup = ({ number , type  }: { number: string , type :string }) => {
  const [state, setstate] = useState<"otp" | "credential" | "final">("otp");
  return state === "otp" ? (
    <AuthModalSignup1 type={type} number={number} proceed={() => setstate("credential")} />
  ) : state === "credential" ? (
    <AuthModalSignup2 proceed={() => setstate("final")} />
  ) : state === "final" ? (
    <AuthModalSignup3 />
  ) : null;
};

export default AuthModalSignup;
