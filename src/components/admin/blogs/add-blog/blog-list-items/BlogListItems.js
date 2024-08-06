import styles from "./BlogListItems.module.css";
import { useRef, useState } from "react";
const BlogListItems = ({ form, setForm, type }) => {
  const btnRef = useRef(null);

  const [field, setField] = useState("");
  const [showX, setShowX] = useState(false);

  const persianType = (type) => {
    switch (type) {
      case "keywords":
        return "کلمات کلیدی";
      case "category":
        return "دسته بندی";
      default:
        break;
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      btnRef.current.click();
    }
  };

  const addItem = () => {
    const items = [...form[type]];
    const isRepeated = items.find((i) => i === field.trim());
    if (isRepeated) {
      return;
    }
    items.push(field);
    setForm({ ...form, [type]: items });
    setField("");
  };

  const removeItem = (item) => {
    const items = [...form[type]];
    const filteredItems = items.filter((i) => i !== item);
    setForm({ ...form, [type]: filteredItems });
  };

  return (
    <div className={styles.container}>
      <label>{persianType(type)}</label>
      <div className={styles.items}>
        {!form[type]
          ? null
          : form[type].map((item, i) => (
              <div
                onMouseEnter={() => setShowX(true)}
                onMouseLeave={() => setShowX(false)}
                key={i}
              >
                <span
                  style={{ display: showX ? "flex" : "none" }}
                  onClick={() => removeItem(item)}
                >
                  X
                </span>
                {item}
              </div>
            ))}
      </div>
      <input
        onKeyDown={handleEnter}
        name="field"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <button onClick={addItem} ref={btnRef}>
        اضافه کردن مورد
      </button>
    </div>
  );
};

export default BlogListItems;
