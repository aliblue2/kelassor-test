"use client";
import Image from "next/image";
import styles from "../Controls.module.css";
const ProfileUser = ({ hashed_id }) => {
  const profileHandler = () => {};
  return (
    <div className={styles.container} onClick={profileHandler}>
      <Image
        src="/icons/admin/element-4.svg"
        alt="element"
        width={20}
        height={20}
      />
    </div>
  );
};

export default ProfileUser;
