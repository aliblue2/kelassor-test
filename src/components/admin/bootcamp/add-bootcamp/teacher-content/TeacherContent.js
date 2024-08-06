import { forwardRef } from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import avatar from "/public/icons/edash/profile.png";
import styles from "./TeacherContent.module.css";

const TeacherContent = forwardRef(function TeacherContent(props, ref) {
  const { teachers, form, setForm } = props;
  const addTeacher = () => {
    setForm({
      ...form,
      teachers: [...form.teachers, { name: "", course: "", id: uuid() }],
    });
  };
  const changeTeacherInfo = (e, id) => {
    const { name, value } = e.target;
    const list = [...teachers];
    const index = list.findIndex((t) => t.id === id);
    list[index][name] = value;
    setForm({ ...form, teachers: list });
  };
  const removeTeacher = (id) => {
    const newTeachers = teachers.filter((t) => t.id != id);
    setForm({ ...form, teachers: [...newTeachers] });
  };
  const addPicture = (e, id) => {
    const { name, files } = e.target;
    // const list = [...teachers];

    // const index = list.findIndex((t) => t.id === id);
    ref.current.set(name, files[0]);
    // console.log(ref.current.get("teachers[1]_picture"));
  };
  return (
    <div className={styles.container}>
      <label>مدرسان</label>
      <div className={styles.controlls}>
        <button onClick={addTeacher}>اضافه کردن مدرس</button>
      </div>
      <div className={styles.teachers}>
        {teachers.map((t, i) => (
          <div key={t.id}>
            <span onClick={() => removeTeacher(t.id)}>حذف</span>
            <div>
              <div>
                <label>نام مدرس</label>
                <input
                  type="text"
                  name="name"
                  value={t.name}
                  onChange={(e) => changeTeacherInfo(e, t.id)}
                />
              </div>
              <div>
                <label>مبحث</label>
                <input
                  type="text"
                  name="course"
                  value={t.course}
                  onChange={(e) => changeTeacherInfo(e, t.id)}
                />
              </div>
            </div>
            <div>
              <label>عکس مدرس</label>
              <Image
                src={t.picture ? t.picture : avatar}
                alt="teacher"
                width={50}
                height={50}
              />
              <input
                name={`teachers${i}_picture`}
                type="file"
                onChange={(e) => addPicture(e, t.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default TeacherContent;
