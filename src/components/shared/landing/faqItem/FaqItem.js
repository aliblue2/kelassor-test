"use client";
import { useState } from "react";
import styles from "./FaqItem.module.css";

const FaqItem = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.faq_item} onClick={() => setShow(!show)}>
      <div className={styles.faq_question}>{item.question}</div>
      <h3
        className={styles.faq_answer}
        style={show ? { display: "block" } : { display: "none" }}
      >
        {item.answer}
      </h3>
    </div>
  );
};

export default FaqItem;
