import styles from "./Title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.title}>
      <img src="icons/landing/ellipse.png" alt="half_circle" />
      <h4>{title}</h4>
    </div>
  );
};

export default Title;
