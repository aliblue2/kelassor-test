"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ASideUsers.module.css";

const ASideUsers = () => {
  const [usersMenuShow, setUsersMenuShow] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setUsersMenuShow(true)}
      onMouseLeave={() => setUsersMenuShow(false)}
    >
      <Link className={styles.mainButton} href={"/admin/users"}>
        <img src={"/icons/admin/user-search.png"} alt="users" />
        <p>کاربران</p>
      </Link>
      <ul
        style={{ display: usersMenuShow ? "flex" : "none" }}
        className={styles.menu}
      >
        <li>
          <Link href={"users/bootcamps"}>بوت‌کمپ</Link>
        </li>
        <li>
          <Link href={"users/courses"}>دوره آموزشی</Link>
        </li>
        <li>
          <Link href={"users/ai-roadmap"}>مسیر هوش مصنوعی</Link>
        </li>
      </ul>
    </div>
  );
};

export default ASideUsers;
