import Image from "next/image";
import Link from "next/link";
import addPic from "/public/icons/admin/add-circle.svg";
import styles from "./AdminBootcampCard.module.css";

const AdminBootcampCard = ({ info, add }) => {
  if (add)
    return (
      <Link href={"/admin/bootcamp/add"} className={styles.container}>
        <Image src={addPic} alt="add" width={100} height={100} />
      </Link>
    );
  const { url, status, logo, header_title } = info;
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h3>{header_title}</h3>
        <h5>{url}</h5>
        <p>وضعیت {status}</p>
        <div className={styles.controlls}>
          <Link href={`/admin/bootcamp/${url}`}>ویرایش</Link>
          <Link href={`/bootcamp/${url}`} target="_blank">
            لینک بوت‌کمپ
          </Link>
        </div>
      </div>
      <div className={styles.media}>
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
    </div>
  );
};

export default AdminBootcampCard;
