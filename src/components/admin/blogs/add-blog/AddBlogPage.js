"use client";
import { useRef, useState } from "react";
import styles from "./AddBlogPage.module.css";
import { toast } from "react-toastify";
import RichText from "./rich-text/RichText";
import UploadBlogPics from "./upload-pics/UploadBlogPics";
import BlogListItems from "./blog-list-items/BlogListItems";

import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";

const AddBlogPage = ({ data, blogSlug, hashed_id }) => {
  const router = useRouter();

  const formDataRef = useRef(new FormData());

  const initialState = {
    uuid: uuid(),
    title: "",
    content: "",
    category: [],
    keywords: [],
    h1: "",
    description: "",
    author: "",
    summary: "",
    slug: "",
    isPublished: 0,
  };
  const [form, setForm] = useState(data ? data : initialState);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "slug" ? value.replaceAll(" ", "_") : value,
    });
  };
  const addCover = (e) => {
    const { name, files } = e.target;
    formDataRef.current.set(name, files[0]);
  };
  const prepration = () => {
    for (const key in form) {
      if (form.hasOwnProperty(key)) {
        if (formDataRef.current.has(key)) {
          formDataRef.current.set(key, form[key]);
        } else {
          formDataRef.current.append(key, form[key]);
        }
      }
    }

    formDataRef.current.set("Content_Type", process.env.Content_Type);
    formDataRef.current.set("API_KEY", process.env.API_KEY);
    formDataRef.current.set("hashed_id", hashed_id);
  };
  const submit = async () => {
    prepration();
    // console.log(form);
    if (data) {
      const res = await fetch(
        `${process.env.NEXT_API_URL}/api/blogs/blog/${blogSlug}`,
        {
          method: "PUT",
          body: formDataRef.current,
        }
      );
      const resdata = await res.json();
      if ("error" in resdata) {
        toast.error(resdata.error);
      }
      if ("message" in resdata) {
        toast.success(resdata.message);
        router.push("/admin/blogs");
      }
    } else {
      const res = await fetch(`${process.env.NEXT_API_URL}/api/blogs`, {
        method: "POST",
        body: formDataRef.current,
      });
      const resdata = await res.json();
      if ("error" in resdata) {
        toast.error(resdata.error);
      }
      if ("message" in resdata) {
        toast.success(resdata.message);
        router.push("/admin/blogs");
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>فرم {data ? "ویرایش" : "اضافه"} کردن بلاگ</h1>
      <div className={styles.form}>
        <div>
          <label>عنوان منحصربفرد در url (اسلاگ)</label>
          <input
            type="text"
            name="slug"
            value={form.slug}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>عنوان (متا تایتل)</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={changeHandler}
          />
        </div>

        <BlogListItems form={form} setForm={setForm} type={"category"} />
        <div>
          <label>تیتر (h1)</label>
          <input
            type="text"
            name="h1"
            value={form.h1}
            onChange={changeHandler}
          />
        </div>
        <BlogListItems form={form} setForm={setForm} type={"keywords"} />

        <div>
          <label>توضیحات (description)</label>
          <textarea
            name="description"
            value={form.description}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>نویسنده</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>خلاصه کوتاه مطلب (summary)</label>
          <textarea
            name="summary"
            value={form.summary}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>عکس کاور کارت بلاگ</label>
          <input type="file" name="blog_cover" onChange={addCover} />
        </div>
        <div>
          <label>منتشر شده:</label>
          <select
            name="isPublished"
            value={form.isPublished}
            onChange={changeHandler}
          >
            <option value={0}>خیر</option>
            <option value={1}>آری</option>
          </select>
        </div>
      </div>
      <div className={styles.upload}>
        <UploadBlogPics blogId={form.uuid} />
      </div>
      <div className={styles.bottom}>
        <RichText setForm={setForm} form={form} placeholder={null} />
      </div>
      <div className={styles.controlls}>
        <button onClick={submit}>{data ? "ویرایش" : "ثبت"} بلاگ</button>
      </div>
    </div>
  );
};

export default AddBlogPage;
