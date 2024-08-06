"use client";
import { useEffect, useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import styles from "./CallItem.module.css";
const CallItem = ({ callInfo, userInfo, setUserInfo }) => {
  const { id, note, date } = callInfo;
  const [noteInput, setNoteInput] = useState(note);
  const [dateInput, setDateInput] = useState(date);

  const removeCall = () => {
    const calls = [...userInfo.calls];
    const index = calls.findIndex((c) => c.id === id);
    // console.log(index);
    if (index !== -1) {
      calls.splice(index, 1);
      setUserInfo({ ...userInfo, calls: calls });
    }
  };

  return (
    <div className={styles.container}>
      <DatePicker
        format="YYYY/MM/DD HH:mm"
        value={dateInput}
        onChange={dateHandler}
        calendar={persian}
        locale={persian_en}
        calendarPosition="bottom-right"
        plugins={[
          <TimePicker position="bottom" key={Math.random()} hideSeconds />,
        ]}
      />
      <textarea name="note" value={noteInput} onChange={changeHandler} />
      <button onClick={removeCall}>X</button>
    </div>
  );
};

export default CallItem;
