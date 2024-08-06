import styles from "./ResultsCard.module.css";

const ResultsCard = ({ item, chosenId, setChosenId }) => {
  //   // console.log(item);

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

        <div className={styles.link}>
          <img src="/icons/udash/interview/global.png" alt="website" />
          <a href={item.companySite} target="_blank">
            {item.companySite?.replace("https://", "")}
          </a>
        </div>
        <div className={styles.type}>
          <img src="/icons/udash/interview/card-receive.png" alt="type" />
          <h6>{item.type}</h6>
        </div>
        <div>
          <img src="/icons/udash/interview/location.png" alt="location" />
          <h6>{item.address}</h6>
        </div>
      </section>
      <section>
        <div>
          <img src="/icons/udash/interview/clipboard.png" alt="describtion" />
          <h6>{item.feedback}</h6>
        </div>
        <div className={styles.buttons}>
          <p>وضعیت :</p>
          <div
            className={
              item.result === 0
                ? null
                : item.result === 1
                ? styles.absentButton
                : item.result === 2
                ? styles.okButton
                : styles.rejectButton
            }
          >
            {item.result === 0
              ? "درحال بررسی"
              : item.result === 1
              ? "عدم حضور"
              : item.result === 2
              ? "قبول شده"
              : "رد شده"}
          </div>
          <button
            className={`${
              chosenId === item.keyID ? styles.chosenButton : null
            } `}
            onClick={
              item.result === 2
                ? () => {
                    if (chosenId === item.keyID) {
                      setChosenId("");
                    } else {
                      setChosenId(item.keyID);
                    }
                  }
                : null
            }
          >
            انتخاب نهایی
          </button>
        </div>
      </section>
    </div>
  );
};

export default ResultsCard;
