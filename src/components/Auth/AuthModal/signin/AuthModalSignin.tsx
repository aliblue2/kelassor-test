"use client";

import { useState } from "react";
import AuthModalSigninPassword from "./AuthModalSigninPassword";
import AuthModalSigninOtp from "./AuthModalSigninOtp";
import AuthModalSigninForgot1 from "./AuthModalSigninForgot1";
import AuthModalSigninForgot2 from "./AuthModalSigninForgot2";

//AuthModalSignin component
type AuthModalSigninProps = { number: string , type : string };
const AuthModalSignin = ({ number , type }: AuthModalSigninProps) => {
  const [state, setState] = useState<"password" | "otp" | "forgotPassword1"| "forgotPassword2">(
    "password"
  );
  return state === "password" ? (
    <AuthModalSigninPassword type={type} number={number} setState={setState} />
  ) : state === "otp" ? (
    <AuthModalSigninOtp type={type} number={number} setState={setState} />
  ) : state === "forgotPassword1" ? (
    <AuthModalSigninForgot1 number={number} setState={setState} />
  ) : state === "forgotPassword2" ? (
    <AuthModalSigninForgot2 number={number} setState={setState} />
  ) : null;
};

export default AuthModalSignin;
