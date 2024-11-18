"use client";
import { CloudUpload, FileImage } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const FileUpload: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const openFileUpload = () => {
    fileRef.current?.click();
  };

  const fileChangeHandler = () => {
    const selectedFile = fileRef?.current?.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const deleteImageHandler = () => {
    setFile(null);
    setPreviewUrl(null);
  };

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  return (
    <div className="bg-primary-base/10 border border-primary-base flex flex-col items-center justify-center gap-5 p-5 text-primary-base rounded-xl my-2">
      {file && previewUrl ? (
        <>
          <Image
            src={previewUrl}
            alt="checkout-factor-image"
            width={200}
            height={200}
            className="rounded-md w-full max-h-72 overflow-hidden border border-primary-base"
          />
          <div className="flex items-center justify-center gap-3">
            <button className="bg-success text-sm cursor-pointer text-white font-medium p-2 rounded-md">
              تایید و ارسال رسید پرداخت
            </button>
            <button
              onClick={deleteImageHandler}
              className="bg-error cursor-pointer text-sm text-white font-medium p-2 rounded-md"
            >
              حذف عکس
            </button>
          </div>
        </>
      ) : (
        <>
          <CloudUpload size={64} />
          <p className="font-medium text-sm text-center">
            عکس رسید خود را آپلود کنید. همکاران ما پس از بررسی وجه پرداختی و
            تایید پرداخت، کارگاه مورد نظر شما را فعال و لینک ورود برای شما ارسال
            میشود.
          </p>
          <button
            onClick={openFileUpload}
            className="bg-primary-base text-sm text-white font-medium p-2 rounded-md"
          >
            آپلود عکس رسید پرداخت
          </button>
          <input
            ref={fileRef}
            type="file"
            className="hidden"
            onChange={fileChangeHandler}
            accept="image/png, image/jpg, image/jpeg"
          />
        </>
      )}
    </div>
  );
};

export default FileUpload;
