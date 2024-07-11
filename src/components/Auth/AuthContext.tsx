"use client";
import { CheckSession, checkSession } from "@/requests/Auth/checkSession";
import { userType } from "@/types/user";
import { deleteCookie, getCookie, setCookie } from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createContext, useState, ReactNode, useEffect } from "react";
export type AuthContextType = {
  user: userType | null;
  login: (token: string) => void;
  logOut: () => void;
  modal: boolean;
  setModal: (input: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setuser] = useState<userType | null>(null);
  const [modal, setmodal] = useState(false);
  const router = useRouter();
  const setModal = (input: boolean) => {
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

  const { data } = useQuery({
    queryKey: ["session"],
    queryFn: CheckSession,
  });
  if (data)
    return (
      <AuthContext.Provider value={{ user, login, logOut, modal, setModal }}>
        {data && children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;
