"use client";
import React, { useState } from "react";
import Editor from "@/components/blog/Editor.jsx";
import CustomButton from "@/components/Ui/CustomButton";
import CustomInput from "@/components/user-panel/Account/CustomInput";
import { postBlog } from "@/utils/database/blog/postBlog";
import Image from "next/image";
import CategorySelect from "@/components/blog/CategorySelect";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

const Page = () => {
  const router = useRouter();

  const [title, settitle] = useState("");
  const [slug, setslug] = useState("");
  const [author, setauthor] = useState("");
  const [description, setdescription] = useState("");
  const [metadescription, setmetadescription] = useState("");
  const [category, setcategory] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [bannerUrl, setbannerUrl] = useState<string | null>(null);

  const bannerUploadHandler = async (file: File | null) => {
    if (!file) return;
    const formData = new FormData();
    formData.append("files[0]", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    if (res.success) {
      setbannerUrl(res.data.baseurl + res.data.files[0]);
    } else {
      toast.error("مشکلی در سرور پیش آمپ");
    }
  };
  const handlePost = async () => {
    if (!title) {
      toast.error("عنوان بلاگ نمی‌تواند خالی باشد");
      return;
    }
    if (!slug) {
      toast.error("اسلاگ بلاگ نمی‌تواند خالی باشد");
      return;
    }
    if (!author) {
      toast.error("نام مولف نمی‌تواند خالی باشد");
      return;
    }
    if (!description) {
      toast.error("توضیحات نمی‌تواند خالی باشد");
      return;
    }
    if (!metadescription) {
      toast.error("متا دسکریپشن نمی‌تواند خالی باشد");
      return;
    }
    if (!category) {
      toast.error("دسته‌بندی نمی‌تواند خالی باشد");
      return;
    }
    if (!bannerUrl) {
      toast.error("عکس بلاگ نمی‌تواند خالی باشد");
      return;
    }
    if (!content) {
      toast.error("محتوای بلاگ نمی‌تواند خالی باشد");
      return;
    }
    const res = await postBlog({
      title,
      content,
      author,
      description,
      metadescription,
      category,
      slug,
      bannerUrl,
    });
    if (res.message === "ok") {
      toast.success("بلاگ با موفقیت ایجاد شد");
      router.push("/blog/" + slug);
    } else if (res.message === "ER_DUP_ENTRY") {
      toast.error("اسلاگ تکراری است");
    } else {
      toast.error("مشکلی در سرور رخ داد");
      console.log(res);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1>بلاگ جدید</h1>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <div className="w-24 self-start md:text-end">عنوان بلاگ</div>
        <div className="grow w-full md:w-0">
          <CustomInput
            onChange={(e) => settitle(e.target.value)}
            name="blog title"
            placeholder="عنوان بلاگ"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  gap-2 items-center">
        <div className="w-24 self-start md:text-end">اسلاگ</div>
        <div className="grow w-full md:w-0">
          <CustomInput
            onChange={(e) => setslug(e.target.value)}
            name="blog slug"
            placeholder="اسلاگ (نامی برای نمایش در لینک، بدون فاصله و انگلیسی)"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center flex-col md:flex-row ">
        <div className="w-24 self-start md:text-end">نام مولف</div>
        <div className="grow w-full md:w-0">
          <CustomInput
            onChange={(e) => setauthor(e.target.value)}
            name="blog author"
            placeholder="نام مولف"
          />
        </div>
      </div>
      <div className="flex gap-2 items-start flex-col md:flex-row ">
        <div className="w-24 md:text-end self-start">توضیحات</div>
        <div className="grow w-full md:w-0">
          <textarea
            className="p-2 w-full rounded-lg border resize-none grow h-32 outline-none bg-light-3 border-light-3 "
            onChange={(e) => setdescription(e.target.value)}
            name="blog description"
            placeholder="توضیحات (برای نمایش در کارت بلاگ)"
          ></textarea>
        </div>
      </div>
      <div className="flex gap-2 items-start flex-col md:flex-row ">
        <div className="w-24 text-end">متا دسکریپشن</div>
        <div className="grow w-full md:w-0">
          <textarea
            className="p-2 rounded-lg border resize-none h-32 outline-none bg-light-3 border-light-3 w-full grow"
            onChange={(e) => setmetadescription(e.target.value)}
            name="blog meta description"
            placeholder="متا دسکریپشن"
          ></textarea>
        </div>
      </div>
      <div className="flex gap-2 items-center flex-col md:flex-row ">
        <div className="w-24 self-start md:text-end">دسته‌بندی</div>
        <div className="grow w-full md:w-0">
          <CategorySelect value={category} setvalue={setcategory} />
        </div>
      </div>
      <div className="flex p-2 rounded-lg border resize-none justify-between outline-none border-light-3 w-full">
        <div className="grid h-16 bg-primary-base rounded-xl cursor-pointer">
          <input
            onChange={(e) => {
              bannerUploadHandler(e.target.files ? e.target.files[0] : null);
            }}
            className="size-full w-full grow opacity-0 row-start-1 col-start-1"
            name="blog banner"
            type="file"
            accept="image/*"
          />
          <div className=" row-start-1 col-start-1 text-white font-bold p-5">
            {bannerUrl ? "تغییر عکس کارت بلاگ" : " آپلود عکس برای کارت بلاگ "}
          </div>
        </div>
        {bannerUrl && (
          <>
            <Image
              alt="banner image"
              className="object-cover h-[250px] w-[450px] rounded-[40px]"
              src={bannerUrl}
              height={400}
              width={600}
            />
          </>
        )}
      </div>
      <Editor value={content} onChange={setContent} />
      <textarea onChange={(e)=>setContent(e.target.value)}></textarea>
      <div className="flex justify-end">
        <CustomButton
          onClick={handlePost}
          className="font-bold flex items-center justify-center gap-2"
        >
          <Plus /> ایجاد بلاگ
        </CustomButton>
      </div>
    </div>
  );
};

export default Page;
