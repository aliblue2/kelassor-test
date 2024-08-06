import styles from "./UserItem.module.css";
import AccessUser from "./access/AccessUser";
import DeleteUser from "./delete/DeleteUser";
import HijackUser from "./hijack/HijackUser";
import ProfileUser from "./profile/ProfileUser";
const UserItem = ({ userInfo }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <p>{userInfo.id}</p>
        </div>
        <div>
          <p>{userInfo.name}</p>
        </div>
        <div>
          <p>{userInfo.lastname}</p>
        </div>
        <div>
          <p>{new Date(+userInfo.date).toLocaleDateString("fa-IR")}</p>
        </div>
        <div>
          <p>{userInfo.phone}</p>
        </div>
        <div>
          <p>{userInfo.email}</p>
        </div>
        <div>
          <p>{userInfo.status}</p>
        </div>
        <div className={styles.controlls}>
          <AccessUser hashed_id={userInfo.hashed_id} />
          <DeleteUser hashed_id={userInfo.hashed_id} />
          <HijackUser hashed_id={userInfo.hashed_id} />
          <ProfileUser hashed_id={userInfo.hashed_id} />
        </div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default UserItem;
