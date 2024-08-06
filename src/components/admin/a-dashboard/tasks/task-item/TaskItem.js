import styles from "./TaskItem.module.css";

const TaskItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        <p>فوری</p>
      </div>
      <div className={styles.subject}>
        <p>تیکت</p>
      </div>
      <div className={styles.name}>
        <p>سمیه</p>
      </div>
      <div className={styles.lastName}>
        <p>حسین نژاد اصل زاده</p>
      </div>
      <div className={styles.date}>
        <p>۱۴۰۱/۱۱/۱۷</p>
      </div>
      <div className={styles.admin}>
        <p>نادیا</p>
      </div>
    </div>
  );
};

export default TaskItem;
