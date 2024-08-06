import React from "react";

const Uploader = ({ name }) => {
  const formData = new FormData();
  const addFile = (e) => {
    const { name, files } = e.target;
    formData.append;
  };
  return (
    <div>
      <input type="file" name={name} onChange={addFile} />
    </div>
  );
};

export default Uploader;
