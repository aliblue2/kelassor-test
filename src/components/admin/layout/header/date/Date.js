"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns-jalali"; // For Persian (Jalaali) date formatting
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // DayPicker styles

const DateComponent = () => {
  const [dateInfo, setDateInfo] = useState("");

  // Function to update date and time in Persian format
  const updateDateInfo = () => {
    const now = new Date(); // Get the current date and time
    const formattedDate = format(now, "EEEE dd MMMM yyyy, 'ساعت' HH:mm", {
      locale: require("date-fns-jalali/locale/fa"), // Persian (Farsi) locale
    });
    setDateInfo(formattedDate); // Update the state with the formatted date
  };

  // Update the date every 30 seconds
  useEffect(() => {
    updateDateInfo(); // Initial update when the component mounts
    const interval = setInterval(() => updateDateInfo(), 1000 * 30); // Every 30 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <p>{dateInfo}</p>
      <DayPicker locale="fa" />
    </div>
  );
};

export default DateComponent;
