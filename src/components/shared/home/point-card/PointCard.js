import Image from "next/image";
import styles from "./PointCard.module.css";

const PointCard = ({ point }) => {
  const { title, desc, logo } = point;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h6>{title}</h6>
        <p>{desc}</p>
      </div>
      <div className={styles.media}>
        <Image src={logo} alt="logo" width={50} height={50} />
      </div>
    </div>
  );
};

export default PointCard;
