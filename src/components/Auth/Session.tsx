"use client";

import { CheckSession } from "@/requests/Auth/checkSession";
import { ReactNode, useEffect, useState } from "react";
import LoadingComponent from "../Ui/LoadingComponent";

//Session component
const Session = ({ children }: { children: ReactNode }) => {
  const [val, setVal] = useState(true);
  useEffect(() => {
    const fun = async () => {
      const a = await CheckSession();
      if (a) {
        setVal(false);
        setTimeout(() => {
          setVal(true);
        }, a);
      }
    };
    fun();
  }, []);

  return <>{val ? children : <LoadingComponent />}</>;
};

export default Session;
