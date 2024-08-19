"use client";
import { useState } from "react";
import Calls from "./calls/Calls";
import { toast } from "react-toastify";
import styles from "./BootcampUser.module.css";
import BootCancel from "./BootCancel";

const BootcampUser = ({ user, hashed_id }) => {
  // console.log(user);
  const {
    id,
    name,
    phone,
    discount,
    date,
    bootcampTitle,
    result,
    callResult,
    calls,
    transactionId
  } = user;
  const [userState, setUserState] = useState(user);
  const [userInfo, setUserInfo] = useState({
    callResult: callResult ? callResult : "در انتظار بررسی",
    calls: calls ? calls : [],
  });

  const [isModalShow, setIsModalShow] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submit = async () => {
    const res = await fetch(
      `${process.env.BASE_URL}/admin/updateBootcampCalls.php`,
      {
        method: "POST",
        body: JSON.stringify({
          API_KEY: process.env.API_KEY,
          Content_Type: process.env.Content_Type,
          hashed_id,
          userId: id,
          ...userInfo,
        }),
      },
    );
    const data = await res.json();
    if (data.toString() === "200") {
      toast.success("با موفقیت ثبت شد");
      setIsModalShow(false);
      setUserState({ ...userState, callResult: userInfo.callResult });
    }
    // console.log("response update lead: ", data);
  };
  return (
    <>
      <div
        className={styles.container + ""}
        onClick={() => setIsModalShow(true)}
      >
        <div>
          <h6>{id}</h6>
        </div>
        <div>
          <h6>{name}</h6>
        </div>
        <div>
          <h6>{phone}</h6>
        </div>
        <div>
          <h6>{new Date(+date * 1000).toLocaleDateString("fa-IR")}</h6>
        </div>
        <div>
          <h6>{discount}</h6>
        </div>
        <div>
          <h6>{bootcampTitle}</h6>
        </div>
        <div>
          <h6>{result}</h6>
        </div>
        <div>
          <h6>{userState.callResult}</h6>
        </div>
        <div>
          <h6>{userState.transactionId}</h6>
        </div>
        <div>
          <BootCancel tid={transactionId} />
        </div>
      </div>
      <div
        className={styles.modal}
        style={{ display: isModalShow ? "flex" : "none" }}
      >
        <div className={styles.subModal}>
          <span className={styles.close} onClick={() => setIsModalShow(false)}>
            X
          </span>
          <Calls userInfo={userInfo} setUserInfo={setUserInfo} />
          <div className={styles.callResult}>
            <label>نتیجه : </label>
            <select
              type="text"
              name="callResult"
              value={userInfo.callResult}
              onChange={changeHandler}
            >
              <option value={"انصراف"}>انصراف</option>
              <option value={"نیاز به پیگیری"}>نیاز به پیگیری</option>
              <option value={"ثبت نام"}>ثبت نام</option>
              <option value={"بررسی نشده"}>بررسی نشده</option>
              <option value={"پرداخت نکرده"}>پرداخت نکرده</option>
              <option value={"بی پاسخ"}>بی پاسخ</option>
            </select>
          </div>
          <div className={styles.controls}>
            <button onClick={submit}>ثبت تغییرات</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootcampUser;
