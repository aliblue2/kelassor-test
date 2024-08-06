import styles from "./WeekContent.module.css";

const WeekContent = ({ contents, form, setForm }) => {
  const addWeek = () => {
    setForm({
      ...form,
      contents: [...form.contents, { course: "", subCourse: "" }],
    });
  };
  const changeWeek = (e, index, part) => {
    const { value } = e.target;
    const list = [...contents];
    list[index][part] = value;
    setForm({ ...form, contents: list });
  };
  const removeWeek = () => {
    const list = [...contents];
    list.pop();
    setForm({ ...form, contents: list });
  };
  return (
    <div className={styles.conteiner}>
      <label>محتوای درسی</label>
      <div className={styles.controlls}>
        <button onClick={addWeek}>اضافه کردن هفته</button>
        <button onClick={removeWeek}>حذف کردن هفته</button>
      </div>
      {contents.map((w, index) => (
        <div key={index} className={styles.eachWeek}>
          <div>
            <label>هفته{index + 1}</label>
            <input
              value={w.course}
              onChange={(e) => changeWeek(e, index, "course")}
            />
          </div>
          <div>
            <label>محتوا</label>
            <textarea
              value={w.subCourse}
              onChange={(e) => changeWeek(e, index, "subCourse")}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekContent;
