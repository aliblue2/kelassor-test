import { CheckSession } from "@/requests/Auth/checkSession";
import { ReactNode, useEffect, useState } from "react";

//Session component
type SessionProps = {
  children: ReactNode;
};
const Session = ({ children }: SessionProps) => {
  const [data, setdata] = useState(true);
  useEffect(() => {
    const f = async () => {
      try {
        const res = await CheckSession();
        setdata(res);
      } catch (e) {}
    };
    f();
  }, []);
  if (data) return <div>{children}</div>;
};

export default Session;
