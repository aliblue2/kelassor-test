import styles from "./EachWeek.module.css";

const EachWeek = ({ course }) => {
  return (
    <div className={styles.week}>
      <div className={styles.header}>
        <h4>{course.course}</h4>
      </div>
      <ul>
        {course.subCourse.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default EachWeek;
