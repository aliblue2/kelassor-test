"use client";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_fa";
import styles from "./AddBootcampPage.module.css";
import WeekContent from "./week-content/WeekContent";
import Parts from "./price-parts/Parts";
import TeacherContent from "./teacher-content/TeacherContent";

const AddBootcampPage = ({ hashed_id, data }) => {
  // console.log(data);
  const initialForm = {
    main_title: "",
    second_title: "",
    header_title: "",
    intro: "",
    features: "",
    start: "",
    contents: [],
    full_price: "",
    min_price: "",
    full_parts: ["", "", ""],
    min_parts: ["", "", ""],
    length: "",
    status: "",
    guarantee: 0,
    teachers: [],
    unix_date: +Date.now(),
  };

  const [form, setForm] = useState(data ? data : initialForm);

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    setForm({ ...form, [name]: fieldValue });
  };

  const dateHandler = (value) => {
    setForm({ ...form, unix_date: +value });
    // console.log(+value);
  };

  const formDataRef = useRef(new FormData());

  const addFiles = (e) => {
    const { name, files } = e.target;
    // console.log(name, " ", files);
    for (let i = 0; i < files.length; i++) {
      formDataRef.current.append(name, files[i]);
    }

    // console.log(formDataRef.current.getAll(name));
  };

  const prepration = () => {
    // Assuming 'form' is an object with form data
    for (const key in form) {
      if (form.hasOwnProperty(key)) {
        if (formDataRef.current.has(key)) {
          formDataRef.current.set(key, JSON.stringify(form[key]));
        } else {
          formDataRef.current.append(key, JSON.stringify(form[key]));
        }
      }
    }

    formDataRef.current.set("Content_Type", process.env.Content_Type);
    formDataRef.current.set("API_KEY", process.env.API_KEY);
    formDataRef.current.set("hashed_id", hashed_id);
  };

  const submit = async () => {
    prepration();
    // console.log(formDataRef.current.getAll("contents"));
    if (data) {
      const res = await fetch(
        `${process.env.BASE_URL}/admin/update_bootcamp.php`,
        {
          method: "POST",
          body: formDataRef.current,
        }
      );
      const resData = await res.json();
      // console.log(resData);
    } else {
      const res = await fetch(
        `${process.env.BASE_URL}/admin/add_bootcamp.php`,
        {
          method: "POST",
          body: formDataRef.current,
        }
      );
      const resData = await res.json();
      // console.log(resData);
    }
  };

  useEffect(() => {
    for (const key in form) {
      if (form.hasOwnProperty(key)) {
        if (formDataRef.current.has(key)) {
          formDataRef.current.set(key, form[key]);
        } else {
          formDataRef.current.append(key, form[key]);
        }
      }
    }
  }, [form]);

  return (
    <div className={styles.container}>
      <h1>فرم اضافه کردن بوت‌کمپ</h1>
      <div className={styles.content}>
        <div className={styles.form}>
          <div>
            <label>عنوان</label>
            <input
              type="text"
              name="main_title"
              value={form.main_title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>عنوان دوم</label>
            <input
              type="text"
              name="second_title"
              value={form.second_title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>عنوان خلاصه</label>
            <input
              type="text"
              name="header_title"
              value={form.header_title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>لوگو در بنر</label>

            <input type="file" name="logo_banner" onChange={addFiles} />
          </div>
          <div>
            <label>لوگوی بوت‌کمپ</label>
            <input type="file" name="logo" onChange={addFiles} />
          </div>
          <div>
            <label>مقدمه</label>
            <textarea
              name="intro"
              value={form.intro}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>ویژگی های بوت‌کمپ</label>
            <textarea
              name="features"
              value={form.features}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>عکس های بوت‌کمپ</label>
            <input
              type="file"
              name="pictures[]"
              onChange={addFiles}
              multiple="multiple"
            />
          </div>
          <div>
            <label>تاریخ شروع (به فارسی)</label>
            <input
              type="text"
              name="start"
              value={form.start}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>تاریخ شروع</label>
            <DatePicker
              value={form.unix_date}
              onChange={dateHandler}
              calendar={persian}
              locale={persian_en}
              calendarPosition="bottom-right"
            />
          </div>
          <div>
            <label>لوگوی تکنولوژی ها</label>
            <input
              type="file"
              name="tech_logo[]"
              onChange={addFiles}
              multiple="multiple"
            />
          </div>

          <div>
            <label>قیمت فول پکیج</label>
            <input
              type="text"
              name="full_price"
              value={form.full_price}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.part}>
            {form.full_parts.map((p, i) => (
              <Parts
                key={i}
                index={i}
                name={"full_parts"}
                form={form}
                setForm={setForm}
              />
            ))}
          </div>
          <div>
            <label>قیمت مینیمم پکیج</label>
            <input
              type="text"
              name="min_price"
              value={form.min_price}
              onChange={changeHandler}
            />
          </div>
          <div className={styles.part}>
            {form.min_parts.map((p, i) => (
              <Parts
                key={i}
                index={i}
                name={"min_parts"}
                form={form}
                setForm={setForm}
              />
            ))}
          </div>
          <div>
            <label>چند هفته</label>
            <input
              type="text"
              name="length"
              value={form.length}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label>وضعیت</label>
            <select name="status" value={form.status} onChange={changeHandler}>
              <option value={""}>انتخاب کنید</option>
              <option value={"active"}>فعال</option>
              <option value={"notactive"}>غیر فعال</option>
              <option value={"expired"}>منقضی شده</option>
            </select>
          </div>
          <div>
            <label>ظرفیت</label>
            <input type="text" name="capacity" onChange={changeHandler} />
          </div>
          <div className={styles.garantee}>
            <label>گارانتی</label>
            <input
              type="checkbox"
              name="guarantee"
              value={form.guarantee}
              onChange={changeHandler}
              checked={form.guarantee}
            />
          </div>
        </div>
        <div className={styles.weekContent}>
          <WeekContent contents={form.contents} setForm={setForm} form={form} />
          <TeacherContent
            teachers={form.teachers}
            setForm={setForm}
            form={form}
            ref={formDataRef}
          />
        </div>
      </div>
      <button onClick={submit}>ثبت بوت‌کمپ</button>
    </div>
  );
};

export default AddBootcampPage;
