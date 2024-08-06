import styles from "./AdminBootcampPage.module.css";
import AdminBootcampCard from "./bootcamp-card/AdminBootcampCard";

const AdminBootcampPage = ({ bootcamps }) => {
  return (
    <div className={styles.container}>
      <h1>بوت کمپ ها</h1>
      {!bootcamps.length ? (
        <div className={styles.noBootcamp}>
          <h3>هیچ بوت‌کمپی برای نمایش وجود ندارد</h3>
          <AdminBootcampCard add={true} />
        </div>
      ) : (
        <div className={styles.bootcamps}>
          <AdminBootcampCard add={true} />
          {bootcamps.map((bc, i) => (
            <AdminBootcampCard key={i} info={bc} add={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminBootcampPage;
