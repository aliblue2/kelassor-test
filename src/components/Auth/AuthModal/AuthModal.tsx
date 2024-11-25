"use client";
import logo from "/public/logo.png";

import { useAuth } from "../useAuth";
import Image from "next/image";
import { useEffect, useState } from "react";
import AuthModalInitial from "./AuthModalInitial";
import AuthModalSignup from "./signup/AuthModalSignup";
import AuthModalSignin from "./signin/AuthModalSignin";

//AuthModal component
const AuthModal = () => {
  const { modal, setModal, number: initialNumber } = useAuth();
  const [number, setnumber] = useState(initialNumber ? initialNumber : "");
  const [state, setState] = useState<"initial" | "signup" | "signin">(
    "initial"
  );
  useEffect(() => {
    setState("initial");
  }, [modal]);

  useEffect(() => {
    if (initialNumber) setnumber(initialNumber);
  }, [initialNumber]);

  return (
    <>
      {modal && (
        <div
          onClick={() => setModal(false)}
          className="flex overflow-hidden fixed top-0 right-0 bottom-0 left-0 justify-center items-center p-10 w-screen h-screen z-[102] backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex relative flex-col gap-2 p-5 md:p-10 w-full max-w-[600px] bg-light-4 border border-light-3 rounded-[20px] shadow-2"
          >
            <Image
              src={logo}
              height={100}
              width={200}
              alt="logo"
              className="object-contain self-center my-5 w-[100px]"
            />
            {state === "initial" ? (
              <AuthModalInitial
                initialNumber={initialNumber ? initialNumber : undefined}
                setNumber={(input) => setnumber(input)}
                setGlobalState={(input) => setState(input)}
              />
            ) : state === "signin" ? (
              <AuthModalSignin number={number} />
            ) : state === "signup" ? (
              <AuthModalSignup number={number} />
            ) : null}
            <div className="w-[calc(100%+40px)] rounded-[30px] absolute self-center -bottom-5 -z-10 h-1/2 bg-primary-base"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
