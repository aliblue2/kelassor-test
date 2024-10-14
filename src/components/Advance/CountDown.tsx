"use client";
import { Clock10 } from "lucide-react";
import React, { useEffect, useState } from "react";

const CountDown: React.FC<{ targetTime: string }> = ({ targetTime }) => {
  const goalTime = new Date(targetTime);
  const now = new Date();
  const initialTime = goalTime.getTime() - now.getTime();
  const [remainingTime, setRemainingTime] = useState<number>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 700);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  if (goalTime < now) {
    return (
      <span className="text-red-500 font-medium">این کارگاه شروع شده است</span>
    );
  }

  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="flex relative w-full p-3 font-bold items-center justify-start gap-1 rounded-lg">
      <span>{days} روز </span>
      <span>{hours} ساعت </span>
      <span>{minutes} دقیقه</span>
      مانده تا برگزاری
    </div>
  );
};

export default CountDown;
