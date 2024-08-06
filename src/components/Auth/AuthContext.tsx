"use client";
import { checkSession } from "@/requests/Auth/checkSession";
import { userType } from "@/types/user";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import { createContext, useState, ReactNode, useEffect } from "react";
export type AuthContextType = {
  user: userType | null;
  number: string | null;
  login: (token: string) => void;
  logOut: () => void;
  modal: boolean;
  setModal: (input: boolean, phone?: string) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setuser] = useState<userType | null>(null);
  const [number, setnumber] = useState<string | null>(null);
  const [modal, setmodal] = useState(false);
  const router = useRouter();
  const setModal = (input: boolean, number?: string) => {
    if (number) {
      setnumber(number);
    } else {
      setnumber(null);
    }
    setmodal(input);
  };

  const setUser = (input: userType | null) => {
    setuser(input);
  };
  const login = (token: string) => {
    setCookie("session_id", token);
    _checkSession();
  };
  const _checkSession = async () => {
    const session_id = getCookie("session_id");
    if (!session_id) return;
    const res = await checkSession(session_id);
    console.log(3423424,res)
    if (res.statusCode === 200) {
      setuser({ name: res.name, lastname: res.lastname, roll: res.roll });
    }
  };
  const logOut = () => {
    setUser(null);
    deleteCookie("session_id");
    router.push("/");
  };
  useEffect(() => {
    _checkSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ number, user, login, logOut, modal, setModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
