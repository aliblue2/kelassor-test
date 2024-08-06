import React from "react";

const Parts = ({ name, index, form, setForm }) => {
  const changeHandler = (e) => {
    const { value } = e.target;
    const list = [...form[name]];
    list[index] = value;
    setForm({ ...form, [name]: list });
  };
  return (
    <div>
      <label>قسط {index + 1}</label>
      <input name={name} value={form[name][index]} onChange={changeHandler} />
    </div>
  );
};

export default Parts;
