import React, { useState } from "react";
// import Image from "next/image";
// import copySVG from "public/icons/admin/document-copy.svg";
import styles from "./UploadBlogPics.module.css";
import { toast } from "react-toastify";

const UploadBlogPics = ({ blogId }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const formData = new FormData();
  let count = 0;
  const uploadPic = (e) => {
    count++;
    const { name, files } = e.target;
    formData.set(name, files[0]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast.success("کپی شد");
  };

  const sendFile = async () => {
    formData.set("API_KEY", process.env.API_KEY);
    formData.set("Content_Type", process.env.Content_Type);
    formData.set("id", blogId);
    setLoading(true);
    const res = await fetch(`${process.env.BASE_URL}/admin/blogImages.php`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    // console.log(data);
    setUrl(data);
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <label>آپلود عکس ها</label>
      <input type="file" name="blog_pic" onChange={uploadPic} />
      <button
        onClick={sendFile}
        className={`${styles.submitBtn} ${loading ? styles.loadBtn : ""}`}
      >
        {loading ? "منتظر بمانید" : "دریافت URL"}
      </button>
      <span onClick={copyToClipboard}>
        {/* <Image src={copySVG} alt="copy" width={20} height={20} /> */}
        {url}
      </span>
    </div>
  );
};

export default UploadBlogPics;
