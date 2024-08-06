"use client";
import { memo, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const RichText = ({ form, setForm, placeholder }) => {
  const editor = useRef(null);
  const config = useMemo(() => {
    return {
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typings...",
    };
  }, [placeholder]);
  return (
    <JoditEditor
      ref={editor}
      value={form.content}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onChange={(newContent) => setForm({ ...form, content: newContent })} // preferred to use only this option to update the content for performance reasons
      // onChange={(newContent) => {}}
    />
  );
};

export default RichText;
