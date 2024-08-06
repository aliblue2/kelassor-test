"use client";
import DatePicker from "react-multi-date-picker";
import styles from "./CreateTaskPage.module.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateTaskPage = ({ hashed_id }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    phone: "",
    status: "notdone",
    person: "",
    description: "",
    type: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const submit = async () => {
    const res = await fetch(`${process.env.BASE_URL}/admin/taskCreate.php`, {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashed_id,
        ...form,
      }),
    });
    const data = await res.json();
    if (data === 200) {
      router.push("/admin/tasks");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.right}>
          <div className={styles.title}>
            <h6>انتخاب کاربر</h6>
            <img src="/icons/admin/info-circle.png" alt="info" />
          </div>
          <div className={styles.rightContent}>
            <div>
              <img src="/icons/admin/mobile.png" alt="mobile" />
              <label>شماره تلفن کاربر</label>
            </div>
            <input
              className={styles.input}
              type="number"
              name="phone"
              value={form.phone}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles.title}>
            <h6>وظیفه جدید</h6>
            <img src="/icons/admin/edit.png" alt="new" />
          </div>
          <div className={styles.leftContent}>
            {/* <section>
              <label>تاریخ ایجاد:</label>
              <DatePicker calendar={persian} locale={persian_fa} />
            </section>
            <section>
              <label>تاریخ تحویل:</label>
              <DatePicker calendar={persian} locale={persian_fa} />
            </section> */}
            {/* <section>
              <label>سازنده:</label>
              <select className={styles.input}>
                <option>مدیریت</option>
              </select>
            </section> */}
            <section>
              <label>مسئول:</label>
              <select
                className={styles.input}
                name="person"
                value={form.person}
                onChange={changeHandler}
              >
                <option value={null}>مسئول</option>
              </select>
            </section>
            <section>
              <label>اولویت:</label>
              <select
                className={styles.input}
                name="type"
                value={form.type}
                onChange={changeHandler}
              >
                <option>انتخاب اولویت</option>
                <option value={"newuser"}>new user</option>
                <option value={"newticket"}>new ticket</option>
                <option value={"newpractice"}>new practice</option>
                <option value={"newemp"}>new employer</option>
                <option value={"payDead"}>pay dead</option>
                <option value={"newInterview"}>new interview</option>
                <option value={"1week"}>1 week</option>
              </select>
            </section>
            <section>
              <label>وضعیت:</label>
              <select
                className={styles.input}
                name="status"
                value={form.status}
                onChange={changeHandler}
              >
                <option value={"notdone"}>انجام نشده</option>

                <option value={"done"}>انجام شده</option>
              </select>
            </section>
            <section className={styles.txtArea}>
              <label>شرح تسک:</label>
              <textarea
                name="description"
                value={form.description}
                onChange={changeHandler}
              />
            </section>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={submit}>ثبت</button>
      </div>
    </div>
  );
};

export default CreateTaskPage;
