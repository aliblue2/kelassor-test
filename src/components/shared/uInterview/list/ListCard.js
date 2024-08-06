"use client";

import styles from "./ListCard.module.css";

const ListCard = ({ item, selected, setSelected }) => {
  const readyHandler = () => {
    const index = selected.indexOf(item.keyID);
    //   // console.log(index);
    if (index === -1) {
      setSelected([...selected, item.keyID]);
      //   // console.log(selected);
    } else {
      const newSelected = selected.filter((id) => id !== item.keyID);
      setSelected([...newSelected]);
      //   // console.log(newSelected);
    }
  };
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.logo}>
          <img src={item.logo} alt="logo" />
        </div>
        <div className={styles.name}>
          <img src="/icons/udash/interview/buildings.png" alt="company" />
          <h6>{item.name}</h6>
        </div>
        <div className={styles.date}>
          <img src="/icons/udash/interview/calendar-tick.png" alt="date" />
          <h6>{item.date}</h6>
        </div>
        <div className={styles.link}>
          <img src="/icons/udash/interview/global.png" alt="website" />
          <a href={item.companySite} target="_blank">
            {item.companySite ? item.companySite.replace("https://", "") : ""}
          </a>
        </div>
        <div className={styles.time}>
          <img src="/icons/udash/interview/clock.png" alt="time" />
          <h6>ساعت {item.time}</h6>
        </div>
      </section>
      <section>
        <div className={styles.type}>
          <img src="/icons/udash/interview/card-receive.png" alt="type" />
          <h6>{item.type}</h6>
        </div>
        <div>
          <img src="/icons/udash/interview/location.png" alt="location" />
          <h6>{item.address}</h6>
        </div>
        <div>
          <img src="/icons/udash/interview/clipboard.png" alt="describtion" />
          <h6>{item.format}</h6>
        </div>
        <div className={styles.buttons}>
          <p>لطفا برای حضور در مصاحبه کلیک کنید</p>
          <button
            className={
              selected.includes(item.keyID) ? styles.activeButton : null
            }
            onClick={readyHandler}
          >
            حضور در مصاحبه
          </button>
        </div>
      </section>
    </div>
  );
};

export default ListCard;
