import Link from "next/link";
import Image from "next/image";
import styles from "./Aside.module.css";
import dashPic from "/public/icons/admin/element-4.png";
import taskPic from "/public/icons/admin/task-square.png";
import ticketPic from "/public/icons/admin/smileys.png";
import callPic from "/public/icons/admin/call-calling.png";
import financePic from "/public/icons/admin/coin.png";
import bootcampPic from "/public/icons/admin/book.svg";
import blogPic from "/public/icons/admin/document-text.svg";
import ASideUsers from "./users/ASideUsers";

const ASide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link href={"/admin/dashboard"} rel="canonical">
          <Image src={dashPic} alt="dashboard" />
          <p>داشبورد</p>
        </Link>
        <Link href={"/admin/tasks"}>
          <Image src={taskPic} alt="tasks" />
          <p>تسک ها</p>
        </Link>
        <Link href={"/admin/tickets"}>
          <Image src={ticketPic} alt="tickets" />
          <p>تیکت ها</p>
        </Link>

        <ASideUsers />

    {/*todo:
        <Link href={"/admin/calls"}>
          <Image src={callPic} alt="calls" />
          <p>تماس ها</p>
        </Link>
      */}
    {/*todo:
        <Link href={"/admin/finance"}>
          <Image src={financePic} alt="finance" />
          <p>مالی</p>
        </Link>
      */}
        <Link href={"/admin/bootcamp"}>
          <Image src={bootcampPic} alt="bootcamp" />
          <p>بوت‌کمپ ها</p>
        </Link>
    {/*todo:
        <Link href={"/admin/blogs"}>
          <Image src={blogPic} alt="blog" />
          <p>بلاگ ها</p>
        </Link>
      */}
      </div>
    </div>
  );
};

export default ASide;
