"use client";

import { CheckSession } from "@/requests/Auth/checkSession";
import { ReactNode, use, useEffect, useState } from "react";

//Session component
const Session = ({ children }: { children: ReactNode }) => {
  const [val, setVal] = useState(true);
  useEffect(() => {
    const fun = async () => {
      const a = await CheckSession();
      if (!a) {
        setVal(false);
        setTimeout(() => {
          setVal(true);
        }, 5000);
      }
    };
    fun();
  }, []);

  return <>{val && children}</>;
};

export default Session;
