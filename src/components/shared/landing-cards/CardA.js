import styles from "./CardA.module.css";

const CardA = ({ pic, text, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.media}>
        <img src={pic} alt="content" />
      </div>
      <section className={styles.content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </section>
    </div>
  );
};

export default CardA;
