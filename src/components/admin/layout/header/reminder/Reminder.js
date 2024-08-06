"use client";
import DatePicker from "react-multi-date-picker";
import style from "./Reminder.module.css";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const Reminder = () => {
  const [dropShow, setDropShow] = useState(false);
  const [form, setForm] = useState({
    key: uuid(),
    title: "",
    date: new DateObject({ calendar: persian, locale: persian_fa }),
    note: "",
    for: "",
  });
  const formHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const dateHandler = (value) => {
    setForm({ ...form, date: value.format() });
  };
  return (
    <div className={style.container}>
      <div className={style.main} onClick={() => setDropShow(!dropShow)}>
        <p>ثبت یادآوری +</p>
      </div>
      <div
        className={style.dropDown}
        style={{ display: dropShow ? "flex" : "none" }}
      >
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
            <DatePicker
              value={form.date}
              onChange={dateHandler}
              calendarPosition="bottom-right"
              calendar={persian}
              locale={persian_fa}
              plugins={[
                <TimePicker
                  position="bottom"
                  hideSeconds
                  key={Math.random()}
                />,
              ]}
            />
          </div>
          <div>
            <textarea placeholder="یادداشت..." />
          </div>
          <div className={style.select}>
            <label>یادآوری به :</label>
            <select name="for" value={form.for} onChange={formHandler}>
              <option>شخص مورد نظر را انتخاب کنید</option>
              <option>امیرمحمد بصیرتی</option>
            </select>
          </div>
          <div>
            <button>ثبت یادآوری</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reminder;
