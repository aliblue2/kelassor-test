import styles from "./AdminLayout.module.css";
import AHeader from "./header/AHeader";
import ASide from "./side/ASide";

const AdminLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <AHeader />
      <main>
        <div className={styles.deskSide}>
          <ASide />
        </div>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
