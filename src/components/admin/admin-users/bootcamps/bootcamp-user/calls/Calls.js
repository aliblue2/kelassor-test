import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import { v4 as uuid } from "uuid";

import styles from "./Calls.module.css";
const Calls = ({ userInfo, setUserInfo }) => {
  const addCall = () => {
    setUserInfo({
      ...userInfo,
      calls: [...userInfo.calls, { date: +Date.now(), note: "", id: uuid() }],
    });
  };
  const removeCall = (id) => {
    const calls = [...userInfo.calls];
    const index = calls.findIndex((c) => c.id === id);
    // console.log(index);
    if (index !== -1) {
      calls.splice(index, 1);
      setUserInfo({ ...userInfo, calls: calls });
    }
  };
  const dateHandler = (value, id) => {
    const calls = [...userInfo.calls];
    const index = calls.findIndex((c) => c.id === id);
    calls[index].date = value;
    setUserInfo({ ...userInfo, calls });
  };
  const changeHandler = (e, id) => {
    const calls = [...userInfo.calls];
    const index = calls.findIndex((c) => c.id === id);
    calls[index].note = e.target.value;
    setUserInfo({ ...userInfo, calls });
  };
  return (
    <div className={styles.calls}>
      {userInfo.calls.map((c) => (
        <div className={styles.container} key={c.id}>
          <DatePicker
            format="YYYY/MM/DD HH:mm"
            value={c.date}
            onChange={(value) => dateHandler(value, c.id)}
            calendar={persian}
            locale={persian_en}
            calendarPosition="bottom-right"
            plugins={[
              <TimePicker position="bottom" key={Math.random()} hideSeconds />,
            ]}
          />
          <textarea
            name="note"
            value={c.note}
            onChange={(e) => changeHandler(e, c.id)}
          />
          <button onClick={() => removeCall(c.id)}>X</button>
        </div>
      ))}
      <button onClick={addCall}>اضافه کردن تماس</button>
    </div>
  );
};

export default Calls;
