"use client";
import Link from "next/link";
import styles from "./SHItem.module.css";
import { usePathname } from "next/navigation";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const SHItem = ({ item }) => {
  const pathName = usePathname();
  const time = new DateObject(item.date).convert(persian, persian_fa);

  return (
    <div className={styles.container}>
      <div>
        <h6>{item.chat_id}</h6>
      </div>
      <div>
        <h6>{time.format()}</h6>
      </div>
      <div>
        <h6>{item.type === "tech" ? "فنی" : "مالی"}</h6>
      </div>
      <div>
        <h6
          className={
            item.status === "notanswered" ? styles.notAnswered : styles.answered
          }
        >
          {item.status === "notanswered" ? "پاسخ داده نشده" : "پاسخ داده شده"}
        </h6>
      </div>
      <div>
        <Link
          href={
            pathName.startsWith("/user")
              ? `/user/support/history/${item.chat_id}`
              : `/employer/support/history/${item.chat_id}`
          }
        >
          مشاهده
        </Link>
      </div>
    </div>
  );
};

export default SHItem;
