import Link from "next/link";
import styles from "./AdminTicketItem.module.css";

const AdminTicketItem = ({ ticket }) => {
  const { name, lastname, phone, id, time, type, status, chatRefrence } =
    ticket;
  return (
    <div className={styles.container}>
      <div>
        <p>{id}</p>
      </div>
      <div>
        <p>
          {name} {lastname}
        </p>
      </div>
      <div>
        <p>{phone}</p>
      </div>
      <div>
        <p>{new Date(+time).toLocaleDateString("fa-IR")}</p>
      </div>
      <div>
        <p>{type}</p>
      </div>
      <div
        className={`${
          status === "answered"
            ? styles.statusAnswered
            : styles.statusNotAnswered
        } ${styles.status}`}
      >
        <p>{status}</p>
      </div>
      <div className={styles.action}>
        <Link href={`/admin/tickets/${chatRefrence}`}>مشاهده پیام</Link>
      </div>
    </div>
  );
};

export default AdminTicketItem;
