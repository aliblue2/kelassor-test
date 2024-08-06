"use client";
import Image from "next/image";
import styles from "../Controls.module.css";
const DeleteUser = ({ hashed_id }) => {
  const deleteHandler = () => {};
  return (
    <div className={styles.container} onClick={deleteHandler}>
      <Image
        src="/icons/admin/trash.svg"
        alt="trash can"
        width={20}
        height={20}
      />
    </div>
  );
};

export default DeleteUser;
