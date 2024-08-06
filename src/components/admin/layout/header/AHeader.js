import styles from "./AHeader.module.css";
import Date from "./date/Date";
import Reminder from "./reminder/Reminder";
import Link from "next/link";

const AHeader = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <img src="/icons/admin/logo.png" alt="kelaasor logo" />
      </Link>

      <div className={styles.nav}>
        <section className={styles.right}>
          <div className={styles.date}>
            <img src="/icons/admin/calendar.png" />
          </div>
          <div className={styles.reminder}>
            <Reminder />
          </div>
        </section>
        <section className={styles.left}>
          <div className="toggle">
            <p>کارجو</p>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <p>کارفرما</p>
          </div>
          <div className={styles.notif}>
            <img src="/icons/admin/notif.png" alt="notification" />
          </div>
          <div className={styles.adminInfo}>
            <div>
              <img src="/hamed.png" alt="admin" />
            </div>
            <div>
              <p>حامد عابدینی</p>
              <img src="/icons/admin/arrow-down.svg" about="arrow-down" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AHeader;
