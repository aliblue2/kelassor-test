import { useState, useEffect } from "react";

const Typewriter = ({ text, delay, onComplete }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentText("");
    setCurrentIndex(0);
  }, [text]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        onComplete();
      }
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentIndex, delay, text, onComplete]);
  return <p style={{ display: "inline" }}>{currentText}</p>;
};

export default Typewriter;
