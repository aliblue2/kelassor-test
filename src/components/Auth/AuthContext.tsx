"use client"
import { deleteCookie, setCookie } from "@/utils/cookie";
import { createContext, useState, ReactNode } from "react";
export type userType = {
  name: string;
  email: string;
  id: number;
  role: string[];
};
export type AuthContextType = {
  user: userType | null;
  setUser: (input: userType | null) => void;
  setToken: (token: string) => void;
  logOut: () => void;
  modal: boolean;
  setModal: (input: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setuser] = useState<userType | null>(null);
  const [modal, setmodal] = useState(false);
  const setModal = (input: boolean) => {
    setmodal(input);
  };

  const setUser = (input: userType | null) => {
    setuser(input);
  };
  const setToken = (token: string) => {
    setCookie("session_id", token);
  };
  const logOut = () => {
    setUser(null);
    deleteCookie("session_id");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, setToken, logOut, modal, setModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
