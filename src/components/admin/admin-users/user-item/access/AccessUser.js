"use client";
import Image from "next/image";
import styles from "../Controls.module.css";
const AccessUser = ({ hashed_id }) => {
  const AccessHandler = () => {};
  return (
    <div className={styles.container} onClick={AccessHandler}>
      <Image
        src="/icons/admin/tick-circle-red.svg"
        alt="tick"
        width={20}
        height={20}
      />
    </div>
  );
};

export default AccessUser;
