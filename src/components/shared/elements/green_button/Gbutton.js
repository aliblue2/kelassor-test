import styles from "./Gbutton.module.css";

const Gbutton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Gbutton;
