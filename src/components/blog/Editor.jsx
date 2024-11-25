"use client";
//this code works but doesnt build for type error so it is in js form

import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const Editor = ({value, onChange}) => {
  return (
    <JoditEditor
      value={value}
      onBlur={(newContent) => onChange(newContent)}
      config={{
        readonly: false,
        height: 400,
        buttons: [
          "paragraph",
          "bold",
          "italic",
          "underline",
          "ul",
          "ol",
          "link",
          {
            name: "fontsize",
            list: ["12", "14", "16", "18", "24", "30", "36"],
          },
          "brush",
          "image",
          "fullsize",
        ],
        extraButtons: [
          {
            name: "line break",
            exec: (editor) => {
              editor.s.insertHTML("<br>"); // Inserts <br> at cursor
            },
            tooltip: "Insert Line Break",
          },
        ],

        controls: {
          paragraph: {
            list: {
              p: "Pharagraph",
              h1: "Heading 1",
              h2: "Heading 2",
              h3: "Heading 3",
              h4: "Heading 4",
              h5: "Heading 5",
              h6: "Heading 6",
              blockquote: "Quote",
              pre: "Source code",
            },
          },
        },

        uploader: {
          url: "/api/upload", // API route for image upload
          defaultHandlerSuccess: function (data) {
            var i,
              field = "files";
            if (data[field] && data[field].length) {
              for (i = 0; i < data[field].length; i += 1) {
                this.s.insertImage(data.baseurl + data[field][i]);
              }
            }
          },
        },
      }}
    />
  );
};

export default Editor;
