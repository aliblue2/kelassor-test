"use client";
import Image from "next/image";
import styles from "../Controls.module.css";
const HijackUser = ({ hashed_id }) => {
  const hijackHandler = () => {};
  return (
    <div className={styles.container} onClick={hijackHandler}>
      <Image
        src="/icons/admin/card-tick.svg"
        alt="element"
        width={20}
        height={20}
      />
    </div>
  );
};

export default HijackUser;
