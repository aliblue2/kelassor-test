import styles from "./SubBtn.module.css";

const SubBtn = ({ text, onClick }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default SubBtn;
