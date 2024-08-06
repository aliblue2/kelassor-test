import Image from "next/image";
import styles from "./CourseSubjectCard.module.css";

const CourseSubjectCard = ({ title, icon, iconAlt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Image src={icon} alt={iconAlt} />
      </div>
      <div className={styles.body}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CourseSubjectCard;
