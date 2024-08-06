import React, { useState, useEffect } from "react";

const OtpTimer = ({ initialTime = 120, setTimerRunning, setIsExpired }) => {
  // time in seconds
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (remainingTime !== 0) {
        setRemainingTime((prevTime) => Math.max(0, prevTime - 1));
      } else {
        setIsExpired(true);
        setTimerRunning(false);
      }
    }, 1000);

    return () => clearInterval(timerId); // cleanup function to stop timer on unmount
  }, [setTimerRunning, remainingTime, setIsExpired]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div>
      <p>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default OtpTimer;
