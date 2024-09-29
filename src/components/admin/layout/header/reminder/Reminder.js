"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns-jalali"; // For formatting dates in Persian
import style from "./Reminder.module.css";
import { v4 as uuid } from "uuid";

const Reminder = () => {
  const [dropShow, setDropShow] = useState(false);
  const [form, setForm] = useState({
    key: uuid(),
    title: "",
    date: new Date(), // Initialize date to current date
    note: "",
    for: "",
  });

  // Handle form input changes
  const formHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle date selection
  const dateHandler = (date) => {
    if (date) {
      setForm({ ...form, date: date });
    }
  };

  // Format the selected date for display
  const formattedDate = form.date
    ? format(form.date, "EEEE dd MMMM yyyy, 'ساعت' HH:mm", {
        locale: require("date-fns-jalali/locale/fa"), // Use Persian locale
      })
    : "";

  return (
    <div className={style.container}>
      <div className={style.main} onClick={() => setDropShow(!dropShow)}>
        <p>ثبت یادآوری +</p>
      </div>
      {dropShow && (
        <div className={style.dropDown}>
          <h6>ثبت یادآوری</h6>
          <form className={style.form}>
            <div>
              <input
                type="text"
                placeholder="تیتر"
                name="title"
                value={form.title}
                onChange={formHandler}
              />
            </div>
            <div className={style.picker}>
              <DayPicker
                mode="single"
                selected={form.date} // Use the date from form state
                onSelect={dateHandler} // Update state on date selection
                locale="fa" // Set Persian locale
              />
              <p>{formattedDate}</p> {/* Display the formatted date */}
            </div>
            <div>
              <textarea
                name="note"
                placeholder="یادداشت..."
                value={form.note}
                onChange={formHandler}
              />
            </div>
            <div className={style.select}>
              <label>یادآوری به :</label>
              <select name="for" value={form.for} onChange={formHandler}>
                <option value="">شخص مورد نظر را انتخاب کنید</option>
                <option value="امیرمحمد بصیرتی">امیرمحمد بصیرتی</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div>
              <button type="submit">ثبت یادآوری</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Reminder;
