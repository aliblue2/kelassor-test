import { DateObject } from "react-multi-date-picker";
import styles from "./PHItem.module.css";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const PHItem = ({ item, index }) => {
  const time = new DateObject(item.date).convert(persian, persian_fa);
  return (
    <div className={styles.container}>
      <div>
        <h6>{index + 1}</h6>
      </div>
      <div>
        <h6>{time.format()}</h6>
      </div>
      <div>
        <h6>{item.course}</h6>
      </div>
      <div>
        <h6>{item.status}</h6>
      </div>
      <div>
        <h6>{item.amount} تومان</h6>
      </div>
    </div>
  );
};

export default PHItem;
