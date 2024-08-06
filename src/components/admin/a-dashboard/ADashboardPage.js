import styles from "./ADashboard.module.css";
import DashTasks from "./tasks/DashTasks";
const progress = 35;
const ADashboardPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.task}>
        <div className={styles.lastTasks}>
          <div className={styles.title}>
            <h5>آخرین تسک ها</h5>
          </div>
          <DashTasks />
          <div className={styles.buttons}>
            <button>مشاهده همه تسک ها</button>
          </div>
        </div>
        <div className={styles.thisMonth}>
          <div className={styles.title}>
            <h5>آمار وظایف من در این ماه</h5>
          </div>
          <div className={styles.analytics}>
            <div className={styles.progress}>
              <div>
                <div style={{ width: `${progress}%` }}>
                  <span>{progress}%</span>
                </div>
              </div>
            </div>
            <div className={styles.info}>
              <div className={styles.all}>
                <p>کل تسک ها: ۶۰</p>
              </div>
              <div className={styles.done}>
                <p>انجام شده: ۱۸</p>
              </div>
              <div className={styles.undone}>
                <p>انجام نشده: ۴۲</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.dashboard}>
        <div className={styles.title}>
          <h5>داشبورد ها</h5>
          <h6>افزودن داشبورد جدید +</h6>
        </div>
      </section>
    </div>
  );
};

export default ADashboardPage;
