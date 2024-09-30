import { v4 as uuid } from "uuid";
import styles from "./Calls.module.css";
import { Plus, Trash2 } from "lucide-react";
import { DayPicker } from "react-day-picker/jalali";
import { faIR } from "react-day-picker/locale";
import "react-day-picker/dist/style.css"; // Import styles

const Calls = ({ userInfo, setUserInfo }) => {
  const addCall = () => {
    setUserInfo({
      ...userInfo,
      calls: [
        ...userInfo.calls,
        { date: new Date().getTime(), note: "", id: uuid() },
      ],
    });
  };
  console.log(userInfo);

  const removeCall = (id) => {
    const calls = [...userInfo.calls];
    const index = calls.findIndex((c) => c.id === id);
    if (index !== -1) {
      calls.splice(index, 1);
      setUserInfo({ ...userInfo, calls });
    }
  };
  const dateHandler = (date, id) => {
    const calls = [...userInfo.calls];
    const index = calls.findIndex((c) => c.id === id);
    calls[index].date = date.getTime();
    setUserInfo({ ...userInfo, calls });
  };
  const changeHandler = (e, id) => {
    const calls = [...userInfo.calls];
    const index = calls.findIndex((c) => c.id === id);
    calls[index].note = e.target.value;
    setUserInfo({ ...userInfo, calls });
  };

  return (
    <div className="my-8 overflow-scroll h-96">
      {userInfo.calls.length > 0 &&
        userInfo.calls.map((callItem) => {
          return (
            <div
              key={callItem.id}
              className="flex flex-col items-start justify-start gap-2 my-2"
            >
              <DayPicker
                locale={faIR}
                mode="single"
                className="w-6/12"
                dir="rtl"
                selected={new Date(callItem.date)}
                onSelect={(date) => dateHandler(date, callItem.id)}
              />
              <textarea
                name="note"
                rows={5}
                className="rounded-xl w-full p-2 outline-none focus:shadow-md border-primary-20 border-2 border-dashed "
                placeholder="توضیحاتی را برای این کاربر اضافه کنید ..."
                value={callItem.note}
                onChange={(e) => changeHandler(e, callItem.id)}
              />
              <button
                className="text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-red-100"
                onClick={() => removeCall(callItem.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          );
        })}
      {/* {userInfo.calls.map((c) => (
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
      ))} */}
      <button
        onClick={addCall}
        className="flex p-2 bg-secondary-20 hover:bg-primary-20 transition-colors duration-300 text-white items-center justify-start gap-2 my-2 rounded-xl"
      >
        <Plus size={20} />
        افزودن تماس{" "}
      </button>
    </div>
  );
};

export default Calls;
