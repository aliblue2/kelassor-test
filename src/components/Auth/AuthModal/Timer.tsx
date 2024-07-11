"use client";

import { useEffect, useState } from "react";

//Timer component
type TimerProps = { callBack: () => void };
const Timer = ({ callBack }: TimerProps) => {
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {
    if (seconds > 0) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timerId);
    }
  }, [seconds]);
  return seconds === 0 ? (
    <button
      onClick={() => {
        setSeconds(60);
        callBack()
      }}
      className="mt-3 text-gray-4 text-center text-sm"
    >
      دریافت مجدد کد
    </button>
  ) : (
    <p className="mt-3 text-gray-4 text-center text-sm">
      0:{seconds} مانده تا دریافت مجدد کد
    </p>
  );
};

export default Timer;
